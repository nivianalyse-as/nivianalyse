import visualBreakImage from "@/assets/nivi-havard-bente.jpg";

const VisualBreakSection = () => {
  return (
    <section className="w-full bg-background" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl overflow-hidden shadow-sm">
          <img
            src={visualBreakImage}
            alt="Håvard Moe og Bente Rudrud Hærdlevær i samtale – NIVI Analyse"
            className="w-full h-[400px] md:h-[500px] object-cover object-center"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default VisualBreakSection;
