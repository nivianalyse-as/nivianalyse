import { Mail, Phone, MapPin } from "lucide-react";
import niviLogo from "@/assets/nivi-logo.png";

const Footer = () => {
  return (
    <footer id="kontakt" className="bg-primary text-primary-foreground py-16">
      <div className="container-narrow">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & About */}
          <div>
            <img src={niviLogo} alt="NIVI Analyse" className="h-14 w-auto mb-4" />
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Uavhengig rådgivning og analyse for kommuner, fylkeskommuner og
              offentlig sektor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hurtiglenker</h4>
            <nav className="flex flex-col gap-3">
              <a
                href="#tjenester"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Tjenester
              </a>
              <a
                href="#aktuelt"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Artikler
              </a>
              <a
                href="#om-oss"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Om oss
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt oss</h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:post@nivianalyse.no"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                post@nivianalyse.no
              </a>
              <a
                href="tel:+4722123456"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5" />
                +47 22 12 34 56
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Storgata 1<br />
                  0155 Oslo
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} NIVI Analyse AS. Alle rettigheter
            forbeholdt.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Personvern
            </a>
            <a
              href="#"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Vilkår
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
