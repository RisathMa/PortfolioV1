import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Terminal, Cpu, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-surface/50 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold font-display text-slate-100 mb-6 flex items-center">
              <span className="text-cyan-400 mr-2">01.</span> About Me
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I am a <strong className="text-cyan-400">Software Engineer</strong> driven by the challenge of making things work efficiently. My journey hasn't just been about learning syntax; it's been about solving real problems—whether that's debugging a stubborn notification service on Android or optimizing a cloud deployment pipeline.
              </p>
              <p>
                I thrive in the <strong className="text-violet-400">full-stack ecosystem</strong>. I enjoy crafting intuitive interfaces with React & Tailwind, but I'm equally comfortable diving into backend logic with Node.js and Firebase.
              </p>
              <p>
                Currently, I am expanding my horizons into <strong className="text-cyan-400">AI & Machine Learning</strong>, exploring how Large Language Models can be fine-tuned and applied to solve complex engineering tasks.
              </p>
            </div>
          </motion.div>

          {/* Profile Photo Area */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-violet-500 rounded-2xl transform rotate-6 opacity-50 group-hover:rotate-12 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-slate-900 border-2 border-slate-700 rounded-2xl transform rotate-0 transition-transform duration-500 overflow-hidden">
                {/* 
                  PLACEHOLDER IMAGE: Replace 'src' with your actual photo path or URL.
                  Example: src="/my-photo.jpg" 
                */}
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                  alt={PERSONAL_INFO.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-cyan-500/30 transition-colors group">
            <Terminal className="w-8 h-8 text-cyan-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-slate-200 mb-2">Hands-on Engineering</h3>
            <p className="text-slate-500 text-sm">I don't just use tools; I understand them. From Linux terminals to environment variables, I fix the root cause.</p>
          </div>
          
          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-violet-500/30 transition-colors group">
            <Cpu className="w-8 h-8 text-violet-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-slate-200 mb-2">System Architecture</h3>
            <p className="text-slate-500 text-sm">Experience building secure authentication systems, scalable database structures, and mobile integrations.</p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-pink-500/30 transition-colors group">
            <Zap className="w-8 h-8 text-pink-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-slate-200 mb-2">Rapid Prototyping</h3>
            <p className="text-slate-500 text-sm">Fast learner who can quickly turn concepts into deployed, functional applications using modern tech stacks.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
