import { ArrowRight, Calendar } from "lucide-react";

const articles = [
  {
    title: "Kommunesamarbeid i praksis",
    excerpt:
      "En gjennomgang av hvordan norske kommuner kan styrke samarbeidet for bedre tjenester.",
    date: "12. jan 2025",
    category: "Analyse",
  },
  {
    title: "Økonomisk bærekraft i små kommuner",
    excerpt:
      "Hvordan sikre langsiktig økonomisk stabilitet i møte med demografiske endringer?",
    date: "5. jan 2025",
    category: "Økonomi",
  },
  {
    title: "Politisk ledelse i krisetider",
    excerpt:
      "Lærdommer fra pandemien og hvordan kommuner kan styrke sin beredskap.",
    date: "18. des 2024",
    category: "Rådgivning",
  },
];

const ArticlesSection = () => {
  return (
    <section id="inspirasjon" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 md:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Inspirasjon & Faglig påfyll
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Fagartikler og analyser fra våre eksperter
            </p>
          </div>
          <a
            href="#artikler"
            className="group flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors text-sm"
          >
            Se alle artikler
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group bg-card border border-border/50 rounded-xl overflow-hidden hover:border-border hover:shadow-md transition-all duration-300"
            >
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-section-alt text-primary text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-2 group-hover:text-primary/80 transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
