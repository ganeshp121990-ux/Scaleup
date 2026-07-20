import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Economic & Market Analysis 2026 | ScaleUp Accounting Insights",
  description:
    "UK SME economic outlook for 2026 — interest rates, cash flow, inflation, and the financial strategies businesses should adopt now. Analysis from ScaleUp Accounting Ltd.",
  alternates: {
    canonical: "https://www.scaleupaccounting.uk/insights/analysis",
  },
  openGraph: {
    title: "Economic & Market Analysis 2026 | ScaleUp Accounting",
    description:
      "UK SME financial conditions in 2026: interest rates, inflation, and strategic accounting steps for business owners.",
    url: "https://www.scaleupaccounting.uk/insights/analysis",
    type: "article",
  },
};

const faqs = [
  {
    q: "How are interest rates affecting UK small businesses in 2026?",
    a: "While the Bank of England has made several base rate reductions since the 2023 peak, rates remain elevated compared to pre-2022 levels. This continues to increase the cost of business loans, overdrafts, and asset finance. SMEs should review their borrowing structures, prioritise cash generation, and consider fixed-rate facilities where available to reduce exposure to future rate changes.",
  },
  {
    q: "What is the outlook for UK SME profitability in 2026?",
    a: "Cost pressures from energy, wages, and supply chains have moderated compared to 2022–2023, but the cumulative effect on margins remains significant. Businesses with strong management accounts visibility — knowing their gross and net margins in real time — are best placed to make timely decisions on pricing, staffing, and investment.",
  },
  {
    q: "How can I improve my business cash flow?",
    a: "Key cash flow levers include: tightening debtor days (sending invoices promptly and following up on overdue payments), negotiating extended payment terms with suppliers, timing capital expenditure to coincide with cash-positive periods, and using VAT cash accounting schemes where appropriate to defer VAT until customers pay. A rolling 13-week cash flow forecast is a powerful tool for early problem identification.",
  },
  {
    q: "Should I consider changing my business structure in the current environment?",
    a: "Business structure decisions (sole trader, partnership, limited company) depend on profitability, growth plans, risk exposure, and personal tax position. In the current environment, with corporation tax at 19%–25% and income tax thresholds frozen, some sole traders may find incorporation beneficial once profits consistently exceed a certain level. This is a complex decision requiring personalised advice.",
  },
  {
    q: "What financial metrics should I be tracking monthly?",
    a: "Essential monthly metrics include: gross profit margin (by product or service line where possible), net profit margin, debtor days, creditor days, cash balance and runway, revenue versus budget, and payroll as a percentage of revenue. Monthly management accounts from ScaleUp Accounting Ltd give you real-time visibility over all of these.",
  },
];

