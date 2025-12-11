import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-display text-slate-100 flex items-center"
          >
            <span className="text-cyan-400 mr-2">03.</span> Featured Projects
          </motion.h2>

          {/* Filters */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="aspect-video w-full overflow-hidden relative bg-slate-950">
                  {project.image ? (
                    <>
                      {/* Blurred Background for Fill */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-30 blur-xl scale-110 transition-transform duration-700 group-hover:scale-125"
                        style={{ backgroundImage: `url(${project.image})` }}
                      ></div>
                      
                      {/* Actual Image */}
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="relative w-full h-full object-cover object-top z-10 transition-transform duration-500 group-hover:scale-105"
                      />
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                      <Folder size={48} className="text-slate-700" />
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                     <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3 z-20">
                      {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-1" title="View Code">
                          <Github size={18} />
                        </a>
                      )}
                      {project.links.demo && (
                        <a href={project.links.demo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-1" title="Live Demo">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-slate-400 text-sm mb-6 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 4).map(tag => (
                      <span key={tag} className="text-xs font-mono text-cyan-500/80 bg-cyan-950/30 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;