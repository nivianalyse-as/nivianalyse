import visualBreakImage from "@/assets/nivi-havard-bente.webp";

const VisualBreakSection = () => {
  return (
    <section className="w-full bg-background" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl overflow-hidden shadow-xs">
          <img
            src={visualBreakImage}
            alt="Håvard Moe og Bente Rudrud Herdlevær i samtale – NIVI Analyse"
            width={1920}
            height={1280}
            className="w-full h-auto object-contain"
            loading="lazy"
            decoding="async"
          />

        </div>
      </div>
    </section>
  );
};

export default VisualBreakSection;
