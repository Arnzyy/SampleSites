import Header from "@/components/irent/Header";
import Hero from "@/components/irent/Hero";
import Services from "@/components/irent/Services";
import Stats from "@/components/irent/Stats";
import HowItWorks from "@/components/irent/HowItWorks";
import Testimonials from "@/components/irent/Testimonials";
import FAQ from "@/components/irent/FAQ";
import CTA from "@/components/irent/CTA";
import Footer from "@/components/irent/Footer";

export default function DaxaManagementPage() {
  return (
    <div className="min-h-screen bg-white antialiased">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Stats Section */}
        <Stats />

        {/* How It Works */}
        <HowItWorks />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ */}
        <FAQ />

        {/* CTA Section */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
