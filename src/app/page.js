import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Process from "../components/sections/Process";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import Footer from "../components/footer/Footer";
import Insights from "../components/sections/Insights";
import Global from "../components/sections/Global";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Global />
      <Process />
      <Insights /> 
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
