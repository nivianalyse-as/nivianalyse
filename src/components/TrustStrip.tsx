import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TrustStrip = () => {
  return (
    <section className="bg-[#F7F9F8] pt-16 pb-20 md:pt-16 md:pb-14 border-t border-black/5">
      <div className="container-narrow py-5 md:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[14px] md:text-[15px] text-muted-foreground tracking-[-0.01em]">
            <span className="text-sm font-medium tracking-wide text-primary">NIVI i media:</span>{" "}
            <span className="text-primary/75">Kommunal Rapport</span>
            <span className="mx-2 text-primary/30">·</span>
            <span className="text-primary/75">NRK</span>
            <span className="mx-2 text-primary/30">·</span>
            <span className="text-primary/75">debatt og fagpresse</span>
          </p>
          <Link 
            to="/i-media" 
            className="group inline-flex items-center gap-2 text-[14px] font-medium text-primary hover:text-accent hover:underline underline-offset-4 transition-colors duration-200 mt-6 sm:mt-0"
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
