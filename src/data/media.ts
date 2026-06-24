/**
 * MEDIAOPPSLAG – NIVI Analyse AS.
 * Kun faktiske publiserte medieoppslag.
 * Ikke generer nye poster automatisk.
 * Ikke opprett plassholdere.
 * Alle endringer skal være eksplisitte og manuelle.
 */

import { MediaEntry } from "@/types/media";

export const mediaEntries: MediaEntry[] = [
  {
    id: 28,
    title: "Kommuneekspert spår ROBEK for Hadsel: – Dere kommer ikke på ROBEK fordi dere har dårlig råd, men fordi dere er dårlig styrt",
    slug: "bladet-vesteralen-hadsel-robek",
    type: "article",
    source: "Bladet Vesterålen",
    date: "2026-06-09T20:11:00",
    excerpt: "Håvard Moe, partner i NIVI Analyse, holdt innlegg på økonomiseminar for Hadsel kommunestyre og advarte om at kommunen er på vei mot ROBEK dersom det ikke gjennomføres betydelige omstillinger. Han understreket at utfordringen ikke handler om manglende inntekter, men om manglende økonomisk styring.",
    keyPoints: [
      "Hadsel kommune har brukt opp fond på 30 millioner kroner på fire år og forventer stort underskudd i 2026",
      "Kommunen har høyere kostnadsvekst og lavere effektivitet enn landsgjennomsnittet",
      "Håvard Moe anbefaler omstillinger og prioriteringer i skolesektoren for å møte økende behov innen eldreomsorg",
      "Han uttrykker sterk tvil om kommunen vil klare å bygge nytt sykehjem med dagens økonomiske situasjon",
      "Hadsel beskrives som en av landets mest belånte kommuner samtidig som den driver med underskudd"
    ],
    externalUrl: "https://www.blv.no/kommune-ekspert-spar-robek-for-hadsel-tviler-pa-om-dere-klarer-a-bygge-sykehjem/s/5-9-945024",
    pdfUrl: "/docs/BLV_Hadsel_09.06.26.pdf",
    featured: false,
    tags: ["bladet vesterålen", "kommuneøkonomi", "hadsel", "robek"]
  },
  {
    id: 27,
    title: "– Nå skal det kuttes drastisk i kommunen",
    slug: "hamar-arbeiderblad-stange-kuttes-drastisk",
    type: "article",
    source: "Hamar Arbeiderblad",
    date: "2026-05-27T22:22:00",
    excerpt: "Håvard Moe, partner i NIVI Analyse, skal bistå Stange kommune i en omfattende omstillingsprosess. Kommunen må omstille for 125 millioner kroner for å sikre bærekraftig kommuneøkonomi og unngå ROBEK. Moe varsler tøffe tiltak som vil berøre både innbyggere, tjenester og ansatte.",
    keyPoints: [
      "Stange har omstilt – men for lite, for sakte og for sent",
      "Kommunen risikerer ROBEK innen 2030 dersom det ikke gjennomføres omstillinger på minimum 100 millioner innen 2029",
      "NIVI skal sammen med administrasjonen utarbeide forslag til kutt og nye inntekter som danner grunnlag for ny økonomiplan og budsjett",
      "25–40 «arbeidspakker» skal ferdigstilles for å synliggjøre effektiviseringsmuligheter"
    ],
    externalUrl: "https://www.h-a.no/na-skal-det-kuttes-drastisk-i-kommunen-det-blir-veldig-toffe-tak-som-kommer-til-a-ga-utover-innbyggere-tjenester-og-ansatte/s/5-139-2013091",
    pdfUrl: "/docs/HA_Stange_27.05.26.pdf",
    featured: false,
    tags: ["hamar arbeiderblad", "kommuneøkonomi", "stange", "robek"]
  },
  {
    id: 26,
    title: "Ordfører ville ikke følt seg trygg med å ha foreldrene på sykehjem",
    slug: "nrk-sapmi-ordforer-trygg-sykehjem",
    type: "article",
    source: "NRK Sápmi",
    date: "2026-05-26T06:26:42",
    excerpt: "Oppfølgingssak om sykehjemsdebatt og kommunenes beredskap for den demografiske utviklingen. Håvard Moe peker på systemsvikt og manglende langsiktig styring.",
    keyPoints: [
      "Kommunesektoren er ikke forberedt på eldrebølgen",
      "Kapasitetsutfordringene handler om arbeidskraft, ikke bare økonomi",
      "Manglende styring forverrer situasjonen"
    ],
    externalUrl: "https://www.nrk.no/sapmi/ordforer-ville-ikke-folt-seg-trygg-med-a-ha-foreldrene-pa-sykehjem-1.17876303",
    featured: false,
    tags: ["nrk", "sápmi", "eldreomsorg", "sykehjem"]
  },
  {
    id: 25,
    title: "Sykehjemsfrykten: – Vi bryter menneskerettigheter hver dag",
    slug: "nrk-sapmi-sykehjemsfrykten-menneskerettigheter",
    type: "article",
    source: "NRK Sápmi",
    date: "2026-05-25T14:05:05",
    excerpt: "Kommune-Norge står overfor enorme utfordringer som de ikke er forberedt på. Krisen består ikke av et økende antall eldre, men mangelen på titusenvis av ansatte som skal ta vare på de gamle, sier Håvard Moe, partner i NIVI Analyse.",
    keyPoints: [
      "Antall innbyggere over 80 år dobler seg, men det blir ikke flere hender i arbeid",
      "Kommunesektoren har i liten grad realistiske planer for hvordan utfordringen skal håndteres",
      "Vi må diskutere om vi skal flytte brukerne til arbeidskraften – ikke motsatt",
      "Lokalpolitikere unngår å løfte temaet fordi det gir lite politisk gevinst"
    ],
    externalUrl: "https://www.nrk.no/sapmi/xl/sykehjemsfrykten_-_-vi-bryter-menneskerettigheter-hver-dag-1.17811131",
    featured: false,
    tags: ["nrk", "sápmi", "eldreomsorg", "sykehjem"]
  },
  {
    id: 24,
    title: "Har liten tro på regjeringens varslede oppfølgingsordning",
    slug: "kommunal-rapport-oppfolgingsordning-cowboykommuner",
    type: "article",
    source: "Kommunal Rapport",
    date: "2026-05-22T05:00:00",
    excerpt: "Geir Vinsand mener regjeringens varslede oppfølgingsordning for kommuner med manglende kontroll neppe vil styrke innbyggernes rettssikkerhet.",
    keyPoints: [
      "Geir Vinsand tviler på den varslede oppfølgingsordningen",
      "Han tar til orde for et Jusbek-register for kommuner med vedvarende og alvorlig svikt",
      "Registeret skal omfatte kommuner med omfattende lovbrudd, sviktende rettssikkerhet og uforsvarlige tjenester",
      "Vinsand mener statlig grep haster"
    ],
    externalUrl: "https://www.kommunal-rapport.no/nyheter/har-liten-tro-pa-regjeringens-varslede-oppfolgingsordning/861071",
    pdfUrl: "/docs/KR_Geir_oppfolging_cowboykommuner_22.05.26.pdf",
    featured: false,
    tags: ["kommunal rapport", "rettssikkerhet", "statlig styring"]
  },
  {
    id: 23,
    title: "Kommunesystemet styrer mot kollaps",
    slug: "vikebladet-kommunesystemet-styrer-mot-kollaps",
    type: "article",
    source: "Vikebladet",
    date: "2026-05-16T14:15:00",
    excerpt: "Geir Vinsand meiner dagens kommuneorganisering er ute av kontroll og at nasjonale styresmakter ikkje tek alvoret innover seg.",
    keyPoints: [
      "Kommunesystemet styrer mot kollaps",
      "Nasjonale politikarar tek ikkje innover seg alvoret",
      "Vinsand foreslår regionkommunar med rettleiande innbyggjartal på 15–20.000",
      "Slike einingar ville vore sterke nok til å sikre forsvarlege tenester og redusere avhengigheit av staten"
    ],
    externalUrl: "https://www.vikebladet.no/nyhende/n/xrMkgB/staten-har-ingen-kontroll-med-kommunane",
    pdfUrl: "/docs/Vikebladet_mai_2026.pdf",
    featured: false,
    tags: ["vikebladet", "kommunestruktur", "regionkommunar"]
  },
  {
    id: 22,
    title: "Vega kommune må ta grep om driften",
    slug: "banett-vega-ma-ta-grep",
    type: "article",
    source: "BAnett",
    date: "2026-05-11T08:00:00",
    excerpt: "Altfor mye penger renner ut, mener Håvard Moe som advarer om at Vega kommune kan bli innmeldt i ROBEK innen kort tid dersom det ikke gjennomføres kraftig omstilling.",
    keyPoints: [
      "Vega må omstille kraftig for ikke å bli innmeldt i ROBEK i 2028",
      "Kostnadsveksten har vært langt høyere enn inntektsveksten",
      "Det vil handle om vilje. Nå haster det"
    ],
    externalUrl: "https://www.banett.no/nyheter/n/K86j66/ekspert-slakter-kommunens-oekonomiske-styring",
    pdfUrl: "/docs/BAnett_Vega_11.05.26.pdf",
    featured: false,
    tags: ["banett", "kommuneøkonomi", "vega", "robek"]
  },
  {
    id: 21,
    title: "Tromsø kommune har ikke dårlig råd – de mangler styring",
    slug: "itromso-tromso-mangler-styring",
    type: "article",
    source: "iTromsø",
    date: "2026-05-05T23:33:00",
    excerpt: "Håvard Moe uttaler seg til iTromsø om økonomistyringen og den kommunaløkonomiske bærekraften i Tromsø kommune.",
    keyPoints: [
      "Økonom Håvard Moe kritiserer Tromsø kommune for svak økonomistyring",
      "Tromsø er ikke en fattig kommune, men har økonomiske utfordringer grunnet høye utgifter og stor gjeld",
      "Kommunen må være villig til upopulære tiltak for å bedre økonomien"
    ],
    externalUrl: "https://www.itromso.no/nyheter/n/k0MlR6/kommuneoekonom-om-tromsoe-haelvettes-sytpeisa",
    pdfUrl: "/docs/iTromso_Tromso_17.04.26.pdf",
    featured: false,
    tags: ["itromsø", "kommuneøkonomi", "tromsø", "styring"]
  },
  {
    id: 20,
    title: "Åmot får knallhard kritikk",
    slug: "amot-far-knallhard-kritikk",
    type: "article",
    source: "Østlendingen",
    date: "2026-04-30T10:51:00",
    excerpt: "Håvard Moe, daglig leder i NIVI Analyse, retter sterk kritikk mot manglende helhetlig styring av økonomien i Åmot kommune.",
    keyPoints: [
      "En helhetlig KOSTRA-analyse avdekker store utfordringer i økonomistyringen",
      "Åmot må omstille kraftig for å unngå ROBEK",
      "Svak økonomistyring henger sammen med svak forvaltningspraksis"
    ],
    externalUrl: "https://www.ostlendingen.no/amot-kommune-i-okonomisk-ufore-far-kritikk-for-manglende-kontroll/s/80-69-248175",
    pdfUrl: "/docs/Ostlendingen_Amot_16.04.26.pdf",
    featured: true,
    tags: ["østlendingen", "kommuneøkonomi", "åmot", "robek"]
  },
  {
    id: 19,
    title: "Fleire eldre, færre unge – korleis ser Seljord kommune ut om ti eller tjue år?",
    slug: "seljord-fleire-eldre-faerre-unge",
    type: "article",
    source: "Vest Telemark Blad",
    date: "2026-04-30T05:30:00",
    excerpt: "Håvard Moe deltok på folkemøte i Seljord og understreket behovet for tydelige prioriteringer i møte med demografiske endringer.",
    keyPoints: [
      "Flere eldre og færre unge",
      "Vi må tørre å ta debatten om hva vi skal prioritere i fremtiden",
      "Det å ikke velge er også et valg"
    ],
    externalUrl: "https://www.vtb.no/nyhende/fleire-eldre-faerre-unge-korleis-ser-seljord-kommune-ut-om-ti-eller-tjue-ar/635967",
    pdfUrl: "/docs/VTB_Seljord_15.04.26.pdf",
    featured: false,
    tags: ["vest telemark blad", "demografi", "seljord", "prioriteringer"]
  },
  {
    id: 18,
    title: "Nå skal sparekniven kvesses",
    slug: "vinje-na-skal-sparekniven-kvesses",
    type: "article",
    source: "Vest Telemark Blad",
    date: "2026-04-11T05:30:00",
    excerpt: "Håvard Moe fra NIVI Analyse la frem underveisrapport for formannskapet i Vinje 9. april og advarte om kurs mot ROBEK innen 2030 dersom det ikke tas grep.",
    keyPoints: [
      "Kunnskapsbasert omstilling basert på gode økonomiske analyser",
      "Medvirkning fra hele organisasjonen",
      "Tøffe men nødvendige valg"
    ],
    externalUrl: "https://www.vtb.no/nyhende/na-skal-sparekniven-skjerpast/633215",
    pdfUrl: "/docs/VTB_Vinje_11.04.26.pdf",
    featured: false,
    tags: ["vest telemark blad", "kommuneøkonomi", "vinje", "robek"]
  },
  {
    id: 17,
    title: "Kommuneekspert om Gjøvik og Toten: – Kan ende med at staten overtar",
    slug: "kommuneekspert-gjovik-toten-staten-overtar",
    type: "article",
    source: "Oppland Arbeiderblad",
    date: "2026-04-18T12:00:00",
    excerpt: "Håvard Moe kommenterer kommuneøkonomi, statlig styring og risiko for inngrep i Gjøvik og Østre og Vestre Toten kommuner.",
    keyPoints: [
      "Kommuneøkonomien i Gjøvik og Østre og Vestre Toten kommuner under press",
      "Statlig styring og mulig inngrep diskuteres",
      "Behov for strukturelle grep og tydelige prioriteringer"
    ],
    externalUrl: "https://www.oa.no/kommuneekspert-om-gjovik-og-toten-kan-ende-med-at-staten-overtar/s/5-35-2255057",
    pdfUrl: "/docs/Ostre_Toten_Oppland_Arbeiderblad.pdf",
    featured: true,
    tags: ["oppland arbeiderblad", "kommuneøkonomi", "statlig styring"]
  },
  {
    id: 16,
    title: "Skoler med under 50 elever burde vært forbudt",
    slug: "skoler-under-50-elever-forbudt",
    type: "article",
    source: "Utdanningsnytt",
    date: "2026-03-13",
    excerpt: "Håvard Moe, partner og daglig leder i NIVI Analyse, uttaler seg om skolestruktur og minstestørrelser for grunnskoler i Norge.",
    keyPoints: [
      "Skoler med under 50 elever er krevende å drifte forsvarlig",
      "Kommuneøkonomien presser frem strukturendringer",
      "Behov for tydeligere nasjonale føringer på skolestruktur"
    ],
    externalUrl: "https://www.utdanningsnytt.no/kommuneokonomi-skolenedleggelse/skoler-med-under-50-elever-burde-vaert-forbudt/475972",
    featured: true,
    tags: ["skolestruktur", "kommuneøkonomi", "utdanning"]
  },
  {
    id: 1,
    title: "NRK Debatten: Kommuneøkonomi og prioriteringer",
    slug: "nrk-debatten-kommuneokonomi",
    type: "debate",
    source: "NRK TV",
    date: "2025-11-11",
    excerpt: "Håvard Moe deltok i NRK Debatten om kommuneøkonomi, prioriteringer og tjenestekutt. Debatten tok opp hvordan kommunene må velge mellom skole og eldreomsorg.",
    keyPoints: [
      "Kommunene står overfor stadig tøffere prioriteringer",
      "Behov for strukturelle endringer, ikke bare kutt",
      "Interkommunalt samarbeid som del av løsningen",
      "Politisk vilje til å ta vanskelige valg"
    ],
    externalUrl: "https://tv.nrk.no/serie/debatten/sesong/202511/episode/NNFA51111125",
    embedUrl: "https://tv.nrk.no/serie/debatten/sesong/202511/episode/NNFA51111125",
    featured: false,
    tags: ["nrk", "debatt", "kommuneøkonomi"]
  },
  {
    id: 2,
    title: "Kommunene må velge mellom skole og eldre",
    slug: "kommunene-ma-velge-mellom-skole-og-eldre",
    type: "article",
    source: "NRK Buskerud",
    date: "2025-10-15",
    excerpt: "Norske kommuner presses mellom voksende eldrebehov og skolestruktur. NRK Buskerud belyser hvordan kommunene har «gått i luksusfella» – og hvorfor det nå haster med omstilling.",
    keyPoints: [
      "Demografisk press gjør at kommuner må kutte i skole eller eldreomsorg",
      "Mange kommuner har utsatt nødvendige strukturgrep",
      "Behov for tydeligere prioriteringer og langsiktig planlegging",
      "NIVI-analyse viser mønsteret på tvers av kommuner"
    ],
    externalUrl: "https://www.nrk.no/buskerud/xl/kommunene-ma-velge-mellom-skole-og-eldre_-_-har-gatt-i-luksusfella-1.17085405",
    featured: false,
    tags: ["nrk", "kommuneøkonomi", "skole", "eldreomsorg"]
  },
  {
    id: 3,
    title: "Over halvparten av kommunane styrer mot underskot",
    slug: "over-halvparten-styrer-mot-underskot",
    type: "article",
    source: "NRK Vestland",
    date: "2025-09-20",
    excerpt: "NRK Vestland omtaler NIVI-analyse som viser at over halvparten av norske kommuner styrer mot underskudd. Kommunene sliter med å tilpasse seg nye økonomiske realiteter.",
    keyPoints: [
      "Flertallet av norske kommuner har svekket økonomi",
      "Inntektsveksten holder ikke tritt med utgiftsveksten",
      "Strukturelle grep er nødvendig for bærekraftig drift",
      "Analysen peker på regionale forskjeller"
    ],
    externalUrl: "https://www.nrk.no/vestland/over-halvparten-av-norske-kommunar-styrer-mot-underskot-1.17048778",
    featured: false,
    tags: ["nrk", "kommuneøkonomi", "analyse"]
  },
  {
    id: 4,
    title: "Bergen snur om skolenedleggelse: «Vi dundrer inn i en fjellvegg»",
    slug: "bergen-snur-om-skolenedleggelse",
    type: "article",
    source: "NRK Vestland",
    date: "2025-06-10",
    excerpt: "Byrådet i Bergen snur om omstridt skolenedleggelse. Kommuneeksperter advarer om at utsettelse av vanskelige prioriteringer bare forsterker problemene.",
    keyPoints: [
      "Bergen reverserer vedtak om skolenedleggelse",
      "Politisk motstand mot strukturelle kutt",
      "Advarsel om konsekvenser av å utsette vanskelige grep",
      "Kommuneøkonomisk press krever handling"
    ],
    externalUrl: "https://www.nrk.no/vestland/byradet-i-bergen-snur-om-skolenedleggelse_-_-vi-dundrer-inn-i-en-fjellvegg-1.17452099",
    featured: false,
    tags: ["nrk", "bergen", "skole", "kommuneøkonomi"]
  },
  {
    id: 5,
    title: "KS-konsulent til Andøy: «Dere er dårlig styrt»",
    slug: "ks-konsulent-til-andoy",
    type: "article",
    source: "NRK Nordland",
    date: "2025-05-18",
    excerpt: "Tydelig beskjed til Andøy kommune: Problemet er ikke lave inntekter, men dårlig styring. NIVI Analyse leverte klar rapport om kommunens prioriteringer og ressursbruk.",
    keyPoints: [
      "Andøy kommune får kritikk for ressursbruk",
      "Inntektsnivået er ikke lavt – styringen er utfordringen",
      "Behov for tydeligere politiske prioriteringer",
      "Rapporten peker på konkrete forbedringsområder"
    ],
    externalUrl: "https://www.nrk.no/nordland/ks-konsulent-til-andoy_-_-dere-har-ikke-lite-inntekter_-dere-er-darlig-styrt-1.17571593",
    featured: false,
    tags: ["nrk", "nordland", "kommuneøkonomi", "styring"]
  },
  {
    id: 6,
    title: "Slik vil kommuneekspert at Nord-Norge skal se ut",
    slug: "kommuneekspert-nord-norge",
    type: "article",
    source: "NRK Nordland",
    date: "2025-04-22",
    excerpt: "Geir Vinsand presenterer sin visjon for kommunestrukturen i Nord-Norge. Forslaget innebærer færre og sterkere kommuner som kan levere bedre tjenester.",
    keyPoints: [
      "Forslag om ny kommunestruktur i Nord-Norge",
      "Fokus på robuste fagmiljøer og tjenestekvalitet",
      "Sammenslåing som verktøy for bedre tjenester",
      "Betydelig offentlig debatt om forslagene"
    ],
    externalUrl: "https://www.nrk.no/nordland/slik-vil-kommuneekspert-at-nord-norge-skal-se-ut-1.17715638",
    featured: true,
    tags: ["nrk", "kommunestruktur", "nord-norge"]
  },
  {
    id: 7,
    title: "Vil dele Finnmark i syv: «Ikke sentralisering»",
    slug: "dele-finnmark-i-syv",
    type: "article",
    source: "NRK Troms og Finnmark",
    date: "2025-03-15",
    excerpt: "Kommuneforsker Geir Vinsand foreslår å dele Finnmark i syv kommuner. Han understreker at målet ikke er sentralisering, men sterkere lokalsamfunn.",
    keyPoints: [
      "Forslag om syv kommuner i Finnmark",
      "Mål: styrke tjenestene uten sentralisering",
      "Dagens struktur er for fragmentert for gode tjenester",
      "Stor debatt om fremtidens Finnmark"
    ],
    externalUrl: "https://www.nrk.no/tromsogfinnmark/kommuneforsker-vil-dele-finnmark-i-syv_-_-skal-ikke-ha-sentralisering-1.17725124",
    featured: false,
    tags: ["nrk", "kommunestruktur", "finnmark"]
  },
  {
    id: 8,
    title: "Agder på topp i interkommunalt samarbeid",
    slug: "agder-pa-topp-interkommunalt-samarbeid",
    type: "article",
    source: "Statsforvalteren i Agder",
    date: "2025-02-10",
    excerpt: "Statsforvalteren i Agder løfter frem NIVI-kartlegging som viser at Agder-kommunene er blant landets fremste på interkommunalt samarbeid.",
    keyPoints: [
      "Agder-kommunene samarbeider mest i landet",
      "NIVI-kartlegging dokumenterer omfanget",
      "Samarbeid kompenserer for små fagmiljøer",
      "Modell for andre regioner"
    ],
    externalUrl: "https://www.statsforvalteren.no/agder/kommunal-styring/agder-pa-topp-i-interkommunalt-samarbeid/",
    featured: false,
    tags: ["statsforvalteren", "interkommunalt samarbeid", "agder"]
  },
  {
    id: 9,
    title: "Kommunestruktur – foredrag og debatt (YouTube)",
    slug: "kommunestruktur-foredrag-youtube",
    type: "video",
    source: "YouTube",
    date: "2025-08-12",
    excerpt: "Foredrag og paneldebatt om kommunestruktur, sammenslåing og interkommunalt samarbeid. Geir Vinsand deler perspektiver fra NIVI Analyses arbeid.",
    keyPoints: [
      "Foredrag om kommunestruktur i Norge",
      "Debatt om sammenslåing vs. samarbeid",
      "Erfaringer fra NIVI Analyses kartlegginger",
      "Spørsmål fra salen og paneldiskusjon"
    ],
    externalUrl: undefined,
    embedUrl: "https://www.youtube.com/watch?v=8pwnE_gOr-A",
    featured: false,
    tags: ["youtube", "foredrag", "kommunestruktur"]
  },
  {
    id: 10,
    title: "Kommuneøkonomi og omstilling – presentasjon",
    slug: "kommuneokonomi-omstilling-presentasjon",
    type: "video",
    source: "YouTube",
    date: "2025-07-05",
    excerpt: "Presentasjon om kommuneøkonomi, omstillingsbehov og fremtidige utfordringer for norske kommuner.",
    keyPoints: [
      "Oversikt over kommuneøkonomisk utvikling",
      "Omstillingsbehov i norsk kommunesektor",
      "Konkrete anbefalinger til kommunene",
      "Diskusjon om veien videre"
    ],
    externalUrl: undefined,
    embedUrl: "https://www.youtube.com/watch?v=dIuaRU-5zxs",
    featured: false,
    tags: ["youtube", "presentasjon", "kommuneøkonomi"]
  },
  {
    id: 11,
    title: "Kommunene – fortsettelsen",
    slug: "podkast-uten-portefolje-kommunene",
    type: "podcast",
    source: "Podkast uten portefølje",
    excerpt: "Geir Vinsand diskuterer fremtiden for norske kommuner, samarbeidsmodeller og strukturelle utfordringer i denne episoden av Podkast uten portefølje.",
    keyPoints: [
      "Kommunestruktur og samarbeid",
      "Fremtidsperspektiver for norske kommuner"
    ],
    externalUrl: "https://open.spotify.com/episode/3hvmwuNGwHMPEWKzVDiQC2?si=53273841b08e40e4",
    featured: false,
    tags: ["podkast", "kommuner", "struktur"]
  },
  {
    id: 12,
    title: "Norske kommuner i stabilt sideleie",
    slug: "podkast-uten-portefolje-stabilt-sideleie",
    type: "podcast",
    source: "Podkast uten portefølje",
    excerpt: "En samtale om kommuneøkonomi, omstillingsbehov og hvorfor mange norske kommuner befinner seg i en tilstand av stabilt sideleie.",
    keyPoints: [
      "Kommuneøkonomi og omstilling",
      "Utfordringer med status quo"
    ],
    externalUrl: "https://open.spotify.com/episode/35fe6t8Mrs395e0FWrTwW6?si=d2402c97bf794006&nd=1&dlsi=56d85e2ecba34a34",
    featured: false,
    tags: ["podkast", "kommuneøkonomi", "omstilling"]
  },
  {
    id: 13,
    title: "De to største brølapene slår seg sammen",
    slug: "kommunal-rapport-brolaper",
    type: "article",
    source: "Kommunal Rapport",
    date: "2026-02-04T05:00:00",
    excerpt: "NIVI Analyse ved Geir Vinsand og Håvard Moe kommenterer sammenslåingsprosessen mellom to store kommuner og peker på viktige lærdommer for fremtidige strukturendringer.",
    keyPoints: [
      "Sammenslåingsprosessen mellom to store kommuner",
      "Viktige lærdommer for fremtidige strukturendringer"
    ],
    pdfUrl: "/docs/de-to-storste-brolapene.pdf",
    featured: true,
    tags: ["kommunal rapport", "kommunestruktur", "sammenslåing"]
  },
  {
    id: 14,
    title: "Dagsnytt 18 – Kommuneøkonomi og statsbudsjettet",
    slug: "dagsnytt-18-kommuneokonomi",
    type: "debate",
    source: "NRK",
    date: "2025-01-15",
    excerpt: "Håvard Moe deltok i Dagsnytt 18 om kommuneøkonomi og statsbudsjettet.",
    keyPoints: [
      "Kommuneøkonomi og statsbudsjettet",
      "Deltaker: Håvard Moe"
    ],
    featured: false,
    tags: ["nrk", "debatt", "kommuneøkonomi"]
  },
  {
    id: 15,
    title: "Ikke statens feil at kommunene ikke vil",
    slug: "kommunal-rapport-ikke-statens-feil",
    type: "article",
    source: "Kommunal Rapport",
    date: "2025-11-12T05:00:00",
    excerpt: "Så lenge Stortinget ikke følger opp de grunnleggende prinsippene for forholdet stat–kommune, blir det ikke orden på økonomien.",
    keyPoints: [
      "Kommuneøkonomi og statlig styring",
      "Prinsippene for forholdet stat–kommune"
    ],
    externalUrl: "https://www.kommunal-rapport.no/meninger/ikke-statens-feil-at-kommunene-ikke-vil/836768",
    pdfUrl: "/docs/Ikke_statens_feil_at_kommunene_ikke_vil.pdf",
    featured: true,
    tags: ["kommunal rapport", "kommuneøkonomi", "debatt"]
  }
];

export const getFeaturedMedia = (): MediaEntry[] => {
  return mediaEntries
    .filter(entry => entry.featured)
    .sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 3);
};

export const getMediaBySlug = (slug: string): MediaEntry | undefined => {
  return mediaEntries.find(entry => entry.slug === slug);
};

export const getMediaSources = (): string[] => {
  const sources = new Set(mediaEntries.map(entry => entry.source));
  return Array.from(sources);
};

export const getMediaYears = (): string[] => {
  const years = new Set(mediaEntries.filter(e => e.date).map(entry => entry.date!.split("-")[0]));
  return Array.from(years).sort((a, b) => parseInt(b) - parseInt(a));
};
