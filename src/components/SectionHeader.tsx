interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  as?: "h1" | "h2";
}

const SectionHeader = ({ title, subtitle, centered = true, as: Tag = "h2" }: SectionHeaderProps) => {
  return (
    <div className={`max-w-6xl mx-auto px-6 ${centered ? "text-center" : ""}`}>
      <Tag className="text-4xl font-semibold text-primary">
        {title}
      </Tag>
      <div className={`h-[2px] w-20 mt-5 bg-primary/30 rounded-full ${centered ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className={`max-w-2xl mt-6 text-lg text-muted-foreground ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
