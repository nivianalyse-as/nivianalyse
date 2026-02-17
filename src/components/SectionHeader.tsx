interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  as?: "h1" | "h2";
}

const SectionHeader = ({ title, subtitle, as: Tag = "h2" }: SectionHeaderProps) => {
  return (
    <div className="max-w-6xl mx-auto px-6 text-center">
      <Tag
        className="text-[2.1rem] md:text-[2.65rem] font-semibold text-primary"
        style={{ lineHeight: 1.25 }}
      >
        {title}
      </Tag>
      <div className="mx-auto h-[2px] w-16 bg-primary/60 rounded-full" style={{ marginTop: '16px', marginBottom: '24px' }} />
      {subtitle && (
        <p className="max-w-[720px] mx-auto text-muted-foreground" style={{ fontSize: '1.065rem', lineHeight: 1.6, color: 'hsl(168, 30%, 30%)' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
