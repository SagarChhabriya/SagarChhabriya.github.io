
export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface ProjectItem {
  title: string;
  tech: string[];
  description: string[];
  link: string;
  image?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface CertificationItem {
  title: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface PublicationItem {
  title: string;
  authors: string;
  date: string;
  venue: string;
  pdfLink?: string;
  doiLink?: string;
}

export interface ConferenceItem {
  title: string;
  date: string;
  location: string;
}
