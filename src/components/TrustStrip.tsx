import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TrustStrip = () => {
  return (
    <section className="bg-[#F7F9F8] pt-24 pb-24 md:pt-28 md:pb-24 border-t border-black/5">
      <div className="container-narrow">
        <div className="flex flex-col items-center text-center gap-5">
          <h2 className="text-[1.35rem] md:text-[1.55rem] font-semibold text-primary tracking-[-0.01em]">
            NIVI i media
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-[15px] md:text-base">
            <a
              href="https://www.utdanningsnytt.no/kommuneokonomi-skolenedleggelse/skoler-med-under-50-elever-burde-vaert-forbudt/475972"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/75 hover:text-accent hover:underline underline-offset-4 transition-colors duration-200"
            >
              Utdanningsnytt
            </a>
            <span className="mx-2 text-primary/30">·</span>
            <a
              href="#"
              className="text-primary/75 hover:text-accent hover:underline underline-offset-4 transition-colors duration-200"
            >
              Kommunal Rapport
            </a>
            <span className="mx-2 text-primary/30">·</span>
            <a
              href="#"
              className="text-primary/75 hover:text-accent hover:underline underline-offset-4 transition-colors duration-200"
            >
              NRK
            </a>
            <span className="mx-2 text-primary/30">·</span>
            <a
              href="#"
              className="text-primary/75 hover:text-accent hover:underline underline-offset-4 transition-colors duration-200"
            >
              debatt og fagpresse
            </a>
          </div>
          <Link 
            to="/i-media" 
            className="group inline-flex items-center gap-2 text-[14px] font-medium text-primary hover:text-accent hover:underline underline-offset-4 transition-colors duration-200 mt-1"
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
