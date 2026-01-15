import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import niviLogo from "@/assets/nivi-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Startside", href: "#top" },
    { name: "Våre fagområder", href: "#fagomrader" },
    { name: "Hvordan jobber vi?", href: "#eksperter" },
    { name: "Inspirasjon", href: "#inspirasjon" },
    { name: "Referanser", href: "#referanser" },
    { name: "Om oss", href: "#om-oss" },
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
          ? "bg-primary/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={niviLogo}
              alt="NIVI Analyse"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium text-white/90 hover:text-white transition-colors relative py-2 ${
                  item.name === "Startside"
                    ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white"
                    : "hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-white/50"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant="cta"
              size="lg"
              onClick={() => scrollToSection("#kontakt")}
              className="bg-accent hover:bg-accent/90 text-white rounded-md"
            >
              Kontakt
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
          <div className="lg:hidden py-4 border-t border-white/20 bg-primary/95 backdrop-blur-sm">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-white/90 hover:text-white text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button
                variant="cta"
                className="mt-2 bg-accent hover:bg-accent/90 text-white"
                onClick={() => scrollToSection("#kontakt")}
              >
                Kontakt
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
