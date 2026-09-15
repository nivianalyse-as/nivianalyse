import SEOHead from "@/components/SEOHead";
import InspirasjonListing from "@/components/InspirasjonListing";

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Faglige innsikter – NIVI Analyse",
  description: "Utvalgte faglige refleksjoner, prinsipper og analyser om kommunal utvikling, samarbeid, struktur og beredskap.",
  url: "https://nivianalyse.no/inspirasjon",
  inLanguage: "no",
  isPartOf: { "@type": "WebSite", name: "NIVI Analyse", url: "https://nivianalyse.no" }
};

const Inspirasjon = () => {
  return (
    <div className="min-h-screen">
      <SEOHead canonicalOnly />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <main id="main-content">
        <InspirasjonListing />
      </main>
    </div>
  );
};

export default Inspirasjon;
