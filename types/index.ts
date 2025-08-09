export interface SiteMetadata {
  title: string;
  description: string;
}

export interface PersonalInfo {
  fullName: string;
  professionalTagline: string;
}

export interface AboutSection {
  personalStory: string;
  professionalJourney: string;
  personalInterests: string;
  closingStatement: string;
}

export interface SocialLinks {
  emailAddress: string;
  linkedInProfile: string;
  githubProfile: string;
  instagramProfile: string;
}

export interface Navigation {
  aboutLabel: string;
  blogLabel: string;
  projectsLabel: string;
}

export interface BlogPage {
  title: string;
  comingSoonEmoji: string;
  comingSoonMessage: string;
  comingSoonDescription: string;
}

export interface ProjectsPage {
  title: string;
}

export interface Pages {
  blog: BlogPage;
  projects: ProjectsPage;
}

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
  siteMetadata: SiteMetadata;
  personalInfo: PersonalInfo;
  aboutSection: AboutSection;
  socialLinks: SocialLinks;
  navigation: Navigation;
  pages: Pages;
  // Legacy support during transition
  general?: General;
  experiences?: Experience[];
  education?: Education[];
  volunteering?: Volunteering[];
  projects?: Project[];
}
