import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Startside", href: "#top" },
    { name: "Fagområder", href: "#fagomrader" },
    { name: "Inspirasjon", href: "#inspirasjon" },
    { name: "Referanser", href: "#referanser" },
    { name: "Om oss", href: "#eksperter" },
  ];

  const scrollToSection = (href: string) => {
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
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
        <div className="h-16 md:h-[72px] px-6 md:px-8 flex items-center justify-between max-w-7xl mx-auto">
          {/* Wordmark Logo */}
          <Link
            to="/"
            onClick={() => scrollToSection("#top")}
            className="flex items-center gap-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md max-w-[220px]"
          >
            <span className="text-primary text-xl md:text-2xl tracking-tight">
              <span className="font-bold">NIVI</span>
              <span className="font-normal ml-1.5">Analyse</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent ml-1 mt-0.5" aria-hidden="true" />
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="p-2.5 -mr-2.5 rounded-md hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={() => setIsOpen(true)}
            aria-label="Åpne meny"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            style={{ minWidth: 44, minHeight: 44 }}
          >
            <Menu className="h-6 w-6 text-primary" strokeWidth={2} />
          </button>
        </div>

        {/* Navigation Drawer */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent
            side="right"
            className="w-[320px] sm:w-[380px] bg-primary border-l-0 p-0 overflow-y-auto"
            id="mobile-menu"
          >
            <SheetHeader className="p-6 pb-4 border-b border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-white text-xl tracking-tight">
                  <span className="font-bold">NIVI</span>
                  <span className="font-normal ml-1.5">Analyse</span>
                </span>
                <SheetClose className="rounded-full p-2 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50">
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
                  onClick={() => scrollToSection(item.href)}
                  className="text-lg font-medium text-white/90 hover:text-white hover:bg-white/5 text-left px-4 py-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/5"
                >
                  {item.name}
                </button>
              ))}

              <div className="border-t border-white/10 mt-6 pt-6">
                <Button
                  variant="cta"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-6 text-base rounded-lg"
                  onClick={() => scrollToSection("#kontakt")}
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
