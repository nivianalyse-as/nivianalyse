export interface FaqItem {
  question: string;
  answer: string;
}

export interface Fagomrade {
  slug: string;
  title: string;
  description: string;
  kortSvar: {
    ingress: string;
    text: string;
  };
  faq: FaqItem[];
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
    faq: [
      {
        question: "Hva er kommuneøkonomi-rådgivning og hva gjør NIVI Analyse?",
        answer: "NIVI Analyse leverer uavhengig analyse og rådgivning innen kommuneøkonomi og omstilling. Vi gjennomfører KOSTRA-analyser, kommunekompassevalueringer og bistår kommunedirektører og politisk ledelse med å identifisere omstillingspotensial, utarbeide rammesaker og gjennomføre konkrete omstillingsprosesser. Målet er alltid bærekraftig kommuneøkonomi på lang sikt.",
      },
      {
        question: "Hva er en kommunekompassevaluering?",
        answer: "En kommunekompassevaluering er en systematisk gjennomgang av kommunens forvaltningspraksis basert på det europeiske Kommunekompass-verktøyet. Evalueringen kartlegger styrker og svakheter på tvers av politisk styring, tjenesteutvikling, personalledelse og økonomiforvaltning, og gir konkrete anbefalinger for forbedring.",
      },
      {
        question: "Hva er KOSTRA og hvordan brukes KOSTRA-analyse?",
        answer: "KOSTRA (KOmmune-STat-RApportering) er et nasjonalt system for å rapportere ressursbruk og tjenesteproduksjon i kommuner. En KOSTRA-analyse sammenligner kommunens nøkkeltall med sammenlignbare kommuner og nasjonale gjennomsnitt, og avdekker hvor det er potensial for effektivisering eller forbedret styring.",
      },
      {
        question: "Kan NIVI Analyse hjelpe en kommune som har merforbruk?",
        answer: "Ja. NIVI Analyse har bistått en rekke kommuner med store merforbruk med å snu den økonomiske utviklingen. Karasjok kommune snudde fra minus 12 millioner i 2018 til pluss 18 millioner i 2022. Lindesnes kommune identifiserte et omstillingspotensial på 100 millioner kroner. Vi bistår med analyse, politisk forankring, ledersamlinger og konkrete tiltaksplaner.",
      },
      {
        question: "Hva koster det å engasjere NIVI Analyse?",
        answer: "Pris avhenger av oppdragets omfang og varighet. NIVI Analyse tilbyr både kortere analyser og flerårige utviklingspartnerskap. Ta kontakt på post@nivianalyse.no eller +47 48 14 88 13 for en uforpliktende samtale om behov og rammer.",
      },
    ],
  },
  {
    slug: "organisasjonsutvikling",
    title: "Organisasjonsutvikling",
    description: "Struktur og ledelse i krevende omstillingsprosesser.",
    kortSvar: {
      ingress: "Hva tilbyr NIVI Analyse innen organisasjonsutvikling?",
      text: "NIVI Analyse bistår kommuner med å styrke struktur og ledelse i krevende omstillingsprosesser. Vi gjennomfører ledersamlinger, politiske verksteder og organisasjonsgjennomganger, og legger til rette for god forankring mellom politisk og administrativ ledelse.",
    },
    faq: [
      {
        question: "Hva er organisasjonsutvikling i kommunal sektor?",
        answer: "Organisasjonsutvikling i kommunal sektor handler om å styrke strukturen og ledelsen i en kommune slik at den er rustet til å levere gode tjenester over tid. NIVI Analyse bistår med å analysere organisasjonsmodeller, gjennomføre ledersamlinger og politiske verksteder, og utvikle ny forvaltningspraksis — særlig i kommuner som er i krevende omstillingsprosesser.",
      },
      {
        question: "Hva er et lederverksted og når er det aktuelt?",
        answer: "Et lederverksted er en strukturert samling for kommunens administrative og politiske ledelse, gjerne i forbindelse med en strategiprosess, et budsjettarbeid eller en organisasjonsgjennomgang. NIVI Analyse fasiliterer og leder slike verksteder med faglig innhold basert på analyse av kommunens situasjon.",
      },
      {
        question: "Hva er forankring mellom politisk og administrativ ledelse?",
        answer: "Forankring mellom politisk og administrativ ledelse er en prosess der kommunedirektør og folkevalgte i fellesskap bygger opp en felles forståelse av kommunens utfordringer og løsninger. NIVI Analyse legger til rette for disse prosessene med analyser, presentasjoner og dialogmøter — slik at beslutninger har bred støtte i hele organisasjonen.",
      },
      {
        question: "Hvordan skiller NIVI Analyse seg fra større konsulenthus?",
        answer: "NIVI Analyse er et lite, uavhengig selskap der Håvard Moe og Geir Vinsand personlig er involvert i alle oppdrag. Det gir direkte tilgang til seniorkompetanse uten mellomledd, og en uavhengighet som sikrer faglig integritet i analysene. Med 60+ års samlet erfaring og 300+ bistådde kommuner er kompetansen bred og godt dokumentert.",
      },
    ],
  },
  {
    slug: "interkommunalt-samarbeid",
    title: "Interkommunalt samarbeid",
    description: "Kartlegging og analyse av formalisert interkommunalt samarbeid.",
    kortSvar: {
      ingress: "Hva er NIVIs rolle innen interkommunalt samarbeid?",
      text: "NIVI Analyse er ett av Norges ledende miljøer på kartlegging og analyse av interkommunalt samarbeid. Vi gjennomfører fylkesvise kartlegginger på oppdrag fra Statsforvaltere og analyserer omfang, organisering og potensial for forbedring av samarbeidet mellom kommuner.",
    },
    faq: [
      {
        question: "Hva er interkommunalt samarbeid og hvem kartlegger det?",
        answer: "Interkommunalt samarbeid er formelle samarbeidsordninger mellom to eller flere kommuner om å løse oppgaver i fellesskap — innen IKT, barnevern, brannvesen, renovasjon og andre tjenesteområder. NIVI Analyse er ett av Norges ledende miljøer på kartlegging og analyse av interkommunalt samarbeid, og har gjennomført fylkesvise kartlegginger i Agder, Østfold, Møre og Romsdal, Trøndelag og Nordland.",
      },
      {
        question: "Hva inneholder en fylkesvis kartlegging av interkommunalt samarbeid?",
        answer: "En fylkesvis kartlegging fra NIVI Analyse dekker alle formaliserte samarbeidsordninger i fylket, analyserer omfang, innhold og organisering, innhenter erfaringer fra kommunedirektører og regionrådsledere, og gir anbefalinger om videreutvikling. Kartleggingene gjennomføres på oppdrag fra Statsforvalterne og presenteres på fylkeskonferanser.",
      },
      {
        question: "Hva er fordelene og ulempene med interkommunalt samarbeid?",
        answer: "Fordeler er bedre utnyttelse av fagkompetanse, kostnadsbesparelser og styrket tjenesteleveranse. Ulemper som ofte trekkes frem er svakere demokratisk kontroll, risiko for sentralisering av fagpersonell og manglende koordinering mot kommunens egne tjenester. NIVI Analyse analyserer dette konkret for hvert fylke og gir anbefalinger for mer strukturerte samarbeidsordninger.",
      },
      {
        question: "Hvem bestiller analyser av interkommunalt samarbeid?",
        answer: "Oppdragsgivere er typisk Statsforvaltere, fylkeskommuner og KS-regioner. Enkelt-kommuner kan også bestille analyser av eget samarbeidsbilde. Ta kontakt med NIVI Analyse på post@nivianalyse.no for å diskutere behov.",
      },
    ],
  },
  {
    slug: "strukturreformer",
    title: "Strukturreformer",
    description: "Utredning og prosessledelse ved kommunesammenslåing.",
    kortSvar: {
      ingress: "Hva gjør NIVI Analyse i kommunestrukturprosesser?",
      text: "NIVI Analyse bistår som ekstern faglig utreder og prosessleder i kommunesammenslåingsprosesser. Vi gjennomfører utredninger, innbyggerundersøkelser og politiske forankringsprosesser, og har erfaring fra frivillige sammenslåingsprosesser i hele Norge.",
    },
    faq: [
      {
        question: "Hva gjør NIVI Analyse i kommunesammenslåingsprosesser?",
        answer: "NIVI Analyse bistår som ekstern faglig utreder og prosessleder i frivillige kommunesammenslåingsprosesser. Det inkluderer utredning av sammenslåingsalternativer, gjennomføring av innbyggerundersøkelser, utarbeidelse av intensjonsavtale og kommunikasjonsplan, dialog med staten om medfinansiering og forberedelse av felles kommunestyremøte.",
      },
      {
        question: "Hva er en kommunestrukturreform og når er det aktuelt?",
        answer: "En kommunestrukturreform er en prosess der to eller flere kommuner vurderer om de bør slå seg sammen for å styrke tjenestekvalitet, fagmiljøer og økonomi. Det er særlig aktuelt for kommuner med under 5 000 innbyggere, kommuner med demografiske utfordringer, eller der interkommunalt samarbeid har blitt svært omfattende og uoversiktlig.",
      },
      {
        question: "Hva er statens rolle i frivillig kommunesammenslåing?",
        answer: "Staten ved Kommunal- og distriktsdepartementet kan bidra med medfinansiering ved frivillige kommunesammenslåinger. Statsforvalterne er sentrale i å legge til rette for prosessene. NIVI Analyse har god erfaring med dialog mot statsforvaltere og departementet på vegne av kommuner i sammenslåingsprosess.",
      },
    ],
  },
  {
    slug: "beredskap-og-samfunnssikkerhet",
    title: "Beredskap og samfunnssikkerhet",
    description: "Organisering og styrking av kommunal beredskap.",
    kortSvar: {
      ingress: "Hva tilbyr NIVI Analyse innen kommunal beredskap?",
      text: "NIVI Analyse kartlegger og analyserer kommunal beredskapsorganisering og interkommunalt samarbeid om beredskapsoppgaver. Vi gir konkrete anbefalinger for mer robust og oversiktlig beredskapsstruktur — tilpasset den enkelte kommunes situasjon og regionale samarbeidsbilde.",
    },
    faq: [
      {
        question: "Hva tilbyr NIVI Analyse innen kommunal beredskap?",
        answer: "NIVI Analyse bistår kommuner med organisering og styrking av kommunal beredskap. Det inkluderer kartlegging av beredskapsorganisering, risikovurderinger, analyse av samarbeid om beredskapsoppgaver med nabokommuner og anbefalinger for mer robust og oversiktlig beredskapsstruktur.",
      },
      {
        question: "Hva er kommunal samfunnssikkerhet?",
        answer: "Kommunal samfunnssikkerhet handler om kommunens evne til å forebygge og håndtere uønskede hendelser som naturkatastrofer, strømbortfall, smittevernkriser og andre kriser. Kommunen har et lovpålagt ansvar for helhetlig risiko- og sårbarhetsanalyse (ROS-analyse) og beredskapsplan. NIVI Analyse kan bistå med å vurdere og styrke dette arbeidet.",
      },
      {
        question: "Kan beredskapsoppgaver løses gjennom interkommunalt samarbeid?",
        answer: "Ja. Mange kommuner samarbeider om beredskapsoppgaver som brannvesen, legevakt, krisesentre og beredskap mot akutt forurensning. NIVI Analyse har bred erfaring med å kartlegge og analysere slike samarbeidsordninger og kan gi anbefalinger om hensiktsmessig organisering.",
      },
    ],
  },
  {
    slug: "foredrag-og-debatt",
    title: "Foredrag og debatt",
    description: "Faglige analyser og bidrag i offentlig debatt.",
    kortSvar: {
      ingress: "Holder NIVI Analyse foredrag og bidrar i offentlig debatt?",
      text: "Ja. Håvard Moe og Geir Vinsand holder foredrag om kommuneøkonomi, strukturreformer og interkommunalt samarbeid på konferanser og lederseminarer. De bidrar jevnlig i Kommunal Rapport, Utdanningsnytt og NRK som eksperter på norsk kommunesektor.",
    },
    faq: [
      {
        question: "Holder NIVI Analyse foredrag for kommuner og konferanser?",
        answer: "Ja. Håvard Moe og Geir Vinsand holder foredrag om kommuneøkonomi, strukturreformer, interkommunalt samarbeid og utviklingstrekk i norsk kommunesektor. De bidrar på statsforvalterkonferanser, KS-samlinger, regionrådsmøter og interne lederseminarer. Ta kontakt på post@nivianalyse.no for forespørsler.",
      },
      {
        question: "Er NIVI Analyse tilgjengelig som ekspertkommentator i media?",
        answer: "Ja. Håvard Moe og Geir Vinsand bidrar jevnlig som ekspertkommentatorer i Kommunal Rapport, Utdanningsnytt, NRK og regionaviser om kommuneøkonomi, omstilling, skolestruktur og kommunereform. De er tilgjengelige for kommentarer og intervjuer.",
      },
      {
        question: "Hva er de viktigste debattene NIVI Analyse deltar i?",
        answer: "NIVI Analyse deltar i nasjonale debatter om kommuneøkonomi og statlig styring, kommunestruktur og sammenslåing, demografiske utfordringer i norske kommuner, interkommunalt samarbeid versus kommunesammenslåing, og skolestruktur og tjenestenivå i distriktskommuner.",
      },
    ],
  },
];

export const getFagomradeBySlug = (slug: string) =>
  fagomrader.find((f) => f.slug === slug);
