import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import niviLogo from "@/assets/nivi-logo.png";
import ThemeToggle from "./ThemeToggle";
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
      setIsScrolled(window.scrollY > 50);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary shadow-lg"
          : "bg-primary/95"
      }`}
    >
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with badge for visibility */}
          <Link 
            to="/" 
            onClick={() => scrollToSection("#top")}
            className="flex items-center"
          >
            <div className="bg-white/95 rounded-xl px-3 py-2 shadow-sm">
              <img
                src={niviLogo}
                alt="NIVI Analyse"
                className="h-8 md:h-10 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-white/85 hover:text-white px-4 py-2 rounded-md hover:bg-white/10 transition-all duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Right side: Theme toggle + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button
              variant="cta"
              size="default"
              onClick={() => scrollToSection("#kontakt")}
              className="bg-accent hover:bg-accent/90 text-white rounded-md font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Kontakt oss
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(true)}
            aria-label="Åpne meny"
          >
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Sheet/Drawer */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent 
          side="right" 
          className="w-[300px] sm:w-[350px] bg-primary border-l-0 p-0"
        >
          <SheetHeader className="p-6 pb-4 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="bg-white/95 rounded-xl px-3 py-2">
                <img
                  src={niviLogo}
                  alt="NIVI Analyse"
                  className="h-8 w-auto"
                />
              </div>
              <SheetClose className="rounded-full p-2 hover:bg-white/10 transition-colors">
                <X className="h-5 w-5 text-white" />
                <span className="sr-only">Lukk</span>
              </SheetClose>
            </div>
            <SheetTitle className="sr-only">Navigasjonsmeny</SheetTitle>
          </SheetHeader>
          
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-base font-medium text-white/90 hover:text-white hover:bg-white/10 text-left px-4 py-4 rounded-lg transition-colors"
              >
                {item.name}
              </button>
            ))}
            
            <div className="border-t border-white/10 mt-4 pt-4">
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-white/70 text-sm">Bytt tema</span>
                <ThemeToggle />
              </div>
            </div>
            
            <div className="px-4 pt-6">
              <Button
                variant="cta"
                className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-6 text-base"
                onClick={() => scrollToSection("#kontakt")}
              >
                Kontakt oss
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
