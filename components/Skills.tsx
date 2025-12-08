import React from 'react';
import { SKILLS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((skillGroup, idx) => (
          <div 
            key={idx}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-primary-500/50 transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold text-primary-400 mb-4 border-b border-slate-700 pb-2">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, sIdx) => (
                <div key={sIdx} className="flex items-center text-slate-300 text-sm bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-700/50">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-primary-500" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;