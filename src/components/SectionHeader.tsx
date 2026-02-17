interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  as?: "h1" | "h2";
}

const SectionHeader = ({ title, subtitle, as: Tag = "h2" }: SectionHeaderProps) => {
  return (
    <div className="max-w-6xl mx-auto px-6 text-center">
      <Tag
        className="text-primary font-semibold"
        style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: 1.25 }}
      >
        {title}
      </Tag>
      <div className="mx-auto h-[2px] w-16 bg-primary/60 rounded-full" style={{ marginTop: '16px', marginBottom: '24px' }} />
      {subtitle && (
        <p className="mx-auto text-lg leading-relaxed" style={{ maxWidth: '720px', lineHeight: 1.6, color: 'hsl(168, 30%, 30%)' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
