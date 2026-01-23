const ReferencesSection = () => {
  return (
    <section id="referanser" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Referanser</h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Vi har samarbeidet med kommuner og fylkeskommuner over hele Norge.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Placeholder for future references */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-20 md:h-24 bg-muted/50 rounded-lg border border-border/50 flex items-center justify-center"
            >
              <span className="text-muted-foreground text-xs md:text-sm">
                Referanse {i}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
