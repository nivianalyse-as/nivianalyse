export type RapportType = "Rapport" | "Notat" | "Samarbeidsrapport";

export interface Rapport {
  id: string;
  title: string;
  year: number;
  type: RapportType;
  summary: string;
  themes: string[];
  geography: string[];
  client: string;
  authors: string[];
  pdfUrl: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  // Detail page content
  problemstilling?: string;
  bakgrunn?: string;
  hovedfunn?: string;
  metodikk?: string[];
}

export const ALL_THEMES = [
  "Interkommunalt samarbeid",
  "Kommunestruktur",
  "Kommunereform",
  "Kommuneøkonomi",
  "Regional utvikling",
  "Beredskap",
  "Organisasjonsutvikling",
  "Demokrati og styring",
  "Plan og miljø",
  "Kollektivtransport",
  "Helse og omsorg",
  "Oppvekst og utdanning",
  "Fylkeskommuner",
  "Forvaltningsstruktur",
] as const;

export const ALL_TYPES: RapportType[] = ["Rapport", "Notat", "Samarbeidsrapport"];

export function themeToSlug(theme: string): string {
  return theme
    .toLowerCase()
    .replace(/æ/g, "ae")
    .replace(/ø/g, "o")
    .replace(/å/g, "a")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function slugToTheme(slug: string): string | undefined {
  return ALL_THEMES.find((t) => themeToSlug(t) === slug);
}
