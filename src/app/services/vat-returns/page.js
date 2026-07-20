import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "VAT Returns London | MTD for VAT Service | ScaleUp Accounting",
  description:
    "Professional VAT return preparation and digital submission for UK businesses. MTD-compliant VAT service, all VAT schemes supported. AAT Licensed Accountants in London.",
  alternates: {
    canonical: "https://www.scaleupaccounting.uk/services/vat-returns",
  },
  openGraph: {
    title: "VAT Returns London | ScaleUp Accounting Ltd",
    description:
      "MTD-compliant VAT return preparation and HMRC digital submission by AAT Licensed Accountants.",
    url: "https://www.scaleupaccounting.uk/services/vat-returns",
  },
};

const faqs = [
  {
    q: "When do I need to register for VAT?",
    a: "You must register for VAT when your taxable turnover exceeds £90,000 in any rolling 12-month period. You can also register voluntarily below this threshold, which may be beneficial if you have significant VAT-bearing costs to reclaim. You must notify HMRC within 30 days of exceeding the threshold.",
  },
  {
    q: "What VAT schemes are available for small businesses?",
    a: "HMRC offers several schemes suited to small businesses. The Flat Rate Scheme (FRS) allows businesses with taxable turnover under £150,000 to pay a fixed percentage of gross turnover rather than calculating VAT on individual transactions. The Cash Accounting Scheme allows VAT to be accounted for on the basis of payments received rather than invoices issued, which is beneficial for businesses with slow-paying customers. The Annual Accounting Scheme allows a single VAT return per year with advance payments.",
  },
  {
    q: "When are VAT returns due?",
    a: "VAT returns are generally due one calendar month and seven days after the end of your VAT period (e.g. if your quarter ends 31 March, the return and payment are due 7 May). Businesses on the Annual Accounting Scheme submit one return per year. Businesses on the Payment on Account scheme submit quarterly returns with advance payments.",
  },
  {
    q: "What is Making Tax Digital for VAT?",
    a: "Making Tax Digital for VAT requires all VAT-registered businesses to maintain digital records and submit VAT returns using HMRC-compatible software. Manual transfer of data between different software or systems (other than through approved digital links) is not permitted. ScaleUp Accounting Ltd handles MTD-compliant VAT submissions using Xero, QuickBooks, FreeAgent, and Sage.",
  },
  {
    q: "What happens if I submit a VAT return late?",
    a: "HMRC has introduced a new penalty points system for late VAT returns since January 2023. Each late submission earns a penalty point, and a financial penalty is charged once you reach the points threshold (1 point = £200 for quarterly filers, threshold is 4 points). Persistent late submission results in ongoing financial penalties. Late payment of VAT also incurs interest charges.",
  },
];

export default function VatReturnsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AccountingService",
        "@id": "https://www.scaleupaccounting.uk/services/vat-returns#service",
        name: "VAT Returns Service",
        provider: { "@id": "https://www.scaleupaccounting.uk/#organization" },
        url: "https://www.scaleupaccounting.uk/services/vat-returns",
        description: "MTD-compliant VAT return preparation and digital submission for UK businesses. All VAT schemes supported.",
        areaServed: { "@type": "Country", name: "United Kingdom" },
        serviceType: "VAT Returns",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.scaleupaccounting.uk" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.scaleupaccounting.uk/#services" },
          { "@type": "ListItem", position: 3, name: "VAT Returns", item: "https://www.scaleupaccounting.uk/services/vat-returns" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <main className="bg-[#FDFCFB] text-[#0A1A2F]">
      <Navbar />

      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-5 lg:px-12 max-w-[86rem] mx-auto">
        <div className="max-w-3xl mb-16">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] text-[#0A1A2F]/40 mb-8">
            <a href="/" className="hover:text-[#0A1A2F] transition-colors">Home</a>
            <span aria-hidden="true">/</span>
            <a href="/#services" className="hover:text-[#0A1A2F] transition-colors">Services</a>
            <span aria-hidden="true">/</span>
            <span className="text-[#0A1A2F]/70">VAT Returns</span>
          </nav>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#C8A96A] to-transparent" aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#C8A96A]">MTD for VAT · HMRC Digital</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-light font-heading leading-[1.1] tracking-tight mb-6">
            VAT Return{" "}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A2F] via-[#2F5B8C] to-[#1E3A5F]">
              Services
            </span>
          </h1>
          <p className="text-[#0A1A2F]/60 text-lg md:text-xl font-light leading-[1.8]">
            Professional, MTD-compliant VAT return preparation and digital submission for UK sole traders, partnerships, and limited companies. All VAT schemes supported, deadlines never missed.
          </p>
        </div>

        <div className="max-w-4xl space-y-8 mb-20">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">Our VAT Service</h2>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light mb-4">
              ScaleUp Accounting Ltd prepares and submits VAT returns for clients across all VAT schemes. We review your digital records, calculate the VAT due or reclaimable for the period, prepare the return, and submit it digitally to HMRC via Making Tax Digital-compatible software before the deadline.
            </p>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light">
              We also advise on the most appropriate VAT scheme for your business — the Flat Rate Scheme, Cash Accounting Scheme, or Annual Accounting Scheme may each offer cash flow or administrative advantages depending on your trading pattern and customer base.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">VAT Schemes We Support</h2>
            <div className="space-y-4">
              {[
                { name: "Standard VAT Accounting", desc: "The default scheme — VAT is accounted for on the basis of invoices issued and received. Suitable for most VAT-registered businesses." },
                { name: "Flat Rate Scheme (FRS)", desc: "Pay a fixed percentage of gross turnover. Reduces administrative complexity and can be financially advantageous for service businesses with low VAT costs." },
                { name: "Cash Accounting Scheme", desc: "VAT is accounted for only when payments are received or made. Improves cash flow for businesses with slow-paying customers." },
                { name: "Annual Accounting Scheme", desc: "Single VAT return per year with advance payments based on previous year's liability. Reduces filing frequency for qualifying businesses." },
              ].map((scheme) => (
                <div key={scheme.name} className="p-4 rounded-xl bg-[#F5F7FA] border border-[#0A1A2F]/[0.04]">
                  <p className="font-medium text-[#0A1A2F] mb-1">{scheme.name}</p>
                  <p className="text-[14px] text-[#0A1A2F]/60 font-light leading-[1.6]">{scheme.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#C8A96A] to-transparent" aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#0A1A2F]/50">Frequently Asked Questions</span>
          </div>
          <div className="space-y-4 mb-16">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 md:p-8 border border-[#0A1A2F]/[0.05] shadow-[0_4px_20px_rgba(10,26,47,0.02)]">
                <h3 className="text-[16px] font-medium text-[#0A1A2F] mb-3 leading-[1.4]">{faq.q}</h3>
                <p className="text-[#0A1A2F]/60 text-[15px] font-light leading-[1.7]">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#0F172A] rounded-[2rem] p-8 md:p-12 text-white">
            <h2 className="text-2xl font-medium font-heading mb-4">Never miss a VAT deadline</h2>
            <p className="text-white/60 font-light leading-[1.7] mb-8">Contact ScaleUp Accounting Ltd to discuss your VAT obligations. We will confirm a fixed fee for quarterly or annual VAT return preparation and submission.</p>
            <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#0A1A2F] text-[13px] font-medium rounded-[7px] hover:bg-white/90 transition-colors duration-300">
              Book a Free Consultation
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Footer />
    </main>
  );
}
