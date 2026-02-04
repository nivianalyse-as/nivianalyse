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
      {/* Top divider */}
      <div className="h-px bg-white/10" />
      
      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-6 pt-16 md:pt-[72px] pb-14 md:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 md:gap-14">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            {/* Wordmark */}
            <div className="mb-5">
              <span className="text-white text-[21px] leading-[1.2] tracking-[-0.01em]">
                <span className="font-semibold">NIVI</span>
                <span className="font-normal ml-1.5">Analyse</span>
              </span>
            </div>
            
            {/* Tagline and statement */}
            <div className="max-w-[380px] space-y-3">
              <p className="text-white/85 text-sm leading-[1.65]">
                Uavhengig analyse og rådgivning for kommuner, fylkeskommuner og offentlig sektor.
              </p>
              <p className="text-white/85 text-sm leading-[1.65]">
                Vi leverer utredninger og beslutningsgrunnlag med høy faglig presisjon.
              </p>
            </div>
          </div>

          {/* Column 2: Kontakt (shown second on mobile) */}
          <div className="md:col-span-1 order-2 md:order-3 pt-2 md:pt-0">
            <h4 className="text-white font-semibold text-[13px] uppercase tracking-[0.06em] mb-4">
              Kontakt
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:post@nivianalyse.no"
                className="group flex items-center gap-2.5 text-white/85 hover:text-white focus:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07342F] rounded transition-colors text-[14px] leading-[1.5] min-h-[44px] md:min-h-0"
              >
                <Mail className="w-4 h-4 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:underline underline-offset-4">post@nivianalyse.no</span>
              </a>
              <a
                href="tel:+4722123456"
                className="group flex items-center gap-2.5 text-white/85 hover:text-white focus:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07342F] rounded transition-colors text-[14px] leading-[1.5] min-h-[44px] md:min-h-0"
              >
                <Phone className="w-4 h-4 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                <span className="group-hover:underline underline-offset-4">+47 22 12 34 56</span>
              </a>
              <div className="flex items-start gap-2.5 text-white/85 text-[14px] leading-[1.5]">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-70" />
                <span>
                  Solløkkaveien 73<br />
                  3233 Sandefjord
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Meny (shown third on mobile) */}
          <div className="md:col-span-1 order-3 md:order-2 pt-2 md:pt-0">
            <h4 className="text-white font-semibold text-[13px] uppercase tracking-[0.06em] mb-4">
              Meny
            </h4>
            <nav className="flex flex-col gap-2.5">
              {menuLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/85 hover:text-white focus:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07342F] rounded hover:underline underline-offset-4 transition-colors text-[14px] leading-[1.5] py-1 min-h-[44px] md:min-h-0 flex items-center"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Divider - aligned with container */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-6">
        <div className="h-px bg-white/[0.18]" />
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-6">
        <div className="py-[18px] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[13px] text-white/75 text-center sm:text-left">
            © {new Date().getFullYear()} NIVI Analyse AS. Alle rettigheter forbeholdt.
          </p>
          <div className="flex gap-5">
            <a
              href="#"
              className="text-[13px] text-white/75 hover:text-white hover:underline underline-offset-4 focus:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07342F] rounded transition-colors"
            >
              Personvern
            </a>
            <a
              href="#"
              className="text-[13px] text-white/75 hover:text-white hover:underline underline-offset-4 focus:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07342F] rounded transition-colors"
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
