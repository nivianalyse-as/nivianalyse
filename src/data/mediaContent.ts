import { MediaEntry } from "@/types/media";

export const mediaEntries: MediaEntry[] = [
  {
    id: 1,
    title: "De to største brølapene slår seg sammen",
    slug: "de-to-storste-brolapene-slar-seg-sammen",
    type: "article",
    source: "Kommunal Rapport",
    date: "2026-02-04",
    excerpt: "Håvard Moe går inn i NIVI Analyse sammen med Geir Vinsand. Målet er å bygge et enda sterkere fagmiljø for kommuner og offentlig sektor, med tydelige analyser og solid beslutningsgrunnlag.",
    keyPoints: [
      "Styrker kapasitet og faglig bredde innen kommunesektor og offentlig forvaltning",
      "Tydeligere satsing på analyse, utredning og rådgivning som gir beslutningskraft",
      "Kombinerer erfaring og gjennomføringskraft med et oppdatert og moderne uttrykk",
      "NIVI Analyse skal være en trygg faglig støttespiller for krevende prioriteringer og endringer"
    ],
    externalUrl: undefined,
    pdfUrl: undefined,
    featured: true,
    tags: ["kommunesektor", "omtale", "analyse"]
  },
  {
    id: 2,
    title: "NRK: Debatt om kommunestruktur og prioriteringer",
    slug: "nrk-debatt-kommunestruktur",
    type: "debate",
    source: "NRK",
    date: "2026-01-15",
    excerpt: "Kort ingress (kommer).",
    keyPoints: [
      "Tema 1 (kommer)",
      "Tema 2 (kommer)",
      "Tema 3 (kommer)"
    ],
    externalUrl: undefined,
    embedUrl: undefined,
    featured: true,
    tags: ["nrk", "debatt"]
  },
  {
    id: 3,
    title: "Omtale i fagpresse: …",
    slug: "omtale-fagpresse",
    type: "article",
    source: "Fagpresse",
    date: "2026-01-10",
    excerpt: "Kort ingress (kommer).",
    keyPoints: [
      "Punkt 1 (kommer)",
      "Punkt 2 (kommer)",
      "Punkt 3 (kommer)"
    ],
    externalUrl: undefined,
    featured: true,
    tags: ["omtale"]
  }
];

export const getFeaturedMedia = (): MediaEntry[] => {
  return mediaEntries.filter(entry => entry.featured).slice(0, 3);
};

export const getMediaBySlug = (slug: string): MediaEntry | undefined => {
  return mediaEntries.find(entry => entry.slug === slug);
};

export const getMediaSources = (): string[] => {
  const sources = new Set(mediaEntries.map(entry => entry.source));
  return Array.from(sources);
};

export const getMediaYears = (): string[] => {
  const years = new Set(mediaEntries.map(entry => entry.date.split("-")[0]));
  return Array.from(years).sort((a, b) => parseInt(b) - parseInt(a));
};
