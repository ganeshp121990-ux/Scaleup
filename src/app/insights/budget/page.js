import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Autumn Budget 2026 Briefing | ScaleUp Accounting Insights",
  description:
    "A practical guide to the Autumn Budget 2026 announcements — corporation tax, income tax thresholds, capital gains, Making Tax Digital, and what UK businesses must do now.",
  alternates: {
    canonical: "https://www.scaleupaccounting.uk/insights/budget",
  },
  openGraph: {
    title: "Autumn Budget 2026 Briefing | ScaleUp Accounting",
    description:
      "Key Budget 2026 changes affecting sole traders, partnerships, and limited companies — explained by ScaleUp Accounting Ltd.",
    url: "https://www.scaleupaccounting.uk/insights/budget",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autumn Budget 2026 Briefing | ScaleUp Accounting",
  },
};

const faqs = [
  {
    q: "Has the corporation tax rate changed in Budget 2026?",
    a: "The corporation tax main rate remains at 25% for companies with profits over £250,000, and the small profits rate of 19% applies to companies with profits up to £50,000. Marginal relief continues for profits between these thresholds. Any Budget 2026 changes will be confirmed in the Finance Act that follows.",
  },
  {
    q: "What are the income tax threshold changes for 2026/27?",
    a: "The government has maintained the income tax thresholds freeze through 2026/27 as previously announced. The personal allowance remains at £12,570 and the basic rate band ceiling at £50,270. This freeze continues to create a real-terms tax increase as wages rise.",
  },
  {
    q: "How does Making Tax Digital affect my business from April 2026?",
    a: "Making Tax Digital for Income Tax (MTD ITSA) becomes mandatory from April 2026 for sole traders and landlords with income above £50,000. From April 2027 the threshold drops to £30,000. Businesses must use compatible software to maintain digital records and submit quarterly updates to HMRC.",
  },
  {
    q: "Are there any changes to capital gains tax rates?",
    a: "Capital gains tax rates on assets other than residential property were aligned with income tax rates in recent Budgets. The current rates are 18% (basic rate) and 24% (higher rate) for most assets. Always confirm current rates with your accountant as these are subject to change.",
  },
  {
    q: "How can ScaleUp Accounting help me prepare for Budget 2026 changes?",
    a: "We help clients review their business structure, timing of income and expenditure, and allowances available to reduce tax exposure within Budget 2026 parameters. Contact us for a tailored review of your position.",
  },
];

