import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { FileText } from "lucide-react";

const placeholderReports = [
  { title: "NIVI-rapport: Kommunestruktur og interkommunalt samarbeid", year: "2023" },
  { title: "NIVI-rapport: Økonomianalyse for mellomstore kommuner", year: "2022" },
  { title: "NIVI-rapport: Beredskap i norske kommuner", year: "2021" },
  { title: "NIVI-rapport: Organisasjonsgjennomgang", year: "2020" },
  { title: "NIVI-rapport: Kommuneøkonomi og omstilling", year: "2019" },
  { title: "NIVI-rapport: Styringsmodeller i kommunesektoren", year: "2018" },
  { title: "NIVI-rapport: Interkommunalt samarbeid – status og utvikling", year: "2017" },
  { title: "NIVI-rapport: Fylkeskommunenes rolle i regional utvikling", year: "2016" },
];

const Publikasjoner = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        {/* Intro */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <SectionHeader
              title="Publikasjoner"
              subtitle="NIVI Analyse har gjennom flere tiår publisert rapporter og utredninger for kommuner, fylkeskommuner og departementer. Her samler vi et utvalg av våre historiske publikasjoner."
            />
          </div>
        </section>

        {/* Historiske rapporter */}
        <section className="section-padding bg-alt">
          <div className="container-narrow">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
              Historiske NIVI-rapporter (PDF)
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-4xl">
              {placeholderReports.map((report, i) => (
                <div
                  key={i}
                  className="card-premium p-5 flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-secondary/40 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileText className="w-5 h-5 text-primary/60" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-primary leading-snug mb-1">
                      {report.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">{report.year}</p>
                    <span className="text-xs text-muted-foreground italic">
                      PDF kommer snart
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NIVIs historie */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
              NIVI rapporter
            </h2>
            <div className="card-premium p-6 md:p-8 max-w-3xl">
              <p className="text-muted-foreground leading-relaxed">
                Kommer: kort oppsummerende artikkel om NIVIs historie.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Publikasjoner;
