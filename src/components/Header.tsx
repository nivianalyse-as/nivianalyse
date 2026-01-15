import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import niviLogo from "@/assets/nivi-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: "Strategisk Analyse", href: "#tjenester" },
    { name: "Kommuneøkonomi", href: "#tjenester" },
    { name: "Organisasjonsutvikling", href: "#tjenester" },
    { name: "Politisk Rådgivning", href: "#tjenester" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container-narrow">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={niviLogo} alt="NIVI Analyse" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors link-underline"
            >
              Hjem
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Tjenester
                <ChevronDown className="h-4 w-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-background border border-border rounded-lg shadow-lg py-2 min-w-48">
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#aktuelt"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors link-underline"
            >
              Artikler
            </a>

            <a
              href="#om-oss"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors link-underline"
            >
              Om oss
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="cta" size="lg">
              Ta kontakt
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-sm font-medium text-foreground/80 hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                Hjem
              </Link>
              <div className="space-y-2">
                <span className="text-sm font-medium text-foreground">
                  Tjenester
                </span>
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block pl-4 text-sm text-foreground/70 hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
              <a
                href="#aktuelt"
                className="text-sm font-medium text-foreground/80 hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                Artikler
              </a>
              <a
                href="#om-oss"
                className="text-sm font-medium text-foreground/80 hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                Om oss
              </a>
              <Button variant="cta" className="mt-2">
                Ta kontakt
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
