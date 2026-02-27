import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Header />
      <main id="main-content">
        <InspirasjonListing />
      </main>
      <Footer />
    </div>
  );
};

export default Inspirasjon;
