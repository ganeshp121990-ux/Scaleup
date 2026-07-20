import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms of Business | ScaleUp Accounting Ltd",
  description:
    "Terms of Business for ScaleUp Accounting Ltd. The standard terms governing our professional accounting, bookkeeping, payroll, and tax services.",
  alternates: {
    canonical: "https://www.scaleupaccounting.uk/legal/terms",
  },
  openGraph: {
    title: "Terms of Business | ScaleUp Accounting Ltd",
    description:
      "Standard terms governing ScaleUp Accounting Ltd professional accounting and bookkeeping services.",
    url: "https://www.scaleupaccounting.uk/legal/terms",
  },
};

const sections = [
  {
    title: "1. Our Services",
    content: [
      "ScaleUp Accounting Ltd (\"we\", \"us\", \"our\") agrees to provide accounting, bookkeeping, payroll, VAT, tax, and related services as set out in a separate letter of engagement or service agreement issued to you (\"the Client\") prior to the commencement of work. The specific scope of services, fees, and timing will be confirmed in that document.",
      "We are an AAT Licensed Accounting Practice regulated by the Association of Accounting Technicians (AAT) and carry out our work in accordance with AAT professional standards.",
    ],
  },
  {
    title: "2. Client Responsibilities",
    content: [
      "The Client is responsible for: providing us with complete, accurate, and timely information required to perform our services; notifying us promptly of any changes in circumstances that may affect the work; approving or raising queries regarding draft documents within agreed timescales; maintaining adequate accounting records; and complying with all applicable laws and regulations, including those imposed by HMRC and Companies House.",
      "We rely on the information provided by the Client. We cannot accept responsibility for errors or omissions arising from inaccurate or incomplete information supplied by the Client.",
    ],
  },
  {
    title: "3. Fees and Payment",
    content: [
      "Our fees are agreed with each client individually and set out in the applicable letter of engagement. Unless otherwise agreed, fees are based on time spent at our standard hourly rates, with estimates provided before work commences.",
      "Invoices are payable within 14 days of the invoice date. We reserve the right to charge interest on overdue amounts at 8% per annum above the Bank of England base rate, pursuant to the Late Payment of Commercial Debts (Interest) Act 1998. We also reserve the right to suspend or terminate services where invoices remain materially overdue.",
    ],
  },
  {
    title: "4. Confidentiality",
    content: [
      "We will keep all Client information strictly confidential and will not disclose it to any third party without the Client's consent, except where: required by law or regulation (including disclosure to HMRC, Companies House, or law enforcement); required by our regulatory body (AAT) in the conduct of a quality review; or where disclosure is necessary to provide the agreed services (for example, to software providers acting as data processors).",
      "Our confidentiality obligations continue after the termination of our engagement.",
    ],
  },
  {
    title: "5. Professional Indemnity",
    content: [
      "ScaleUp Accounting Ltd holds Professional Indemnity Insurance as required by the AAT. Details of our policy are available on request. Our liability to the Client is limited to the extent permitted by applicable law, and in any case does not exceed the level of cover provided by our Professional Indemnity Insurance.",
    ],
  },
  {
    title: "6. Limitation of Liability",
    content: [
      "We accept liability only for direct loss caused by our own negligence or wilful default. We do not accept liability for: loss of profit, consequential loss, or indirect loss; any loss arising from the Client's failure to act on our advice or provide accurate information; penalties, interest, or surcharges imposed by HMRC or other authorities where these result from the Client's failure to meet deadlines or provide information in time.",
      "Nothing in these terms limits our liability for death or personal injury caused by negligence, or for fraud or fraudulent misrepresentation.",
    ],
  },
  {
    title: "7. Anti-Money Laundering",
    content: [
      "As an AAT-licensed firm, we are subject to the Money Laundering, Terrorist Financing and Transfer of Funds (Information on the Payer) Regulations 2017. We are required to apply customer due diligence measures before establishing a business relationship and to maintain records of identity verification. We may be required by law to report any suspicion of money laundering or terrorist financing to the relevant authorities, and we may not be able to inform the Client if such a report is made.",
    ],
  },
  {
    title: "8. Termination",
    content: [
      "Either party may terminate the engagement by giving not less than 30 days' written notice. Upon termination, the Client remains liable for all fees and disbursements incurred up to the termination date. We will provide reasonable assistance to ensure a smooth handover to a successor adviser.",
      "We reserve the right to terminate the engagement immediately if the Client fails to pay outstanding invoices, provides fraudulent or misleading information, or if continuation would require us to breach our professional obligations.",
    ],
  },
  {
    title: "9. Governing Law",
    content: [
      "These Terms of Business are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
      "These Terms of Business were last reviewed: July 2026.",
    ],
  },
];

export default function TermsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Business – ScaleUp Accounting Ltd",
    url: "https://www.scaleupaccounting.uk/legal/terms",
    isPartOf: { "@id": "https://www.scaleupaccounting.uk/#organization" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.scaleupaccounting.uk" },
        { "@type": "ListItem", position: 2, name: "Terms of Business", item: "https://www.scaleupaccounting.uk/legal/terms" },
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
            Terms of <br />
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A2F] via-[#2F5B8C] to-[#1E3A5F]">
              Business
            </span>
          </h1>

          <p className="text-[#0A1A2F]/60 text-lg md:text-xl font-light tracking-wide leading-[1.8]">
            These standard terms govern the professional relationship between ScaleUp Accounting Ltd and our clients. They are to be read together with your individual letter of engagement, which sets out the specific services, fees, and timescales agreed with you.
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
