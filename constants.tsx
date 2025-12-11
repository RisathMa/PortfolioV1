import { Project, Skill, Experience, Testimonial } from './types';
import { 
  Code2, 
  Server, 
  Smartphone, 
  Terminal, 
  BrainCircuit, 
  Layout, 
  ShieldCheck, 
  Database,
  Globe,
  Lock,
  Cpu
} from 'lucide-react';
import React from 'react';

export const PERSONAL_INFO = {
  name: "Risath Manvidu",
  role: "Software Engineer",
  tagline: "Engineering Digital Experiences. Solving Real-World Problems.",
  email: "Risath@companyrm.lk", 
  website: "https://www.companyrm.lk",
  about: `I am a self-driven, hands-on Software Engineer with a passion for building scalable, real-world systems. My expertise spans full-stack web development, mobile applications, and cloud infrastructure.

  I don't just write code; I engineer solutions. From debugging complex notification channels in Android to configuring robust cloud deployment pipelines on Render and Vercel, I focus on the "how" and "why" behind every technology. I have a deep curiosity for AI and Machine Learning, constantly exploring how to integrate intelligent systems into practical applications.`,
  resumeIntro: "A results-oriented Software Engineer with a strong foundation in full-stack development, cloud operations, and UI/UX design. Proven ability to troubleshoot complex issues, from server configurations to mobile notification delivery."
};

export const SKILLS: Skill[] = [
  { name: "React & Next.js", category: "Frontend", icon: <Code2 size={18} /> },
  { name: "TypeScript", category: "Frontend", icon: <Code2 size={18} /> },
  { name: "Tailwind CSS", category: "Frontend", icon: <Layout size={18} /> },
  { name: "UI/UX Design", category: "Frontend", icon: <Layout size={18} /> },
  { name: "Node.js & Express", category: "Backend", icon: <Server size={18} /> },
  { name: "Firebase (Auth/Firestore)", category: "Backend", icon: <Database size={18} /> },
  { name: "Cloud Deployment", category: "Backend", icon: <Globe size={18} /> },
  { name: "Flutter", category: "Mobile", icon: <Smartphone size={18} /> },
  { name: "Android Notifications", category: "Mobile", icon: <Smartphone size={18} /> },
  { name: "Git & GitHub", category: "Tools", icon: <Terminal size={18} /> },
  { name: "Linux/Terminal", category: "Tools", icon: <Terminal size={18} /> },
  { name: "Debugging", category: "Tools", icon: <ShieldCheck size={18} /> },
  { name: "LLM Concepts", category: "AI/ML", icon: <BrainCircuit size={18} /> },
  { name: "AI Safety", category: "AI/ML", icon: <Lock size={18} /> },
];

export const PROJECTS: Project[] = [
  {
    id: "nexa",
    title: "Nexa Project",
    description: "A comprehensive analysis of deployment workflows. This project demonstrates mastery over local run environments and cloud configurations, specifically optimizing settings for Render and Vercel deployments.",
    tags: ["DevOps", "Cloud", "Deployment", "GitHub"],
    category: "System",
    links: {},
    image: "https://i.ibb.co/Xrm2kYX6/Screenshot-2025-12-11-165300.png"
  },
  {
    id: "company-rm",
    title: "CompanyRM Platform",
    description: "A professional business platform featuring a complete UI/UX overhaul. Focused on modernizing branding, spacing, typography, and converting basic designs into a professional-grade interface.",
    tags: ["React", "UI/UX", "Branding", "Frontend"],
    category: "Web",
    links: { demo: "https://www.companyrm.lk" },
    image: "https://i.ibb.co/KcJ2PjFp/Screenshot-2025-12-11-165419.png"
  },
  {
    id: "auth-system",
    title: "Advanced Auth System",
    description: "Custom HTML email verification and password reset system using Firebase Authentication. Replaced default templates with custom-coded, branded HTML emails and built a secure verification flow.",
    tags: ["Firebase", "Security", "HTML Emails", "Auth"],
    category: "System",
    links: {},
    image: "https://i.ibb.co/fVt19nLM/Screenshot-2025-12-11-165743.png"
  },
  {
    id: "flutter-onesignal",
    title: "School Mobile App",
    description: "A Flutter application integrated with OneSignal for push notifications. Involved deep debugging of Android notification channels and solving popup issues on various devices.",
    tags: ["Flutter", "Mobile", "OneSignal", "Android" , "IOS"],
    category: "Mobile",
    links: {},
    image: "https://i.ibb.co/hFj6fvrf/Screenshot-20251211-170000.jpg"
  },

];

export const EXPERIENCE: Experience[] = [
  {
    role: "Software Engineer (Projects & Freelance)",
    company: "Self-Employed / Open Source",
    period: "2024 - Present",
    description: [
      "Architected full-stack web applications using React, Node.js, and Firebase, handling both frontend UI and backend logic.",
      "Diagnosed and fixed complex cross-platform issues, including mobile push notification failures and local build environment errors.",
      "Implemented secure authentication flows and custom transactional email systems to improve user trust and retention.",
      "Conducted detailed UI audits to enhance brand identity and user experience for web platforms."
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alex Rivera",
    role: "Senior Project Manager",
    content: "Risath has an incredible ability to troubleshoot issues that leave others stuck. His understanding of the full deployment pipeline saved us weeks of development time."
  },
  {
    name: "Sarah Chen",
    role: "UI/UX Lead",
    content: "He doesn't just build what is asked; he improves it. Risath turned a basic wireframe into a modern, fluid interface that elevated our brand significantly."
  }
];
