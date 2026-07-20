import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Bookkeeping Services London | AAT Licensed Bookkeepers | ScaleUp Accounting",
  description:
    "Professional bookkeeping services for UK small businesses. MTD-compliant digital bookkeeping using Xero, QuickBooks, and Sage by AAT Licensed Accountants in London.",
  alternates: {
    canonical: "https://www.scaleupaccounting.uk/services/bookkeeping",
  },
  openGraph: {
    title: "Bookkeeping Services London | ScaleUp Accounting Ltd",
    description:
      "MTD-compliant digital bookkeeping for UK businesses. AAT Licensed, cloud-based, accurate.",
    url: "https://www.scaleupaccounting.uk/services/bookkeeping",
  },
};

const faqs = [
  {
    q: "What records does my business need to keep for HMRC?",
    a: "HMRC requires businesses to keep records of all income and expenses, bank statements, invoices, receipts, and payroll records. Under Making Tax Digital (MTD), these records must be maintained digitally using compatible software. Records must generally be kept for at least 5 years after the 31 January Self Assessment deadline for sole traders, or 6 years from the end of the accounting period for companies.",
  },
  {
    q: "How often will you update my books?",
    a: "We offer weekly, fortnightly, and monthly bookkeeping depending on your transaction volume and business needs. For businesses preparing for MTD for Income Tax, we recommend at minimum monthly bookkeeping to ensure quarterly update submissions are accurate and timely.",
  },
  {
    q: "Which accounting software do you use?",
    a: "ScaleUp Accounting Ltd works with Xero, QuickBooks, FreeAgent, and Sage 50 — all of which are HMRC-recognised for MTD compliance. We can onboard you to any of these platforms and ensure your chart of accounts is correctly configured for your industry.",
  },
  {
    q: "Can you take over my bookkeeping from my current provider?",
    a: "Yes. We handle transitions from other accountants and bookkeepers regularly. We will request your historical data and access from your previous provider, review your records for accuracy, and ensure a smooth handover. We can also clean up or reconcile historic books if they require correcting.",
  },
  {
    q: "Do I need a bookkeeper if I use accounting software myself?",
    a: "Many business owners use accounting software but still benefit from a professional bookkeeper reviewing their records regularly. Common issues include incorrect VAT coding, miscategorised expenses, and unreconciled bank items. A regular professional review ensures your books are accurate and your tax position is correct.",
  },
];

export default function BookkeepingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AccountingService",
        "@id": "https://www.scaleupaccounting.uk/services/bookkeeping#service",
        name: "Bookkeeping Services",
        provider: { "@id": "https://www.scaleupaccounting.uk/#organization" },
        url: "https://www.scaleupaccounting.uk/services/bookkeeping",
        description:
          "MTD-compliant digital bookkeeping for UK sole traders and small businesses. AAT Licensed, cloud-based using Xero, QuickBooks, FreeAgent, and Sage.",
        areaServed: { "@type": "Country", name: "United Kingdom" },
        serviceType: "Bookkeeping",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.scaleupaccounting.uk" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.scaleupaccounting.uk/#services" },
          { "@type": "ListItem", position: 3, name: "Bookkeeping", item: "https://www.scaleupaccounting.uk/services/bookkeeping" },
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
            <span className="text-[#0A1A2F]/70">Bookkeeping</span>
          </nav>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#C8A96A] to-transparent" aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#C8A96A]">AAT Licensed · MTD 2026</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-light font-heading leading-[1.1] tracking-tight mb-6">
            Bookkeeping{" "}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A2F] via-[#2F5B8C] to-[#1E3A5F]">
              Services
            </span>
          </h1>
          <p className="text-[#0A1A2F]/60 text-lg md:text-xl font-light leading-[1.8]">
            Accurate, MTD-compliant digital bookkeeping for UK sole traders, partnerships, and small businesses — delivered by AAT Licensed Accountants using industry-leading cloud software.
          </p>
        </div>

        <div className="max-w-4xl space-y-8 mb-20">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">What Our Bookkeeping Service Includes</h2>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light mb-4">
              Our bookkeeping service covers the complete recording and categorisation of your business transactions. We maintain your accounts receivable and payable ledgers, perform regular bank reconciliations, and ensure your financial records accurately reflect the trading position of your business at all times.
            </p>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light">
              All bookkeeping is carried out in HMRC-compatible software (Xero, QuickBooks, FreeAgent, or Sage 50) and is prepared in compliance with Making Tax Digital requirements. For clients approaching the MTD for Income Tax threshold of £50,000, we can ensure a seamless transition to quarterly digital submissions.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">Why Accurate Bookkeeping Matters</h2>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light mb-4">
              Your bookkeeping is the foundation of every financial decision you make. Inaccurate records lead to incorrect VAT returns, overpaid or underpaid tax, and poor visibility over cash flow. HMRC may also require inspection of your records during an enquiry — accurate, well-maintained books are your best protection.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {[
                { stat: "MTD", label: "Compliant Software" },
                { stat: "AAT", label: "Licensed Oversight" },
                { stat: "5+yrs", label: "Record Retention" },
              ].map((item) => (
                <div key={item.label} className="text-center p-4 rounded-2xl bg-[#F5F7FA]">
                  <p className="text-2xl font-medium text-[#2F5B8C] mb-1">{item.stat}</p>
                  <p className="text-[11px] uppercase tracking-widest text-[#0A1A2F]/50 font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">Cloud Software We Use</h2>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light mb-6">
              We work with all major HMRC-recognised cloud accounting platforms. If you already use a platform, we can work within it. If you are starting fresh or moving from desktop software, we will recommend the best fit for your business type and transaction volume.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["Xero", "QuickBooks", "FreeAgent", "Sage 50"].map((sw) => (
                <div key={sw} className="flex items-center justify-center p-4 rounded-xl bg-[#F5F7FA] border border-[#0A1A2F]/[0.04]">
                  <span className="text-[14px] font-medium text-[#0A1A2F]/70">{sw}</span>
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
            <h2 className="text-2xl font-medium font-heading mb-4">Get a bookkeeping quote</h2>
            <p className="text-white/60 font-light leading-[1.7] mb-8">Contact ScaleUp Accounting Ltd for a tailored bookkeeping proposal. We will assess your transaction volume, software preferences, and reporting needs to recommend the right service level for your business.</p>
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
