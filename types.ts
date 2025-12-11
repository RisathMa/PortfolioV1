import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
  image?: string;
  category: 'Web' | 'Mobile' | 'System' | 'Security';
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Tools' | 'AI/ML';
  icon?: React.ReactNode;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
}