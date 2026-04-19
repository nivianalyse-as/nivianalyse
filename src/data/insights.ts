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
    id: "gjovik-toten-staten-overtar",
    type: "article",
    title: "Kommuneekspert om Gjøvik og Toten: – Kan ende med at staten overtar",
    excerpt: "Håvard Moe om kommuneøkonomi, statlig styring og risiko for inngrep i Gjøvik, Vestre Toten og Østre Toten.",
    date: "18. apr 2026",
    category: "Kommuneøkonomi",
    slug: "gjovik-toten-staten-overtar",
    ingress: "Håvard Moe analyserer den økonomiske situasjonen i Gjøvik og Toten og advarer om at utviklingen kan føre til statlig overtakelse. Saken berører sentrale spørsmål innen kommuneøkonomi, økonomisk handlingsrom og statlig styring av kommunesektoren.",
    sections: [
      {
        title: "Bakgrunn",
        content: "Håvard Moe, én av Norges mest profilerte kommuneøkonomer, vurderer den økonomiske situasjonen i Vestre Toten, Østre Toten og Gjøvik – tre kommuner som nå utreder sammenslåing til Toten kommune. Moe peker på at hovedutfordringen ikke er penger, men evnen til å omstille tjenestene i takt med endringene i innbyggernes alderssammensetning."
      },
      {
        title: "Risiko for statlig overtakelse",
        content: "Moe advarer om at dersom kommunene ikke klarer å flytte ressurser fra skole og oppvekst til helse og omsorg – og sikre nok arbeidskraft der behovet er størst – vil staten innen 10–15 år måtte overta de tyngste kommunale helsetjenestene gjennom statlige foretak."
      },
      {
        title: "Vurdering av sammenslåing",
        content: "Moe støtter sammenslåing til Toten kommune. Han peker på stordriftsfordeler, effektivitetsgevinster på rundt 90 millioner kroner årlig i administrasjon, samt videreføring av basistilskudd som om kommunene var tre separate enheter de neste 20 årene – tilsvarende nær én milliard kroner ekstra i statlige overføringer."
      }
    ],
    relatedTopics: ["Kommuneøkonomi", "Statlig styring", "Kommuneforvaltning"],
    authors: ["Håvard Moe"],
    externalUrl: "https://www.oa.no/kommuneekspert-om-gjovik-og-toten-kan-ende-med-at-staten-overtar/s/5-35-2255057",
    pdfUrl: "/docs/Ostre_Toten_Oppland_Arbeiderblad.pdf"
  },
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
