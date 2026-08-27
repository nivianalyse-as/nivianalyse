import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SectionHeader from "@/components/SectionHeader";
import ExpertsSection from "@/components/ExpertsSection";


const OmOss = () => {
  return (
    <div className="min-h-screen">
      <SEOHead canonicalOnly />
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

        {/* Eksperter */}
        <ExpertsSection subtitle="" />
      </main>
      <Footer />
    </div>
  );
};

export default OmOss;
