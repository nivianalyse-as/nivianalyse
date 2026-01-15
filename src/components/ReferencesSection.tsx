const ReferencesSection = () => {
  return (
    <section id="referanser" className="section-padding bg-muted">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Referanser</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vi har samarbeidet med kommuner og fylkeskommuner over hele Norge.
            Referanser kommer snart.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Placeholder for future references */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-24 bg-background rounded-lg border border-border flex items-center justify-center"
            >
              <span className="text-muted-foreground text-sm">
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
