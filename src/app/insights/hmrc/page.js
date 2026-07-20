import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "HMRC Compliance Guidelines 2026 | ScaleUp Accounting Insights",
  description:
    "Essential HMRC compliance guidance for UK businesses in 2026. Making Tax Digital deadlines, Self Assessment, RTI payroll, VAT digital records, and avoiding common penalties.",
  alternates: {
    canonical: "https://www.scaleupaccounting.uk/insights/hmrc",
  },
  openGraph: {
    title: "HMRC Compliance Guidelines 2026 | ScaleUp Accounting",
    description:
      "MTD deadlines, Self Assessment, RTI, VAT compliance and HMRC penalty avoidance for UK businesses — ScaleUp Accounting Ltd.",
    url: "https://www.scaleupaccounting.uk/insights/hmrc",
    type: "article",
  },
};

const faqs = [
  {
    q: "What is the Self Assessment filing deadline?",
    a: "The deadline for online Self Assessment tax returns is 31 January following the end of the tax year. For example, the 2025/26 tax return must be filed by 31 January 2027. Paper returns have an earlier deadline of 31 October. Payment of any tax owed is also due by 31 January, and a second payment on account is due by 31 July.",
  },
  {
    q: "What penalties apply if I miss the Self Assessment deadline?",
    a: "HMRC charges an automatic £100 penalty for late filing, even if you have no tax to pay. After 3 months, daily penalties of £10 per day apply (up to 90 days, £900 maximum). After 6 months, a further penalty of 5% of the tax due or £300 (whichever is greater) applies. Further penalties are charged after 12 months.",
  },
  {
    q: "When must I register for RTI payroll submissions?",
    a: "Real Time Information (RTI) submissions must be made on or before the date you pay employees. A Full Payment Submission (FPS) is required each time you make a payment. If you have made no payments in a tax month, an Employer Payment Summary (EPS) must be submitted by the 19th of the following month. Late or missing RTI submissions may result in HMRC penalties.",
  },
  {
    q: "What digital records do I need to keep for Making Tax Digital for VAT?",
    a: "Under MTD for VAT, VAT-registered businesses must keep digital records of: the time of supply (tax point), value of supply, and VAT rate charged. Records must be maintained in functional compatible software and used to submit VAT returns digitally. Manual transfer of data between software systems (digital links) is not permitted.",
  },
  {
    q: "How do I avoid HMRC interest charges on late tax payments?",
    a: "HMRC charges interest on late payments of tax. The current rate is the Bank of England base rate plus 2.5%. To avoid interest, ensure all payments on account and balancing payments are made by the relevant 31 January or 31 July deadlines. If you are struggling to pay, contact HMRC in advance — a Time to Pay arrangement may be available.",
  },
];

