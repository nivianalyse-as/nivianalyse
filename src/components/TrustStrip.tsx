import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TrustStrip = () => {
  return (
    <section className="bg-[#F7F9F8] pt-20 pb-24 md:pt-20 md:pb-18 border-t border-black/5">
      <div className="container-narrow py-6 md:py-7">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-[15px] md:text-base text-muted-foreground tracking-[-0.01em]">
            <span className="text-base font-semibold tracking-wide text-primary">NIVI i media:</span>{" "}
            <a
              href="https://www.utdanningsnytt.no/kommuneokonomi-skolenedleggelse/skoler-med-under-50-elever-burde-vaert-forbudt/475972"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/75 hover:text-accent hover:underline underline-offset-4 transition-colors duration-200"
            >
              Utdanningsnytt
            </a>
            <span className="mx-2 text-primary/30">·</span>
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
