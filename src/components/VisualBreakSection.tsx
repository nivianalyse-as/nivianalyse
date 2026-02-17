import visualBreakImage from "@/assets/nivi-visual-break.jpg";

const VisualBreakSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl overflow-hidden shadow-sm">
          <img
            src={visualBreakImage}
            alt="Håvard Moe og Geir Vinsand i møterom – NIVI Analyse"
            className="w-full h-[400px] md:h-[500px] object-cover object-[85%_center]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default VisualBreakSection;
