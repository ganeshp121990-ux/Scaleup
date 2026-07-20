import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Client Portal Login | ScaleUp Accounting Ltd",
  description:
    "Access the ScaleUp Accounting client portal. Contact us to receive your login credentials and portal access link.",
  alternates: {
    canonical: "https://www.scaleupaccounting.uk/login",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return (
    <main className="bg-[#FDFCFB] text-[#0A1A2F]">
      <Navbar />

      <section className="relative pt-40 pb-32 md:pt-52 md:pb-48 px-5 lg:px-12 max-w-[86rem] mx-auto min-h-[80vh] flex items-start">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#C8A96A] to-transparent" aria-hidden="true" />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#C8A96A]">
              Client Portal
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-light font-heading leading-[1.1] tracking-tight mb-6">
            Secure Client{" "}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#0A1A2F] via-[#2F5B8C] to-[#1E3A5F]">
              Login
            </span>
          </h1>

          <p className="text-[#0A1A2F]/60 text-lg font-light leading-[1.8] mb-12">
            To access your client portal, please contact us and we will provide your secure login credentials and access link. Your portal gives you direct access to your accounts, documents, and ongoing reports.
          </p>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-[#0A1A2F]/[0.05] shadow-[0_20px_50px_-20px_rgba(10,26,47,0.04)] space-y-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.1em] font-medium text-[#0A1A2F]/50 mb-2">
                Email Us
              </p>
              <a
                href="mailto:advisory@scaleupaccounting.co.uk"
                className="text-[18px] font-medium text-[#0A1A2F] hover:text-[#2F5B8C] transition-colors duration-300"
              >
                advisory@scaleupaccounting.co.uk
              </a>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.1em] font-medium text-[#0A1A2F]/50 mb-2">
                Call Us
              </p>
              <a
                href="tel:07444955555"
                className="text-[18px] font-medium text-[#0A1A2F] hover:text-[#2F5B8C] transition-colors duration-300"
              >
                074449 55555
              </a>
            </div>

            <div className="pt-6 border-t border-[#0A1A2F]/[0.06]">
              <p className="text-[#0A1A2F]/50 text-sm font-light leading-[1.7]">
                New client? Please{" "}
                <a href="/#contact" className="underline decoration-[#C8A96A]/50 hover:text-[#0A1A2F] transition-colors">
                  book a free consultation
                </a>{" "}
                and we will set up your account once your engagement letter has been signed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
