import { useEffect } from "react";
import { useParams, Link, Navigate } from "@/lib/router-compat";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import KortSvar from "@/components/KortSvar";
import { getFagomradeBySlug } from "@/data/fagomrader";

const FagomradePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const fag = getFagomradeBySlug(slug || "");

  useEffect(() => {
    if (!fag || !fag.faq?.length) return;
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: fag.faq.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: { "@type": "Answer", text: q.answer },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = `faq-jsonld-${fag.slug}`;
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [fag]);

  if (!fag) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen">
      <SEOHead
        title={`${fag.title} | NIVI Analyse`}
        description={fag.kortSvar.text.substring(0, 155)}
      />
      <Header />
      <main id="main-content">
        <section className="bg-background" style={{ paddingTop: "72px", paddingBottom: "32px" }}>
          <div className="container-narrow">
            <Link
              to="/#fagomrader"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Tilbake til fagområder
            </Link>

            <h1
              className="text-2xl md:text-3xl font-semibold text-primary mb-4"
              style={{ lineHeight: 1.25 }}
            >
              {fag.title}
            </h1>
            <div className="h-[2px] w-10 bg-accent/80 rounded-full mb-5" />
            <p
              className="text-muted-foreground max-w-[680px]"
              style={{ fontSize: "1.05rem", lineHeight: 1.65 }}
            >
              {fag.description}
            </p>
          </div>
        </section>

        <section style={{ paddingTop: "16px", paddingBottom: "96px" }}>
          <div className="container-narrow">
            <KortSvar ingress={fag.kortSvar.ingress} text={fag.kortSvar.text} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FagomradePage;