export default function MarketAnalysisPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.scaleupaccounting.uk/insights/analysis#article",
        headline: "Economic & Market Analysis 2026",
        description: "UK SME economic outlook for 2026 and strategic financial guidance for business owners.",
        url: "https://www.scaleupaccounting.uk/insights/analysis",
        datePublished: "2026-04-01",
        dateModified: "2026-07-20",
        author: { "@type": "Organization", name: "ScaleUp Accounting Ltd" },
        publisher: { "@id": "https://www.scaleupaccounting.uk/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.scaleupaccounting.uk" },
          { "@type": "ListItem", position: 2, name: "Insights", item: "https://www.scaleupaccounting.uk/insights" },
          { "@type": "ListItem", position: 3, name: "Economic & Market Analysis", item: "https://www.scaleupaccounting.uk/insights/analysis" },
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
        <div className="max-w-3xl mb-16">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] text-[#0A1A2F]/40 mb-8">
            <a href="/" className="hover:text-[#0A1A2F] transition-colors">Home</a>
            <span aria-hidden="true">/</span>
            <a href="/insights" className="hover:text-[#0A1A2F] transition-colors">Insights</a>
            <span aria-hidden="true">/</span>
            <span className="text-[#0A1A2F]/70">Economic & Market Analysis</span>
          </nav>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#C8A96A] to-transparent" aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#C8A96A]">Economy & Markets</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-light font-heading leading-[1.1] tracking-tight mb-6">
            Economic &{" "}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A2F] via-[#2F5B8C] to-[#1E3A5F]">
              Market Analysis
            </span>
          </h1>
          <p className="text-[#0A1A2F]/50 text-sm font-light mb-8">Published by ScaleUp Accounting Ltd &mdash; April 2026</p>
          <p className="text-[#0A1A2F]/60 text-lg md:text-xl font-light leading-[1.8]">
            UK businesses face a complex economic environment in 2026. Interest rates remain above pre-pandemic levels, wage costs have risen substantially, and tax threshold freezes continue to increase effective tax burdens. Here is our analysis of the conditions and what businesses should do to protect and improve their financial position.
          </p>
        </div>

        <div className="max-w-3xl space-y-12 mb-20">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">Interest Rate Environment</h2>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light mb-4">
              The Bank of England base rate, which peaked at 5.25% in mid-2023, has been reduced progressively as inflation has fallen. However, rates remain significantly above the near-zero levels of 2020–2021. For businesses carrying variable rate debt — overdrafts, revolving credit facilities, or tracker mortgages on business property — the cost of debt service has increased materially.
            </p>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light">
              The practical impact for SMEs includes higher interest charges on working capital facilities, increased costs for asset finance and hire purchase, and reduced access to unsecured credit for businesses with thinner margins. Businesses should review their financing structures and explore whether fixed-rate products or government-backed schemes (such as the British Business Bank guarantee programmes) may reduce their interest burden.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">Wage Cost Pressures</h2>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light mb-4">
              The National Living Wage has increased substantially year-on-year in recent years, with further uplifts expected. For labour-intensive businesses — retail, hospitality, care, and professional services — payroll now represents a larger share of turnover than at any point in the past decade. Combined with increases in employer National Insurance Contributions announced in recent Budgets, the total cost of employment has risen sharply.
            </p>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light">
              Managing payroll costs effectively requires accurate, real-time data. ScaleUp Accounting Ltd provides management accounts and payroll reporting that gives business owners visibility over their labour cost ratios monthly, enabling timely decisions on hiring, staffing levels, and pricing.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">Cash Flow Management in 2026</h2>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light mb-4">
              Cash flow remains the single biggest cause of business failure, regardless of profitability. Many fundamentally profitable businesses fail because cash conversion cycles are too long — customers pay slowly, overheads are paid promptly, and the gap creates a cash deficit that working capital facilities cannot always bridge.
            </p>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light">
              Practical steps to improve cash flow include: issuing invoices immediately upon delivery of goods or services; implementing a structured debtor chasing process; reviewing credit terms offered to customers; considering invoice finance or factoring for large debtors; timing capital expenditure and VAT payments strategically; and maintaining a rolling 13-week cash flow forecast updated every week.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">Strategic Priorities for UK SMEs in 2026</h2>
            <ul className="space-y-4 text-[#0A1A2F]/70 font-light leading-[1.8]">
              <li className="flex gap-3"><span className="text-[#C8A96A] font-bold mt-1 flex-shrink-0">01.</span><span>Implement monthly management accounts — real-time visibility is the foundation of good financial decision-making.</span></li>
              <li className="flex gap-3"><span className="text-[#C8A96A] font-bold mt-1 flex-shrink-0">02.</span><span>Review your pricing model — with cost inflation embedded, businesses that have not adjusted prices risk margin erosion that becomes difficult to reverse.</span></li>
              <li className="flex gap-3"><span className="text-[#C8A96A] font-bold mt-1 flex-shrink-0">03.</span><span>Review your debt structure — consolidate variable rate borrowing into fixed-rate products where appropriate to provide cost certainty.</span></li>
              <li className="flex gap-3"><span className="text-[#C8A96A] font-bold mt-1 flex-shrink-0">04.</span><span>Explore R&D tax credits and capital allowances — many UK businesses are not claiming all the allowances they are entitled to.</span></li>
              <li className="flex gap-3"><span className="text-[#C8A96A] font-bold mt-1 flex-shrink-0">05.</span><span>Plan your personal and corporate tax position now — with thresholds frozen and rates complex, proactive planning in 2026 will reduce your liability in 2026/27.</span></li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#C8A96A] to-transparent" aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#0A1A2F]/50">Frequently Asked Questions</span>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 md:p-8 border border-[#0A1A2F]/[0.05] shadow-[0_4px_20px_rgba(10,26,47,0.02)]">
                <h3 className="text-[16px] font-medium text-[#0A1A2F] mb-3 leading-[1.4]">{faq.q}</h3>
                <p className="text-[#0A1A2F]/60 text-[15px] font-light leading-[1.7]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mt-16">
          <div className="bg-[#0F172A] rounded-[2rem] p-8 md:p-12 text-white">
            <h2 className="text-2xl font-medium font-heading mb-4">Get monthly management accounts for your business</h2>
            <p className="text-white/60 font-light leading-[1.7] mb-8">ScaleUp Accounting Ltd provides timely management accounts that give you the financial visibility to make confident decisions. Contact us to discuss your reporting needs.</p>
            <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#0A1A2F] text-[13px] font-medium rounded-[7px] hover:bg-white/90 transition-colors duration-300">
              Book a Free Consultation
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Footer />
    </main>
  );
}
