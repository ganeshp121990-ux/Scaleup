import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "UK GDPR Regulatory Updates 2026 | ScaleUp Accounting Insights",
  description:
    "How the Data Use and Access Act 2025 and UK GDPR changes affect your business in 2026. A practical guide for small businesses and accounting clients from ScaleUp Accounting Ltd.",
  alternates: {
    canonical: "https://www.scaleupaccounting.uk/insights/gdpr",
  },
  openGraph: {
    title: "UK GDPR Regulatory Updates 2026 | ScaleUp Accounting",
    description:
      "Practical guidance on UK GDPR and Data Use and Access Act 2025 for small businesses — from ScaleUp Accounting Ltd.",
    url: "https://www.scaleupaccounting.uk/insights/gdpr",
    type: "article",
  },
};

const faqs = [
  {
    q: "Does UK GDPR still apply after Brexit?",
    a: "Yes. The UK retained GDPR into domestic law as UK GDPR, supplemented by the Data Protection Act 2018. The Data Use and Access Act 2025 has since amended certain aspects of UK GDPR to reduce administrative burden on businesses, but the core obligations — including lawful basis for processing, data subject rights, and breach notification — remain in force.",
  },
  {
    q: "What is the Data Use and Access Act 2025?",
    a: "The Data Use and Access Act 2025 is UK legislation that modernises aspects of the data protection framework. Key changes include a more flexible approach to legitimate interests, reduced administrative requirements for record-keeping in some cases, and updated rules on automated decision-making. It also establishes a new information governance framework for public bodies.",
  },
  {
    q: "Does my small business need to register with the ICO?",
    a: "Most businesses that process personal data must pay a data protection fee to the ICO (Information Commissioner's Office), unless they qualify for an exemption. Exemptions apply to some organisations processing data only for staff administration, accounts, or personal purposes. Check the ICO self-assessment tool at ico.org.uk to confirm your position.",
  },
  {
    q: "How do accounting firms handle client GDPR compliance?",
    a: "As your accountant, ScaleUp Accounting Ltd is a data controller for the personal data you share with us about your business and its directors, employees, and clients where relevant. We are also a data processor when we process personal data on your behalf (e.g. payroll). We maintain a data processing agreement framework and operate under our published Privacy Policy.",
  },
  {
    q: "What should I do if my business suffers a personal data breach?",
    a: "You must assess whether the breach is likely to result in a risk to individuals' rights and freedoms. If so, you must report it to the ICO within 72 hours. If the breach is likely to result in a high risk to individuals, you must also notify those individuals without undue delay. Maintain a record of all breaches, including those not reported, in your breach register.",
  },
];

