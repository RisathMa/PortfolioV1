import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
            Available for New Projects
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-500">
              {PERSONAL_INFO.name}
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-cyan-400 to-secondary">
              {PERSONAL_INFO.role}
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
          >
            {PERSONAL_INFO.tagline}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a 
              href="#projects"
              className="group relative px-8 py-3 rounded-lg bg-slate-100 text-slate-950 font-semibold transition-all hover:bg-white hover:scale-105 active:scale-95 flex items-center"
            >
              View Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#resume"
              className="px-8 py-3 rounded-lg border border-slate-700 text-slate-300 font-semibold hover:bg-slate-800 hover:text-white transition-all hover:border-slate-600 flex items-center"
            >
              Resume / CV
              <Download className="ml-2 w-4 h-4" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex gap-6 text-slate-500"
          >
            <a href="https://github.com/RisathMa" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-400 transition-colors">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
