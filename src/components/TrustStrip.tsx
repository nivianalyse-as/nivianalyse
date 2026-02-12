import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TrustStrip = () => {
  return (
    <section className="bg-background">
      <div className="container-narrow py-5 md:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[14px] md:text-[15px] text-muted-foreground tracking-[-0.01em]">
            <span className="font-semibold text-primary">NIVI i media:</span>{" "}
            <span className="text-primary/75">Kommunal Rapport</span>
            <span className="mx-2 text-primary/30">·</span>
            <span className="text-primary/75">NRK</span>
            <span className="mx-2 text-primary/30">·</span>
            <span className="text-primary/75">debatt og fagpresse</span>
          </p>
          <Link 
            to="/i-media" 
            className="group inline-flex items-center gap-2 text-[14px] font-medium text-primary hover:text-accent transition-colors duration-200"
          >
            Se alle omtaler
            <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