export default function GdprUpdatesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.scaleupaccounting.uk/insights/gdpr#article",
        headline: "UK GDPR Regulatory Updates 2026",
        description:
          "How the Data Use and Access Act 2025 and UK GDPR changes affect businesses in 2026.",
        url: "https://www.scaleupaccounting.uk/insights/gdpr",
        datePublished: "2026-06-01",
        dateModified: "2026-07-20",
        author: { "@type": "Organization", name: "ScaleUp Accounting Ltd" },
        publisher: { "@id": "https://www.scaleupaccounting.uk/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.scaleupaccounting.uk" },
          { "@type": "ListItem", position: 2, name: "Insights", item: "https://www.scaleupaccounting.uk/insights" },
          { "@type": "ListItem", position: 3, name: "UK GDPR Regulatory Updates", item: "https://www.scaleupaccounting.uk/insights/gdpr" },
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
            <span className="text-[#0A1A2F]/70">UK GDPR Regulatory Updates</span>
          </nav>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#C8A96A] to-transparent" aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#C8A96A]">Data & Regulation</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-light font-heading leading-[1.1] tracking-tight mb-6">
            UK GDPR{" "}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A2F] via-[#2F5B8C] to-[#1E3A5F]">
              Regulatory Updates
            </span>
          </h1>
          <p className="text-[#0A1A2F]/50 text-sm font-light mb-8">Published by ScaleUp Accounting Ltd &mdash; June 2026</p>
          <p className="text-[#0A1A2F]/60 text-lg md:text-xl font-light leading-[1.8]">
            The Data Use and Access Act 2025 has brought important changes to the UK data protection landscape. Here is what small businesses and our accounting clients need to know for 2026.
          </p>
        </div>

        <div className="max-w-3xl space-y-12 mb-20">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">The Data Use and Access Act 2025</h2>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light mb-4">
              The Data Use and Access Act 2025 received Royal Assent in June 2025 and came into force progressively through 2025 and 2026. It amends UK GDPR and the Data Protection Act 2018, with the stated aim of reducing compliance burdens on UK businesses while maintaining robust protections for individuals.
            </p>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light">
              Key changes include a clearer and broader legitimate interests framework (reducing reliance on consent in some business contexts), reformed rules on automated decision-making, and a more proportionate approach to the requirement to maintain detailed records of processing activities for smaller organisations. The ICO has published updated guidance to help businesses apply these changes.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">What Stays the Same</h2>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light mb-4">
              Despite the changes introduced by the Act, the core framework of UK GDPR remains substantially intact. Businesses must still: identify a lawful basis before processing personal data; maintain appropriate security measures; respond to data subject access requests within one calendar month; notify the ICO of reportable breaches within 72 hours; and ensure data transfers to countries outside the UK comply with the international transfer regime.
            </p>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light">
              The data subject rights of access, rectification, erasure, portability, and objection are all preserved under the new Act.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">Impact on Payroll and Accounting Data</h2>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light mb-4">
              Accounting and payroll functions inherently involve processing personal data — employee names, addresses, National Insurance numbers, pay and tax records, and bank details. These processing activities are typically covered by the legal obligation basis under UK GDPR (Article 6(1)(c)), as payroll and tax compliance are statutory requirements.
            </p>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light">
              However, businesses must ensure that employees are properly informed of how their data is used (through a staff privacy notice), that data is retained only for as long as legally required (generally six years for payroll records in line with HMRC guidance), and that access to payroll data is appropriately restricted.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">Action Checklist for 2026</h2>
            <ul className="space-y-4 text-[#0A1A2F]/70 font-light leading-[1.8]">
              <li className="flex gap-3"><span className="text-[#C8A96A] font-bold mt-1 flex-shrink-0">01.</span><span>Review and update your privacy policy and staff privacy notice to reflect the changes introduced by the Data Use and Access Act 2025.</span></li>
              <li className="flex gap-3"><span className="text-[#C8A96A] font-bold mt-1 flex-shrink-0">02.</span><span>Confirm your ICO registration is current and that the fee tier is correct for your organisation size.</span></li>
              <li className="flex gap-3"><span className="text-[#C8A96A] font-bold mt-1 flex-shrink-0">03.</span><span>Check that any data processors you use (including cloud software, payroll providers, or accountants) have appropriate data processing agreements in place.</span></li>
              <li className="flex gap-3"><span className="text-[#C8A96A] font-bold mt-1 flex-shrink-0">04.</span><span>Document your lawful basis for each category of personal data you process — updated ICO templates are available at ico.org.uk.</span></li>
              <li className="flex gap-3"><span className="text-[#C8A96A] font-bold mt-1 flex-shrink-0">05.</span><span>Review your data breach response procedure to ensure your 72-hour notification obligations are clearly understood by relevant staff.</span></li>
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
            <h2 className="text-2xl font-medium font-heading mb-4">Data protection in your accounting practice</h2>
            <p className="text-white/60 font-light leading-[1.7] mb-8">ScaleUp Accounting Ltd handles all client data under strict confidentiality and in compliance with UK GDPR. Contact us to understand how we protect your financial records.</p>
            <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#0A1A2F] text-[13px] font-medium rounded-[7px] hover:bg-white/90 transition-colors duration-300">
              Get in Touch
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
