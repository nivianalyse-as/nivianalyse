import { ArticleContent, MediaMention, DebattEntry, ContentItem } from "@/types/content";

export const articles: ArticleContent[] = [
  {
    id: "1",
    type: "article",
    title: "Kommunesamarbeid i praksis",
    excerpt: "En gjennomgang av hvordan norske kommuner kan styrke samarbeidet for bedre tjenester.",
    date: "12. jan 2025",
    category: "Interkommunalt samarbeid",
    slug: "kommunesamarbeid-i-praksis",
    ingress: "Interkommunalt samarbeid er nøkkelen til bærekraftige tjenester i små og mellomstore kommuner. Denne analysen ser på hva som fungerer – og hva som kan forbedres.",
    sections: [
      {
        title: "Bakgrunn",
        content: "Norske kommuner står overfor økende krav til tjenestekvalitet og effektivitet. Samtidig gjør demografiske endringer at mange kommuner opplever press på både økonomi og fagmiljøer."
      },
      {
        title: "Problemstilling",
        content: "Hvordan kan kommuner samarbeide bedre for å sikre robuste fagmiljøer og kostnadseffektive tjenester uten å miste lokal forankring?"
      },
      {
        title: "Hva vi gjorde",
        content: "NIVI Analyse gjennomførte en omfattende kartlegging av eksisterende samarbeidsordninger i 45 kommuner, med intervjuer av rådmenn, ordførere og tjenesteledere."
      },
      {
        title: "Resultat",
        content: "Analysen avdekket at kommuner med formaliserte samarbeidsstrukturer og tydelig politisk forankring oppnår bedre resultater enn ad hoc-samarbeid."
      }
    ],
    relatedTopics: ["Interkommunalt samarbeid", "Kommunestruktur", "Organisasjon"],
    authors: ["Geir Vinsand"]
  },
  {
    id: "2",
    type: "article",
    title: "Økonomisk bærekraft i små kommuner",
    excerpt: "Hvordan sikre langsiktig økonomisk stabilitet i møte med demografiske endringer?",
    date: "5. jan 2025",
    category: "Kommuneøkonomi",
    slug: "okonomisk-barekraft-sma-kommuner",
    ingress: "Små kommuner møter spesielle utfordringer knyttet til økonomi og demografi. Denne rapporten analyserer strategier for langsiktig bærekraft.",
    sections: [
      {
        title: "Bakgrunn",
        content: "Mange små kommuner opplever befolkningsnedgang og aldring. Dette påvirker både inntektsgrunnlag og utgiftsbehov."
      },
      {
        title: "Problemstilling",
        content: "Hvilke grep kan små kommuner ta for å sikre økonomisk handlingsrom i årene fremover?"
      },
      {
        title: "Hva vi gjorde",
        content: "Vi analyserte økonomiske nøkkeltall for 80 kommuner med under 5000 innbyggere og identifiserte fellestrekk ved de mest robuste."
      },
      {
        title: "Resultat",
        content: "Kommuner som kombinerer stram driftsstyring med strategiske investeringer i næringsutvikling viser best langsiktig utvikling."
      }
    ],
    relatedTopics: ["Kommuneøkonomi", "Analyse"],
    authors: ["Håvard Moe"]
  },
  {
    id: "3",
    type: "article",
    title: "Politisk ledelse i krisetider",
    excerpt: "Lærdommer fra pandemien og hvordan kommuner kan styrke sin beredskap.",
    date: "18. des 2024",
    category: "Politisk rådgivning",
    slug: "politisk-ledelse-krisetider",
    ingress: "Pandemien testet kommunenes evne til rask omstilling og politisk ledelse under press. Hva kan vi lære?",
    sections: [
      {
        title: "Bakgrunn",
        content: "Covid-19-pandemien satte kommunal beredskap og politisk lederskap på en historisk prøve."
      },
      {
        title: "Problemstilling", 
        content: "Hva kjennetegnet kommuner som håndterte krisen godt, og hvordan kan lærdommene overføres til fremtidig beredskap?"
      },
      {
        title: "Hva vi gjorde",
        content: "NIVI gjennomførte intervjuer med 25 ordførere og rådmenn om deres erfaringer fra krisehåndteringen."
      },
      {
        title: "Resultat",
        content: "Tett samspill mellom politisk og administrativ ledelse, kombinert med god kommunikasjon til innbyggerne, var avgjørende suksessfaktorer."
      }
    ],
    relatedTopics: ["Politisk rådgivning", "Organisasjon"],
    authors: ["Geir Vinsand", "Håvard Moe"]
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

export const mediaMentions: MediaMention[] = [
  {
    id: "m1",
    type: "media",
    outlet: "Kommunal Rapport",
    title: "De to største brølapene slår seg sammen",
    date: "04.02.2026",
    summary: "NIVI Analyse ved Geir Vinsand og Håvard Moe kommenterer sammenslåingsprosessen mellom to store kommuner og peker på viktige lærdommer for fremtidige strukturendringer.",
    category: "I media",
    slug: "kommunal-rapport-brolaper",
    sourceUrl: undefined,
    pdfUrl: "/docs/de-to-storste-brolapene.pdf"
  }
];

export const debattEntries: DebattEntry[] = [
  {
    id: "d1",
    type: "debatt",
    programName: "Dagsnytt 18",
    channel: "NRK",
    date: "15. jan 2025",
    topic: "Kommuneøkonomi og statsbudsjettet",
    category: "Debatt/NRK",
    slug: "dagsnytt-18-kommuneokonomi",
    participant: "Håvard Moe",
    videoUrl: undefined
  }
];

export const allContent: ContentItem[] = [
  ...articles,
  ...mediaMentions,
  ...debattEntries
];
