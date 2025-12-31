import AnnouncementBar from "@/components/withhuk/AnnouncementBar";
import Header from "@/components/withhuk/Header";
import Hero from "@/components/withhuk/Hero";
import ProductGrid from "@/components/withhuk/ProductGrid";
import Footer from "@/components/withhuk/Footer";
import { latestArrivals, featuredProducts } from "@/data/products";

export default function WithhukPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Latest Arrivals */}
        <ProductGrid
          title="LATEST ARRIVALS"
          subtitle="Discover what's new this week"
          products={latestArrivals}
          viewAllHref="/withhuk/latest"
          columns={4}
        />

        {/* Divider */}
        <div className="container mx-auto px-4 lg:px-8">
          <div className="h-px bg-neutral-100" />
        </div>

        {/* Featured Products */}
        <ProductGrid
          title="FEATURED"
          subtitle="Hand-picked favourites from our collection"
          products={featuredProducts}
          viewAllHref="/withhuk/featured"
          columns={4}
        />

        {/* Trust Badges Section */}
        <section className="py-16 lg:py-24 bg-neutral-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {[
                {
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  ),
                  title: "AUTHENTICITY GUARANTEED",
                  description: "Every item verified by experts",
                },
                {
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  ),
                  title: "FREE SHIPPING",
                  description: "On orders over £150",
                },
                {
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  ),
                  title: "EASY RETURNS",
                  description: "14-day return policy",
                },
                {
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  ),
                  title: "SECURE PAYMENT",
                  description: "All major cards accepted",
                },
              ].map((badge) => (
                <div key={badge.title} className="text-center">
                  <div className="inline-flex items-center justify-center text-neutral-700 mb-4">
                    {badge.icon}
                  </div>
                  <h3 className="text-[10px] tracking-[0.2em] font-medium text-neutral-900 mb-2">
                    {badge.title}
                  </h3>
                  <p className="text-xs text-neutral-500">{badge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
