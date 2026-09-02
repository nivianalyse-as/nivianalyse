import { Mail, Phone, MapPin } from "lucide-react";
import niviFooterLogo from "@/assets/nivi-footer-logo.png";

const Footer = () => {
  const menuLinks = [
    { label: "Startside", href: "/" },
    { label: "Våre fagområder", href: "/#fagomrader" },
    { label: "Faglige innsikter", href: "/inspirasjon" },
    { label: "Publikasjoner", href: "/publikasjoner" },
    { label: "Våre oppdragsgivere", href: "/#referanser" },
    { label: "Om oss", href: "/om-oss" },
  ];

  return (
    <footer id="kontakt" className="bg-[#07342F] w-full border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-6 pt-20 md:pt-20 pb-12 md:pb-14 space-y-4 md:space-y-0">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10 md:gap-12">
          
          {/* Column 1: Brand */}
          <div>
            {/* Wordmark */}
            <div className="mb-5">
              <img 
                src={niviFooterLogo}
                alt="NIVI Analyse"
                width={411}
                height={403}
                loading="lazy"
                decoding="async"
                className="h-14 w-auto"
              />
            </div>
            
            {/* Tagline */}
            <div className="max-w-[340px] space-y-2.5">
              <p className="text-white/90 text-[15px] leading-[1.7]">
                Uavhengig analyse og rådgivning for kommuner, fylkeskommuner og offentlig sektor.
              </p>
              <p className="text-white/90 text-[15px] leading-[1.7]">
                Vi leverer utredninger og beslutningsgrunnlag med høy faglig presisjon.
              </p>
            </div>
          </div>

          {/* Column 2: Meny */}
          <div>
            <h3 className="text-white font-semibold text-[13px] uppercase tracking-[0.08em] mb-5">
              Meny
            </h3>
            <nav className="flex flex-col gap-2">
              {menuLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-white hover:underline underline-offset-4 decoration-[0.5px] transition-colors text-[15px] leading-[1.6] py-1 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07342F] rounded"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Kontakt */}
          <div>
            <h3 className="text-white font-semibold text-[13px] uppercase tracking-[0.08em] mb-5">
              Kontakt
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:post@nivianalyse.no"
                aria-label="Send e-post til post@nivianalyse.no"
                className="group flex items-center gap-2.5 text-white/90 hover:text-white transition-colors text-[15px] leading-[1.5] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07342F] rounded"
              >
                <Mail className="w-4 h-4 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:underline underline-offset-4 decoration-[0.5px]">post@nivianalyse.no</span>
              </a>
              <a
                href="tel:+4748148813"
                aria-label="Ring NIVI Analyse på +47 48 14 88 13"
                className="group flex items-center gap-2.5 text-white/90 hover:text-white transition-colors text-[15px] leading-[1.5] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07342F] rounded"
              >
                <Phone className="w-4 h-4 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:underline underline-offset-4 decoration-[0.5px]">+47 48 14 88 13</span>
              </a>
              <div className="flex items-start gap-2.5 text-white/90 text-[15px] leading-[1.5]">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-70" />
                <span>
                  Solløkkaveien 73<br />
                  3233 Sandefjord
                </span>
              </div>
              <div className="text-white/90 text-[15px] leading-[1.5] pl-[26px]">
                Organisasjonsnummer: 937 186 037
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-px bg-white/[0.15]" />
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[13px] text-white/85 text-center sm:text-left">
            © 2026 NIVI Analyse AS. Alle rettigheter forbeholdt.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="/personvern"
              className="text-[13px] text-white/85 hover:text-white hover:underline underline-offset-4 decoration-[0.5px] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07342F] rounded"
            >
              Personvern
            </a>
            <a
              href="/cookies"
              className="text-[13px] text-white/85 hover:text-white hover:underline underline-offset-4 decoration-[0.5px] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07342F] rounded"
            >
              Cookies
            </a>
            <button
              onClick={() => {
                if ((window as any).openCookieSettings) {
                  (window as any).openCookieSettings();
                }
              }}
              className="text-[13px] text-white/85 hover:text-white hover:underline underline-offset-4 decoration-[0.5px] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07342F] rounded"
            >
              Cookie-innstillinger
            </button>
          </div>
        </div>
      </div>

      {/* Site Credit */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="pb-4 pt-2">
          <p className="text-[12px] text-white/85 text-center sm:text-left">
            Utviklet med presisjonsweb av{" "}
            <a
              href="https://synligweb.no"
              target="_blank"
              rel="noopener"
              className="text-white/85 hover:text-white/90 hover:underline underline-offset-4 decoration-[0.5px] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07342F] rounded"
            >
              SynligWeb
            </a>
            {" "}og{" "}
            <a
              href="https://digitalthinking.no"
              target="_blank"
              rel="noopener"
              className="text-white/85 hover:text-white/90 hover:underline underline-offset-4 decoration-[0.5px] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07342F] rounded"
            >
              Digital Thinking
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
