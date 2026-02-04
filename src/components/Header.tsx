import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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

  const navItems = [
    { name: "Startside", href: "/" },
    { name: "Fagområder", href: "/#fagomrader" },
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
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
      >
        Hopp til hovedinnhold
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background ${
          isScrolled
            ? "shadow-sm border-b border-border"
            : "border-b border-transparent"
        }`}
      >
        <div className="h-16 md:h-[72px] px-5 sm:px-6 lg:px-8 flex items-center justify-between max-w-7xl mx-auto">
          {/* Wordmark Logo */}
          <Link
            to="/"
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
          >
            <span className="text-primary text-lg sm:text-xl md:text-[22px] tracking-tight">
              <span className="font-semibold">NIVI</span>
              <span className="font-normal ml-1.5">Analyse</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent ml-1 mt-0.5" aria-hidden="true" />
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="p-2.5 -mr-2 rounded-md hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={() => setIsOpen(true)}
            aria-label="Åpne meny"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            style={{ minWidth: 44, minHeight: 44 }}
          >
            <Menu className="h-5 w-5 md:h-6 md:w-6 text-primary" strokeWidth={2} />
          </button>
        </div>

        {/* Navigation Drawer */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[340px] bg-[#07342F] border-l-0 p-0 overflow-y-auto"
            id="mobile-menu"
          >
            <SheetHeader className="p-5 pb-4 border-b border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-white text-lg tracking-tight">
                  <span className="font-semibold">NIVI</span>
                  <span className="font-normal ml-1.5">Analyse</span>
                </span>
                <SheetClose className="rounded-full p-2 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
                  <X className="h-5 w-5 text-white" />
                  <span className="sr-only">Lukk meny</span>
                </SheetClose>
              </div>
              <SheetTitle className="sr-only">Navigasjonsmeny</SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col p-5" role="navigation">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-base font-medium text-white/90 hover:text-white hover:bg-white/5 text-left px-4 py-3.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/5"
                >
                  {item.name}
                </button>
              ))}

              <div className="border-t border-white/10 mt-5 pt-5">
                <Button
                  variant="cta"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-5 text-base rounded-lg"
                  onClick={handleContactClick}
                >
                  Kontakt oss
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-[72px]" />
    </>
  );
};

export default Header;
