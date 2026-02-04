import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const Personvern = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Personvernerklæring – NIVI Analyse"
        description="Les om hvordan NIVI Analyse behandler personopplysninger og dine rettigheter."
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
              <li className="text-primary font-medium">Personvern</li>
            </ol>
          </nav>

          <article className="prose prose-lg max-w-none">
            <h1 className="text-[28px] md:text-[36px] font-bold text-primary mb-6 tracking-[-0.02em]">
              Personvernerklæring
            </h1>
            
            <p className="text-muted-foreground text-[15px] mb-8">
              Sist oppdatert: {new Date().toLocaleDateString("nb-NO", { day: "numeric", month: "long", year: "numeric" })}
            </p>

            <div className="space-y-8 text-[15px] leading-relaxed text-foreground/90">
              <section>
                <h2 className="text-[20px] font-semibold text-primary mb-3">
                  1. Behandlingsansvarlig
                </h2>
                <p>
                  NIVI Analyse AS er behandlingsansvarlig for behandling av personopplysninger som beskrevet i denne erklæringen.
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>Virksomhet: NIVI Analyse AS</li>
                  <li>Adresse: Solløkkaveien 73, 3233 Sandefjord</li>
                  <li>E-post: post@nivianalyse.no</li>
                  <li>Telefon: +47 22 12 34 56</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold text-primary mb-3">
                  2. Hvilke opplysninger vi samler inn
                </h2>
                <p>Vi kan samle inn følgende personopplysninger:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li><strong>Kontaktskjema:</strong> Navn, e-postadresse, telefonnummer, organisasjon og din henvendelse.</li>
                  <li><strong>Besøksdata:</strong> Ved samtykke samler vi anonymisert statistikk om bruk av nettstedet.</li>
                  <li><strong>Cookies:</strong> Se vår <Link to="/cookies" className="text-accent underline">cookie-policy</Link> for detaljer.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold text-primary mb-3">
                  3. Formål med behandlingen
                </h2>
                <p>Vi behandler personopplysninger for følgende formål:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>Besvare henvendelser og gi informasjon om våre tjenester</li>
                  <li>Forbedre nettstedet og brukeropplevelsen</li>
                  <li>Oppfylle lovpålagte forpliktelser</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold text-primary mb-3">
                  4. Rettslig grunnlag
                </h2>
                <p>
                  Behandlingen av personopplysninger skjer på grunnlag av ditt samtykke (GDPR artikkel 6(1)(a)) 
                  og/eller vår berettigede interesse i å kunne besvare henvendelser (GDPR artikkel 6(1)(f)).
                </p>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold text-primary mb-3">
                  5. Lagring og sletting
                </h2>
                <p>
                  Vi lagrer personopplysninger kun så lenge det er nødvendig for formålet de ble samlet inn for. 
                  Henvendelser slettes normalt etter 12 måneder med mindre det foreligger en pågående dialog eller avtale.
                </p>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold text-primary mb-3">
                  6. Dine rettigheter
                </h2>
                <p>Du har følgende rettigheter:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li><strong>Innsyn:</strong> Be om kopi av opplysninger vi har om deg</li>
                  <li><strong>Retting:</strong> Be om at feil rettes</li>
                  <li><strong>Sletting:</strong> Be om at opplysninger slettes</li>
                  <li><strong>Begrensning:</strong> Be om begrenset behandling</li>
                  <li><strong>Dataportabilitet:</strong> Motta dine data i maskinlesbart format</li>
                  <li><strong>Trekke samtykke:</strong> Du kan når som helst trekke tilbake ditt samtykke</li>
                </ul>
                <p className="mt-3">
                  Kontakt oss på <a href="mailto:post@nivianalyse.no" className="text-accent underline">post@nivianalyse.no</a> for å utøve dine rettigheter.
                </p>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold text-primary mb-3">
                  7. Klage til Datatilsynet
                </h2>
                <p>
                  Hvis du mener vi behandler personopplysninger i strid med regelverket, 
                  kan du klage til <a href="https://www.datatilsynet.no" target="_blank" rel="noopener noreferrer" className="text-accent underline">Datatilsynet</a>.
                </p>
              </section>

              <section>
                <h2 className="text-[20px] font-semibold text-primary mb-3">
                  8. Endringer
                </h2>
                <p>
                  Vi kan oppdatere denne erklæringen ved behov. Vesentlige endringer vil bli kommunisert på nettstedet.
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

export default Personvern;
