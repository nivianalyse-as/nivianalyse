import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const menuLinks = [
    { label: "Våre fagområder", href: "#fagomrader" },
    { label: "Inspirasjon", href: "#inspirasjon" },
    { label: "Referanser", href: "#referanser" },
    { label: "Om oss", href: "#eksperter" },
  ];

  return (
    <footer id="kontakt" className="bg-[#07342F]/95">
      {/* Top divider - thin line separating content from footer */}
      <div className="h-px bg-white/10" />
      
      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            {/* Wordmark */}
            <div className="mb-4">
              <span className="text-white text-xl md:text-[22px] tracking-tight">
                <span className="font-semibold">NIVI</span>
                <span className="font-normal ml-1.5">Analyse</span>
              </span>
            </div>
            
            {/* Tagline */}
            <p className="text-white/85 text-sm leading-[1.7] mb-3 max-w-[280px]">
              Uavhengig analyse og rådgivning for kommuner, fylkeskommuner og offentlig sektor.
            </p>
            
            {/* Additional statement */}
            <p className="text-white/85 text-sm leading-[1.7] max-w-[280px]">
              Vi leverer utredninger og beslutningsgrunnlag med høy faglig presisjon.
            </p>
          </div>

          {/* Column 2: Kontakt (shown second on mobile) */}
          <div className="md:col-span-1 order-2 md:order-3">
            <h4 className="text-white font-semibold text-[15px] mb-4">Kontakt</h4>
            <div className="flex flex-col gap-3.5">
              <a
                href="mailto:post@nivianalyse.no"
                className="group flex items-center gap-2.5 text-white/85 hover:text-white hover:underline underline-offset-4 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                post@nivianalyse.no
              </a>
              <a
                href="tel:+4722123456"
                className="group flex items-center gap-2.5 text-white/85 hover:text-white hover:underline underline-offset-4 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                +47 22 12 34 56
              </a>
              <div className="flex items-start gap-2.5 text-white/85 text-sm">
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
            <h4 className="text-white font-semibold text-[15px] mb-4">Meny</h4>
            <nav className="flex flex-col gap-2.5">
              {menuLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/85 hover:text-white hover:underline underline-offset-4 transition-colors text-sm py-0.5"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-px bg-white/[0.12]" />
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/70 text-center sm:text-left">
            © {new Date().getFullYear()} NIVI Analyse AS. Alle rettigheter forbeholdt.
          </p>
          <div className="flex gap-5">
            <a
              href="#"
              className="text-xs text-white/70 hover:text-white/90 hover:underline underline-offset-4 transition-colors"
            >
              Personvern
            </a>
            <a
              href="#"
              className="text-xs text-white/70 hover:text-white/90 hover:underline underline-offset-4 transition-colors"
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
