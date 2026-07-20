import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Modern Slavery Statement | ScaleUp Accounting Ltd",
  description:
    "ScaleUp Accounting Ltd Modern Slavery and Human Trafficking Statement. Our commitment to identifying and preventing modern slavery in our business and supply chain.",
  alternates: {
    canonical: "https://www.scaleupaccounting.uk/legal/modern-slavery",
  },
  openGraph: {
    title: "Modern Slavery Statement | ScaleUp Accounting Ltd",
    description:
      "ScaleUp Accounting Ltd commitment to preventing modern slavery and human trafficking.",
    url: "https://www.scaleupaccounting.uk/legal/modern-slavery",
  },
};

const sections = [
  {
    title: "1. Introduction",
    content: [
      "ScaleUp Accounting Ltd (\"we\", \"our\", the \"Company\") is committed to acting ethically and with integrity in all our business dealings. We are opposed to modern slavery and human trafficking in all its forms and are committed to implementing effective systems and controls to ensure these practices do not take place in our own business or in our supply chain.",
      "This statement is published in the spirit of transparency and best practice. We recognise that, as a small professional services firm, the direct risk of modern slavery in our immediate operations is low, but we remain vigilant and committed to continuous improvement.",
    ],
  },
  {
    title: "2. Our Organisation and Business",
    content: [
      "ScaleUp Accounting Ltd is an AAT Licensed Accounting Practice based in London, England. We provide bookkeeping, payroll, VAT, tax, and associated financial services to small and medium-sized businesses across the United Kingdom. We are registered in England and Wales (Company No. 17121237).",
      "Our workforce is entirely UK-based. All of our team members are directly employed or engaged on a self-employed basis in the United Kingdom under contracts that comply with applicable employment law.",
    ],
  },
  {
    title: "3. Our Supply Chain",
    content: [
      "Our supply chain is limited in scope and primarily consists of: software and technology providers (including cloud accounting platforms, document management, and communication tools), professional service providers (such as legal advisors and insurers), and office supplies and consumables.",
      "We engage predominantly with established, reputable UK and international technology businesses, all of which publish their own modern slavery statements and maintain publicly accessible ethical trading policies.",
    ],
  },
  {
    title: "4. Policies in Relation to Modern Slavery",
    content: [
      "We are committed to ensuring that there is no modern slavery or human trafficking in our supply chains or in any part of our business. We maintain the following internal practices to support this commitment: all team members are engaged under written contracts at or above the National Living Wage; working hours are regulated and compliant with the Working Time Regulations 1998; and no team member's identity documents or personal belongings are retained by the Company.",
    ],
  },
  {
    title: "5. Due Diligence and Risk Assessment",
    content: [
      "We assess the risk of modern slavery when engaging new suppliers. Our due diligence approach includes reviewing publicly available information about prospective suppliers, such as their own modern slavery statements, ethical trading policies, and company information.",
      "We have identified that the primary risk areas in our supply chain relate to technology hardware manufacturing. We mitigate this by procuring hardware and technology services only from suppliers with documented and published ethical sourcing policies.",
    ],
  },
  {
    title: "6. Training and Awareness",
    content: [
      "We ensure that all members of our team are aware of the risks of modern slavery and how to identify potential warning signs. We brief new team members on this policy as part of their onboarding and maintain ongoing awareness as part of our professional development programme.",
    ],
  },
  {
    title: "7. Review and Approval",
    content: [
      "This statement will be reviewed annually and updated as necessary to reflect any changes in our business or supply chain. It is approved by the directors of ScaleUp Accounting Ltd.",
      "This statement covers the financial year ending 2026 and was last reviewed: July 2026.",
    ],
  },
];

export default function ModernSlaveryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Modern Slavery Statement – ScaleUp Accounting Ltd",
    url: "https://www.scaleupaccounting.uk/legal/modern-slavery",
    isPartOf: { "@id": "https://www.scaleupaccounting.uk/#organization" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.scaleupaccounting.uk" },
        { "@type": "ListItem", position: 2, name: "Modern Slavery Statement", item: "https://www.scaleupaccounting.uk/legal/modern-slavery" },
      ],
    },
  };

  return (
    <main className="bg-[#FDFCFB] text-[#0A1A2F]">
      <Navbar />

      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-5 lg:px-12 max-w-[86rem] mx-auto min-h-[80vh]">
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#C8A96A] to-transparent" aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#C8A96A]">
              Legal
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-light font-heading leading-[1.1] tracking-tight mb-8">
            Modern Slavery <br />
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A2F] via-[#2F5B8C] to-[#1E3A5F]">
              Statement
            </span>
          </h1>

          <p className="text-[#0A1A2F]/60 text-lg md:text-xl font-light tracking-wide leading-[1.8]">
            ScaleUp Accounting Ltd is committed to combating modern slavery and human trafficking. This statement sets out the steps we have taken to ensure our business operations and supply chain are free from these practices.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]"
            >
              <h2 className="text-xl md:text-2xl font-medium font-heading mb-4 text-[#0A1A2F]">
                {section.title}
              </h2>
              {section.content.map((para, i) => (
                <p key={i} className={`text-[#0A1A2F]/70 leading-[1.8] font-light ${i < section.content.length - 1 ? "mb-4" : ""}`}>
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Footer />
    </main>
  );
}
