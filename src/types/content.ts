// Content types for Inspirasjon, Media, and Debatt

export type ContentCategory = 
  | "Analyse"
  | "Kommuneøkonomi"
  | "Organisasjon"
  | "Politisk rådgivning"
  | "Interkommunalt samarbeid"
  | "Kommunestruktur"
  | "I media"
  | "Debatt/NRK";

export interface ArticleContent {
  id: string;
  type: "article";
  title: string;
  excerpt: string;
  date: string;
  category: ContentCategory;
  slug: string;
  // Detail page content
  ingress?: string;
  sections?: ArticleSection[];
  relatedTopics?: string[];
  authors?: string[];
  externalUrl?: string;
  pdfUrl?: string;
}

export interface ArticleSection {
  title: string;
  content: string;
}

export interface MediaMention {
  id: string;
  type: "media";
  outlet: string;
  title: string;
  date: string;
  summary: string;
  category: "I media";
  sourceUrl?: string;
  pdfUrl?: string;
  slug: string;
}

export interface DebattEntry {
  id: string;
  type: "debatt";
  programName: string;
  channel: string;
  date: string;
  topic: string;
  videoUrl?: string;
  category: "Debatt/NRK";
  slug: string;
  participant?: string;
}

export type ContentItem = ArticleContent | MediaMention | DebattEntry;
