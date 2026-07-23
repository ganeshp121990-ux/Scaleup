import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy | ScaleUp Accounting Ltd",
  description:
    "ScaleUp Accounting Ltd Privacy Policy. How we collect, use, and protect your personal data in accordance with UK GDPR and the Data Protection Act 2018.",
  alternates: {
    canonical: "https://www.scaleupaccounting.uk/legal/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | ScaleUp Accounting Ltd",
    description:
      "How ScaleUp Accounting Ltd collects, uses, and protects your personal data under UK GDPR.",
    url: "https://www.scaleupaccounting.uk/legal/privacy-policy",
  },
};

const sections = [
  {
    title: "1. Important Information & Who We Are",
    content: [
      'Scaleup Accounting Limited is the data controller responsible for your personal data (referred to as "we", "us", or "our" in this Privacy Policy).',
      "Legal Entity: Scaleup Accounting Limited",
      "Director: Sumit Monani",
      "Email: info@scaleupaccounting.uk",
      "Phone: +44 75187 55555",
      "Website: https://scaleupaccounting.uk",
      "Postal Address: Floor 37, Regus, 1 Canada Square, Canary Wharf, London E14 5AA, United Kingdom",
      "You have the right to make a complaint at any time to the Information Commissioner's Office (ICO), the UK regulator for data protection issues (www.ico.org.uk). We would, however, appreciate the opportunity to address your concerns before you contact the ICO, so please contact us first.",
    ],
  },
  {
    title: "2. The Data We Collect About You",
    content: [
      "We may collect, use, store, and transfer different kinds of personal data about you, including:",
      "• Identity Data – first name, last name, username or similar identifier, marital status, title, date of birth, and gender.",
      "• Contact Data – billing address, residential address, email address, and telephone numbers.",
      "• Financial Data – bank account details, payment card details, tax reference numbers (e.g. UTR and National Insurance number), payroll records, financial statements, and transaction histories.",
      "• Transaction Data – details about payments to and from you and services you have purchased from us.",
      "• Technical Data – IP address, login data, browser type and version, operating system, and platform.",
      "• Profile & Usage Data – information about how you use our website, products, and services.",
      "• Marketing & Communications Data – your marketing preferences and communication preferences.",
    ],
  },
  {
    title: "3. How We Use Your Personal Data",
    content: [
      "We will only use your personal data where the law allows us to.",
      "Your personal data may be used to:",
      "• Register you as a new client.",
      "• Provide accounting, bookkeeping, tax, and related professional services.",
      "• Verify your identity under Anti-Money Laundering (AML) regulations.",
      "• Manage payments, fees, and amounts owed.",
      "• Manage our ongoing relationship with you.",
      "• Administer, maintain, and protect our business and website.",
      "The legal bases for processing include the performance of a contract, compliance with legal obligations, and our legitimate business interests where applicable.",
    ],
  },
  {
    title: "4. Disclosures of Your Personal Data",
    content: [
      "We may share your personal data with:",
      "• Government authorities including HM Revenue & Customs (HMRC), Companies House, and other UK regulators.",
      "• Professional regulatory bodies where required.",
      "• Third-party service providers, including secure cloud accounting and IT service providers.",
      "• Professional advisers such as lawyers, bankers, auditors, insurers, and accountants.",
      "All third parties are required to protect your personal data and process it in accordance with applicable data protection laws.",
    ],
  },
  {
    title: "5. Data Security and Retention",
    content: [
      "Data Security: We have implemented appropriate technical and organisational security measures to protect your personal data against accidental loss, unauthorised access, alteration, or disclosure. Access is restricted to employees, contractors, and trusted third parties who require it for legitimate business purposes.",
      "Data Retention: We retain personal data only for as long as necessary to fulfil the purposes for which it was collected. To comply with HMRC requirements and professional obligations, we retain basic client information for at least six years after the client relationship ends, plus the current tax year.",
    ],
  },
  {
    title: "6. Your Legal Rights",
    content: [
      "Under UK data protection law, you have the right to:",
      "• Request access to your personal data.",
      "• Request correction of inaccurate or incomplete personal data.",
      "• Request erasure of your personal data.",
      "• Object to the processing of your personal data.",
      "• Request restriction of processing.",
      "• Request the transfer of your personal data.",
      "• Withdraw consent at any time where processing is based on your consent.",
      "To exercise any of these rights, please contact us at info@scaleupaccounting.uk. We aim to respond to all legitimate requests within one month, and no fee is normally payable.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy – ScaleUp Accounting Ltd",
    url: "https://www.scaleupaccounting.uk/legal/privacy-policy",
    isPartOf: { "@id": "https://www.scaleupaccounting.uk/#organization" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.scaleupaccounting.uk" },
        { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://www.scaleupaccounting.uk/legal/privacy-policy" },
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
            Privacy <br />
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A2F] via-[#2F5B8C] to-[#1E3A5F]">
              Policy
            </span>
          </h1>

          <p className="text-[#0A1A2F]/60 text-lg md:text-xl font-light tracking-wide leading-[1.8]">
  Last updated: July 2026
  <br />
  <br />
  Scaleup Accounting Limited respects your privacy and is committed to
  protecting your personal data. This Privacy Policy explains how we collect,
  use, store, and protect your personal data when you visit our website, use
  our professional services, or otherwise interact with us. It also explains
  your privacy rights and how the law protects you.
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
