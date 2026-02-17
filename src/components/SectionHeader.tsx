interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  as?: "h1" | "h2";
}

const SectionHeader = ({ title, subtitle, as: Tag = "h2" }: SectionHeaderProps) => {
  return (
    <div className="max-w-6xl mx-auto px-6 text-center">
      <Tag className="text-4xl md:text-5xl font-semibold text-primary">
        {title}
      </Tag>
      <div className="mx-auto mt-4 mb-6 h-[2px] w-16 bg-primary/60 rounded-full" />
      {subtitle && (
        <p className="max-w-2xl mx-auto mt-8 text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
