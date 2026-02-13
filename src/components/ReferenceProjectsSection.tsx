import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

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
    kort: "Kraftinntekter, men vedvarende utfordringer med bærekraftig kommuneøkonomi og ressursbruk.",
    leveranser: [
      "Forankring politisk/administrativt + tillitsvalgte",
      "Kommunekompassevaluering (forvaltningspraksis)",
      "Analyse av kommuneøkonomi og ressursbruk",
      "Rammesak til kommunestyret (sept 2026)",
    ],
  },
  {
    kommune: "Karlsøy kommune",
    periode: "2025",
    type: "Omstillingsstøtte",
    kort: "Høye inntekter fra havbruksfondet inn i drift + investeringspress. Behov for å redusere løpende ressursbruk.",
    leveranser: [
      "Forankringsprosess (politikk/adm/tillitsvalgte)",
      "Kommuneøkonomianalyse",
      "Arbeidsverksteder",
      "16 arbeidsgrupperapporter som grunnlag for rammesak",
    ],
  },
  {
    kommune: "Lindesnes kommune",
    periode: "2024–2025",
    type: "Omstillingsstøtte",
    kort: "«Sammen i utvikling» med identifisert omstillingspotensial på 100 MNOK.",
    leveranser: [
      "Prosjektstyring og ekstern prosjektledelse",
      "Økonomiske analyser",
      "Ledersamlinger og politiske verksteder",
      "Styringsgrupper (politisk/administrativ)",
    ],
  },
  {
    kommune: "Frøya kommune",
    periode: "2022–nå",
    type: "Omstillingsstøtte",
    kort: "Høye, sårbare inntekter faset inn i drift. Mål: redusere sårbarhet og styrke styring.",
    leveranser: [
      "Analyser og kommunekompassevalueringer",
      "Ledersamlinger og politiske verksteder",
      "Tiltaks- og gevinstrealiseringsplaner",
    ],
  },
];

const strukturProjects: ReferenceProject[] = [
  {
    kommune: "Ny kommune i Lofoten",
    periode: "2025",
    type: "Strukturreform",
    kort: "Ekstern faglig utreder for kommunesammenslutning mellom Vestvågøy og Moskenes.",
    leveranser: [
      "Utredning av kommunesammenslutning (Vestvågøy–Moskenes)",
      "Innbyggerundersøkelse og kommunikasjonsplan",
      "Intensjonsavtale og søknad om sammenslutning",
      "Dialog med staten om medfinansiering",
      "Styrings- og gjennomføringsdokumenter (inkl. Fellesnemnd)",
    ],
  },
  {
    kommune: "Interkommunalt samarbeid i Østfold",
    periode: "2025",
    type: "Interkommunalt samarbeid",
    kort: "Kartlegging og analyse på oppdrag for Statsforvalteren.",
    leveranser: [
      "Kommunevis kartlegging",
      "Analyse av samarbeidets omfang og organisering",
      "Intervjuer med kommunedirektører",
      "Anbefalinger for videreutvikling",
    ],
  },
  {
    kommune: "Interkommunalt samarbeid i Agder (25 kommuner)",
    periode: "2024",
    type: "Interkommunalt samarbeid",
    kort: "Kartlegging og analyse av samarbeid mellom kommuner, fylkeskommune og stat.",
    leveranser: [
      "Kartlegging av formalisert samarbeid",
      "Analyse av styring og organisering",
      "Prinsipper for fremtidig samarbeid",
      "Presentasjon på Statsforvalterens konferanse",
    ],
  },
];

const ProjectCard = ({ project, hidden = false }: { project: ReferenceProject; hidden?: boolean }) => (
  <div
    className={`card-premium p-5 md:p-8 flex flex-col shadow-sm rounded-md md:rounded-lg ${hidden ? 'hidden md:flex' : ''}`}
  >
    <div className="mb-3">
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="text-xs text-muted-foreground font-medium">
          {project.periode}
        </span>
        <Badge
          variant={project.type === "Omstillingsstøtte" ? "default" : "secondary"}
          className="text-[11px] px-2 py-0.5"
        >
          {project.type === "Omstillingsstøtte" ? "Omstilling" : project.type === "Interkommunalt samarbeid" ? "Samarbeid" : project.type}
        </Badge>
      </div>
      <h3 className="text-lg font-bold leading-tight">
        {project.kommune}
      </h3>
    </div>
    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
      {project.kort}
    </p>
    <div className="flex-1">
      <p className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-2">
        Leveranser
      </p>
      <ul className="space-y-1 md:space-y-2 mb-4">
        {project.leveranser.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-snug">
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
    <section id="referanseoppdrag" className="py-16 md:py-24 bg-background">
      <div className="container-narrow">
        <div className="mb-10 md:mb-14">
          <SectionHeader
            title="Utvalgte referanseoppdrag"
            subtitle="Dokumentert erfaring fra komplekse omstillings-, struktur- og samarbeidsprosesser i norske kommuner."
          />
        </div>

        {/* Category 1 */}
        <div className="mb-16 md:mb-20">
          <p className="font-semibold text-primary text-center mt-8 mb-4" style={{ fontSize: '1.0625rem', letterSpacing: '0.02em' }}>
            Omstillings- og økonomiprosesser
          </p>
          <div className="mx-auto max-w-xs h-px bg-primary/10 mb-6 md:mb-8" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-y-10 md:gap-y-12 gap-x-5 lg:gap-x-8">
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
          <p className="font-semibold text-primary text-center mt-8 mb-4" style={{ fontSize: '1.0625rem', letterSpacing: '0.02em' }}>
            Strukturreform og interkommunalt samarbeid
          </p>
          <div className="mx-auto max-w-xs h-px bg-primary/10 mb-6 md:mb-8" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-y-10 md:gap-y-12 gap-x-5 lg:gap-x-8">
            {strukturProjects.map((project) => (
              <ProjectCard key={project.kommune} project={project} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <Button
            variant="cta"
            size="lg"
            onClick={() =>
              document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Se full referanseliste
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReferenceProjectsSection;
