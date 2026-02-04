import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TrustStrip = () => {
  return (
    <section className="bg-background border-b border-border/50">
      <div className="container max-w-6xl mx-auto px-4 py-4 md:py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm md:text-base text-muted-foreground">
            <span className="font-medium text-foreground">Omtalt i:</span>{" "}
            Kommunal Rapport · NRK · debatt og fagpresse
          </p>
          <Link 
            to="/i-media" 
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            Se alle omtaler
            <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
