import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Self Assessment Tax Return London | AAT Licensed | ScaleUp Accounting",
  description:
    "Self Assessment tax return preparation and HMRC filing by AAT Licensed Accountants in London. Sole traders, freelancers, landlords, and high earners. Deadline guaranteed.",
  alternates: {
    canonical: "https://www.scaleupaccounting.uk/services/self-assessment",
  },
  openGraph: {
    title: "Self Assessment Tax Return London | ScaleUp Accounting Ltd",
    description:
      "Accurate Self Assessment returns filed on time by AAT Licensed Accountants. Sole traders, landlords, freelancers.",
    url: "https://www.scaleupaccounting.uk/services/self-assessment",
  },
};

const faqs = [
  {
    q: "Who needs to complete a Self Assessment tax return?",
    a: "You must complete a Self Assessment tax return if you: are self-employed or a sole trader; have income over £100,000 from employment; have untaxed income from rental properties; have foreign income; have income from investments, dividends, or savings above the tax-free allowances; are a partner in a business partnership; or are a company director. You may also need to file if you received COVID support payments that need to be reported.",
  },
  {
    q: "What is the Self Assessment filing deadline?",
    a: "The online Self Assessment deadline is 31 January following the end of the tax year. Paper returns must be filed by 31 October. Tax owed (balancing payment) is also due 31 January. A payment on account (an advance payment towards next year's tax) is due 31 July. HMRC charges automatic penalties for late filing starting at £100.",
  },
  {
    q: "What expenses can I claim as a sole trader?",
    a: "Allowable expenses for sole traders include: cost of goods sold; business premises costs (rent, utilities, insurance); staff costs; travel costs (fuel, vehicle hire, public transport) for business journeys only; marketing, advertising, and website costs; professional subscriptions and training directly related to your trade; accountancy fees; and a proportion of home office costs if you work from home. Personal expenses are not deductible.",
  },
  {
    q: "How does Making Tax Digital affect Self Assessment?",
    a: "From April 2026, sole traders and landlords with gross income above £50,000 must use MTD-compatible software and submit quarterly updates to HMRC instead of an annual return. The annual Self Assessment return is replaced by a Final Declaration. ScaleUp Accounting Ltd manages this process for affected clients.",
  },
  {
    q: "Can you reduce my Self Assessment tax bill?",
    a: "Within the bounds of the law, yes. We review your income sources, allowable expenses, capital allowances, pension contributions, and available reliefs to ensure you pay no more tax than is legally required. Common missed allowances include the trading allowance, marriage allowance, and home office relief.",
  },
];

export default function SelfAssessmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AccountingService",
        "@id": "https://www.scaleupaccounting.uk/services/self-assessment#service",
        name: "Self Assessment Tax Return Service",
        provider: { "@id": "https://www.scaleupaccounting.uk/#organization" },
        url: "https://www.scaleupaccounting.uk/services/self-assessment",
        description: "Self Assessment income tax return preparation and HMRC filing for sole traders, freelancers, landlords, and high earners.",
        areaServed: { "@type": "Country", name: "United Kingdom" },
        serviceType: "Self Assessment",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.scaleupaccounting.uk" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.scaleupaccounting.uk/#services" },
          { "@type": "ListItem", position: 3, name: "Self Assessment", item: "https://www.scaleupaccounting.uk/services/self-assessment" },
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
            <span className="text-[#0A1A2F]/70">Self Assessment</span>
          </nav>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#C8A96A] to-transparent" aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#C8A96A]">Self Assessment · SA100 · MTD ITSA</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-light font-heading leading-[1.1] tracking-tight mb-6">
            Self Assessment{" "}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A2F] via-[#2F5B8C] to-[#1E3A5F]">
              Tax Returns
            </span>
          </h1>
          <p className="text-[#0A1A2F]/60 text-lg md:text-xl font-light leading-[1.8]">
            Accurate, timely Self Assessment tax returns for sole traders, freelancers, landlords, and individuals with complex income. We manage your entire return — from gathering records to HMRC submission — and ensure every allowable deduction is claimed.
          </p>
        </div>

        <div className="max-w-4xl space-y-8 mb-20">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">Who We Help</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Sole traders and self-employed",
                "Freelancers and contractors",
                "Landlords with rental income",
                "Company directors",
                "High earners (income over £100,000)",
                "Individuals with investment income",
                "Partners in business partnerships",
                "Employees with multiple income sources",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <span className="text-[#C8A96A] font-bold flex-shrink-0">✓</span>
                  <span className="text-[#0A1A2F]/70 font-light text-[15px]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">Key Deadlines — 2025/26 Tax Year</h2>
            <div className="space-y-4">
              {[
                { date: "5 April 2026", label: "End of 2025/26 tax year" },
                { date: "5 October 2026", label: "Register for Self Assessment if new to filing" },
                { date: "31 October 2026", label: "Paper return deadline" },
                { date: "31 January 2027", label: "Online return deadline and balancing payment" },
                { date: "31 July 2027", label: "First payment on account for 2026/27" },
              ].map((item) => (
                <div key={item.date} className="flex gap-4 items-start p-4 rounded-xl bg-[#F5F7FA]">
                  <span className="text-[12px] font-bold text-[#C8A96A] w-32 flex-shrink-0 pt-0.5">{item.date}</span>
                  <span className="text-[#0A1A2F]/70 font-light text-[15px]">{item.label}</span>
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
            <h2 className="text-2xl font-medium font-heading mb-4">File your Self Assessment stress-free</h2>
            <p className="text-white/60 font-light leading-[1.7] mb-8">Contact us to get started. We will send you a simple checklist of the information we need and take care of everything from there — including the HMRC submission.</p>
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
