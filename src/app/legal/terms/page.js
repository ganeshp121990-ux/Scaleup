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
    title: "1. Scope of Services & Professional Standards",
    content: [
      "We will provide professional accounting services as agreed in writing within a formal Letter of Engagement.",
      "As an AAT (Association of Accounting Technicians) registered practice, we are bound by the ethical guidelines and professional standards set by the AAT.",
      "We will exercise reasonable skill and care in providing our services, ensuring compliance with applicable professional standards and UK law.",
    ],
  },
  {
    title: "2. Client Responsibilities",
    content: [
      "To enable us to provide effective services, you agree to:",
      "• Provide complete, accurate, and timely information and documentation required for our services.",
      "• Respond promptly to requests for clarification or further information.",
      "• Ensure your internal records and accounts are properly maintained between formal reviews where applicable.",
      "• Notify us immediately of any material changes to your business operations, financial position, or corporate structure.",
      "We are not responsible for delays, penalties, or errors resulting from your failure to provide necessary information on time.",
    ],
  },
  {
    title: "3. Fees and Payment Terms",
    content: [
      "Our fees are based on the degree of responsibility, skill involved, and time required to complete the work, unless a fixed fee has been agreed in writing.",
      "Fees will be billed at regular intervals as outlined in the Letter of Engagement.",
      "Invoices are payable within a maximum of 7 days from the invoice date, unless otherwise stated in your Letter of Engagement.",
      "We reserve the right to charge statutory interest on late payments in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.",
      "If payments are delayed, we may suspend services until outstanding balances are cleared.",
    ],
  },
  {
    title: "4. Confidentiality",
    content: [
      "We are committed to maintaining the highest level of confidentiality.",
      "We will not disclose confidential information relating to your business, financial affairs, or personal data to any third party without your consent, except where required by law, court order, or professional regulatory bodies such as the AAT.",
    ],
  },
  {
    title: "5. Complaints Procedure",
    content: [
      "We are committed to providing a high standard of service. If you are dissatisfied with any aspect of our service, please raise the matter with us immediately so we can attempt to resolve it.",
      "If we are unable to resolve your complaint internally, as an AAT member, you may have the right to refer the matter to the Association of Accounting Technicians (AAT) for further investigation.",
    ],
  },
  {
    title: "6. Limitation of Liability",
    content: [
      "Our liability for any loss or damage arising from our services, whether in contract, tort (including negligence), or otherwise, is limited to the amount of fees paid by you for the specific service giving rise to the claim, or as otherwise stated in our Letter of Engagement.",
      "We hold Professional Indemnity Insurance in accordance with AAT requirements.",
    ],
  },
  {
    title: "7. Data Protection & Anti-Money Laundering (AML)",
    content: [
      "Data Protection: We comply with applicable UK data protection legislation, including UK GDPR. Details of how we process your personal data are provided in our Privacy Policy available at https://scaleupaccounting.uk.",
      "AML Compliance: Under the Money Laundering, Terrorist Financing and Transfer of Funds Regulations 2017 and AAT supervisory guidelines, we are required to verify client identities.",
      "We are also legally required to report suspicious transactions to the National Crime Agency (NCA) without informing you.",
    ],
  },
  {
    title: "8. Termination",
    content: [
      "Either party may terminate the engagement by providing 30 days' written notice.",
      "Following termination, you remain responsible for payment of all work completed up to the termination date.",
      "We reserve the right to withhold files or documents until all outstanding fees have been settled in full.",
    ],
  },
  {
    title: "9. Governing Law and Jurisdiction",
    content: [
      "These Terms and Conditions are governed by and interpreted according to the laws of England and Wales.",
      "Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the English courts.",
    ],
  },
  {
    title: "10. Contact Us",
    content: [
      "If you have any questions or require clarification regarding these Terms and Conditions, please contact us:",
      "Scaleup Accounting Limited",
      "Director: Sumit Monani",
      "Floor 37, Regus, 1 Canada Square, Canary Wharf",
      "London E14 5AA, United Kingdom",
      "Email: info@scaleupaccounting.uk",
      "Phone: +44 75187 55555",
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
  Effective Date: July 2026
  <br />
  <br />
  These Terms and Conditions set out the basis on which Scaleup Accounting
  Limited ("we", "us", or "our") will provide accounting, tax, and bookkeeping
  services to you ("the Client", "you"). By engaging our services, you agree
  to be bound by these terms.
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
