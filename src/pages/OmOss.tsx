import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ExpertsSection from "@/components/ExpertsSection";
import { FileText, Download } from "lucide-react";

const OmOss = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        {/* NIVIs historie */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <SectionHeader
              title="Om NIVI Analyse"
              subtitle="Uavhengig analyse og rådgivning for kommunesektoren siden 2007."
            />

            <div className="max-w-3xl mx-auto mt-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
                NIVIs historie
              </h2>
              <div className="card-premium p-6 md:p-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  NIVI Analyse ble etablert 1. januar 2007 av Jørund K. Nilsen og Geir Vinsand.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Navnet NIVI er satt sammen av de to første bokstavene i etternavnene til grunnleggerne.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Fra 2008 besto selskapet av tre medarbeidere.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Etter 2015 ble virksomheten videreført av Geir Vinsand.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nye NIVI Analyse AS ble stiftet 21. januar 2026 av Håvard Moe og Geir Vinsand.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Selskapet var operativt med ny hjemmeside fra 1. mars 2026.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CV-er */}
        <section className="section-padding bg-alt">
          <div className="container-narrow">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                CV
              </h2>
              <p className="text-muted-foreground mb-6">
                Kortversjoner av CV-ene finnes her:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="/docs/CV_kort_Havard_Moe.pdf"
                  download
                  className="card-premium p-5 flex items-center gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-secondary/40 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-primary/60" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-primary leading-snug">
                      Håvard Moe – CV
                    </h3>
                    <p className="text-xs text-muted-foreground italic mt-1">PDF kommer snart</p>
                  </div>
                </a>
                <a
                  href="/docs/CV_kort_Geir_Vinsand.docx"
                  download
                  className="card-premium p-5 flex items-center gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-secondary/40 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Download className="w-5 h-5 text-primary/60" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-primary leading-snug">
                      Geir Vinsand – CV
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">Last ned (DOCX)</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Eksperter */}
        <ExpertsSection />
      </main>
      <Footer />
    </div>
  );
};

export default OmOss;
