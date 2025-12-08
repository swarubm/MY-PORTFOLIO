import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
            <p className="text-slate-400 mb-4">
              I'm actively looking for opportunities in Data Science and Machine Learning. 
              Feel free to reach out!
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center text-slate-400 hover:text-primary-400 transition-colors">
              <Mail className="w-5 h-5 mr-3" />
              {PERSONAL_INFO.email}
            </a>
            <div className="flex items-center text-slate-400">
              <Phone className="w-5 h-5 mr-3" />
              {PERSONAL_INFO.phone}
            </div>
             <div className="flex items-center text-slate-400">
              <MapPin className="w-5 h-5 mr-3" />
              {PERSONAL_INFO.location}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
             <h4 className="text-lg font-semibold text-white mb-4">Socials</h4>
             <div className="flex gap-4">
                <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors">GitHub</a>
                <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors">LinkedIn</a>
                <a href={PERSONAL_INFO.socials.twitter} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors">X (Twitter)</a>
             </div>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-900 text-center text-slate-600 text-sm">
          © {new Date().getFullYear()} www.swaroopbm.ai. All rights reserved. Built with React & Gemini.
        </div>
      </div>
    </footer>
  );
};

export default Contact;