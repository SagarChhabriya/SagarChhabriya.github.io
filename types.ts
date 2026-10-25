export interface PublicationItem {
  title: string;
  authors: string; // use **Name** markers via boldAuthors helper, or HTML-ready string with name bolded in data
  venue: string;
  year: string;
  links: { label: string; url: string }[];
  note?: string;
}

export interface ExperienceItem {
  title: string;
  org: string;
  period: string;
  location?: string;
  venueLink?: { label: string; url: string };
  bullets: string[];
}

export interface ProjectItem {
  title: string;
  tech: string;
  link?: string;
  bullets: string[];
}

export interface AwardItem {
  title: string;
  detail: string;
  link?: string;
}
