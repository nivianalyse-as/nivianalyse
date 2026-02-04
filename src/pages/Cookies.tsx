import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

const Cookies = () => {
  const openCookieSettings = () => {
    if ((window as any).openCookieSettings) {
      (window as any).openCookieSettings();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Cookie-policy – NIVI Analyse"
        description="Les om hvordan NIVI Analyse bruker informasjonskapsler (cookies) og hvordan du kan endre innstillingene."
      />
      <Header />
      <main id="main-content" className="flex-1 py-12 md:py-20">
        <div className="container-content">
          {/* Breadcrumb */}
          <nav className="mb-8 text-[14px]" aria-label="Brødsmuler">
            <ol className="flex items-center gap-2 text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Startside
                </Link>
              </li>
              <li aria-hidden="true">→</li>
              <li className="text-primary font-medium">Cookies</li>
            </ol>
          </nav>

          <article className="prose prose-lg max-w-none">
            <h1 className="text-[28px] md:text-[36px] font-bold text-primary mb-6 tracking-[-0.02em]">
              Cookie-policy
            </h1>
            
            <p className="text-muted-foreground text-[15px] mb-8">
              Sist oppdatert: {new Date().toLocaleDateString("nb-NO", { day: "numeric", month: "long", year: "numeric" })}
            </p>

            <div className="bg-secondary/20 rounded-2xl p-6 mb-8">
              <h3 className="text-[16px] font-semibold text-primary mb-2">
                Endre dine cookie-innstillinger
              </h3>
              <p className="text-[14px] text-muted-foreground mb-4">
                Du kan når som helst endre hvilke cookies du godtar.
              </p>
              <Button
                onClick={openCookieSettings}
                variant="outline"
                className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground rounded-xl"
              >
                <Settings className="w-4 h-4 mr-2" />
                Åpne cookie-innstillinger
              </Button>
            </div>

            <div className="space-y-8 text-[15px] leading-relaxed text-foreground/90">
              <section>
                <h2 className="text-[20px] font-semibold text-primary mb-3">
                  Hva er cookies?
                </h2>
                <p>
                  Cookies (informasjonskapsler) er små tekstfiler som lagres på din enhet når du besøker et nettsted. 
                  De brukes for å huske preferanser, forbedre brukeropplevelsen og samle anonymisert statistikk.
                </p>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold text-primary mb-3">
                  Kategorier av cookies
                </h2>
                
                <div className="space-y-4 mt-4">
                  <div className="bg-card border border-primary/10 rounded-xl p-5">
                    <h3 className="font-semibold text-primary mb-2">🔒 Nødvendige cookies</h3>
                    <p className="text-muted-foreground text-[14px] mb-2">
                      Disse er nødvendige for at nettstedet skal fungere og kan ikke slås av.
                    </p>
                    <ul className="text-[14px] text-muted-foreground list-disc pl-5 space-y-1">
                      <li><strong>nivi_consent_v1:</strong> Lagrer dine cookie-preferanser (1 år)</li>
                    </ul>
                  </div>

                  <div className="bg-card border border-primary/10 rounded-xl p-5">
                    <h3 className="font-semibold text-primary mb-2">📊 Statistikk-cookies</h3>
                    <p className="text-muted-foreground text-[14px] mb-2">
                      Hjelper oss å forstå hvordan besøkende bruker nettstedet. All data er anonymisert.
                    </p>
                    <ul className="text-[14px] text-muted-foreground list-disc pl-5 space-y-1">
                      <li>Google Analytics (hvis aktivert): Besøksstatistikk og brukeratferd</li>
                    </ul>
                  </div>

                  <div className="bg-card border border-primary/10 rounded-xl p-5">
                    <h3 className="font-semibold text-primary mb-2">📢 Markedsføring-cookies</h3>
                    <p className="text-muted-foreground text-[14px] mb-2">
                      Brukes for å vise relevante annonser og måle effekten av kampanjer.
                    </p>
                    <ul className="text-[14px] text-muted-foreground list-disc pl-5 space-y-1">
                      <li>Foreløpig ikke i bruk</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold text-primary mb-3">
                  Hvordan administrere cookies
                </h2>
                <p>Du har flere muligheter:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>
                    <strong>Via våre innstillinger:</strong> Klikk på "Cookie-innstillinger" i bunnen av siden 
                    eller bruk knappen øverst på denne siden.
                  </li>
                  <li>
                    <strong>Via nettleseren:</strong> De fleste nettlesere lar deg slette eller blokkere cookies. 
                    Se nettleserens hjelpesider for instruksjoner.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold text-primary mb-3">
                  Tredjeparter
                </h2>
                <p>
                  Vi bruker følgende tredjepartstjenester som kan sette cookies:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>Google Analytics (statistikk) - kun med ditt samtykke</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold text-primary mb-3">
                  Kontakt
                </h2>
                <p>
                  Har du spørsmål om vår bruk av cookies? Kontakt oss på{" "}
                  <a href="mailto:post@nivianalyse.no" className="text-accent underline">
                    post@nivianalyse.no
                  </a>.
                </p>
              </section>

              <section>
                <p className="text-muted-foreground">
                  Se også vår <Link to="/personvern" className="text-accent underline">personvernerklæring</Link> for 
                  mer informasjon om hvordan vi behandler personopplysninger.
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
