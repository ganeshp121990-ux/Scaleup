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
    title: "1. Who We Are",
    content: [
      "ScaleUp Accounting Ltd is the data controller for any personal data we collect about you. We are a limited company registered in England and Wales (Company No. 17121237), with our registered office at 120 Moorgate, London, EC2M 6UR.",
      "We are licensed and regulated by the Association of Accounting Technicians (AAT) and are registered with the Information Commissioner's Office (ICO). You can contact us about data protection matters at advisory@scaleupaccounting.co.uk.",
    ],
  },
  {
    title: "2. What Personal Data We Collect",
    content: [
      "We collect personal data that you provide directly to us when you engage our services, make an enquiry, or communicate with us. This may include: full name, address, date of birth, National Insurance number, Unique Taxpayer Reference (UTR), contact details (email address and telephone number), financial information (income, expenditure, bank account details) necessary to provide our services, identity verification documents (passport, driving licence) required under Anti-Money Laundering regulations, and employment or business information relevant to the services requested.",
      "We may also collect limited technical data from your use of our website, such as your IP address, browser type, and pages visited, for security and analytics purposes.",
    ],
  },
  {
    title: "3. How We Use Your Personal Data",
    content: [
      "We use your personal data to provide the accounting, bookkeeping, payroll, VAT, and tax services you have engaged us for; to comply with our legal obligations, including those imposed by HMRC, Companies House, and the Money Laundering Regulations 2017; to communicate with you about your affairs and our services; to maintain our professional records; and to send you relevant regulatory updates or service-related information.",
      "The legal basis for processing is primarily the performance of a contract (Article 6(1)(b) UK GDPR), compliance with a legal obligation (Article 6(1)(c) UK GDPR), and where applicable, our legitimate interests (Article 6(1)(f) UK GDPR) in operating our practice effectively.",
    ],
  },
  {
    title: "4. How Long We Keep Your Data",
    content: [
      "We retain client records for a minimum of six years following the end of the tax year to which they relate, in accordance with HMRC requirements and our professional obligations. Identity verification documents collected for Anti-Money Laundering purposes are retained for a minimum of five years from the end of our business relationship with you.",
      "Where data is no longer required, we securely delete or anonymise it. You may request early deletion where no legal or regulatory obligation requires us to retain your data.",
    ],
  },
  {
    title: "5. Who We Share Your Data With",
    content: [
      "We do not sell or rent your personal data to third parties. We may share your data with HMRC and Companies House as required in the course of providing our services; our cloud accounting software providers (such as Xero, QuickBooks, or FreeAgent) under data processing agreements; and our professional indemnity insurers where a claim arises.",
      "All third-party processors we engage are bound by contractual obligations to process your data only on our instructions and in compliance with applicable data protection law.",
    ],
  },
  {
    title: "6. Your Rights Under UK GDPR",
    content: [
      "You have the right to: access the personal data we hold about you; request correction of any inaccurate or incomplete data; request erasure of your data where there is no legitimate reason for us to continue processing it; object to processing based on our legitimate interests; request restriction of processing in certain circumstances; and receive your data in a portable format.",
      "To exercise any of these rights, please contact us in writing at advisory@scaleupaccounting.co.uk. We will respond within one calendar month. If you are not satisfied with our response, you have the right to lodge a complaint with the Information Commissioner's Office at ico.org.uk.",
    ],
  },
  {
    title: "7. Data Security",
    content: [
      "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, or disclosure. These include encrypted transmission of data, secure cloud-based document management, access controls limiting data access to authorised personnel only, and regular security reviews.",
    ],
  },
  {
    title: "8. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in law or our practices. The current version will always be available on our website. Material changes will be communicated to active clients directly.",
      "This policy was last reviewed: July 2026.",
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
            We are committed to protecting and respecting your privacy. This policy explains how ScaleUp Accounting Ltd collects, uses, and safeguards your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
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
