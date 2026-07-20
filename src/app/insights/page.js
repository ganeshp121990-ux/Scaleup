import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
  title: "Insights & Intelligence | ScaleUp Accounting Ltd",
  description:
    "Accounting insights, budget briefings, regulatory updates, and financial analysis from ScaleUp Accounting Ltd — London-based AAT Licensed Accountants.",
  alternates: {
    canonical: "https://www.scaleupaccounting.uk/insights",
  },
  openGraph: {
    title: "Insights & Intelligence | ScaleUp Accounting Ltd",
    description:
      "Budget briefings, GDPR updates, HMRC compliance guides, and economic analysis from ScaleUp Accounting Ltd.",
    url: "https://www.scaleupaccounting.uk/insights",
  },
};

const articles = [
  {
    href: "/insights/budget",
    tag: "Tax & Budget",
    title: "Autumn Budget 2026 Briefing",
    summary:
      "A practical guide to the key announcements in the Autumn Budget 2026 and what they mean for sole traders, partnerships, and limited companies.",
    date: "July 2026",
  },
  {
    href: "/insights/gdpr",
    tag: "Data & Regulation",
    title: "UK GDPR Regulatory Updates",
    summary:
      "The Data Use and Access Act 2025 has changed key aspects of data protection in the UK. Here is what accounting clients and small businesses need to know.",
    date: "June 2026",
  },
  {
    href: "/insights/hmrc",
    tag: "Compliance",
    title: "HMRC Compliance Guidelines",
    summary:
      "Making Tax Digital for Income Tax goes live in April 2026. We explain the deadlines, who is affected, and how to prepare your accounting records.",
    date: "May 2026",
  },
  {
    href: "/insights/analysis",
    tag: "Economy & Markets",
    title: "Economic & Market Analysis",
    summary:
      "UK SME financial conditions in 2026: interest rates, inflation, cash flow pressures, and the strategic accounting steps businesses should take now.",
    date: "April 2026",
  },
];

export default function InsightsIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Insights & Intelligence – ScaleUp Accounting Ltd",
    url: "https://www.scaleupaccounting.uk/insights",
    isPartOf: { "@id": "https://www.scaleupaccounting.uk/#organization" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.scaleupaccounting.uk" },
        { "@type": "ListItem", position: 2, name: "Insights", item: "https://www.scaleupaccounting.uk/insights" },
      ],
    },
  };

  return (
    <main className="bg-[#FDFCFB] text-[#0A1A2F]">
      <Navbar />

      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-5 lg:px-12 max-w-[86rem] mx-auto">
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#C8A96A] to-transparent" aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#C8A96A]">
              Intelligence
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-light font-heading leading-[1.1] tracking-tight mb-8">
            Insights &{" "}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A2F] via-[#2F5B8C] to-[#1E3A5F]">
              Intelligence
            </span>
          </h1>
          <p className="text-[#0A1A2F]/60 text-lg md:text-xl font-light leading-[1.8]">
            Regulatory briefings, budget analysis, and compliance guidance from ScaleUp Accounting Ltd — keeping UK businesses informed and prepared.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group bg-white rounded-[2rem] p-8 md:p-10 border border-[#0A1A2F]/[0.06] hover:border-[#0A1A2F]/15 shadow-[0_4px_20px_rgba(10,26,47,0.02)] hover:shadow-[0_12px_40px_rgba(10,26,47,0.06)] transition-all duration-500 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C8A96A]">
                  {article.tag}
                </span>
                <span className="text-[12px] text-[#0A1A2F]/40 font-light">{article.date}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-medium font-heading text-[#0A1A2F] leading-[1.3] mb-4 group-hover:text-[#2F5B8C] transition-colors duration-300">
                {article.title}
              </h2>
              <p className="text-[#0A1A2F]/60 text-[15px] font-light leading-[1.7] flex-1">
                {article.summary}
              </p>
              <span className="mt-6 text-[12px] font-bold tracking-[0.15em] uppercase text-[#0A1A2F]/50 group-hover:text-[#C8A96A] transition-colors duration-300">
                Read more →
              </span>
            </Link>
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
