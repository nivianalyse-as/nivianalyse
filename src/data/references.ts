/**
 * REFERANSEPROSJEKTER – NIVI Analyse AS.
 * Kun gjennomførte oppdrag.
 * Ikke generer nye referanser automatisk.
 * Ikke opprett plassholdere.
 * Alle endringer skal være eksplisitte og manuelle.
 */

export interface DetailedReference {
  kommune: string;
  periode: string;
  beskrivelse: string;
  referanse: {
    navn: string;
    tittel: string;
    epost: string;
  };
}

export interface ReferenceProject {
  kommune: string;
  periode: string;
  type: "Omstillingsstøtte" | "Utviklingsstøtte" | "Strukturreform" | "Interkommunalt samarbeid";
  kort: string;
  leveranser: string[];
  resultat?: string;
}

export const detailedReferences: DetailedReference[] = [
  {
    kommune: "Vinje kommune – Omstillingsstøtte",
    periode: "2025–2026",
    beskrivelse: "Vinje kommune er en kommune med (svært) høye kraftinntekter, som til tross for disse inntekten sliter med å ha en bærekraftig kommuneøkonomi over tid. Høsten 2025 og våren 2026 gjennomføres det en prosess der utfordringsbildet blir forankret både i politisk og administrativ ledelse + tillitsvalgte, en Kommunekompassevaluering for å kartlegge forvaltningspraksis, en analyse av kommuneøkonomien for å se på ressursbruken samt en prosess med å ta frem en rammesak som behandles i kommunestyret i september 2026.",
    referanse: { navn: "Gry Åsne Aksvik", tittel: "kommunalsjef Økonomi og samfunn", epost: "gry.aasne.aksvik@vinje.kommune.no" },
  },
  {
    kommune: "Salangen kommune – Omstillingsstøtte",
    periode: "2025",
    beskrivelse: "Salangen kommune skal bygge et nytt helse- og omsorgssenter og har derfor behov for å redusere ressursbruken på løpende drift. Håvard Moe bistod kommunen med en prosess med forankring av utfordringsbildet opp mot politisk og administrativ ledelse og tillitsvalgte, analyserte kommuneøkonomien og gjennomført arbeidsverksteder, bisto kommunen med å utvikle 22 arbeidsgrupperapporter som grunnlaget for en rammesak.",
    referanse: { navn: "Heidi Aasen", tittel: "Økonomisjef", epost: "Heidi.Aasen@salangen.kommune.no" },
  },
  {
    kommune: "Karlsøy kommune – Omstillingsstøtte",
    periode: "2025",
    beskrivelse: "Karlsøy er en havbrukskommune i Nord-Troms med høye lokale inntekter fra Havbruksfondet, hvor det aller mest blir tatt rett inn i løpende drift. Kommunen har vedtatt å bygge et nytt kultur- og oppvekstsenter og kommunen hadde derfor behov for å redusere ressursbruken på løpende drift. Håvard Moe bistod kommunen med en prosess med forankring av utfordringsbildet opp mot politisk og administrativ ledelse og tillitsvalgte, analyserte kommuneøkonomien og gjennomført arbeidsverksteder, bisto kommunen med å utvikle 16 arbeidsgrupperapporter som grunnlaget for en rammesak.",
    referanse: { navn: "Rune Stifjell", tittel: "økonomisjef", epost: "Rune.Stifjell@karlsoy.kommune.no" },
  },
  {
    kommune: "Vestvågøy og Moskenes – Utredning av kommunesammenslutning",
    periode: "2025",
    beskrivelse: "I april 2025 vedtok Regjeringen at staten ville dekke akkumulert merforbruk i Moskenes kommune på om lag 160 mill. kr under forutsetning av frivillig kommunesammenslutning med én eller flere nabokommuner. Kommunene nedsatte forhandlingsutvalg og startet utredning av sammenslutning som ble enstemmig vedtatt i begge kommunestyrene i august 2025. Geir Vinsand bisto i prosessen som ekstern faglig utreder og rådgiver, i samarbeid med Randi Gregersen som ivaretok rollen som stedlig prosjektkoordinator. Samarbeidet er videreført etter oppnevning av Fellesnemnd med ansvar for gjennomføring av sammenslutningen.",
    referanse: { navn: "Lill Stabell", tittel: "Kommunedirektør Vestvågøy kommune", epost: "lill.stabell@vestvagoy.kommune.no" },
  },
  {
    kommune: "Statsforvalteren i Buskerud, Østfold, Oslo og Akershus – Interkommunalt samarbeid i Østfold",
    periode: "2025",
    beskrivelse: "NIVI har gjennomført en kartlegging og analyse av formalisert interkommunalt samarbeid som dekker alle fylkets 12 kommuner. Kartleggingen omfatter også interkommunale fagnettverk og kommunenes samarbeid mot fylkeskommunen og staten. Det er innhentet erfaringer med dagens samarbeid fra kommunedirektører og daglige ledere i regionrådene. NIVI har gjennomført analyser av samarbeidets omfang, innhold og organisering og gitt sine anbefalinger om videreutvikling av samarbeidet.",
    referanse: { navn: "Tor Håkon Skomsvold", tittel: "Direktør", epost: "tor.skomsvold@statsforvalteren.no" },
  },
  {
    kommune: "Lindesnes kommune – Omstillingsstøtte",
    periode: "2024–2025",
    beskrivelse: "Prosjektet Sammen i Utvikling i Lindesnes kommune har jobbet med å identifisere et omstillingspotensial på 100 millioner kroner. Håvard Moe har vært ekstern prosjektleder og har hatt ansvar for prosjektstyring, økonomiske analyser, ledersamlinger, politiske verksteder, politiske og administrative styringsgrupper, med mer.",
    referanse: { navn: "Sonja Svardal", tittel: "økonomisjef", epost: "Sonja.Svardal@lindesnes.kommune.no" },
  },
  {
    kommune: "Statsforvalteren i Agder – Interkommunalt samarbeid i Agder",
    periode: "2024",
    beskrivelse: "NIVI har gjennomført en kommunevis kartlegging som omfatter alle fylkets 25 kommuner. I sluttrapport fra NIVI er det gjennomført analyser av samarbeidets omfang og organisering. Kartleggingen omfatter også forekomst av fagnettverk og kommunenes samarbeid mot staten og fylkeskommunen. NIVI har drøftet prinsipper for fremtidig samarbeid og formidlet resultater på Statsforvalterens ordfører- og kommunedirektørkonferanse i Mandal.",
    referanse: { navn: "Dag Petter Sødal", tittel: "Spesialrådgiver", epost: "dag.sodal@statsforvalteren.no" },
  },
  {
    kommune: "Hammerfest, Måsøy og Hasvik – Regionalt plankontor",
    periode: "2024",
    beskrivelse: "NIVI utredet regionalt plankontor for de tre kommunene. Utredningen hadde sin bakgrunn i at kommunene har inngått en bygdevekstavtale med staten, som har som formål å bidra til befolkningsvekst i regionen. I avtalen med staten er det konkretisert seks satsingsområder, inkludert økt samarbeid om samfunnsutvikling og planlegging. Utredningen har også sin bakgrunn i økte nasjonale krav til kommunenes planfunksjoner og sårbarheter ved dagens organisering i de tre kommunene. NIVI fremmet forslag til løsningsmodell og organisering ved oppstart av samarbeidet.",
    referanse: { navn: "Elisabeth Paulsen", tittel: "Kommunedirektør Hammerfest kommune", epost: "elisabeth.paulsen@hammerfest.kommune.no" },
  },
  {
    kommune: "Frøya kommune – Omstillingsstøtte",
    periode: "2022–nå",
    beskrivelse: "Prosjektet Effektivitet '24 har som målsetting å omstille og ta ned ressursbruken i Frøya kommune. Frøya kommune har de siste årene fått svært høye inntekter som følge av at et fåtall skatteytere betaler svært mye formuesskatt til kommunene. Dette er i stor grad faset inn i drift, noe som gjør at kommuneøkonomien er svært sårbar for svingninger i inntektsgrunnlaget. Gjennom analyser, kommunekompassevalueringer, ledersamlinger, politiske verksteder og tiltaksplaner og gevinstrealiseringsplaner skal Frøya kommune gjøres mindre avhengig av et svært høyt inntektsnivå.",
    referanse: { navn: "Roger A. Antonsen", tittel: "Økonomisjef / Assisterende kommunedirektør", epost: "RogerAnsgar.Antonsen@froya.kommune.no" },
  },
  {
    kommune: "Lillehammer kommune – Omstillingsstøtte – Balanse '24",
    periode: "2020–2022",
    beskrivelse: "Lillehammer kommune hadde et merforbruk på 70 millioner kroner/netto driftsresultat på minus 2 % i 2019. For å sikre helhet og sammenheng i utviklingsarbeidet initierte Lillehammer prosjektet Balanse '24. Utviklingsprosjekt skulle frem mot 2024 arbeide med å skape bedre balanse og bærekraft i Lillehammer kommune når det gjaldt forholdet mellom Inntekter og utgifter, drift og investering, fag og økonomi og nåtid og framtid. I 2022 leverte Lillehammer et netto driftsresultat på 2,2 % som var best av byene i Innlandet.",
    referanse: { navn: "Tord Buer Olsen", tittel: "Kommunedirektør", epost: "Tord.Buer.Olsen@lillehammer.kommune.no" },
  },
  {
    kommune: "Tysvær kommune – Utviklingsstøtte",
    periode: "2020–2022",
    beskrivelse: "Tysvær kommune har 10 000 innbyggere og er en kommune med svært god kommuneøkonomi på grunn av store eiendomsskatteinntekter fra petroleumsanleggene på Kårstø. Disse inntektene brukes i dag i stor gard inn i drift. Tysvær ser at dette er en svært risikabel strategi i møte med fremtidens utfordringer og har derfor initiert prosjektet Tysvær Kommune 2030. Håvard Moe ha bistått med analyser, folkevalgtopplæring (i flere omganger), ledersamlinger, videofilmer til innbyggerinformasjon, mm. Håvard Moe er prosjektleder.",
    referanse: { navn: "Sigurd Eikje", tittel: "Rådmann", epost: "sigurd.eikje@tysver.kommune.no" },
  },
  {
    kommune: "Karasjok kommune – Omstillingsstøtte",
    periode: "2018–2022",
    beskrivelse: "Karasjok kommune har enormt store utfordringer både når det gjelder økonomi, styring og ledelse, tillit og utviklingskraft. Prosjektet har bestått i å bistå kommunen med å bygge opp sannsynligvis det mest omfattende omstillingsprosjektene som noen gang er gjennomført i en norsk kommune. Prosjektet har snudd økonomien i Karasjok fra et resultat på minus 12 millioner i 2018 til et budsjettert resultat i 2022 på pluss 18 millioner. Prosjektet var direktefinansiert fra KMD (via Statsforvalteren i Troms og Finnmark). Håvard Moe var prosjektkoordinator og ansvarlig person ovenfor kommune og Fylkesmann i Troms og Finnmark.",
    referanse: { navn: "Elisabeth Larsen", tittel: "Ass. kommunedirektør", epost: "Elisabeth.Larsen@karasjok.kommune.no" },
  },
  {
    kommune: "Røros kommune – Utviklingsstøtte",
    periode: "2014–2022",
    beskrivelse: "Røros kommune hadde store utfordringer både når det gjaldt økonomi, styring og ledelse, tillit og utviklingskraft. Håvard Moe har bistått kommunen med kommunekompassevalueringer, utvikling av ny og forbedret forvaltningspraksis, KOSTRA-analyser og økonomisk omstilling, lederutvikling, politisk organisering, folkevalgtopplæring, administrativ organisering, strategisk utviklingspartner, mm gjennom et tett og langsiktig utviklingsarbeid.",
    referanse: { navn: "Kjersti Forbord Jensås", tittel: "Kommunedirektør", epost: "kjersti.forbord.jensas@roros.kommune.no" },
  },
  {
    kommune: "Longyearbyen lokalstyre – Utviklingsstøtte",
    periode: "2013–2024",
    beskrivelse: "Longyearbyen lokalstyre er en «kommune»/lokalsamfunn, med en kort historie som folkevalgt styrt organisasjon. Longyearbyen lokalstyre er en organisasjon med veldig store turnover (ca 20 % i året) og det har vært et stort behov for å skape en organisasjon med god forvaltningspraksis som er selvgående uavhengig av hvilke personer som fyller de ulike rollene til enhver tid. Håvard Moe har bistått med evaluering av SNU 2 - administrativ organisering, kommunekompassevalueringer, utvikling av forbedret forvaltningspraksis lederutvikling, tilrettelegging studieturer, strategisk utviklingspartner, mm",
    referanse: { navn: "Sissel Hultgren", tittel: "Personalsjef", epost: "sissel.hultgren@lokalstyre.no" },
  },
];

