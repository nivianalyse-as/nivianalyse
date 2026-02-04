import { Mail, Phone, MapPin } from "lucide-react";
import niviLogo from "@/assets/nivi-logo.png";

const Footer = () => {
  return (
    <footer id="kontakt" className="bg-primary text-primary-foreground">
      <div className="container-narrow py-14 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Logo & About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="bg-white/95 rounded-xl px-4 py-3 w-fit mb-5">
              <img src={niviLogo} alt="NIVI Analyse" className="h-10 md:h-12 w-auto" />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed text-sm max-w-xs">
              Uavhengig rådgivning og analyse for kommuner, fylkeskommuner og offentlig sektor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-5">Hurtiglenker</h4>
            <nav className="flex flex-col gap-3">
              <a
                href="#fagomrader"
                className="text-primary-foreground/75 hover:text-primary-foreground transition-colors text-sm"
              >
                Våre fagområder
              </a>
              <a
                href="#inspirasjon"
                className="text-primary-foreground/75 hover:text-primary-foreground transition-colors text-sm"
              >
                Inspirasjon
              </a>
              <a
                href="#referanser"
                className="text-primary-foreground/75 hover:text-primary-foreground transition-colors text-sm"
              >
                Referanser
              </a>
              <a
                href="#eksperter"
                className="text-primary-foreground/75 hover:text-primary-foreground transition-colors text-sm"
              >
                Om oss
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold mb-5">Kontakt</h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:post@nivianalyse.no"
                className="flex items-center gap-3 text-primary-foreground/75 hover:text-primary-foreground transition-colors text-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                post@nivianalyse.no
              </a>
              <a
                href="tel:+4722123456"
                className="flex items-center gap-3 text-primary-foreground/75 hover:text-primary-foreground transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                +47 22 12 34 56
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/75 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  Solløkkaveien 73<br />
                  3233 Sandefjord
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-narrow py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50 text-center sm:text-left">
            © {new Date().getFullYear()} NIVI Analyse AS. Alle rettigheter forbeholdt.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              Personvern
            </a>
            <a
              href="#"
              className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors"
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
