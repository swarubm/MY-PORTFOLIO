import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Education</h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
      </div>

      <div className="relative border-l border-slate-700 ml-3 md:ml-6 space-y-12">
        {EDUCATION.map((edu, idx) => (
          <div key={idx} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-3 top-1 w-6 h-6 bg-slate-900 border-2 border-primary-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary-400" />
                {edu.degree}
              </h3>
              <div className="flex items-center text-slate-400 text-sm mt-1 sm:mt-0">
                <Calendar className="w-4 h-4 mr-1.5" />
                {edu.year}
              </div>
            </div>
            
            <h4 className="text-lg text-primary-300 font-medium mb-2">{edu.institution}</h4>
            
            <div className="inline-block px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300 border border-slate-700">
              Score: <span className="font-semibold text-white">{edu.score}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;