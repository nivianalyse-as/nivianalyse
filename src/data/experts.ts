import geirImage from "@/assets/geir-vinsand.jpg";
import havardImage from "@/assets/havard-moe.jpg";
import benteImage from "@/assets/bente-rudrud-herdlevar.jpg";
import rogerImage from "@/assets/roger-antonsen.jpg";

export interface ExpertCV {
  intro: string;
  keyExperience: string[];
  education: string;
}

export interface Expert {
  id?: string;
  name: string;
  title: string;
  secondaryRole?: string;
  image: string;
  expertise: string[];
  description: string;
  cv?: ExpertCV;
  cvLink?: string;
  cvPdf?: string;
  phone?: string;
  email?: string;
}

export const experts: Expert[] = [
  {
    id: "havard-moe",
    name: "Håvard Moe",
    title: "Partner",
    secondaryRole: "Daglig leder",
    image: havardImage,
    expertise: [
      "Kommuneøkonomi og ressursbruk",
      "Organisasjonsgjennomgang",
      "Strategisk planlegging",
      "Økonomisk analyse og benchmarking",
    ],
    description:
      "Partner med 25 års erfaring innen kommunal økonomi, organisasjon og styring.",
    cv: {
      intro:
        "Håvard Moe har vært konsulent i kommunesektoren siden 2003, med 23 år i KS Konsulent før han ble daglig leder og partner i NIVI Analyse. Han har gjennomført oppdrag i over 300 kommuner direkte, og nådd enda flere gjennom nettverk og konferanser.",
      keyExperience: [
        "Oppdrag i 300+ kommuner med strategi, økonomi, omstilling og organisasjonsutvikling",
        "Spesialist på KOSTRA-analyse, kommune-kompass og benchmarking",
        "Programansvarlig og prosjektleder for KOMØK-konferansen (2009–2023) på oppdrag fra KS, KBN, NKK og NKRF",
        "Foredragsholder om bærekraftig kommuneøkonomi, demografi og arbeidskraft",
        "Toppledererfaring fra Oslo kommune",
        "3 år i KS Forskning",
        "Bred kompetanse innen organisasjons- og lederutvikling",
      ],
      education: "Cand.mag. Universitetet i Oslo, Master of Management BI",
    },
    cvPdf: "/cv/havard-moe-cv.pdf",
    phone: "+47 481 48 813",
    email: "hm@nivianalyse.no",
  },
  {
    id: "geir-vinsand",
    name: "Geir Vinsand",
    title: "Partner",
    secondaryRole: "Styreformann",
    image: geirImage,
    expertise: [
      "Interkommunalt samarbeid",
      "Kommunestruktur og -reform",
      "Offentlig forvaltning og styring",
      "Beredskap og samfunnssikkerhet",
    ],
    description:
      "Partner med over 30 års erfaring med analyse av kommunal utvikling, organisering og forvaltning.",
    cv: {
      intro:
        "Geir Vinsand er ressursøkonom fra NMBU og en av Norges mest erfarne eksperter på kommunestruktur og interkommunalt samarbeid. Han har bakgrunn fra Næringsdepartementet og Kommunaldepartementet, og har vært sentral i flere av de viktigste utredningene om norsk kommunesektor.",
      keyExperience: [
        "Hovedsekretær for Christiansenutvalget (NOU om kommune- og fylkesinndeling)",
        "Spesialist på kommunestruktur, interkommunalt samarbeid og nye kommunemodeller",
        "Utviklet kartleggingsmetodikk og kartlagt interkommunalt samarbeid i 200+ kommuner (etter 2019)",
        "Beredskap og samfunnssikkerhet: bidratt i utvikling av DSBs kommunebarometer",
        "Prosjektleder for Nasjonalt strålevernbarometer i 20+ år",
        "Arbeid med store hendelser og beredskapsplanlegging",
        "Omfattende foredragsvirksomhet om kommunereform og samarbeid",
      ],
      education: "Ressursøkonom, Norges miljø- og biovitenskapelige universitet (NMBU)",
    },
    cvPdf: "/cv/geir-vinsand-cv.pdf",
    phone: "+47 975 25 751",
    email: "gv@nivianalyse.no",
  },
  {
    id: "bente-herdlevaer",
    name: "Bente Rudrud Herdlevær",
    title: "Seniorrådgiver",
    image: benteImage,
    expertise: [
      "Ledelse",
      "Omstilling",
      "Plan og strategi",
      "Sikkerhet og beredskap",
    ],
    description:
      "Seniorrådgiver innen kommunal styring og utvikling, herunder organisasjon og økonomi. Har bred erfaring fra omstillingsprosesser med og uten ROBEK, organisasjonsutvikling, interkommunalt samarbeid, planprosesser og strategisk utvikling.",
    cv: {
      intro:
        "Bente Rudrud Herdlevær har over 25 års toppledererfaring fra offentlig sektor, hvorav de siste 13 årene i kommunal sektor. Hun har vært kommunedirektør og assisterende kommunedirektør i både små og store kommuner, og har i tillegg arbeidet som seniorrådgiver i KS Konsulent.",
      keyExperience: [
        "Kommunedirektør i Nesbyen, kommunaldirektør i Bærum og kommunedirektør i Hurdal",
        "Ledet strategisk og operativ omstilling av ROBEK-kommune, med forpliktende plan i samspill med KS og statsforvalter",
        "Inngående kjennskap til inntektssystemet, KOSTRA-analyser og kommunekompassevalueringer",
        "Prosjektleder for omstillingsprosjekter i blant annet Bodø, Trysil, Rødøy, Østre Toten, Drangedal og Balsfjord",
        "Evaluering og utvikling av interkommunale samarbeid og eierstyring i Hallingdal, Fosen og Gjøvikregionen",
        "Strategisk krise- og beredskapsledelse gjennom større hendelser",
        "Ledet arbeid med planprosesser, samfunnsutvikling, innovasjon og digitalisering",
      ],
      education:
        "Handelsøkonom, Handelshøyskolen BI. Master of Management (BI) og masterprogram i innovasjonsledelse, Høgskolen i Lillehammer",
    },
    cvPdf: "/docs/CV_Bente_Rudrud_Herdlevar.pdf",
    phone: "+47 95 75 51 01",
    email: "brh@nivianalyse.no",
  },
  {
    id: "roger-antonsen",
    name: "Roger A. Antonsen",
    title: "Seniorrådgiver",
    image: rogerImage,
    expertise: [
      "Ledelse",
      "Økonomi og regnskap",
      "Interimledelse (Management for Hire)",
      "Kommuneøkonomi",
      "Omstilling",
    ],
    description:
      "Roger A. Antonsen har lang ledererfaring fra Forsvaret og kommunesektoren. Han tilbyr økonomisk rådgivning til kommuner med behov for bedre styring, prioritering og omstilling, og bistår ledere og folkevalgte med å utvikle bærekraftige løsninger.",
    cvLink: "/docs/CV_Roger_Antonsen.pdf",
    cvPdf: "/docs/CV_Roger_Antonsen.pdf",
    phone: "+47 916 70 409",
    email: "ra@nivianalyse.no",
  },
];
