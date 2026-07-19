export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  techStack: string[];
  category: string;
  features: string[];
  challenges: string[];
  achievements: string[];
  timeline: string;
  role: string;
  githubUrl: string;
  liveUrl: string | null;
  isFeatured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  certificateUrl: string | null;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  url: string;
  image: string;
}

export interface Research {
  id: string;
  title: string;
  journal: string;
  date: string;
  abstract: string;
  authors: string[];
  doi: string;
  url: string;
  tags: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: string;
  category: string;
}

export interface Leadership {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface GitHubStats {
  stars: number;
  forks: number;
  commits: number;
  repositories: number;
  topLanguages: { name: string; percentage: number }[];
  pinnedRepos: {
    name: string;
    description: string;
    stars: number;
    language: string;
    url: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}