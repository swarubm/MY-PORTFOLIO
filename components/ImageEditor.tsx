import React, { useState, useRef } from 'react';
import { Upload, Sparkles, Image as ImageIcon, Loader2, RefreshCw } from 'lucide-react';
import { editImageWithGemini } from '../services/geminiService';

const ImageEditor: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
         setError("Image size too large. Please select an image under 5MB.");
         return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setSelectedImage(result);
        setMimeType(file.type);
        setGeneratedImage(null); // Reset generated image on new upload
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!selectedImage || !prompt) return;

    setIsLoading(true);
    setError(null);

    try {
      // Extract base64 data (remove "data:image/xyz;base64," prefix)
      const base64Data = selectedImage.split(',')[1];
      
      const resultBase64 = await editImageWithGemini(base64Data, mimeType, prompt);
      
      // Gemini returns raw base64, need to prepend data URI scheme for display
      setGeneratedImage(`data:image/png;base64,${resultBase64}`);
    } catch (err: any) {
      setError("Failed to edit image. Please try again. " + (err.message || ""));
    } finally {
      setIsLoading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[calc(100vh-64px)]">
      
      <div className="text-center mb-10">
        <span className="inline-flex items-center justify-center p-2 bg-primary-900/30 text-primary-400 rounded-lg mb-4 border border-primary-500/20">
          <Sparkles className="w-5 h-5 mr-2" />
          Powered by Gemini 2.5 Flash
        </span>
        <h2 className="text-4xl font-bold text-white mb-4">AI Image Editor</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Upload an image and use natural language to edit it. Try "Add a retro filter", 
          "Remove the background", or "Make it look like a sketch".
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Input Section */}
        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-xl">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 text-primary-400 text-sm font-bold">1</div>
            Upload Image
          </h3>

          <div 
            onClick={triggerFileInput}
            className={`
              border-2 border-dashed rounded-xl h-64 flex flex-col items-center justify-center cursor-pointer transition-all
              ${selectedImage ? 'border-primary-500/50 bg-slate-900/50' : 'border-slate-600 hover:border-primary-400 hover:bg-slate-700/30'}
            `}
          >
            {selectedImage ? (
              <img 
                src={selectedImage} 
                alt="Original" 
                className="h-full w-full object-contain rounded-lg" 
              />
            ) : (
              <div className="text-center p-4">
                <Upload className="w-12 h-12 text-slate-500 mx-auto mb-3" />
                <p className="text-slate-300 font-medium">Click to upload</p>
                <p className="text-slate-500 text-sm mt-1">JPG, PNG (Max 5MB)</p>
              </div>
            )}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept="image/*" 
              className="hidden" 
            />
          </div>

          <div className="mt-6">
             <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <div className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center mr-3 text-primary-400 text-sm font-bold">2</div>
              Describe Changes
            </h3>
            <div className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="E.g., Change the background to a starry night sky..."
                className="w-full bg-slate-900 border border-slate-600 rounded-lg p-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none h-32"
              />
              <button
                onClick={handleGenerate}
                disabled={!selectedImage || !prompt || isLoading}
                className={`
                  absolute bottom-3 right-3 px-4 py-2 rounded-lg font-medium text-sm flex items-center
                  ${(!selectedImage || !prompt || isLoading) 
                    ? 'bg-slate-700 text-slate-500 cursor-not-allowed' 
                    : 'bg-primary-600 text-white hover:bg-primary-500 shadow-lg shadow-primary-500/20'}
                `}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate
                  </>
                )}
              </button>
            </div>
          </div>
          
           {error && (
            <div className="mt-4 p-3 bg-red-900/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}
        </div>

        {/* Output Section */}
        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-xl h-full flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white flex items-center">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3 text-emerald-400 text-sm font-bold">3</div>
              Result
            </h3>
            {generatedImage && (
              <button 
                onClick={() => setGeneratedImage(null)}
                className="text-xs text-slate-400 hover:text-white flex items-center"
              >
                <RefreshCw className="w-3 h-3 mr-1" /> Clear
              </button>
            )}
          </div>

          <div className="flex-1 bg-slate-900/50 rounded-xl border border-slate-700 flex items-center justify-center min-h-[400px] overflow-hidden relative">
            {isLoading ? (
              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <div className="absolute inset-0 border-4 border-slate-700 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-primary-500 rounded-full border-t-transparent animate-spin"></div>
                </div>
                <p className="text-slate-300 animate-pulse">Gemini is thinking...</p>
                <p className="text-slate-500 text-xs mt-2">This may take a few seconds</p>
              </div>
            ) : generatedImage ? (
              <div className="relative w-full h-full group">
                 <img 
                  src={generatedImage} 
                  alt="Generated" 
                  className="w-full h-full object-contain" 
                />
                <a 
                  href={generatedImage} 
                  download={`gemini-edit-${Date.now()}.png`}
                  className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black"
                >
                  Download Image
                </a>
              </div>
            ) : (
              <div className="text-center text-slate-600">
                <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Generated image will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;