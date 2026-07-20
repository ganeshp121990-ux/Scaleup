import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Company Accounts Preparation London | AAT Licensed | ScaleUp Accounting",
  description:
    "Year-end statutory accounts preparation and Companies House filing for UK limited companies. AAT Licensed Accountants in London. Micro-entity and small company accounts.",
  alternates: {
    canonical: "https://www.scaleupaccounting.uk/services/company-accounts",
  },
  openGraph: {
    title: "Company Accounts Preparation London | ScaleUp Accounting Ltd",
    description:
      "Statutory accounts and Companies House filing for limited companies by AAT Licensed Accountants.",
    url: "https://www.scaleupaccounting.uk/services/company-accounts",
  },
};

const faqs = [
  {
    q: "When do I need to file company accounts?",
    a: "For Companies House, your first accounts must be filed within 21 months of your company's incorporation date. Thereafter, accounts must be filed within 9 months of your company's accounting reference date (year-end) each year. For HMRC corporation tax purposes, statutory accounts must accompany the CT600 return, filed within 12 months of the accounting period end.",
  },
  {
    q: "What is the difference between micro-entity and small company accounts?",
    a: "Micro-entity accounts are the simplest format, available to companies meeting at least two of: turnover below £632,000, balance sheet total below £316,000, and no more than 10 employees. Micro-entity accounts can be filed at Companies House without a profit and loss account or directors' report. Small company accounts (for companies not qualifying as micro-entities but still meeting small company criteria) require more detail but can still be abridged for public filing.",
  },
  {
    q: "What happens if I file company accounts late?",
    a: "Companies House charges automatic late filing penalties starting at £150 for accounts up to 1 month late, rising to £1,500 for accounts more than 6 months late (for private companies). Penalties double if accounts are late for two consecutive years. Persistent late filing can result in the company being struck off the register.",
  },
  {
    q: "Do you also prepare the corporation tax return alongside the accounts?",
    a: "Yes. We typically prepare company accounts and the CT600 corporation tax return together, as they are closely linked. The statutory accounts form the basis of the tax computation. We prepare both documents and submit them to Companies House and HMRC simultaneously.",
  },
  {
    q: "Can you prepare accounts from incomplete records?",
    a: "Yes, we can work from incomplete or partially-maintained records to prepare your year-end accounts. We will reconstruct missing transactions from bank statements and available documents where possible. However, maintaining good bookkeeping throughout the year reduces the cost and risk of errors in the final accounts.",
  },
];

export default function CompanyAccountsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AccountingService",
        "@id": "https://www.scaleupaccounting.uk/services/company-accounts#service",
        name: "Company Accounts Preparation",
        provider: { "@id": "https://www.scaleupaccounting.uk/#organization" },
        url: "https://www.scaleupaccounting.uk/services/company-accounts",
        description: "Year-end statutory accounts preparation and Companies House filing for UK limited companies. Micro-entity and small company accounts.",
        areaServed: { "@type": "Country", name: "United Kingdom" },
        serviceType: "Company Accounts",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.scaleupaccounting.uk" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.scaleupaccounting.uk/#services" },
          { "@type": "ListItem", position: 3, name: "Company Accounts", item: "https://www.scaleupaccounting.uk/services/company-accounts" },
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
            <span className="text-[#0A1A2F]/70">Company Accounts</span>
          </nav>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#C8A96A] to-transparent" aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#C8A96A]">Companies House · Year-End · Statutory Accounts</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-light font-heading leading-[1.1] tracking-tight mb-6">
            Company Accounts{" "}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A2F] via-[#2F5B8C] to-[#1E3A5F]">
              Preparation
            </span>
          </h1>
          <p className="text-[#0A1A2F]/60 text-lg md:text-xl font-light leading-[1.8]">
            Year-end statutory accounts prepared and filed with Companies House by AAT Licensed Accountants. We handle micro-entity and small company accounts for UK limited companies, ensuring all filing deadlines are met and your accounts accurately reflect your company&apos;s financial position.
          </p>
        </div>

        <div className="max-w-4xl space-y-8 mb-20">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">What We Prepare</h2>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light mb-6">
              Our year-end accounts service covers the full preparation of your statutory financial statements, including the balance sheet, profit and loss account (where required), notes to the accounts, and the directors&apos; report where applicable. We prepare accounts in the correct format for your company size category and file them digitally with Companies House.
            </p>
            <ul className="space-y-3 text-[#0A1A2F]/70 font-light">
              {[
                "Balance sheet and profit & loss account",
                "Notes to the financial statements",
                "Directors' report (for small and larger companies)",
                "iXBRL-tagged accounts for HMRC submission",
                "Companies House digital filing (WebFiling)",
                "Confirmation and filing receipts provided",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[#C8A96A] font-bold flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">Filing Deadlines for Limited Companies</h2>
            <div className="space-y-4">
              {[
                { label: "Companies House filing deadline", value: "9 months after your year-end" },
                { label: "HMRC Corporation Tax return (CT600)", value: "12 months after your year-end" },
                { label: "Corporation Tax payment", value: "9 months and 1 day after your year-end" },
                { label: "First accounts (new company)", value: "21 months from incorporation" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start p-4 rounded-xl bg-[#F5F7FA]">
                  <span className="text-[#0A1A2F]/70 font-light text-[15px] flex-1">{item.label}</span>
                  <span className="text-[12px] font-bold text-[#C8A96A] text-right flex-shrink-0">{item.value}</span>
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
            <h2 className="text-2xl font-medium font-heading mb-4">Annual accounts prepared on time, every time</h2>
            <p className="text-white/60 font-light leading-[1.7] mb-8">Contact ScaleUp Accounting Ltd for a fixed-fee quote for your annual company accounts. We will confirm our fee based on your company size and complexity.</p>
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
