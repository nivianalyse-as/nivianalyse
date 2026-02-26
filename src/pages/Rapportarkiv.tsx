import { useState, useMemo, useCallback, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search, X, Download, ArrowRight, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import { rapporter } from "@/data/rapporter";
import { ALL_THEMES, ALL_TYPES, themeToSlug, type RapportType } from "@/types/rapport";

const years = Array.from(new Set(rapporter.map((r) => r.year))).sort((a, b) => b - a);
const activeThemes = Array.from(new Set(rapporter.flatMap((r) => r.themes))).sort();

const Rapportarkiv = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Parse URL params
  const selectedYears = useMemo(() => {
    const y = searchParams.get("year");
    return y ? y.split(",").map(Number).filter(Boolean) : [];
  }, [searchParams]);

  const selectedTypes = useMemo(() => {
    const t = searchParams.get("type");
    return t ? (t.split(",") as RapportType[]) : [];
  }, [searchParams]);

  const selectedThemes = useMemo(() => {
    const t = searchParams.get("theme");
    return t ? t.split(",") : [];
  }, [searchParams]);

  const searchQuery = searchParams.get("q") || "";

  // Update URL params
  const updateParams = useCallback(
    (key: string, values: (string | number)[]) => {
      const next = new URLSearchParams(searchParams);
      if (values.length === 0) {
        next.delete(key);
      } else {
        next.set(key, values.join(","));
      }
      setSearchParams(next, { replace: true });
    },
    [searchParams, setSearchParams]
  );

  const setSearch = useCallback(
    (q: string) => {
      const next = new URLSearchParams(searchParams);
      if (q) next.set("q", q);
      else next.delete("q");
      setSearchParams(next, { replace: true });
    },
    [searchParams, setSearchParams]
  );

  const clearAll = () => setSearchParams({}, { replace: true });

  const toggleYear = (y: number) => {
    const next = selectedYears.includes(y) ? selectedYears.filter((v) => v !== y) : [...selectedYears, y];
    updateParams("year", next);
  };

  const toggleType = (t: RapportType) => {
    const next = selectedTypes.includes(t) ? selectedTypes.filter((v) => v !== t) : [...selectedTypes, t];
    updateParams("type", next);
  };

  const toggleTheme = (t: string) => {
    const next = selectedThemes.includes(t) ? selectedThemes.filter((v) => v !== t) : [...selectedThemes, t];
    updateParams("theme", next);
  };

  // Filter logic (AND)
  const filtered = useMemo(() => {
    return rapporter.filter((r) => {
      // Hide entries without PDF when Kommuneøkonomi filter is active
      if (selectedThemes.includes("Kommuneøkonomi") && !r.pdfUrl) return false;
      if (selectedYears.length && !selectedYears.includes(r.year)) return false;
      if (selectedTypes.length && !selectedTypes.includes(r.type)) return false;
      if (selectedThemes.length && !selectedThemes.some((t) => r.themes.includes(t))) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          r.title.toLowerCase().includes(q) ||
          r.summary.toLowerCase().includes(q) ||
          r.themes.some((t) => t.toLowerCase().includes(q)) ||
          r.geography.some((g) => g.toLowerCase().includes(q)) ||
          r.client.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedYears, selectedTypes, selectedThemes, searchQuery]);

  const hasActiveFilters = selectedYears.length > 0 || selectedTypes.length > 0 || selectedThemes.length > 0 || searchQuery.length > 0;

  // Group by year for display
  const groupedByYear = useMemo(() => {
    const groups: Record<number, typeof filtered> = {};
    filtered.forEach((r) => {
      if (!groups[r.year]) groups[r.year] = [];
      groups[r.year].push(r);
    });
    return Object.entries(groups)
      .sort(([a], [b]) => Number(b) - Number(a))
      .map(([year, items]) => ({ year: Number(year), items }));
  }, [filtered]);

  const FilterSidebar = ({ className = "" }: { className?: string }) => (
    <div className={className}>
      {/* Search */}
      <div className="mb-8">
        <label className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-2 block">Søk</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Søk i rapporter..."
            value={searchQuery}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 text-sm"
          />
          {searchQuery && (
            <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2">
              <X className="w-3.5 h-3.5 text-muted-foreground hover:text-foreground" />
            </button>
          )}
        </div>
      </div>

      {/* Year */}
      <div className="mb-8">
        <label className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-3 block">År</label>
        <div className="flex flex-wrap gap-1.5">
          {years.map((y) => (
            <button
              key={y}
              onClick={() => toggleYear(y)}
              className={`chip text-xs transition-all ${
                selectedYears.includes(y) ? "bg-primary text-primary-foreground" : "bg-secondary/30 text-primary hover:bg-secondary/50"
              }`}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      {/* Type */}
      <div className="mb-8">
        <label className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-3 block">Type</label>
        <div className="space-y-2">
          {ALL_TYPES.map((t) => (
            <label key={t} className="flex items-center gap-2 cursor-pointer text-sm text-foreground">
              <Checkbox checked={selectedTypes.includes(t)} onCheckedChange={() => toggleType(t)} />
              {t}
            </label>
          ))}
        </div>
      </div>

      {/* Tema */}
      <div className="mb-8">
        <label className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-3 block">Tema</label>
        <div className="space-y-2">
          {activeThemes.map((t) => (
            <label key={t} className="flex items-center gap-2 cursor-pointer text-sm text-foreground">
              <Checkbox checked={selectedThemes.includes(t)} onCheckedChange={() => toggleTheme(t)} />
              {t}
            </label>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button onClick={clearAll} className="text-sm text-accent hover:text-accent/80 font-medium transition-colors">
          Nullstill alle filtre
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Publikasjoner | NIVI Analyse"
        description="Utredninger og analyser om interkommunalt samarbeid, kommunereform og regional utvikling fra NIVI Analyse. Arkiv med rapporter, notater og samarbeidsrapporter fra 2006 til i dag."
        canonical="https://nivi.no/publikasjoner"
      />
      <SchemaMarkup
        schema={{
          type: "Organization",
          name: "NIVI Analyse AS",
          url: "https://nivi.no/publikasjoner",
          description: "Publikasjoner fra NIVI Analyse – utredninger om interkommunalt samarbeid, kommunestruktur og regional utvikling.",
        }}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-background" style={{ paddingTop: "72px", paddingBottom: "48px" }}>
          <div className="container-narrow">
            <h1 className="text-3xl md:text-4xl font-semibold text-primary" style={{ lineHeight: 1.2 }}>
              Publikasjoner
            </h1>
            <div className="mx-auto h-[2px] w-10 bg-accent/80 rounded-full mt-4 mb-5 mr-auto ml-0" />
            <p className="text-muted-foreground max-w-[680px] mb-4" style={{ fontSize: "1.05rem", lineHeight: 1.65 }}>
              NIVI Analyse er et fagmiljø innen utredning av kommunal organisering, interkommunalt samarbeid og forvaltningsstruktur. Siden 2006 har vi analysert og dokumentert sentrale utviklingsløp i norsk kommunesektor på oppdrag fra departementer, statsforvaltere, fylkeskommuner og kommuner over hele landet.
            </p>
            <p className="text-muted-foreground max-w-[680px]" style={{ fontSize: "0.95rem", lineHeight: 1.65 }}>
              Dette arkivet samler analyser og utredninger publisert fra 2008 til 2025. Materialet dokumenterer sentrale reformer og utviklingsprosesser, inkludert kommunereform, samkommunemodeller, NAV-organisering, regional styring og transportforvaltning.
            </p>
          </div>
        </section>

        {/* Year navigation */}
        <nav className="bg-background border-b border-border/40" aria-label="Årsnavigasjon">
          <div className="container-narrow">
            <div className="overflow-x-auto" style={{ WebkitOverflowScrolling: "touch" }}>
              <div className="flex items-center gap-1 py-4 whitespace-nowrap">
                {years.map((y, i) => (
                  <span key={y} className="flex items-center">
                    <button
                      onClick={() => {
                        // Toggle: if already selected alone, clear; otherwise set
                        if (selectedYears.length === 1 && selectedYears[0] === y) {
                          updateParams("year", []);
                        } else {
                          updateParams("year", [y]);
                        }
                        // Smooth scroll to results
                        document.getElementById("rapport-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className={`text-sm transition-colors px-1 ${
                        selectedYears.length === 1 && selectedYears[0] === y
                          ? "text-primary font-semibold underline underline-offset-4 decoration-accent"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {y}
                    </button>
                    {i < years.length - 1 && (
                      <span className="text-muted-foreground/40 mx-1.5 select-none">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Content */}
        <section className="bg-background" style={{ paddingBottom: "96px" }}>
          <div className="container-narrow">
            {/* Mobile filter toggle */}
            <div className="lg:hidden mb-6">
              <Button variant="outline" size="sm" onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)} className="gap-2">
                <Filter className="w-4 h-4" />
                Filtre
                {hasActiveFilters && (
                  <span className="bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {selectedYears.length + selectedTypes.length + selectedThemes.length}
                  </span>
                )}
              </Button>
            </div>

            <div className="flex gap-12">
              {/* Desktop sidebar */}
              <FilterSidebar className="hidden lg:block w-[240px] flex-shrink-0" />

              {/* Mobile filters */}
              {mobileFiltersOpen && (
                <div className="lg:hidden fixed inset-0 z-40 bg-background overflow-y-auto p-6 pt-20">
                  <button onClick={() => setMobileFiltersOpen(false)} className="absolute top-6 right-6">
                    <X className="w-6 h-6 text-primary" />
                  </button>
                  <FilterSidebar />
                  <Button className="w-full mt-6" onClick={() => setMobileFiltersOpen(false)}>
                    Vis {filtered.length} publikasjoner (2008–2025)
                  </Button>
                </div>
              )}

              {/* Results */}
              <div id="rapport-results" className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground mb-6">
                  {filtered.length} {filtered.length === 1 ? "rapport" : "rapporter"}
                  {hasActiveFilters && " (filtrert)"}
                </p>

                {groupedByYear.map(({ year, items }) => (
                  <div key={year} className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-xl font-semibold text-primary">{year}</h2>
                      <Link
                        to={`/publikasjoner/${year}`}
                        className="text-xs text-muted-foreground hover:text-accent transition-colors"
                      >
                        Se alle fra {year} →
                      </Link>
                    </div>

                    <div className="space-y-4">
                      {items.map((r) => (
                        <article key={r.id} className="card-premium p-5 md:p-6">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <Link
                                to={`/publikasjoner/${r.slug}`}
                                className="text-base font-semibold text-primary hover:text-accent transition-colors leading-snug block mb-1.5"
                              >
                                {r.title}
                              </Link>
                              <p className="text-xs text-muted-foreground mb-2">
                                {r.year} · {r.type}
                                {r.client !== "Eget initiativ" && ` · ${r.client}`}
                              </p>
                              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-3">
                                {r.summary}
                              </p>
                              <div className="flex flex-wrap gap-1.5 mb-3">
                                {r.themes.map((t) => (
                                  <Link key={t} to={`/tema/${themeToSlug(t)}`}>
                                    <Badge variant="secondary" className="text-xs font-normal hover:bg-secondary/80 cursor-pointer">
                                      {t}
                                    </Badge>
                                  </Link>
                                ))}
                              </div>
                              <div className="flex items-center gap-4">
                                <Link
                                  to={`/publikasjoner/${r.slug}`}
                                  className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-accent transition-colors"
                                >
                                  Les mer
                                  <ArrowRight className="w-3 h-3" />
                                </Link>
                                {r.pdfUrl && (
                                  <a
                                    href={r.pdfUrl}
                                    download
                                    className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent/80 transition-colors"
                                  >
                                    <Download className="w-3 h-3" />
                                    Last ned PDF
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                ))}

                {filtered.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-muted-foreground">
                      {selectedYears.length === 1 ? `Ingen publikasjoner funnet for ${selectedYears[0]}.` : "Ingen rapporter funnet med valgte filtre."}
                    </p>
                    <button onClick={clearAll} className="text-accent hover:text-accent/80 text-sm font-medium mt-2">
                      Nullstill filtre
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Rapportarkiv;
