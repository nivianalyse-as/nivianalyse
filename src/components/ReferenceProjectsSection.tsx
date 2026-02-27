import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { detailedReferences, omstillingsProjects, strukturProjects, type ReferenceProject } from "@/data/references";

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
