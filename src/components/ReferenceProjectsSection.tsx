import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

interface ReferenceProject {
  kommune: string;
  periode: string;
  type: "Omstillingsstøtte" | "Utviklingsstøtte";
  kort: string;
  leveranser: string[];
  resultat?: string;
}

const projects: ReferenceProject[] = [
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

const ReferenceProjectsSection = () => {
  return (
    <section id="referanseoppdrag" className="py-16 md:py-24 bg-background">
      <div className="container-narrow">
        <div className="mb-10 md:mb-14">
          <SectionHeader
            title="Utvalgte referanseoppdrag"
            subtitle="Dokumentert erfaring fra omstilling, kommuneøkonomi og styring i små og store kommuner."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-y-10 md:gap-y-12 gap-x-5 lg:gap-x-8">
          {projects.map((project, index) => (
            <div
              key={project.kommune}
              className={`card-premium p-5 md:p-8 flex flex-col shadow-sm rounded-md md:rounded-lg ${index >= 2 ? 'hidden md:flex' : ''}`}
            >
              {/* Header */}
              <div className="mb-3">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs text-muted-foreground font-medium">
                    {project.periode}
                  </span>
                  <Badge
                    variant={project.type === "Omstillingsstøtte" ? "default" : "secondary"}
                    className="text-[11px] px-2 py-0.5"
                  >
                    {project.type}
                  </Badge>
                </div>
                <h3 className="text-lg font-bold leading-tight">
                  {project.kommune}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.kort}
              </p>

              {/* Leveranser */}
              <div className="flex-1">
                <p className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-2">
                  Leveranser
                </p>
                <ul className="space-y-1 md:space-y-2 mb-4">
                  {project.leveranser.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Result */}
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

              {/* Reference note */}
              <p className="text-xs text-muted-foreground italic border-t border-border/50 pt-3 mt-auto">
                Referanse oppgis ved forespørsel
              </p>
            </div>
          ))}
        </div>

        {/* Mobile "Se alle" button */}
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

        {/* CTA */}
        <div className="text-center mt-10 md:mt-14">
          <Button
            variant="cta"
            size="lg"
            onClick={() =>
              document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Be om referanseliste
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReferenceProjectsSection;
