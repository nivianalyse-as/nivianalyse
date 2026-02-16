import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MediaCard from "@/components/MediaCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { mediaEntries, getMediaSources, getMediaYears } from "@/data/mediaContent";
import { MediaType, mediaTypeLabels } from "@/types/media";

const ITEMS_PER_PAGE = 9;

const IMedia = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [sourceFilter, setSourceFilter] = useState<string>("all");
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const sources = getMediaSources();
  const years = getMediaYears();

  const filteredEntries = useMemo(() => {
    return mediaEntries
      .filter((entry) => {
        const searchLower = searchQuery.toLowerCase();
        const matchesSearch = 
          entry.title.toLowerCase().includes(searchLower) ||
          entry.source.toLowerCase().includes(searchLower) ||
          entry.excerpt.toLowerCase().includes(searchLower);
        const matchesType = typeFilter === "all" || entry.type === typeFilter;
        const matchesSource = sourceFilter === "all" || entry.source === sourceFilter;
        const entryYear = entry.date?.split("-")[0];
        const matchesYear = yearFilter === "all" || entryYear === yearFilter;
        return matchesSearch && matchesType && matchesSource && matchesYear;
      })
      .sort((a, b) => {
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
  }, [searchQuery, typeFilter, sourceFilter, yearFilter]);

  const visibleEntries = filteredEntries.slice(0, visibleCount);
  const hasMore = visibleCount < filteredEntries.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setTypeFilter("all");
    setSourceFilter("all");
    setYearFilter("all");
    setVisibleCount(ITEMS_PER_PAGE);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-secondary/20">
          <div className="container max-w-6xl mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <Link 
                to="/" 
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Startside
              </Link>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              I media
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Her samler vi omtaler, kronikker og deltakelser i debatt og programmer.
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 border-b border-border/50">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative sm:col-span-2 lg:col-span-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Søk i tittel, kilde..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Type Filter */}
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle typer</SelectItem>
                  {(Object.keys(mediaTypeLabels) as MediaType[]).map((type) => (
                    <SelectItem key={type} value={type}>
                      {mediaTypeLabels[type]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Source Filter */}
              <Select value={sourceFilter} onValueChange={setSourceFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Kilde" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle kilder</SelectItem>
                  {sources.map((source) => (
                    <SelectItem key={source} value={source}>
                      {source}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Year Filter */}
              <Select value={yearFilter} onValueChange={setYearFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="År" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle år</SelectItem>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Results count & reset */}
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-muted-foreground">
                Viser {visibleEntries.length} av {filteredEntries.length} omtaler
              </p>
              {(searchQuery || typeFilter !== "all" || sourceFilter !== "all" || yearFilter !== "all") && (
                <Button variant="ghost" size="sm" onClick={handleResetFilters}>
                  Nullstill filtre
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Results Grid */}
        <section className="py-12 md:py-16">
          <div className="container max-w-6xl mx-auto px-4">
            {visibleEntries.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {visibleEntries.map((entry) => (
                    <MediaCard key={entry.id} entry={entry} />
                  ))}
                </div>

                {hasMore && (
                  <div className="flex justify-center mt-10">
                    <Button variant="outline" size="lg" onClick={handleLoadMore}>
                      Last flere
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Ingen omtaler funnet med valgte filtre.
                </p>
                <Button variant="ghost" className="mt-4" onClick={handleResetFilters}>
                  Nullstill filtre
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IMedia;
