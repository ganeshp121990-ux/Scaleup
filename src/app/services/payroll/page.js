import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Payroll Services London | PAYE & RTI Specialists | ScaleUp Accounting",
  description:
    "Full payroll management for UK businesses. PAYE calculations, RTI submissions, pension auto-enrolment, P60s and P11Ds. AAT Licensed payroll service in London.",
  alternates: {
    canonical: "https://www.scaleupaccounting.uk/services/payroll",
  },
  openGraph: {
    title: "Payroll Services London | ScaleUp Accounting Ltd",
    description:
      "PAYE, RTI, pension auto-enrolment, P60, P11D — full payroll management by AAT Licensed Accountants.",
    url: "https://www.scaleupaccounting.uk/services/payroll",
  },
};

const faqs = [
  {
    q: "What is RTI and when must submissions be made?",
    a: "Real Time Information (RTI) requires employers to report payroll data to HMRC on or before each pay date. A Full Payment Submission (FPS) must be filed each payday. If no payments are made in a tax month, an Employer Payment Summary (EPS) must be submitted by the 19th of the following month. ScaleUp Accounting Ltd handles all RTI submissions on behalf of clients.",
  },
  {
    q: "Do you manage pension auto-enrolment?",
    a: "Yes. We manage auto-enrolment obligations including assessing employee eligibility, setting up or liaising with your pension provider, calculating the correct employer and employee contributions each period, and maintaining the required auto-enrolment records. We work with all major workplace pension providers.",
  },
  {
    q: "Can you process weekly and monthly payroll?",
    a: "Yes. We process payroll for weekly, fortnightly, four-weekly, and monthly pay frequencies. We can also accommodate multiple pay frequencies within the same employer PAYE scheme if your business has different groups of employees.",
  },
  {
    q: "What happens when an employee joins or leaves?",
    a: "For new starters, we collect the required information (starter declaration, P45 if available, NI number, date of birth, and bank details) and include them in the first payroll run. For leavers, we prepare the P45 and submit the final FPS to HMRC with the leaving date. We also handle Statutory Maternity, Paternity, Adoption, and Shared Parental Pay calculations.",
  },
  {
    q: "Do you issue payslips and year-end documents?",
    a: "Yes. We produce and distribute password-protected payslips each period. At year end we prepare P60s for all employees and P11D forms where benefits in kind apply. We also manage the P11D(b) Class 1A NIC return filed by 6 July following the tax year.",
  },
];

export default function PayrollPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AccountingService",
        "@id": "https://www.scaleupaccounting.uk/services/payroll#service",
        name: "Payroll Services",
        provider: { "@id": "https://www.scaleupaccounting.uk/#organization" },
        url: "https://www.scaleupaccounting.uk/services/payroll",
        description: "Full payroll management including PAYE, RTI submissions, pension auto-enrolment, and year-end documentation for UK employers.",
        areaServed: { "@type": "Country", name: "United Kingdom" },
        serviceType: "Payroll",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.scaleupaccounting.uk" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.scaleupaccounting.uk/#services" },
          { "@type": "ListItem", position: 3, name: "Payroll", item: "https://www.scaleupaccounting.uk/services/payroll" },
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

      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-5 lg:px-12 max-w-[86rem] mx-auto">
        <div className="max-w-3xl mb-16">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] text-[#0A1A2F]/40 mb-8">
            <a href="/" className="hover:text-[#0A1A2F] transition-colors">Home</a>
            <span aria-hidden="true">/</span>
            <a href="/#services" className="hover:text-[#0A1A2F] transition-colors">Services</a>
            <span aria-hidden="true">/</span>
            <span className="text-[#0A1A2F]/70">Payroll</span>
          </nav>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#C8A96A] to-transparent" aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#C8A96A]">PAYE · RTI · Auto-Enrolment</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-light font-heading leading-[1.1] tracking-tight mb-6">
            Payroll{" "}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A2F] via-[#2F5B8C] to-[#1E3A5F]">
              Services
            </span>
          </h1>
          <p className="text-[#0A1A2F]/60 text-lg md:text-xl font-light leading-[1.8]">
            Comprehensive payroll management for UK businesses of all sizes — from sole traders with a single employee to growing companies with complex payroll structures. Fully HMRC compliant, with RTI submissions, auto-enrolment, and all year-end documentation handled for you.
          </p>
        </div>

        <div className="max-w-4xl space-y-8 mb-20">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">Full Payroll Management</h2>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light mb-4">
              Our payroll service covers every aspect of your employer obligations. Each pay period we calculate gross and net pay for all employees, apply the correct PAYE tax and National Insurance deductions, process pension contributions, apply any statutory payments (SMP, SSP, SPP), and submit the Full Payment Submission (FPS) to HMRC on or before the pay date.
            </p>
            <p className="text-[#0A1A2F]/70 leading-[1.8] font-light">
              Employees receive detailed, password-protected digital payslips each pay period. We also manage starter and leaver procedures, holiday pay calculations, and salary sacrifice arrangements where applicable.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)]">
            <h2 className="text-2xl md:text-3xl font-medium font-heading mb-6 text-[#0A1A2F]">What We Handle Each Payroll Period</h2>
            <ul className="space-y-3 text-[#0A1A2F]/70 font-light leading-[1.8]">
              {[
                "PAYE income tax and National Insurance calculations",
                "Pension auto-enrolment deductions and contributions",
                "Statutory pay (SMP, SSP, Paternity, Adoption, Shared Parental)",
                "RTI Full Payment Submission (FPS) to HMRC",
                "Employee payslip generation and distribution",
                "Starter (P46/starter declaration) and leaver (P45) processing",
                "Year-end P60s, P11Ds, and P11D(b) filing by statutory deadlines",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[#C8A96A] font-bold mt-1 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#C8A96A] to-transparent" aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#0A1A2F]/50">Frequently Asked Questions</span>
          </div>
          <div className="space-y-4 mb-16">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 md:p-8 border border-[#0A1A2F]/[0.05] shadow-[0_4px_20px_rgba(10,26,47,0.02)]">
                <h3 className="text-[16px] font-medium text-[#0A1A2F] mb-3 leading-[1.4]">{faq.q}</h3>
                <p className="text-[#0A1A2F]/60 text-[15px] font-light leading-[1.7]">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#0F172A] rounded-[2rem] p-8 md:p-12 text-white">
            <h2 className="text-2xl font-medium font-heading mb-4">Take the pressure off payroll</h2>
            <p className="text-white/60 font-light leading-[1.7] mb-8">Contact us to discuss your payroll requirements. We will confirm a fixed monthly fee based on your number of employees and pay frequency.</p>
            <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#0A1A2F] text-[13px] font-medium rounded-[7px] hover:bg-white/90 transition-colors duration-300">
              Book a Free Consultation
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Footer />
    </main>
  );
}
