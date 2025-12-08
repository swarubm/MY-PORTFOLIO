import React from 'react';
import { PROJECTS } from '../constants';
import { FolderGit2, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <div 
            key={idx} 
            className="group relative bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-primary-500 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
          >
            <div className="absolute top-6 right-6 p-2 bg-slate-700/50 rounded-full group-hover:bg-primary-500 group-hover:text-white transition-colors">
              <FolderGit2 size={20} />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 pr-12">{project.title}</h3>
            
            <p className="text-slate-400 mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, tIdx) => (
                <span 
                  key={tIdx} 
                  className="px-2.5 py-0.5 rounded text-xs font-medium bg-primary-900/30 text-primary-300 border border-primary-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {project.link && (
               <a href={project.link} className="inline-flex items-center text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors">
                 View Project <ArrowUpRight className="ml-1 w-4 h-4" />
               </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;