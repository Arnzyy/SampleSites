import Header from "@/components/daxabuildingsolutions/Header";
import Hero from "@/components/daxabuildingsolutions/Hero";
import Services from "@/components/daxabuildingsolutions/Services";
import Gallery from "@/components/daxabuildingsolutions/Gallery";
import Reviews from "@/components/daxabuildingsolutions/Reviews";
import Contact from "@/components/daxabuildingsolutions/Contact";
import Footer from "@/components/daxabuildingsolutions/Footer";

export default function DaxaBuildingSolutionsPage() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
