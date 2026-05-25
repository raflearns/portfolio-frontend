import { ExternalLink, ShieldAlert } from 'lucide-react';
import ImageContainer from '../common/ImageContainer';

export default function ProjectCard({ project }) {
  return (
    <div className="group flex flex-col bg-[#0B0F19]/80 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">
      
      {/* Project Thumbnail Placeholder */}
      <div className="p-2">
        <ImageContainer 
          src={project.imageUrl} 
          alt={project.title} 
          type="project" 
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
            <ExternalLink size={20} />
          </a>
        </div>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
          {project.tech.map((tech, i) => (
            <span key={i} className="text-xs font-medium text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-md border border-cyan-400/20">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}