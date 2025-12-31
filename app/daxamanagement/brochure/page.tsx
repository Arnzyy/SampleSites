"use client";

import Image from "next/image";

export default function BrochurePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Print Button - hidden when printing */}
      <div className="print:hidden fixed top-4 right-4 z-50">
        <button
          onClick={handlePrint}
          className="px-6 py-3 bg-gradient-to-r from-rose-400 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download PDF
        </button>
      </div>

      <div className="brochure-container">
        {/* Page 1: Cover */}
        <section className="brochure-page bg-slate-800 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "24px 24px",
              }}
            />
          </div>

          <div className="relative z-10 h-full flex flex-col">
            {/* Logo */}
            <div className="p-8">
              <Image
                src="/daxamanagement/logo.png"
                alt="DAXA Management"
                width={180}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </div>

            {/* Property Images Grid */}
            <div className="flex-1 px-8 pb-8">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/daxamanagement/brochure/property1.jfif"
                    alt="Property"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/daxamanagement/brochure/property2.webp"
                    alt="Property"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/daxamanagement/brochure/property3.webp"
                    alt="Property"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/daxamanagement/brochure/property4.jpg"
                    alt="Property"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Tagline */}
            <div className="p-8 text-center">
              <h1 className="text-3xl font-bold text-white mb-2">
                Professional Property Management
              </h1>
              <p className="text-rose-300 text-lg">
                Taking the stress out of being a landlord
              </p>
            </div>
          </div>
        </section>

        {/* Page 2: About Us */}
        <section className="brochure-page bg-white">
          <div className="h-full flex flex-col items-center justify-center p-12 text-center">
            {/* House Icon */}
            <div className="w-32 h-32 mb-8 text-slate-700">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 3L2 12h3v9h6v-6h2v6h6v-9h3L12 3zm0 2.84L18 11v8h-2v-6H8v6H6v-8l6-5.16z"/>
              </svg>
            </div>

            <h2 className="text-4xl font-bold text-slate-800 mb-6">About Us</h2>

            <div className="max-w-xl space-y-4 text-slate-600 leading-relaxed">
              <p>
                DAXA Management is a professional HMO property management company
                based in London. We specialize in managing Houses in Multiple
                Occupation, providing landlords with a complete, hands-off
                property management solution.
              </p>
              <p>
                With years of experience in the London rental market, we understand
                the unique challenges that come with HMO properties. Our dedicated
                team handles everything from tenant sourcing and rent collection
                to maintenance and compliance management.
              </p>
              <p>
                We pride ourselves on transparent communication, competitive rates,
                and a genuine commitment to maximizing your rental income while
                minimizing your stress.
              </p>
            </div>
          </div>
        </section>

        {/* Page 3: Introduction / Services Overview */}
        <section className="brochure-page bg-slate-50">
          <div className="h-full p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We offer a comprehensive range of property management services
                designed to make your life easier.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: "Guaranteed Rent",
                  desc: "Receive your rent every month, guaranteed, regardless of occupancy.",
                  icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                },
                {
                  title: "Tenant Sourcing",
                  desc: "We find and vet quality tenants quickly, minimizing void periods.",
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                },
                {
                  title: "Rent Collection",
                  desc: "Automated rent collection with proactive arrears management.",
                  icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
                },
                {
                  title: "Property Maintenance",
                  desc: "24/7 emergency response and regular maintenance coordination.",
                  icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                },
                {
                  title: "Compliance Management",
                  desc: "We ensure your property meets all HMO licensing requirements.",
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                },
                {
                  title: "Financial Reporting",
                  desc: "Monthly statements and full transparency on income and expenses.",
                  icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={service.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Page 4: Service Cards */}
        <section className="brochure-page bg-white">
          <div className="h-full p-12">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">
                Why Choose DAXA?
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { title: "No Hidden Fees", color: "bg-rose-500", desc: "Transparent pricing with everything included" },
                { title: "24/7 Support", color: "bg-slate-700", desc: "Round-the-clock emergency assistance" },
                { title: "Quick Turnaround", color: "bg-pink-500", desc: "Average 2-3 weeks to fill vacancies" },
                { title: "Expert Team", color: "bg-slate-600", desc: "Years of HMO management experience" },
                { title: "Full Compliance", color: "bg-rose-400", desc: "All licensing and safety requirements handled" },
                { title: "Online Portal", color: "bg-slate-800", desc: "Real-time access to your property data" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${item.color} rounded-2xl p-6 text-white text-center`}
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-slate-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-slate-600 mb-6">
                Contact us today for a free, no-obligation consultation.
              </p>
              <div className="flex justify-center gap-8 text-slate-700">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>020 3669 4166</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@daxamanagement.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Page 5: Numbers Comparison */}
        <section className="brochure-page bg-slate-800">
          <div className="h-full p-12">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-white mb-4">
                The Numbers Speak
              </h2>
              <p className="text-slate-300">
                See how we compare to self-managing your property
              </p>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-4 text-slate-800 font-semibold">Item</th>
                    <th className="text-center p-4 text-slate-800 font-semibold">Self-Managed</th>
                    <th className="text-center p-4 text-rose-600 font-semibold">With DAXA</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-t">
                    <td className="p-4">Time spent per month</td>
                    <td className="text-center p-4">20+ hours</td>
                    <td className="text-center p-4 text-rose-600 font-semibold">0 hours</td>
                  </tr>
                  <tr className="border-t bg-slate-50">
                    <td className="p-4">Average void period</td>
                    <td className="text-center p-4">4-6 weeks</td>
                    <td className="text-center p-4 text-rose-600 font-semibold">2-3 weeks</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">Emergency callouts</td>
                    <td className="text-center p-4">Your problem</td>
                    <td className="text-center p-4 text-rose-600 font-semibold">Handled 24/7</td>
                  </tr>
                  <tr className="border-t bg-slate-50">
                    <td className="p-4">Compliance stress</td>
                    <td className="text-center p-4">High</td>
                    <td className="text-center p-4 text-rose-600 font-semibold">Zero</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4">Rent arrears risk</td>
                    <td className="text-center p-4">100%</td>
                    <td className="text-center p-4 text-rose-600 font-semibold">Guaranteed*</td>
                  </tr>
                  <tr className="border-t bg-slate-50">
                    <td className="p-4">Peace of mind</td>
                    <td className="text-center p-4">Limited</td>
                    <td className="text-center p-4 text-rose-600 font-semibold">Complete</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-slate-400 text-sm text-center mt-4">
              *With our Rent Guarantee service
            </p>

            <div className="mt-8 text-center">
              <Image
                src="/daxamanagement/logo.png"
                alt="DAXA Management"
                width={150}
                height={50}
                className="mx-auto h-12 w-auto object-contain"
              />
              <p className="text-slate-400 mt-4">
                www.daxamanagement.com
              </p>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
          }
          .brochure-container {
            display: block;
          }
          .brochure-page {
            page-break-after: always;
            page-break-inside: avoid;
            height: 297mm;
            width: 210mm;
            overflow: hidden;
          }
          .brochure-page:last-child {
            page-break-after: auto;
          }
        }

        @media screen {
          .brochure-container {
            max-width: 210mm;
            margin: 0 auto;
            background: #f1f5f9;
            padding: 20px 0;
          }
          .brochure-page {
            height: 297mm;
            width: 210mm;
            margin: 20px auto;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
          }
        }
      `}</style>
    </>
  );
}
