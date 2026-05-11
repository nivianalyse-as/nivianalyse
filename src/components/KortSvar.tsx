interface KortSvarProps {
  ingress: string;
  text: string;
}

const KortSvar = ({ ingress, text }: KortSvarProps) => {
  return (
    <aside
      className="border-l-4 border-primary bg-bg-alt rounded-r-lg p-6 md:p-7 max-w-3xl"
      aria-label="Kort svar"
    >
      <div
        className="text-xs font-semibold tracking-[0.12em] uppercase text-accent"
        style={{ marginBottom: "10px" }}
      >
        Kort svar
      </div>
      <p
        className="font-semibold text-primary"
        style={{ fontSize: "1.15rem", lineHeight: 1.4, marginBottom: "10px" }}
      >
        {ingress}
      </p>
      <p
        className="text-muted-foreground"
        style={{ fontSize: "1rem", lineHeight: 1.65, color: "hsl(168, 30%, 30%)" }}
      >
        {text}
      </p>
    </aside>
  );
};

export default KortSvar;
