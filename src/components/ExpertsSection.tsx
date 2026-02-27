import { useState } from "react";
import geirImage from "@/assets/geir-vinsand.jpg";
import havardImage from "@/assets/havard-moe.jpg";
import SectionHeader from "@/components/SectionHeader";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

interface ExpertCV {
  intro: string;
  keyExperience: string[];
  education: string;
}

interface Expert {
  name: string;
  title: string;
  secondaryRole: string;
  image: string;
  expertise: string[];
  description: string;
  cv: ExpertCV;
  cvPdf: string;
  phone: string;
  email: string;
}

const experts: Expert[] = [
  {
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
      "Over 30 års erfaring med analyse og rådgivning i kommunesektoren. Blant Norges mest erfarne eksperter på interkommunalt samarbeid og kommunestruktur, med oppdrag for departementer, statsforvaltere og et stort antall kommuner og regioner.",
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
      "Seniorrådgiver innen kommunal økonomi, organisasjon og styring. Har bistått over 300 kommuner med økonomiske analyser, omstillingsprosesser og strategisk utvikling.",
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
];

const ExpertsSection = () => {
  return (
    <section id="eksperter" style={{ backgroundColor: 'hsl(150 10% 97%)', paddingTop: '160px', paddingBottom: '136px' }}>
      <div className="container-narrow">
        <div style={{ marginBottom: '64px' }}>
          <SectionHeader
            title="Møt ekspertene"
            subtitle="Over 60 års samlet erfaring fra kommunesektoren."
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-y-8 gap-x-5 lg:gap-x-16 max-w-4xl mx-auto">
          {experts.map((expert) => (
            <div
              key={expert.name}
              className="card-premium overflow-hidden flex flex-col transition-all duration-200"
            >
              <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden">
                <img
                  src={expert.image}
                  alt={`${expert.name}, ${expert.title}`}
                  className="w-full h-full object-cover object-[center_15%]"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-semibold mb-0.5" style={{ lineHeight: 1.3 }}>
                  {expert.name}
                </h3>
                <p className="text-primary font-semibold text-sm mb-0.5">
                  {expert.title}
                </p>
                <p className="text-primary/60 text-xs mb-4">
                  {expert.secondaryRole}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {expert.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="chip chip-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <p className="text-sm mb-4 flex-1 line-clamp-5" style={{ color: 'hsl(168, 20%, 28%)', lineHeight: 1.65 }}>
                  {expert.description}
                </p>

                <div className="text-sm mb-4 space-y-1" style={{ color: 'hsl(168, 20%, 28%)', lineHeight: 1.65 }}>
                  <p>
                    Mobil:{" "}
                    <a href={`tel:${expert.phone.replace(/\s/g, "")}`} className="hover:text-accent transition-colors">
                      {expert.phone}
                    </a>
                  </p>
                  <p>
                    E-post:{" "}
                    <a href={`mailto:${expert.email}`} className="hover:text-accent transition-colors">
                      {expert.email}
                    </a>
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="default" size="sm" className="gap-2 w-full sm:w-auto">
                        <FileText className="w-3.5 h-3.5" />
                        Les CV
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-bold">
                          {expert.name}
                        </DialogTitle>
                        <p className="text-sm text-muted-foreground">{expert.title}</p>
                      </DialogHeader>

                      <div className="space-y-5 mt-4">
                        <p className="text-sm text-foreground leading-relaxed">
                          {expert.cv.intro}
                        </p>

                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2.5">
                            Nøkkelerfaring
                          </h4>
                          <ul className="space-y-2">
                            {expert.cv.keyExperience.map((point, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-3 border-t border-border">
                          <h4 className="text-sm font-semibold text-foreground mb-1">
                            Utdanning
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {expert.cv.education}
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <a href={expert.cvPdf} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2 w-full sm:w-auto">
                      <Download className="w-3.5 h-3.5" />
                      Last ned full CV (PDF)
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