export default function HmrcCompliancePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.scaleupaccounting.uk/insights/hmrc#article",
        headline: "HMRC Compliance Guidelines 2026",
        description: "Essential HMRC compliance deadlines and guidance for UK businesses in 2026.",
        url: "https://www.scaleupaccounting.uk/insights/hmrc",
        datePublished: "2026-05-01",
        dateModified: "2026-07-20",
        author: { "@type": "Organization", name: "ScaleUp Accounting Ltd" },
        publisher: { "@id": "https://www.scaleupaccounting.uk/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.scaleupaccounting.uk" },
          { "@type": "ListItem", position: 2, name: "Insights", item: "https://www.scaleupaccounting.uk/insights" },
          { "@type": "ListItem", position: 3, name: "HMRC Compliance Guidelines", item: "https://www.scaleupaccounting.uk/insights/hmrc" },
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
            <span className="text-[#0A1A2F]/70">HMRC Compliance Guidelines</span>
          </nav>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#C8A96A] to-transparent" aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#C8A96A]">Compliance</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-light font-heading leading-[1.1] tracking-tight mb-6">
            HMRC{" "}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A2F] via-[#2F5B8C] to-[#1E3A5F]">
              Compliance Guidelines
            </span>
          </h1>
          <p className="text-[#0A1A2F]/50 text-sm font-light mb-8">Published by ScaleUp Accounting Ltd &mdash; May 2026</p>
          <p className="text-[#0A1A2F]/60 text-lg md:text-xl font-light leading-[1.8]">
            Staying HMRC compliant requires meeting multiple deadlines and keeping accurate digital records. This guide covers the key obligations for UK businesses in 2026, including Making Tax Digital, Self Assessment, RTI payroll, and VAT compliance.
          </p>
        </div>

        <div className="max-w-3xl space-y-12 mb-20">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">Making Tax Digital for Income Tax — April 2026</h2>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light mb-4">
              From 6 April 2026, Making Tax Digital for Income Tax Self Assessment (MTD ITSA) is mandatory for sole traders and landlords with gross income above £50,000. These businesses must maintain digital records using HMRC-compatible software and submit quarterly updates to HMRC, replacing the annual Self Assessment return.
            </p>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light">
              Quarterly updates must be submitted within one month of the end of each quarter. An End of Period Statement (EOPS) must be submitted for each source of income, and a Final Declaration replaces the traditional SA100 return. If you are approaching this threshold, now is the time to ensure your bookkeeping is digital and your accountant is set up to submit on your behalf.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">Self Assessment Key Dates</h2>
            <div className="space-y-4">
              {[
                { date: "5 April 2026", label: "End of 2025/26 tax year" },
                { date: "6 April 2026", label: "Start of 2026/27 tax year" },
                { date: "31 July 2026", label: "Second payment on account for 2025/26 tax year due" },
                { date: "5 October 2026", label: "Deadline to register for Self Assessment if new taxpayer in 2025/26" },
                { date: "31 October 2026", label: "Paper return filing deadline for 2025/26" },
                { date: "31 January 2027", label: "Online return filing deadline and balancing payment due for 2025/26" },
              ].map((item) => (
                <div key={item.date} className="flex gap-4 items-start">
                  <span className="text-[12px] font-bold text-[#C8A96A] w-36 flex-shrink-0 pt-1">{item.date}</span>
                  <span className="text-[#0A1A2F]/70 font-light text-[15px] leading-[1.6]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">RTI Payroll Compliance</h2>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light mb-4">
              Real Time Information (RTI) requires employers to submit payroll data to HMRC on or before every pay date. A Full Payment Submission (FPS) must accompany each payroll run. If no payment is made in a tax month, an Employer Payment Summary (EPS) must be submitted by the 19th of the following month.
            </p>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light">
              Common compliance failures include late FPS submissions, incorrect employee details (particularly National Insurance numbers and dates of birth), and failure to submit EPS for nil payment months. ScaleUp Accounting Ltd manages full payroll compliance for clients using HMRC-recognised payroll software.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">VAT Compliance & Digital Records</h2>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light mb-4">
              All VAT-registered businesses must now submit VAT returns digitally under Making Tax Digital for VAT. Digital records must include the time of supply, value of supply, and rate of VAT for every transaction. Businesses cannot manually re-key data between different software systems — digital links must exist throughout.
            </p>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light">
              The VAT registration threshold remains at £90,000 of taxable turnover in any rolling 12-month period. Once registered, quarterly VAT returns are due one month and seven days after the end of each VAT period, with payment due at the same time. Businesses with annual VAT liability above £2.3 million must make payments on account.
            </p>
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
            <h2 className="text-2xl font-medium font-heading mb-4">Let us manage your HMRC compliance</h2>
            <p className="text-white/60 font-light leading-[1.7] mb-8">ScaleUp Accounting Ltd handles Self Assessment, RTI payroll, VAT returns, and MTD compliance for clients across the UK. Contact us to ensure you never miss a deadline.</p>
            <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#0A1A2F] text-[13px] font-medium rounded-[7px] hover:bg-white/90 transition-colors duration-300">
              Book a Free Consultation
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
