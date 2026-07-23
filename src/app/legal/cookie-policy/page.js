import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Cookie Policy | ScaleUp Accounting Ltd",
  description:
    "ScaleUp Accounting Ltd Cookie Policy. Information about how we use cookies on our website and how you can manage your cookie preferences.",
  alternates: {
    canonical: "https://www.scaleupaccounting.uk/legal/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy | ScaleUp Accounting Ltd",
    description:
      "Information about how ScaleUp Accounting Ltd uses cookies and how to manage your preferences.",
    url: "https://www.scaleupaccounting.uk/legal/cookie-policy",
  },
};

const sections = [
  {
    title: "1. What Are Cookies?",
    content: [
      'Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.',
      'Cookies set by the website owner are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).',
    ],
  },
  {
    title: "2. Why Do We Use Cookies?",
    content: [
      'We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies.',
      "Other cookies enable us to track and target the interests of our users to enhance the experience on our online property.",
    ],
  },
  {
    title: "3. Types of Cookies We Use",
    content: [
      "The specific types of first and third-party cookies served through our website and the purposes they perform are:",
      "",
      "• Strictly Necessary Cookies\nThese cookies are essential to provide services available through our website and to use features such as accessing secure client portals or filling out forms.\nExpiry & Control: Session – cannot be disabled because the website requires them to function properly.",
      "",
      "• Performance & Analytics Cookies\nThese cookies collect information in aggregate form to help us understand how our website is used (for example, Google Analytics) and how effective our marketing campaigns are.\nExpiry & Control: Persistent – can be turned off via our cookie preference settings.",
      "",
      "• Functionality Cookies\nThese cookies enhance the performance and functionality of our website but are not essential. Without them, certain functionality may become unavailable.\nExpiry & Control: Persistent – can be managed through your browser settings.",
    ],
  },
  {
    title: "4. How Can I Control Cookies?",
    content: [
      "You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences using our Cookie Consent Banner when you first visit our website, or by adjusting your preferences later.",
      "You can also configure your web browser to accept or refuse cookies. If you choose to reject cookies, you may still use our website, although some functionality and areas of the website may become unavailable. Because browser controls differ, please refer to your browser's help menu for instructions.",
    ],
  },
  {
    title: "5. Updates to This Policy",
    content: [
      "We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. Please review this page periodically to stay informed about our use of cookies and related technologies.",
    ],
  },
  {
    title: "6. Contact Us",
    content: [
      "If you have any questions about our use of cookies or other technologies, please contact us:",
      "Email: info@scaleupaccounting.uk",
      "Scaleup Accounting Limited",
      "Director: Sumit Monani",
      "Floor 37, Regus, 1 Canada Square, Canary Wharf",
      "London E14 5AA, United Kingdom",
      "Phone: +44 75187 55555",
    ],
  },
];

export default function CookiePolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cookie Policy – ScaleUp Accounting Ltd",
    url: "https://www.scaleupaccounting.uk/legal/cookie-policy",
    isPartOf: { "@id": "https://www.scaleupaccounting.uk/#organization" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.scaleupaccounting.uk" },
        { "@type": "ListItem", position: 2, name: "Cookie Policy", item: "https://www.scaleupaccounting.uk/legal/cookie-policy" },
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
            Cookie <br />
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A2F] via-[#2F5B8C] to-[#1E3A5F]">
              Policy
            </span>
          </h1>

          <p className="text-[#0A1A2F]/60 text-lg md:text-xl font-light tracking-wide leading-[1.8]">
  Last updated: July 2026
  <br />
  <br />
  This Cookie Policy explains how Scaleup Accounting Limited ("we", "us", or "our")
  uses cookies and similar technologies when you visit our website
  (https://scaleupaccounting.uk). It explains what these technologies are,
  why we use them, and your rights to control our use of them.
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
