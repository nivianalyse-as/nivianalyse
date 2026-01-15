import { ArrowRight, Calendar } from "lucide-react";

const articles = [
  {
    title: "Kommunesamarbeid i praksis: Erfaringer fra interkommunale ordninger",
    excerpt:
      "En gjennomgang av hvordan norske kommuner kan styrke samarbeidet for å levere bedre tjenester til innbyggerne.",
    date: "12. januar 2025",
    category: "Analyse",
  },
  {
    title: "Økonomisk bærekraft i små kommuner",
    excerpt:
      "Hvordan kan små kommuner sikre langsiktig økonomisk stabilitet i møte med demografiske endringer?",
    date: "5. januar 2025",
    category: "Økonomi",
  },
  {
    title: "Politisk ledelse i krisetider",
    excerpt:
      "Lærdommer fra pandemien og hvordan kommuner kan styrke sin beredskap for fremtidige utfordringer.",
    date: "18. desember 2024",
    category: "Rådgivning",
  },
];

const ArticlesSection = () => {
  return (
    <section id="inspirasjon" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Inspirasjon & Faglig påfyll
            </h2>
            <p className="text-muted-foreground">
              Fagartikler og analyser fra våre eksperter
            </p>
          </div>
          <a
            href="#artikler"
            className="flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
          >
            Se alle artikler
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group bg-card border border-border rounded-lg overflow-hidden card-hover"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-secondary text-primary text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors">
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
