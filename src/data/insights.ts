/**
 * FAGLIGE INNSIKTER – NIVI Analyse AS.
 * Kun faktiske publiserte artikler.
 * Ikke generer nye artikler automatisk.
 * Ikke opprett plassholdere.
 * Alle endringer skal være eksplisitte og manuelle.
 */

import { ArticleContent } from "@/types/content";

export const articles: ArticleContent[] = [
  {
    id: "10-rad",
    type: "article",
    title: "Håvard Moes 10 råd for bærekraftig kommuneøkonomi",
    excerpt: "Håvard Moe presenterer ti konkrete råd til kommunepolitikere som vil ta politisk ansvar for en bærekraftig kommuneøkonomi.",
    date: "14. feb 2026",
    category: "Kommuneøkonomi",
    slug: "10-rad-barekraftig-kommuneokonomi",
    ingress: "Et politisk ansvar – ta det! Håvard Moe gir ti konkrete råd til kommunepolitikere som ønsker å sikre bærekraftig kommuneøkonomi.",
    sections: [
      {
        title: "Ti råd for bærekraftig kommuneøkonomi",
        content: "Artikkelen presenterer ti konkrete råd for kommunepolitikere som vil ta politisk ansvar for en bærekraftig kommuneøkonomi. Rådene spenner fra budsjettstyring og prioritering til strategisk planlegging og samarbeid."
      }
    ],
    relatedTopics: ["Kommuneøkonomi", "Politisk rådgivning"],
    authors: ["Håvard Moe"],
    externalUrl: "https://www.kommunal-rapport.no/nyheter/havard-moes-10-rad-et-politisk-ansvar-ta-det/843308",
    pdfUrl: "/docs/Havard_Moes_10_rad.pdf"
  },
  {
    id: "4",
    type: "article",
    title: "Kommunestruktur 2030: Nye muligheter",
    excerpt: "En analyse av hvordan kommunekartet kan se ut om fem år og hva som driver endringene.",
    date: "28. nov 2024",
    category: "Kommunestruktur",
    slug: "kommunestruktur-2030",
    ingress: "Kommunereformen ga oss 356 kommuner. Hvordan vil kartet utvikle seg videre mot 2030?",
    relatedTopics: ["Kommunestruktur", "Analyse"],
    authors: ["Geir Vinsand"]
  },
  {
    id: "5",
    type: "article",
    title: "Effektiv organisering av tekniske tjenester",
    excerpt: "Hvordan kommuner kan organisere vann, avløp og renovasjon mer effektivt.",
    date: "15. nov 2024",
    category: "Organisasjon",
    slug: "effektiv-organisering-tekniske-tjenester",
    ingress: "Tekniske tjenester utgjør en stor del av kommunebudsjettet. Riktig organisering kan gi betydelige besparelser.",
    relatedTopics: ["Organisasjon", "Kommuneøkonomi"],
    authors: ["Håvard Moe"]
  }
];
