import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

interface DetailedReference {
  kommune: string;
  periode: string;
  beskrivelse: string;
  referanse: {
    navn: string;
    tittel: string;
    epost: string;
  };
}

const detailedReferences: DetailedReference[] = [
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
    kommune: "Lindesnes kommune – Omstillingsstøtte",
    periode: "2024–2025",
    beskrivelse: "Prosjektet Sammen i Utvikling i Lindesnes kommune har jobbet med å identifisere et omstillingspotensial på 100 millioner kroner. Håvard Moe har vært ekstern prosjektleder og har hatt ansvar for prosjektstyring, økonomiske analyser, ledersamlinger, politiske verksteder, politiske og administrative styringsgrupper, med mer.",
    referanse: { navn: "Sonja Svardal", tittel: "økonomisjef", epost: "Sonja.Svardal@lindesnes.kommune.no" },
  },
  {
    kommune: "Frøya kommune – Omstillingsstøtte",
    periode: "2022–dd",
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
    kommune: "Karasjok kommune – Omstillingsstøtte",
    periode: "2018–2022",
    beskrivelse: "Karasjok kommune har enormt store utfordringer både når det gjelder økonomi, styring og ledelse, tillit og utviklingskraft. Prosjektet har bestått i å bistå kommunen med å bygge opp sannsynligvis det mest omfattende omstillingsprosjektene som noen gang er gjennomført i en norsk kommune. Prosjektet har snudd økonomien i Karasjok fra et resultat på minus 12 millioner i 2018 til et budsjettert resultat i 2022 på pluss 18 millioner. Prosjektet var direktefinansiert fra KMD (via Statsforvalteren i Troms og Finnmark). Håvard Moe var prosjektkoordinator og ansvarlig person ovenfor kommune og Fylkesmann i Troms og Finnmark.",
    referanse: { navn: "Elisabeth Larsen", tittel: "Ass. kommunedirektør", epost: "Elisabeth.Larsen@karasjok.kommune.no" },
  },
  {
    kommune: "Tysvær kommune – Utviklingsstøtte",
    periode: "2020–2022",
    beskrivelse: "Tysvær kommune har 10 000 innbyggere og er en kommune med svært god kommuneøkonomi på grunn av store eiendomsskatteinntekter fra petroleumsanleggene på Kårstø. Disse inntektene brukes i dag i stor gard inn i drift. Tysvær ser at dette er en svært risikabel strategi i møte med fremtidens utfordringer og har derfor initiert prosjektet Tysvær Kommune 2030. Håvard Moe ha bistått med analyser, folkevalgtopplæring (i flere omganger), ledersamlinger, videofilmer til innbyggerinformasjon, mm. Håvard Moe er prosjektleder.",
    referanse: { navn: "Sigurd Eikje", tittel: "Rådmann", epost: "sigurd.eikje@tysver.kommune.no" },
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

interface ReferenceProject {
  kommune: string;
  periode: string;
  type: "Omstillingsstøtte" | "Utviklingsstøtte" | "Strukturreform" | "Interkommunalt samarbeid";
  kort: string;
  leveranser: string[];
  resultat?: string;
}

const omstillingsProjects: ReferenceProject[] = [
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

const strukturProjects: ReferenceProject[] = [
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

const DetailedReferenceList = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-3xl mx-auto mt-12 md:mt-16">
      <button
        onClick={() => setOpen(!open)}
        className="mx-auto flex items-center gap-2 text-sm font-semibold tracking-wide uppercase transition-colors"
        style={{ color: 'hsl(17, 90%, 45%)', letterSpacing: '0.05em' }}
      >
        Se utvalgte referanseoppdrag
        <ChevronDown
          className="w-4 h-4 transition-transform duration-200"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      {open && (
        <div className="mt-10" style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {detailedReferences.map((ref) => (
            <div key={ref.kommune}>
              <p className="font-semibold text-muted-foreground" style={{ fontSize: '0.8125rem', marginBottom: '4px' }}>
                {ref.periode}
              </p>
              <h4 className="font-semibold text-primary" style={{ fontSize: '1rem', lineHeight: 1.35, marginBottom: '14px' }}>
                {ref.kommune}
              </h4>
              <p className="text-sm" style={{ color: 'hsl(168, 20%, 28%)', lineHeight: 1.7, marginBottom: '16px' }}>
                {ref.beskrivelse}
              </p>
              <div style={{ color: 'hsl(168, 20%, 28%)' }}>
                <p className="text-xs font-medium text-muted-foreground" style={{ marginBottom: '2px' }}>
                  Referanse:
                </p>
                <p className="text-sm">
                  {ref.referanse.navn}, {ref.referanse.tittel}
                </p>
                <a
                  href={`mailto:${ref.referanse.epost}`}
                  className="text-sm hover:text-accent transition-colors"
                >
                  {ref.referanse.epost}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ project, hidden = false }: { project: ReferenceProject; hidden?: boolean }) => (
  <div
    className={`card-premium p-6 md:p-9 flex flex-col rounded-md md:rounded-lg ${hidden ? 'hidden md:flex' : ''}`}
    style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}
  >
    <div className="mb-3">
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="text-xs text-muted-foreground font-medium">
          {project.periode}
        </span>
        <Badge
          variant={project.type === "Omstillingsstøtte" ? "default" : "secondary"}
          className="text-[10px] px-2 py-0.5 bg-primary text-primary-foreground"
        >
          {project.type === "Omstillingsstøtte" ? "Omstilling" : project.type === "Interkommunalt samarbeid" ? "Samarbeid" : project.type}
        </Badge>
      </div>
      <h3 className="text-lg font-semibold" style={{ lineHeight: 1.3 }}>
        {project.kommune}
      </h3>
    </div>
    <p className="text-sm mb-4" style={{ color: 'hsl(168, 20%, 28%)', lineHeight: 1.65 }}>
      {project.kort}
    </p>
    <div className="flex-1">
      <p className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-2">
        Leveranser
      </p>
      <ul className="space-y-1 md:space-y-2 mb-4">
        {project.leveranser.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'hsl(168, 20%, 28%)', lineHeight: 1.65 }}>
            <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
    {project.resultat && (
      <div className="bg-secondary/20 rounded-lg px-3 py-2 mb-3">
        <p className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-0.5">
          Resultat
        </p>
        <p className="text-sm font-medium text-primary">
          {project.resultat}
        </p>
      </div>
    )}
    <p className="text-xs text-muted-foreground italic border-t border-border/50 pt-3 mt-auto">
      Referanse oppgis ved forespørsel
    </p>
  </div>
);

const ReferenceProjectsSection = () => {
  return (
    <section id="referanseoppdrag" style={{ backgroundColor: '#E6EEEB', paddingTop: '132px', paddingBottom: '132px' }}>
      <div className="container-narrow">
        <div style={{ marginBottom: '64px' }}>
          <SectionHeader
            title="Utvalgte referanseoppdrag"
            subtitle="Dokumentert erfaring fra komplekse omstillings-, struktur- og samarbeidsprosesser i norske kommuner."
          />
        </div>

        {/* Category 1 */}
        <div className="mb-16 md:mb-20">
           <p className="font-semibold text-primary text-center mt-8 mb-5" style={{ fontSize: '1.0625rem', letterSpacing: '0.02em' }}>
            Omstillings- og økonomiprosesser
          </p>
          <div className="mx-auto max-w-xs h-px bg-primary/10 mb-7 md:mb-9" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-y-14 md:gap-y-16 gap-x-6 lg:gap-x-10">
            {omstillingsProjects.map((project, index) => (
              <ProjectCard key={project.kommune} project={project} hidden={index >= 2} />
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl"
              onClick={() =>
                document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Se alle referanser
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* Category 2 */}
        <div>
          <p className="font-semibold text-primary text-center mt-8 mb-5" style={{ fontSize: '1.0625rem', letterSpacing: '0.02em' }}>
            Struktur og interkommunalt samarbeid
          </p>
          <div className="mx-auto max-w-xs h-px bg-primary/10 mb-7 md:mb-9" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-y-14 md:gap-y-16 gap-x-6 lg:gap-x-10">
            {strukturProjects.map((project) => (
              <ProjectCard key={project.kommune} project={project} />
            ))}
          </div>
        </div>

        {/* Expand/collapse referanseliste */}
        <DetailedReferenceList />
      </div>
    </section>
  );
};

export default ReferenceProjectsSection;
