import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { FileText, Download, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Publication {
  title: string;
  year: number;
  nummer?: string;
  pdfUrl?: string;
}

const publications: Publication[] = [
  { title: "Skisse til kommunalreform basert på sterkere primærkommuner – regionkommunealternativet", year: 2013, nummer: "NIVI-notat 2013:2", pdfUrl: "/docs/NIVI_notat_2013_2_Skisse_kommunalreform.pdf" },
  { title: "Kommunestruktur og interkommunalt samarbeid", year: 2023 },
  { title: "Økonomianalyse for mellomstore kommuner", year: 2022 },
  { title: "Beredskap i norske kommuner", year: 2021 },
  { title: "Organisasjonsgjennomgang", year: 2020 },
  { title: "Kommuneøkonomi og omstilling", year: 2019 },
  { title: "Styringsmodeller i kommunesektoren", year: 2018 },
  { title: "Interkommunalt samarbeid – status og utvikling", year: 2017 },
  { title: "Fylkeskommunenes rolle i regional utvikling", year: 2016 },
  { title: "Kommunesamarbeid på Agder", year: 2015 },
  { title: "Interkommunalt samarbeid i Nordland", year: 2014 },
  { title: "Kommunestruktur i Hordaland", year: 2012 },
  { title: "Interkommunalt samarbeid – omfang og organisering", year: 2011 },
  { title: "Kommunal organisering og oppgaveløsning", year: 2010 },
  { title: "Regionråd i Norge", year: 2009 },
  { title: "Kommunestruktur og demokrati", year: 2008 },
];

const years = Array.from(new Set(publications.map(p => p.year))).sort((a, b) => b - a);

const Publikasjoner = () => {
  const [selectedYear, setSelectedYear] = useState<number | "alle">("alle");

  const filtered = useMemo(() => {
    if (selectedYear === "alle") return publications;
    return publications.filter(p => p.year === selectedYear);
  }, [selectedYear]);

  const featured = publications.find(p => p.nummer === "NIVI-notat 2013:2");

  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        {/* Intro */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <SectionHeader
              title="Publikasjoner"
              subtitle="NIVI Analyse har gjennom flere tiår publisert rapporter og utredninger for kommuner, fylkeskommuner og departementer. Her samler vi et utvalg av våre publikasjoner fra 2008 til 2025."
            />
          </div>
        </section>

        {/* Fremhevet publikasjon */}
        {featured && (
          <section className="section-padding bg-alt">
            <div className="container-narrow">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
                Fremhevet publikasjon
              </h2>
              <div className="card-premium p-6 md:p-8 max-w-3xl">
                <p className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-2">
                  {featured.nummer}
                </p>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-3 leading-snug">
                  {featured.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  Notatet presenterer en skisse til kommunalreform basert på etablering av sterkere primærkommuner
                  og drøfter regionkommunealternativet som modell for fremtidens kommunestruktur i Norge.
                  Analysen tar utgangspunkt i behovet for mer robuste kommuner med bredere oppgaveportefølje.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  {featured.pdfUrl && (
                    <a href={featured.pdfUrl} download>
                      <Button variant="cta" size="sm" className="gap-2">
                        <Download className="w-4 h-4" />
                        Last ned PDF
                      </Button>
                    </a>
                  )}
                  <Link
                    to="/#fagomrader"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors"
                  >
                    Se relaterte fagområder
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Rapportarkiv */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
              Rapportarkiv 2008–2025
            </h2>

            {/* Year filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setSelectedYear("alle")}
                className={`chip transition-all ${
                  selectedYear === "alle"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/30 text-primary hover:bg-secondary/50"
                }`}
              >
                Alle
              </button>
              {years.map((y) => (
                <button
                  key={y}
                  onClick={() => setSelectedYear(y)}
                  className={`chip transition-all ${
                    selectedYear === y
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/30 text-primary hover:bg-secondary/50"
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4 max-w-4xl">
              {filtered.map((pub, i) => (
                <div
                  key={i}
                  className="card-premium p-5 flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-secondary/40 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileText className="w-5 h-5 text-primary/60" />
                  </div>
                  <div className="flex-1 min-w-0">
                    {pub.nummer && (
                      <p className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-0.5">
                        {pub.nummer}
                      </p>
                    )}
                    <h3 className="text-sm font-semibold text-primary leading-snug mb-1">
                      {pub.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">{pub.year}</p>
                    {pub.pdfUrl ? (
                      <a
                        href={pub.pdfUrl}
                        download
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent/80 transition-colors"
                      >
                        <Download className="w-3 h-3" />
                        Last ned PDF
                      </a>
                    ) : (
                      <span className="text-xs text-muted-foreground italic">
                        PDF kommer snart
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Publikasjoner;
