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
      "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners. Cookies do not harm your device and cannot be used to run programmes or deliver viruses.",
    ],
  },
  {
    title: "2. How We Use Cookies",
    content: [
      "Our website uses a minimal set of cookies necessary for the site to function correctly. We do not use advertising cookies or third-party tracking cookies that monitor your behaviour across other websites.",
      "The cookies we may use fall into the following categories: Strictly Necessary Cookies, which are essential for the website to operate and cannot be switched off; and Analytics Cookies, which help us understand how visitors interact with our website so we can improve it. Analytics data is collected in an anonymised form where possible.",
    ],
  },
  {
    title: "3. Strictly Necessary Cookies",
    content: [
      "These cookies are required for the website to function. They include session management cookies that maintain your browsing session, security cookies that help prevent fraudulent use of our website, and load balancing cookies that ensure the website remains available during high traffic. These cookies do not collect personal information and cannot be disabled.",
    ],
  },
  {
    title: "4. Analytics Cookies",
    content: [
      "We may use analytics tools to understand how our website is being used, which pages are most popular, and where visitors come from. This helps us improve the content and structure of our website. Where analytics tools set cookies, they are configured to anonymise IP addresses and are not used to identify individual visitors.",
      "You can opt out of analytics tracking by enabling the Do Not Track setting in your browser, or by using your browser's cookie management tools to block or delete cookies.",
    ],
  },
  {
    title: "5. Managing Your Cookie Preferences",
    content: [
      "Most web browsers allow you to manage cookies through their settings. You can typically set your browser to refuse cookies, or to alert you when cookies are being sent. Instructions for managing cookies in common browsers are available at: Chrome (support.google.com/chrome), Firefox (support.mozilla.org), Safari (support.apple.com), Edge (support.microsoft.com).",
      "Please note that disabling cookies may affect the functionality of some parts of our website.",
    ],
  },
  {
    title: "6. Third-Party Services",
    content: [
      "Our website may contain links to third-party websites or embed content from third-party services. These third parties may set their own cookies. We have no control over these cookies and they are not covered by this policy. We encourage you to review the privacy and cookie policies of any third-party websites you visit.",
    ],
  },
  {
    title: "7. Changes to This Policy",
    content: [
      "We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated review date. This policy was last reviewed: July 2026.",
      "If you have any questions about our use of cookies, please contact us at advisory@scaleupaccounting.co.uk.",
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
            This Cookie Policy explains how ScaleUp Accounting Ltd uses cookies and similar technologies when you visit our website. We use cookies only where necessary for the site to function, and we do not use cookies for advertising or cross-site tracking.
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
