// Media content types for I media section

export type MediaType = "article" | "video" | "debate" | "other";

export interface MediaEntry {
  id: number;
  title: string;
  slug: string;
  type: MediaType;
  source: string;
  date: string; // ISO format
  excerpt: string;
  keyPoints: string[];
  externalUrl?: string;
  pdfUrl?: string;
  embedUrl?: string;
  featured: boolean;
  tags: string[];
}

export const mediaTypeLabels: Record<MediaType, string> = {
  article: "Artikkel",
  video: "TV & video",
  debate: "Debatt",
  other: "Annet"
};
