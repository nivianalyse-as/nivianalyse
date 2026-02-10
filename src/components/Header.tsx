import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";
import niviLogo from "@/assets/nivi-logo-transparent.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Startside", href: "/" },
    { name: "Våre fagområder", href: "/#fagomrader" },
    { name: "Inspirasjon", href: "/inspirasjon" },
    { name: "Referanser", href: "/#referanser" },
    { name: "Om oss", href: "/#eksperter" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    if (href === "/") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    if (href.startsWith("/#")) {
      const sectionId = href.substring(2);
      if (location.pathname === "/") {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
      return;
    }
    
    navigate(href);
  };

  const handleContactClick = () => {
    setIsOpen(false);
    if (location.pathname === "/") {
      const element = document.getElementById("kontakt");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById("kontakt");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
      >
        Hopp til hovedinnhold
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-md shadow-[0_1px_0_0_rgba(7,52,47,0.08)]"
            : "bg-white"
        }`}
        style={{ borderBottom: '1px solid rgba(7,52,47,0.10)' }}
      >
        <div className="h-[72px] md:h-20 px-5 sm:px-6 lg:px-8 flex items-center justify-between max-w-[1200px] mx-auto">
          {/* Wordmark Logo */}
          <Link
            to="/"
            onClick={() => handleNavClick("/")}
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md group"
          >
            <img src={niviLogo} alt="NIVI Analyse" className="h-9 sm:h-10 md:h-11 w-auto" />
          </Link>

          {/* Right side: Kontakt button (desktop) + Hamburger */}
          <div className="flex items-center gap-4">
            {/* Kontakt button - visible on md and up */}
            <Button
              variant="outline"
              size="sm"
              className="hidden md:inline-flex border-primary/25 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 font-medium px-5 py-2.5 h-auto rounded-xl text-[14px]"
              onClick={handleContactClick}
            >
              Kontakt
            </Button>

            {/* Hamburger Menu Button - ALWAYS visible */}
            <button
              className="p-3 -mr-2 rounded-xl hover:bg-muted/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={() => setIsOpen(true)}
              aria-label="Åpne meny"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              style={{ minWidth: 48, minHeight: 48 }}
            >
              <Menu className="h-[22px] w-[22px] md:h-6 md:w-6 text-primary" strokeWidth={1.75} />
            </button>
          </div>
        </div>

        {/* Navigation Drawer */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent
            side="right"
            className="w-[320px] sm:w-[360px] bg-[#07342F] border-l-0 p-0 overflow-y-auto"
            id="mobile-menu"
          >
            <SheetHeader className="p-6 pb-5 border-b border-white/10">
              <div className="flex items-center justify-between">
                <img src={niviLogo} alt="NIVI Analyse" className="h-9 w-auto brightness-0 invert" />
                <SheetClose className="rounded-full p-2.5 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
                  <X className="h-5 w-5 text-white" />
                  <span className="sr-only">Lukk meny</span>
                </SheetClose>
              </div>
              <SheetTitle className="sr-only">Navigasjonsmeny</SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col p-6" role="navigation">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-[17px] font-medium text-white/90 hover:text-white hover:bg-white/5 text-left px-4 py-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/5"
                >
                  {item.name}
                </button>
              ))}

              <div className="mt-6 pt-6 border-t border-white/10">
                <Button
                  size="lg"
                  className="w-full bg-[#DC4B0C] hover:bg-[#DC4B0C]/90 text-white font-semibold py-6 text-base rounded-xl"
                  onClick={handleContactClick}
                >
                  Kontakt oss
                </Button>
              </div>

              {/* Contact info in drawer */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                <a
                  href="mailto:post@nivianalyse.no"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>post@nivianalyse.no</span>
                </a>
                <a
                  href="tel:+4722123456"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+47 22 12 34 56</span>
                </a>
                <div className="flex items-start gap-3 text-white/80 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Solløkkaveien 73, 3233 Sandefjord</span>
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[72px] md:h-20" />
    </>
  );
};

export default Header;
