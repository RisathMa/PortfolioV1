import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold font-display text-slate-100 mb-12 flex items-center"
        >
          <span className="text-cyan-400 mr-2">02.</span> Technical Arsenal
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-slate-200 mb-6 border-b border-slate-800 pb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 text-slate-300 text-sm font-medium border border-transparent hover:border-cyan-500/30 hover:bg-slate-800 transition-all cursor-default"
                  >
                    <div className="w-5 h-5 flex items-center justify-center text-cyan-500 shrink-0">
                      {skill.icon}
                    </div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