export const omstillingsProjects: ReferenceProject[] = [
  {
    kommune: "Vinje kommune",
    periode: "2025–2026",
    type: "Omstillingsstøtte",
    kort: "Langvarige utfordringer knyttet til bærekraftig kommuneøkonomi og ressursbruk, til tross for kraftinntekter.",
    leveranser: [
      "Forankring mellom politisk og administrativ ledelse",
      "Kommunekompass-evaluering av forvaltningspraksis",
      "Analyse av kommuneøkonomi og ressursbruk",
      "Utarbeidelse av rammesak til kommunestyret",
    ],
  },
  {
    kommune: "Karlsøy kommune",
    periode: "2025",
    type: "Omstillingsstøtte",
    kort: "Høye inntekter fra havbruksfondet kombinert med investeringspress og behov for strammere økonomistyring.",
    leveranser: [
      "Forankring mellom politisk og administrativ ledelse",
      "Analyse av kommuneøkonomi",
      "Gjennomføring av arbeidsverksteder",
      "Samlet rammegrunnlag basert på 16 arbeidsgrupperapporter",
    ],
  },
  {
    kommune: "Lindesnes kommune",
    periode: "2024–2025",
    type: "Omstillingsstøtte",
    kort: "Helhetlig omstillingsprosess med identifisert potensial på 100 MNOK.",
    leveranser: [
      "Prosjektstyring og ekstern prosjektledelse",
      "Økonomiske analyser",
      "Leder- og politikerverksteder",
      "Etablering av styringsstruktur mellom politisk og administrativ ledelse",
    ],
  },
  {
    kommune: "Frøya kommune",
    periode: "2022–nå",
    type: "Omstillingsstøtte",
    kort: "Sårbar driftsøkonomi med mål om å redusere risiko og styrke langsiktig styring.",
    leveranser: [
      "Analyse og kommunekompass-evaluering",
      "Leder- og politikerverksteder",
      "Tiltaks- og gevinstrealiseringsplaner",
    ],
  },
];

