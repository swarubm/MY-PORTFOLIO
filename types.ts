export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  score: string;
}

export enum NavSection {
  HOME = 'home',
  PROJECTS = 'projects',
  SKILLS = 'skills',
  EDUCATION = 'education',
  CONTACT = 'contact'
}