export interface Fagomrade {
  slug: string;
  title: string;
  description: string;
  kortSvar: {
    ingress: string;
    text: string;
  };
}

export const fagomrader: Fagomrade[] = [
  {
    slug: "kommuneokonomi-og-omstilling",
    title: "Kommuneøkonomi og omstilling",
    description: "Analyse og styringsgrunnlag for bærekraftig kommuneøkonomi.",
    kortSvar: {
      ingress: "Hva er kommuneøkonomi-rådgivning fra NIVI Analyse?",
      text: "NIVI Analyse leverer uavhengig analyse og prosessledelse som hjelper norske kommuner med å oppnå bærekraftig økonomi. Vi gjennomfører KOSTRA-analyser og kommunekompassevalueringer, og bistår ledelsen med konkrete omstillingsprosesser — fra analyse til vedtak i kommunestyret.",
    },
  },
  {
    slug: "organisasjonsutvikling",
    title: "Organisasjonsutvikling",
    description: "Struktur og ledelse i krevende omstillingsprosesser.",
    kortSvar: {
      ingress: "Hva tilbyr NIVI Analyse innen organisasjonsutvikling?",
      text: "NIVI Analyse bistår kommuner med å styrke struktur og ledelse i krevende omstillingsprosesser. Vi gjennomfører ledersamlinger, politiske verksteder og organisasjonsgjennomganger, og legger til rette for god forankring mellom politisk og administrativ ledelse.",
    },
  },
  {
    slug: "interkommunalt-samarbeid",
    title: "Interkommunalt samarbeid",
    description: "Kartlegging og analyse av formalisert interkommunalt samarbeid.",
    kortSvar: {
      ingress: "Hva er NIVIs rolle innen interkommunalt samarbeid?",
      text: "NIVI Analyse er ett av Norges ledende miljøer på kartlegging og analyse av interkommunalt samarbeid. Vi gjennomfører fylkesvise kartlegginger på oppdrag fra Statsforvaltere og analyserer omfang, organisering og potensial for forbedring av samarbeidet mellom kommuner.",
    },
  },
  {
    slug: "strukturreformer",
    title: "Strukturreformer",
    description: "Utredning og prosessledelse ved kommunesammenslåing.",
    kortSvar: {
      ingress: "Hva gjør NIVI Analyse i kommunestrukturprosesser?",
      text: "NIVI Analyse bistår som ekstern faglig utreder og prosessleder i kommunesammenslåingsprosesser. Vi gjennomfører utredninger, innbyggerundersøkelser og politiske forankringsprosesser, og har erfaring fra frivillige sammenslåingsprosesser i hele Norge.",
    },
  },
  {
    slug: "beredskap-og-samfunnssikkerhet",
    title: "Beredskap og samfunnssikkerhet",
    description: "Organisering og styrking av kommunal beredskap.",
    kortSvar: {
      ingress: "Hva tilbyr NIVI Analyse innen kommunal beredskap?",
      text: "NIVI Analyse kartlegger og analyserer kommunal beredskapsorganisering og interkommunalt samarbeid om beredskapsoppgaver. Vi gir konkrete anbefalinger for mer robust og oversiktlig beredskapsstruktur — tilpasset den enkelte kommunes situasjon og regionale samarbeidsbilde.",
    },
  },
  {
    slug: "foredrag-og-debatt",
    title: "Foredrag og debatt",
    description: "Faglige analyser og bidrag i offentlig debatt.",
    kortSvar: {
      ingress: "Holder NIVI Analyse foredrag og bidrar i offentlig debatt?",
      text: "Ja. Håvard Moe og Geir Vinsand holder foredrag om kommuneøkonomi, strukturreformer og interkommunalt samarbeid på konferanser og lederseminarer. De bidrar jevnlig i Kommunal Rapport, Utdanningsnytt og NRK som eksperter på norsk kommunesektor.",
    },
  },
];

export const getFagomradeBySlug = (slug: string) =>
  fagomrader.find((f) => f.slug === slug);