export const strukturProjects: ReferenceProject[] = [
  {
    kommune: "Ny kommune i Lofoten",
    periode: "2025",
    type: "Strukturreform",
    kort: "Ekstern faglig utreder i prosess for kommunesammenslutning mellom Vestvågøy og Moskenes.",
    leveranser: [
      "Utredning av kommunesammenslutning",
      "Representativ innbyggerundersøkelse",
      "Utarbeidelse av kommunikasjonsplan",
      "Intensjonsavtale",
      "Dialog med staten om medfinansiering",
      "Forberedelse av felles kommunestyremøte",
      "Søknad om frivillig sammenslutning",
      "Saksforberedelser til Fellesnemnd",
      "Styringsdokument for gjennomføring",
    ],
  },
  {
    kommune: "Interkommunalt samarbeid i Østfold",
    periode: "2025",
    type: "Interkommunalt samarbeid",
    kort: "Kartlegging og analyse av formalisert interkommunalt samarbeid på oppdrag for Statsforvalteren.",
    leveranser: [
      "Kommunevis kartlegging",
      "Analyse av omfang, innhold og organisering",
      "Erfaringsinnhenting fra kommunedirektører og regionråd",
      "Anbefalinger om videreutvikling",
    ],
  },
  {
    kommune: "Interkommunalt samarbeid i Agder (25 kommuner)",
    periode: "2024",
    type: "Interkommunalt samarbeid",
    kort: "Systematisk gjennomgang av samarbeid mellom kommuner, fylkeskommune og stat.",
    leveranser: [
      "Kartlegging av formalisert samarbeid",
      "Analyse av styring og organisering",
      "Prinsipper for fremtidig samarbeid",
      "Faglig presentasjon på Statsforvalterens konferanse",
    ],
  },
];
