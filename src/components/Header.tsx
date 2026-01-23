import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import niviLogo from "@/assets/nivi-logo.png";
import ThemeToggle from "./ThemeToggle";

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

  // Simplified NBIM-inspired navigation - fewer items, cleaner
  const navItems = [
    { name: "Fagområder", href: "#fagomrader" },
    { name: "Inspirasjon", href: "#inspirasjon" },
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
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => scrollToSection("#top")}
            className="flex items-center"
          >
            <img
              src={niviLogo}
              alt="NIVI Analyse"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Minimal NBIM style */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors py-2"
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
              size="lg"
              onClick={() => scrollToSection("#kontakt")}
              className="bg-accent hover:bg-accent/85 text-white rounded-md font-medium shadow-sm"
            >
              Kontakt oss
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-white/10 bg-primary">
            <nav className="flex flex-col gap-1">
              <button
                onClick={() => scrollToSection("#top")}
                className="text-base font-medium text-white/90 hover:text-white hover:bg-white/5 text-left px-4 py-3 rounded-lg transition-colors"
              >
                Startside
              </button>
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-base font-medium text-white/90 hover:text-white hover:bg-white/5 text-left px-4 py-3 rounded-lg transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center justify-between px-4 py-3 mt-2">
                <span className="text-white/70 text-sm">Bytt tema</span>
                <ThemeToggle />
              </div>
              <div className="px-4 pt-4">
                <Button
                  variant="cta"
                  className="w-full bg-accent hover:bg-accent/85 text-white font-medium"
                  onClick={() => scrollToSection("#kontakt")}
                >
                  Kontakt oss
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
