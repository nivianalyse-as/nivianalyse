import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const menuLinks = [
    { label: "Våre fagområder", href: "#fagomrader" },
    { label: "Inspirasjon", href: "#inspirasjon" },
    { label: "Referanser", href: "#referanser" },
    { label: "Om oss", href: "#eksperter" },
  ];

  return (
    <footer id="kontakt" className="bg-[#07342F]">
      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 pt-[72px] pb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12 lg:gap-16">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            {/* Wordmark - no badge */}
            <div className="mb-5">
              <span className="text-white text-xl md:text-2xl tracking-tight">
                <span className="font-semibold">NIVI</span>
                <span className="font-normal ml-1.5">Analyse</span>
              </span>
            </div>
            
            {/* Tagline */}
            <p className="text-white/[0.82] text-sm leading-relaxed mb-4 max-w-xs">
              Uavhengig analyse og rådgivning for kommuner, fylkeskommuner og offentlig sektor.
            </p>
            
            {/* Additional statement */}
            <p className="text-white/[0.82] text-sm leading-relaxed max-w-xs">
              Vi leverer utredninger og beslutningsgrunnlag med høy faglig presisjon.
            </p>
          </div>

          {/* Column 2: Kontakt (shown second on mobile) */}
          <div className="md:col-span-1 order-2 md:order-3">
            <h4 className="text-white font-semibold text-base mb-5">Kontakt</h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:post@nivianalyse.no"
                className="group flex items-center gap-3 text-white/[0.88] hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                post@nivianalyse.no
              </a>
              <a
                href="tel:+4722123456"
                className="group flex items-center gap-3 text-white/[0.88] hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                +47 22 12 34 56
              </a>
              <div className="flex items-start gap-3 text-white/[0.88] text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-70" />
                <span className="leading-relaxed">
                  Solløkkaveien 73<br />
                  3233 Sandefjord
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Meny (shown third on mobile) */}
          <div className="md:col-span-1 order-3 md:order-2">
            <h4 className="text-white font-semibold text-base mb-5">Meny</h4>
            <nav className="flex flex-col gap-3">
              {menuLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/[0.85] hover:text-white hover:underline underline-offset-4 transition-colors text-sm py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="h-px bg-white/[0.14]" />
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/70 text-center sm:text-left">
            © {new Date().getFullYear()} NIVI Analyse AS. Alle rettigheter forbeholdt.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-white/70 hover:text-white/90 transition-colors"
            >
              Personvern
            </a>
            <a
              href="#"
              className="text-xs text-white/70 hover:text-white/90 transition-colors"
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
