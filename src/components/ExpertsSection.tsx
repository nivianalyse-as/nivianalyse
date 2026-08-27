import SectionHeader from "@/components/SectionHeader";
import ExpertCard from "@/components/ExpertCard";
import { experts } from "@/data/experts";

interface ExpertsSectionProps {
  subtitle?: string;
}

const ExpertsSection = ({ subtitle = "Over 60 års samlet erfaring fra kommunesektoren." }: ExpertsSectionProps) => {
  return (
    <section
      id="eksperter"
      style={{
        backgroundColor: "hsl(150 10% 97%)",
        paddingTop: "112px",
        paddingBottom: "112px",
      }}
    >
      <div className="container-narrow">
        <div style={{ marginBottom: "56px" }}>
          <SectionHeader
            title="Møt ekspertene"
            subtitle={subtitle}
          />
        </div>

        <div className="grid sm:grid-cols-2 auto-rows-fr items-stretch gap-y-8 gap-x-5 lg:gap-x-10 max-w-4xl mx-auto">
          {experts.map((expert) => (
            <ExpertCard key={expert.name} expert={expert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
