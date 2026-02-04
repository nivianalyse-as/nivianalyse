import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InspirasjonListing from "@/components/InspirasjonListing";

const Inspirasjon = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <InspirasjonListing />
      </main>
      <Footer />
    </div>
  );
};

export default Inspirasjon;