export default function BudgetBriefingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.scaleupaccounting.uk/insights/budget#article",
        headline: "Autumn Budget 2026 Briefing",
        description:
          "A practical guide to the key Autumn Budget 2026 announcements and what they mean for UK businesses.",
        url: "https://www.scaleupaccounting.uk/insights/budget",
        datePublished: "2026-07-01",
        dateModified: "2026-07-20",
        author: { "@type": "Organization", name: "ScaleUp Accounting Ltd" },
        publisher: { "@id": "https://www.scaleupaccounting.uk/#organization" },
        isPartOf: { "@id": "https://www.scaleupaccounting.uk/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.scaleupaccounting.uk" },
          { "@type": "ListItem", position: 2, name: "Insights", item: "https://www.scaleupaccounting.uk/insights" },
          { "@type": "ListItem", position: 3, name: "Autumn Budget 2026 Briefing", item: "https://www.scaleupaccounting.uk/insights/budget" },
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

      <article className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-5 lg:px-12 max-w-[86rem] mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] text-[#0A1A2F]/40 mb-8">
            <a href="/" className="hover:text-[#0A1A2F] transition-colors">Home</a>
            <span aria-hidden="true">/</span>
            <a href="/insights" className="hover:text-[#0A1A2F] transition-colors">Insights</a>
            <span aria-hidden="true">/</span>
            <span className="text-[#0A1A2F]/70">Autumn Budget 2026 Briefing</span>
          </nav>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#C8A96A] to-transparent" aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#C8A96A]">
              Tax & Budget
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-light font-heading leading-[1.1] tracking-tight mb-6">
            Autumn Budget{" "}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A2F] via-[#2F5B8C] to-[#1E3A5F]">
              2026 Briefing
            </span>
          </h1>

          <p className="text-[#0A1A2F]/50 text-sm font-light mb-8">
            Published by ScaleUp Accounting Ltd &mdash; July 2026
          </p>

          <p className="text-[#0A1A2F]/60 text-lg md:text-xl font-light leading-[1.8]">
            The Autumn Budget 2026 delivers a series of changes to tax rates, thresholds, and compliance requirements that affect every UK business. This briefing summarises the key measures and sets out the practical steps sole traders, partnerships, and limited companies should take in response.
          </p>
        </div>

        {/* Article body */}
        <div className="max-w-3xl space-y-12 mb-20">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">
              Corporation Tax
            </h2>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light mb-4">
              The corporation tax main rate of 25% remains unchanged for companies with taxable profits above £250,000. Companies with profits up to £50,000 continue to benefit from the small profits rate of 19%, with marginal relief available between these thresholds. The government has confirmed its commitment to the current structure through the forecast period.
            </p>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light">
              For companies with profits in the marginal relief band (£50,001–£250,000), effective planning around profit timing, pension contributions, and allowable deductions remains an important part of your annual accounting review. ScaleUp Accounting Ltd prepares CT600 returns for limited companies across all profit levels.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">
              Income Tax & National Insurance
            </h2>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light mb-4">
              The freeze on income tax thresholds continues through 2026/27, a policy first announced in 2021. The personal allowance remains at £12,570 and the higher rate threshold at £50,270. With wage growth above these frozen bands, an estimated 1.4 million additional taxpayers have been pulled into higher tax brackets since the freeze began.
            </p>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light">
              For sole traders and self-employed individuals, this underscores the importance of reviewing allowable business expenses, pension contributions, and the timing of income to manage effective tax rates. Class 4 National Insurance Contributions (NICs) remain at 9% on profits between £12,570 and £50,270, and 2% above this threshold.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">
              Making Tax Digital (MTD) — April 2026 Mandatory Date
            </h2>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light mb-4">
              Making Tax Digital for Income Tax Self Assessment (MTD ITSA) becomes mandatory from 6 April 2026 for sole traders and landlords with gross income above £50,000. From April 2027, the threshold reduces to £30,000. From April 2028, businesses and landlords earning above £20,000 are expected to be brought within scope.
            </p>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light">
              Under MTD ITSA, qualifying taxpayers must maintain digital records using HMRC-compatible software and submit quarterly updates to HMRC, replacing the traditional annual Self Assessment return. ScaleUp Accounting Ltd supports clients through this transition using Xero, QuickBooks, FreeAgent, and Sage 50.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">
              Capital Allowances
            </h2>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light mb-4">
              The 100% Annual Investment Allowance (AIA) is maintained at £1 million per year, enabling businesses to deduct the full cost of qualifying plant and machinery in the year of purchase. This allowance is particularly valuable for businesses investing in equipment, machinery, or qualifying business assets.
            </p>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light">
              Full expensing (100% first-year allowance) for qualifying main-rate plant and machinery purchased by companies remains in place and is now permanent. ScaleUp Accounting Ltd can advise on which assets qualify and how to structure capital investments for maximum allowance benefit.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">
              Action Points for UK Businesses
            </h2>
            <ul className="space-y-4 text-[#0A1A2F]/70 font-light leading-[1.8]">
              <li className="flex gap-3">
                <span className="text-[#C8A96A] font-bold mt-1 flex-shrink-0">01.</span>
                <span>If you are a sole trader or landlord with income above £50,000, ensure you have MTD-compatible software in place before 6 April 2026.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C8A96A] font-bold mt-1 flex-shrink-0">02.</span>
                <span>Review your pension contributions before the end of the tax year — contributions reduce your taxable income and can bring profits below key thresholds.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C8A96A] font-bold mt-1 flex-shrink-0">03.</span>
                <span>For limited companies, review profit extraction strategies (salary, dividends, pensions) given current tax rates across the combined employer and employee charge.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#C8A96A] font-bold mt-1 flex-shrink-0">04.</span>
                <span>If you are planning capital investments, ensure qualifying assets are purchased before your year-end to maximise Annual Investment Allowance in the current period.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#C8A96A] to-transparent" aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#0A1A2F]/50">
              Frequently Asked Questions
            </span>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 md:p-8 border border-[#0A1A2F]/[0.05] shadow-[0_4px_20px_rgba(10,26,47,0.02)]"
              >
                <h3 className="text-[16px] font-medium text-[#0A1A2F] mb-3 leading-[1.4]">{faq.q}</h3>
                <p className="text-[#0A1A2F]/60 text-[15px] font-light leading-[1.7]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mt-16">
          <div className="bg-[#0F172A] rounded-[2rem] p-8 md:p-12 text-white">
            <h2 className="text-2xl font-medium font-heading mb-4">Need personalised Budget advice?</h2>
            <p className="text-white/60 font-light leading-[1.7] mb-8">
              Our team can review your specific position and identify the opportunities and obligations that apply to your business. Contact ScaleUp Accounting Ltd for a tailored consultation.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#0A1A2F] text-[13px] font-medium rounded-[7px] hover:bg-white/90 transition-colors duration-300"
            >
              Book a Free Consultation
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Footer />
    </main>
  );
}
