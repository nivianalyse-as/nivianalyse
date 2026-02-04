import { Link } from "react-router-dom";
import { Radio, Calendar, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DebattEntry } from "@/types/content";

interface DebattCardProps {
  entry: DebattEntry;
  variant?: "compact" | "full";
}

const DebattCard = ({ entry, variant = "compact" }: DebattCardProps) => {
  if (variant === "compact") {
    return (
      <Link
        to={`/inspirasjon/${entry.slug}`}
        className="group card-premium p-5 md:p-6 block"
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="flex items-center gap-1.5 px-3 py-1 bg-secondary/40 rounded-full text-xs font-medium text-primary">
            <Radio className="w-3 h-3" />
            {entry.channel}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            {entry.date}
          </span>
        </div>
        
        <h3 className="text-base md:text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
          {entry.programName}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {entry.topic}
        </p>
        
        {entry.participant && (
          <p className="text-xs text-muted-foreground mt-2">
            Med: {entry.participant}
          </p>
        )}
      </Link>
    );
  }

  // Full variant
  return (
    <div className="card-premium p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary/40 rounded-full text-sm font-medium text-primary">
          <Radio className="w-4 h-4" />
          {entry.channel}
        </span>
        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          {entry.date}
        </span>
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold mb-3">
        {entry.programName}
      </h3>
      
      <p className="text-muted-foreground text-base leading-relaxed mb-2">
        Tema: {entry.topic}
      </p>
      
      {entry.participant && (
        <p className="text-muted-foreground text-sm mb-6">
          Med: {entry.participant}
        </p>
      )}
      
      {entry.videoUrl && (
        <Button variant="cta" size="default" asChild>
          <a href={entry.videoUrl} target="_blank" rel="noopener noreferrer">
            <Play className="w-4 h-4 mr-2" />
            Se sendingen
          </a>
        </Button>
      )}
    </div>
  );
};

export default DebattCard;
