import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const menuLinks = [
    { label: "Startside", href: "/" },
    { label: "Våre fagområder", href: "/#fagomrader" },
    { label: "Inspirasjon", href: "/inspirasjon" },
    { label: "Referanser", href: "/#referanser" },
    { label: "Om oss", href: "/#eksperter" },
  ];

  return (
    <footer id="kontakt" className="bg-[#07342F] w-full">
      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-6 pt-16 md:pt-20 pb-12 md:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10 md:gap-12">
          
          {/* Column 1: Brand */}
          <div>
            {/* Wordmark */}
            <div className="flex items-center mb-5">
              <span className="text-white text-xl font-bold tracking-[-0.02em]">
                NIVI
              </span>
              <span className="text-white text-xl font-normal tracking-[-0.02em] ml-1.5">
                Analyse
              </span>
              <span 
                className="w-1.5 h-1.5 rounded-full bg-[#DC4B0C] ml-0.5 mb-2" 
                aria-hidden="true" 
              />
            </div>
            
            {/* Tagline */}
            <div className="max-w-[340px] space-y-2.5">
              <p className="text-white/85 text-[15px] leading-[1.7]">
                Uavhengig analyse og rådgivning for kommuner, fylkeskommuner og offentlig sektor.
              </p>
              <p className="text-white/85 text-[15px] leading-[1.7]">
                Vi leverer utredninger og beslutningsgrunnlag med høy faglig presisjon.
              </p>
            </div>
          </div>

          {/* Column 2: Meny */}
          <div>
            <h4 className="text-white font-semibold text-[13px] uppercase tracking-[0.08em] mb-5">
              Meny
            </h4>
            <nav className="flex flex-col gap-2">
              {menuLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/85 hover:text-white hover:underline underline-offset-4 decoration-[0.5px] transition-colors text-[15px] leading-[1.6] py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07342F] rounded"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Kontakt */}
          <div>
            <h4 className="text-white font-semibold text-[13px] uppercase tracking-[0.08em] mb-5">
              Kontakt
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:post@nivianalyse.no"
                className="group flex items-center gap-2.5 text-white/85 hover:text-white transition-colors text-[15px] leading-[1.5] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07342F] rounded"
              >
                <Mail className="w-4 h-4 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:underline underline-offset-4 decoration-[0.5px]">post@nivianalyse.no</span>
              </a>
              <a
                href="tel:+4722123456"
                className="group flex items-center gap-2.5 text-white/85 hover:text-white transition-colors text-[15px] leading-[1.5] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07342F] rounded"
              >
                <Phone className="w-4 h-4 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:underline underline-offset-4 decoration-[0.5px]">+47 22 12 34 56</span>
              </a>
              <div className="flex items-start gap-2.5 text-white/85 text-[15px] leading-[1.5]">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-70" />
                <span>
                  Solløkkaveien 73<br />
                  3233 Sandefjord
                </span>
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
          <p className="text-[13px] text-white/70 text-center sm:text-left">
            © {new Date().getFullYear()} NIVI Analyse AS. Alle rettigheter forbeholdt.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="/personvern"
              className="text-[13px] text-white/70 hover:text-white hover:underline underline-offset-4 decoration-[0.5px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07342F] rounded"
            >
              Personvern
            </a>
            <a
              href="/cookies"
              className="text-[13px] text-white/70 hover:text-white hover:underline underline-offset-4 decoration-[0.5px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07342F] rounded"
            >
              Cookies
            </a>
            <button
              onClick={() => {
                if ((window as any).openCookieSettings) {
                  (window as any).openCookieSettings();
                }
              }}
              className="text-[13px] text-white/70 hover:text-white hover:underline underline-offset-4 decoration-[0.5px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07342F] rounded"
            >
              Cookie-innstillinger
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
