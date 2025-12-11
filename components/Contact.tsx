import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Globe, Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-slate-950">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <h2 className="text-3xl font-bold font-display text-slate-100 mb-6">
          <span className="text-cyan-400 mr-2">04.</span> Contact Me
        </h2>
        
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          I'm currently looking for new opportunities to build scalable systems and work with innovative teams. Whether you have a question about my stack, a project proposal, or just want to say hi, my inbox is open.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg bg-cyan-600 text-white hover:bg-cyan-500 transition-all hover:-translate-y-1 shadow-lg shadow-cyan-900/20"
          >
            <Mail size={20} />
            Say Hello
          </a>

          {PERSONAL_INFO.website && (
            <a 
              href={PERSONAL_INFO.website}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition-all hover:-translate-y-1"
            >
              <Globe size={20} />
              Visit Website
            </a>
          )}
        </div>

        <div className="mt-10 pt-10 border-t border-slate-800 text-sm text-slate-600 font-mono">
          <p className="flex justify-center items-center gap-2">
            Designed & Built by <span className="text-cyan-500/80">{PERSONAL_INFO.name}</span>
          </p>
          <div className="mt-4 flex justify-center gap-6">
             <a href="https://www.companyrm.lk" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">
               www.companyrm.lk
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;