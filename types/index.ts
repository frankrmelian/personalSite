export interface General {
  name: string;
  headline: string;
  about: string[];
  socials: {
    email: string;
    linkedin: string;
    github: string;
    instagram: string;
  };
}

export interface Experience {
  title: string;
  company: string;
  href: string;
  startDate: string;
  endDate: string;
  description: string;
  logo: string;
  skills: string[];
}

export interface Education {
  subject: string;
  degree: string;
  university: string;
  href: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface Volunteering {
  position: string;
  event: string;
  organisation: string;
  href: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface Project {
  name: string;
  framework: string;
  description: string;
  href: string;
  stars: string;
  lastCommitMessage?: string;
  lastCommitDate?: string;
  readmeTitle?: string;
  commitCount?: number;
}

export interface TranslationData {
  general: General;
  experiences: Experience[];
  education: Education[];
  volunteering: Volunteering[];
  projects: Project[];
}
