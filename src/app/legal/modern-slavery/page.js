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
    title: "1. Policy Statement & Commitment",
    content: [
      "Scaleup Accounting Limited has a zero-tolerance approach to modern slavery, including slavery, servitude, human trafficking, and forced labour.",
      "We are committed to acting ethically, transparently, and with integrity in all our business dealings and relationships. We implement and enforce effective systems and controls to ensure that modern slavery is not taking place anywhere within our business or throughout our supply chains.",
    ],
  },
  {
    title: "2. Our Business and Supply Chains",
    content: [
      "Scaleup Accounting Limited is an Association of Accounting Technicians (AAT) registered professional accounting practice based in London, United Kingdom. We provide accounting, tax, bookkeeping, and business advisory services to a wide range of clients.",
      "As a professional services firm, we consider our exposure to modern slavery risks to be very low. Our supply chain primarily consists of:",
      "• Professional service providers and consultants.",
      "• Providers of IT software, cloud infrastructure, and office technology.",
      "• Suppliers of office facilities, cleaning, and administrative support services.",
    ],
  },
  {
    title: "3. Our Policies on Modern Slavery",
    content: [
      "We operate a number of internal policies to ensure our business is conducted ethically and transparently.",
      "• Recruitment Policy – We conduct eligibility-to-work checks for all employees to safeguard against forced labour and human trafficking.",
      "• Whistleblowing Policy – Employees, clients, and business partners are encouraged to report any concerns relating to modern slavery within our business or supply chain.",
      "• Code of Conduct – As an AAT-registered practice, our director and staff adhere to strict ethical standards, professional integrity, and legal compliance.",
    ],
  },
  {
    title: "4. Due Diligence Processes",
    content: [
      "As part of our commitment to identifying and reducing risk, we conduct due diligence when engaging new suppliers and periodically review existing suppliers.",
      "Our due diligence includes:",
      "• Evaluating modern slavery risks before appointing suppliers.",
      "• Regularly reviewing our supply chain.",
      "• Building long-term relationships with reputable UK suppliers wherever possible.",
      "• Taking appropriate action, including terminating supplier relationships, where serious breaches of our ethical expectations occur.",
    ],
  },
  {
    title: "5. Risk Assessment and Management",
    content: [
      "We recognise that industries such as cleaning, hospitality, and manufacturing present a higher risk of modern slavery.",
      "Although our interaction with these sectors is limited to office support services, we remain vigilant and expect all contractors and suppliers to ensure their own supply chains are free from modern slavery while paying employees at least the National Minimum Wage or National Living Wage.",
    ],
  },
  {
    title: "6. Training and Awareness",
    content: [
      "We provide appropriate awareness information to our staff so they understand the risks of modern slavery and human trafficking.",
      "We also expect our suppliers and business partners to provide suitable awareness and training within their own organisations.",
    ],
  },
  {
    title: "7. Approval",
    content: [
      "This policy is supported by the Director of Scaleup Accounting Limited, who has ultimate responsibility for its implementation and ensuring adequate resources are available for continued compliance with the Modern Slavery Act 2015.",
      "Digitally Signed by:",
      "Mr. Sumit Monani",
      "Director, Founder & Person with Significant Control",
      "Scaleup Accounting Limited",
      "July 2026",
      "",
      "Contact Details:",
      "Floor 37, Regus, 1 Canada Square, Canary Wharf",
      "London E14 5AA, United Kingdom",
      "Email: info@scaleupaccounting.uk",
      "Phone: +44 75187 55555",
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
  Effective Date: July 2026
  <br />
  <br />
  This statement is made pursuant to Section 54(1) of the Modern Slavery Act
  2015 and constitutes Scaleup Accounting Limited's Modern Slavery Policy and
  Statement. Although we may not meet the statutory turnover threshold
  requiring a mandatory statement, we voluntarily publish this policy to
  demonstrate our commitment to ethical business practices and corporate
  social responsibility.
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
