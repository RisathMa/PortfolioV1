import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE, PERSONAL_INFO, SKILLS } from '../constants';
import { Download } from 'lucide-react';

const Resume: React.FC = () => {
    return (
        <section id="resume" className="py-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-display text-slate-100 mb-4">Resume</h2>
                    <p className="text-slate-400">A structured overview of my experience and capabilities.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white text-slate-900 rounded-sm p-8 md:p-12 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 to-violet-500"></div>

                    {/* Header */}
                    <div className="border-b-2 border-slate-200 pb-8 mb-8">
                        <h1 className="text-4xl font-bold uppercase tracking-wide text-slate-900 mb-2">{PERSONAL_INFO.name}</h1>
                        <p className="text-xl text-cyan-700 font-medium mb-4">{PERSONAL_INFO.role}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                            <span>{PERSONAL_INFO.email}</span>
                            <span>•</span>
                            <span>github.com/RisathMa</span>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="mb-8">
                        <h3 className="text-lg font-bold uppercase tracking-wider text-slate-900 mb-3 border-b border-slate-200 pb-1">Professional Summary</h3>
                        <p className="text-slate-700 leading-relaxed text-sm">
                            {PERSONAL_INFO.resumeIntro}
                        </p>
                    </div>

                    {/* Experience */}
                    <div className="mb-8">
                        <h3 className="text-lg font-bold uppercase tracking-wider text-slate-900 mb-4 border-b border-slate-200 pb-1">Experience</h3>
                        {EXPERIENCE.map((exp, idx) => (
                            <div key={idx} className="mb-6 last:mb-0">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h4 className="font-bold text-slate-800">{exp.role}</h4>
                                    <span className="text-sm text-slate-500 font-mono">{exp.period}</span>
                                </div>
                                <p className="text-cyan-700 font-medium text-sm mb-2">{exp.company}</p>
                                <ul className="list-disc list-outside ml-4 text-sm text-slate-700 space-y-1">
                                    {exp.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Skills */}
                    <div>
                        <h3 className="text-lg font-bold uppercase tracking-wider text-slate-900 mb-4 border-b border-slate-200 pb-1">Technical Skills</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-bold text-xs text-slate-500 uppercase mb-2">Development</h4>
                                <div className="flex flex-wrap gap-2">
                                    {SKILLS.filter(s => s.category === 'Frontend' || s.category === 'Backend').slice(0, 8).map(s => (
                                        <span key={s.name} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded font-medium">{s.name}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-xs text-slate-500 uppercase mb-2">Tools & Systems</h4>
                                <div className="flex flex-wrap gap-2">
                                    {SKILLS.filter(s => s.category === 'Tools' || s.category === 'Mobile').map(s => (
                                        <span key={s.name} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded font-medium">{s.name}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="flex justify-center mt-10">
                    <a
                        href="/resume.pdf"
                        download="Risath_Manvidu_Resume.pdf"
                        className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-medium transition-colors shadow-lg shadow-cyan-900/20"
                    >
                        <Download size={18} />
                        Download PDF Version
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Resume;
