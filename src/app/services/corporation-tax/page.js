import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Corporation Tax Returns London | CT600 Filing | ScaleUp Accounting",
  description:
    "Corporation tax return (CT600) preparation and HMRC submission for UK limited companies. Tax computation, R&D relief, capital allowances. AAT Licensed Accountants in London.",
  alternates: {
    canonical: "https://www.scaleupaccounting.uk/services/corporation-tax",
  },
  openGraph: {
    title: "Corporation Tax Returns London | ScaleUp Accounting Ltd",
    description:
      "CT600 preparation, tax computations, R&D credits, and capital allowances by AAT Licensed Accountants.",
    url: "https://www.scaleupaccounting.uk/services/corporation-tax",
  },
};

const faqs = [
  {
    q: "What is the corporation tax rate in 2026?",
    a: "The main rate of corporation tax is 25% for companies with taxable profits over £250,000. Companies with profits of £50,000 or less pay the small profits rate of 19%. For profits between £50,001 and £250,000, marginal relief applies, giving an effective rate between 19% and 25%. These thresholds are divided proportionately between associated companies.",
  },
  {
    q: "When is the corporation tax return due?",
    a: "The CT600 corporation tax return must be filed with HMRC within 12 months of the end of the accounting period. However, any corporation tax owed must be paid within 9 months and 1 day of the accounting period end — before the return filing deadline. For example, for a company with a 31 March year-end, tax is due by 1 January and the return is due by 31 March the following year.",
  },
  {
    q: "What capital allowances can reduce my corporation tax?",
    a: "The main capital allowances available to UK companies include the Annual Investment Allowance (100% deduction on qualifying plant and machinery up to £1 million per year), Full Expensing (100% first-year allowance for qualifying main-rate assets for companies), the 50% First Year Allowance for special rate assets, and Writing Down Allowances for assets not covered by the above. Correctly claiming capital allowances is one of the most effective ways to legitimately reduce your tax liability.",
  },
  {
    q: "Does my company qualify for R&D tax credits?",
    a: "UK companies that undertake qualifying research and development activities may be eligible for R&D tax relief. Under the merged R&D scheme (introduced from April 2024), companies can claim an enhanced deduction on qualifying expenditure. The definition of qualifying R&D is broader than many businesses assume — it includes software development, process improvement, and product innovation across many sectors. ScaleUp Accounting Ltd can assess whether your activities qualify.",
  },
  {
    q: "What if my company makes a loss?",
    a: "Trading losses can be carried back to the previous 12-month accounting period to generate a repayment of tax already paid, or carried forward indefinitely to reduce future profits. Loss carry-back claims can provide a useful cash flow boost where the company was profitable in the prior year. The rules for loss relief are complex and ScaleUp Accounting Ltd will ensure all available reliefs are utilised.",
  },
];

export default function CorporationTaxPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AccountingService",
        "@id": "https://www.scaleupaccounting.uk/services/corporation-tax#service",
        name: "Corporation Tax Return Service",
        provider: { "@id": "https://www.scaleupaccounting.uk/#organization" },
        url: "https://www.scaleupaccounting.uk/services/corporation-tax",
        description: "CT600 corporation tax return preparation and HMRC filing for UK limited companies. Tax computations, capital allowances, and R&D relief.",
        areaServed: { "@type": "Country", name: "United Kingdom" },
        serviceType: "Corporation Tax",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.scaleupaccounting.uk" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.scaleupaccounting.uk/#services" },
          { "@type": "ListItem", position: 3, name: "Corporation Tax", item: "https://www.scaleupaccounting.uk/services/corporation-tax" },
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
            <span className="text-[#0A1A2F]/70">Corporation Tax</span>
          </nav>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#C8A96A] to-transparent" aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#C8A96A]">CT600 · Corporation Tax · R&D Relief</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-light font-heading leading-[1.1] tracking-tight mb-6">
            Corporation Tax{" "}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A2F] via-[#2F5B8C] to-[#1E3A5F]">
              Returns
            </span>
          </h1>
          <p className="text-[#0A1A2F]/60 text-lg md:text-xl font-light leading-[1.8]">
            Corporation tax return (CT600) preparation and HMRC submission for UK limited companies. We prepare your tax computation, apply all available allowances and reliefs, and ensure your return is filed on time — minimising your liability within the law.
          </p>
        </div>

        <div className="max-w-4xl space-y-8 mb-20">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">What Our Corporation Tax Service Includes</h2>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light mb-6">
              We prepare your corporation tax computation from your statutory accounts, applying all relevant adjustments, deductions, and reliefs. This includes capital allowances (Annual Investment Allowance, Full Expensing, Writing Down Allowances), loss relief, R&D tax credits where applicable, and any other available reliefs specific to your industry or activities.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { rate: "19%", label: "Small Profits Rate (≤£50k)" },
                { rate: "25%", label: "Main Rate (>£250k)" },
                { rate: "100%", label: "AIA on Qualifying Assets" },
              ].map((item) => (
                <div key={item.label} className="text-center p-5 rounded-2xl bg-[#F5F7FA]">
                  <p className="text-3xl font-medium text-[#2F5B8C] mb-1">{item.rate}</p>
                  <p className="text-[11px] uppercase tracking-widest text-[#0A1A2F]/50 font-medium leading-[1.4]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">Allowances & Reliefs We Review</h2>
            <ul className="space-y-3 text-[#0A1A2F]/70 font-light leading-[1.8]">
              {[
                "Annual Investment Allowance (up to £1m per year)",
                "Full Expensing on qualifying plant and machinery",
                "Writing Down Allowances (main rate and special rate pools)",
                "Research & Development (R&D) tax credit — merged scheme",
                "Trading loss carry-back and carry-forward",
                "Marginal relief for profits between £50,000 and £250,000",
                "Patent Box relief where applicable",
                "Enhanced capital allowances (energy-efficient assets)",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[#C8A96A] font-bold flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
            <h2 className="text-2xl font-medium font-heading mb-4">Minimise your corporation tax — legally</h2>
            <p className="text-white/60 font-light leading-[1.7] mb-8">Contact ScaleUp Accounting Ltd to discuss your corporation tax position. We will confirm a fixed fee and ensure all reliefs and allowances are correctly applied to your return.</p>
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
