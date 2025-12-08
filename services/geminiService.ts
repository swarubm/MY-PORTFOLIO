import { GoogleGenAI } from "@google/genai";

// Ensure API Key is available
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

/**
 * Edits an image based on a text prompt using Gemini 2.5 Flash Image.
 * 
 * @param imageBase64 The base64 encoded string of the image (without the data URL prefix).
 * @param mimeType The mime type of the image (e.g., 'image/jpeg', 'image/png').
 * @param prompt The text instruction for editing the image.
 * @returns The base64 string of the generated image.
 */
export const editImageWithGemini = async (
  imageBase64: string,
  mimeType: string,
  prompt: string
): Promise<string> => {
  if (!apiKey) {
    throw new Error("API Key is missing. Please check your environment configuration.");
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: imageBase64,
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
    });

    // Parse response to find the image part
    if (response.candidates && response.candidates.length > 0) {
      const parts = response.candidates[0].content.parts;
      for (const part of parts) {
        if (part.inlineData && part.inlineData.data) {
          return part.inlineData.data;
        }
      }
    }
    
    throw new Error("No image data found in the response.");
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};