"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${
        scrolled
          ? "backdrop-blur-xl bg-black/80 border-b border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl tracking-[0.15em] font-semibold text-white">
          Nayan Dhinoja & Associates
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-wide">
          {["Home","About","Services","Process","Testimonials","Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-white/80 hover:text-[#C6A96B] transition duration-300 group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-[#C6A96B] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#C6A96B] text-black px-6 py-2.5 rounded-full text-sm font-medium tracking-wide shadow-lg shadow-[#C6A96B]/20 hover:shadow-[#C6A96B]/40 transition"
        >
          Book Consultation
        </motion.button>

      </div>
    </motion.nav>
  );
}
