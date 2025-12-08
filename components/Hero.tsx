import React from 'react';
import { Github, Linkedin, Mail, Cloud } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
            <span className="text-sm font-medium text-primary-400">Aspiring Data Scientist & Machine Learning Engineer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-500">{PERSONAL_INFO.name}</span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed">
            {PERSONAL_INFO.summary}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a 
              href={PERSONAL_INFO.socials.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors border border-slate-700 hover:border-primary-500 group"
              title="GitHub"
            >
              <Github className="w-6 h-6 text-slate-300 group-hover:text-primary-400" />
            </a>
            <a 
              href={PERSONAL_INFO.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors border border-slate-700 hover:border-primary-500 group"
              title="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-slate-300 group-hover:text-primary-400" />
            </a>
            <a 
              href={PERSONAL_INFO.socials.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors border border-slate-700 hover:border-primary-500 group"
              title="X"
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-6 h-6 text-slate-300 group-hover:text-primary-400"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a 
              href={PERSONAL_INFO.socials.googleCloud} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors border border-slate-700 hover:border-primary-500 group"
              title="Google Cloud Skills"
            >
              <Cloud className="w-6 h-6 text-slate-300 group-hover:text-primary-400" />
            </a>
            <a 
              href={PERSONAL_INFO.socials.kaggle} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors border border-slate-700 hover:border-primary-500 group"
              title="Kaggle"
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-6 h-6 text-slate-300 group-hover:text-primary-400"
              >
                <path d="M14.53 9.3l-2.213 4.175 6.746 7.525h-4.871l-5.117-6.504-2.436 2.396v4.108H4V3h2.639v10.588l6.973-7.26h5.094l-4.176 2.972z" />
              </svg>
            </a>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors border border-slate-700 hover:border-primary-500 group"
              title="Email"
            >
              <Mail className="w-6 h-6 text-slate-300 group-hover:text-primary-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;