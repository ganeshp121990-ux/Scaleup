import Hero from "@/components/sections/hero/Hero";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/about/About";
import Services from "@/components/sections/services/Services";
import ComplianceandSecurity from "@/components/sections/compliance/ComplianceSecurity";

import Contact from "@/components/sections/Contact";
import RPOBusinessAdvisory from "@/components/sections/rpo/RPOBusinessAdvisory";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <RPOBusinessAdvisory />
      <ComplianceandSecurity />
      <Contact />
      <Footer />
    </main>
  );
}
