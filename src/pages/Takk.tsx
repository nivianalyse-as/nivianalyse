import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const Takk = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-24 md:py-32">
        <div className="max-w-xl text-center space-y-6">
          <CheckCircle className="mx-auto h-14 w-14 text-accent" strokeWidth={1.5} />
          <h1 className="text-[2.1rem] md:text-[2.65rem] font-semibold text-primary" style={{ lineHeight: 1.25 }}>
            Takk for din henvendelse
          </h1>
          <div className="space-y-4 text-muted-foreground" style={{ fontSize: '1.065rem', lineHeight: 1.7 }}>
            <p>
              Tusen takk for at du tok kontakt med NIVI Analyse.
            </p>
            <p>
              Vi har mottatt meldingen din og vil følge opp så snart vi har anledning.
            </p>
            <p>
              Dersom henvendelsen gjelder noe som haster, ber vi deg ta direkte kontakt på telefon eller e-post.
            </p>
          </div>
          <div className="pt-4">
            <Button asChild variant="cta" size="lg">
              <Link to="/">Tilbake til forsiden</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Takk;
