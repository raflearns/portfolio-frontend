import { motion } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: 'Laundrify POS',
    description: 'A specialized Point of Sale system designed for laundry businesses to manage transactions securely.',
    tech: ['Java', 'OOP', 'GUI']
  },
  {
    title: 'BISALOG Proposal',
    description: 'Comprehensive software development project proposal outlining team roles and system architecture.',
    tech: ['Documentation', 'System Architecture']
  },
  {
    title: 'Network Security Data Analytics',
    description: 'Analyzed datasets to identify patterns over a two-year period, visualizing data to support cybersecurity defense strategies.',
    tech: ['Data Analytics', 'Python', 'Excel']
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <FolderGit2 className="text-cyber-accent" />
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 flex flex-col h-full hover:border-cyber-accent/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-mono text-cyber-accent bg-cyber-accent/10 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>    
    </section>
  );
}