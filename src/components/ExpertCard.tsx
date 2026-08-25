import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import type { Expert } from "@/data/experts";

interface ExpertCardProps {
  expert: Expert;
}

export const ExpertCard = ({ expert }: ExpertCardProps) => {
  return (
    <div className="card-premium overflow-hidden flex flex-col transition-all duration-200 h-full">
      <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden">
        <img
          src={expert.image}
          alt={`${expert.name}, ${expert.title}`}
          width={600}
          height={750}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-[center_15%]"
        />
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <h3 className="text-xl md:text-2xl font-semibold mb-0.5" style={{ lineHeight: 1.3 }}>
          {expert.name}
        </h3>
        <p className="text-primary font-semibold text-sm mb-0.5">
          {expert.title}
        </p>
        {expert.secondaryRole && (
          <p className="text-primary/80 text-xs mb-4">
            {expert.secondaryRole}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {expert.expertise.map((skill) => (
            <span key={skill} className="chip chip-default">
              {skill}
            </span>
          ))}
        </div>

        <p
          className="text-sm mb-4 line-clamp-5"
          style={{ color: "hsl(168, 20%, 28%)", lineHeight: 1.65 }}
        >
          {expert.description}
        </p>

        {(expert.phone || expert.email) && (
          <div
            className="text-sm mb-4 space-y-1"
            style={{ color: "hsl(168, 20%, 28%)", lineHeight: 1.65 }}
          >
            {expert.phone && (
              <p>
                Mobil:{" "}
                <a
                  href={`tel:${expert.phone.replace(/\s/g, "")}`}
                  aria-label={`Ring ${expert.name} på ${expert.phone}`}
                  className="hover:text-accent transition-colors"
                >
                  {expert.phone}
                </a>
              </p>
            )}
            {expert.email && (
              <p>
                E-post:{" "}
                <a
                  href={`mailto:${expert.email}`}
                  aria-label={`Send e-post til ${expert.name}`}
                  className="hover:text-accent transition-colors"
                >
                  {expert.email}
                </a>
              </p>
            )}
          </div>
        )}

        <div className="flex flex-col gap-2 mt-auto">
          {expert.cv ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="default"
                  size="sm"
                  className="gap-2 w-full sm:w-auto"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Les CV
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold">
                    {expert.name}
                  </DialogTitle>
                  <p className="text-sm text-muted-foreground">{expert.title}</p>
                </DialogHeader>

                <div className="space-y-5 mt-4">
                  <p className="text-sm text-foreground leading-relaxed">
                    {expert.cv.intro}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2.5">
                      Nøkkelerfaring
                    </h4>
                    <ul className="space-y-2">
                      {expert.cv.keyExperience.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-border">
                    <h4 className="text-sm font-semibold text-foreground mb-1">
                      Utdanning
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {expert.cv.education}
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ) : expert.cvLink ? (
            <Button asChild variant="default" size="sm" className="gap-2 w-full sm:w-auto">
              <a href={expert.cvLink} target="_blank" rel="noopener noreferrer">
                <FileText className="w-3.5 h-3.5" />
                Les CV
              </a>
            </Button>
          ) : null}

          {expert.cvPdf && (
            <Button asChild variant="outline" size="sm" className="gap-2 w-full sm:w-auto">
              <a href={expert.cvPdf} target="_blank" rel="noopener noreferrer">
                <Download className="w-3.5 h-3.5" />
                Last ned full CV (PDF)
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
