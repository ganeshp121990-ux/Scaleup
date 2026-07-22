"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const EASE = [0.2, 1, 0.2, 1];

const NAV_LINKS = [
  "Home",
  "About",
  "Services",
  "Compliance",
  "RPO",
  "Contact",
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
const pathname = usePathname();
const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map((l) => l.toLowerCase());
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = useCallback(
  (id) => {
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  },
  [pathname, router]
);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={visible ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
        transition={{ duration: 1.2, ease: EASE }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)]
          ${scrolled
            ? "py-4 md:py-4 backdrop-blur-2xl bg-white/80 shadow-[0_8px_32px_-8px_rgba(30,58,95,0.06)] border-b border-deepBlue/[0.04]"
            : "py-5 md:py-8 bg-transparent border-b border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo("home"); }}
            className="relative group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96A] focus-visible:ring-offset-2 rounded-sm"
          >
            <Image
              src="/Logo.svg"
              alt="ScaleUp Accounting Ltd – home"
              width={180}
              height={48}
              priority
              className={`h-9 md:h-11 w-auto object-contain transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)] origin-left
                ${scrolled ? "opacity-100 scale-[0.95]" : "opacity-95 scale-100 group-hover:opacity-100"}`}
            />
          </a>

          <div className="hidden md:flex items-center gap-10 text-[14px] tracking-[0.02em]">
            {NAV_LINKS.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                  className="group relative py-1.5 font-body font-medium transition-all duration-500 ease-[cubic-bezier(0.2,1,0.2,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96A] focus-visible:ring-offset-2 rounded-sm"
                >
                  <span
                    className={`inline-block transition-all duration-500 ease-[cubic-bezier(0.2,1,0.2,1)]
                      group-hover:-translate-y-[1px]
                      ${isActive ? "text-deepBlue" : "text-deepBlue/60 group-hover:text-deepBlue/90"}`}
                  >
                    {item}
                  </span>
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] bg-deepBlue/60
                      transition-all duration-500 ease-[cubic-bezier(0.2,1,0.2,1)]
                      ${isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-50"}`}
                  />
                </a>
              );
            })}
          </div>

          <button
            onClick={() => scrollTo("contact")}
            className="group relative hidden md:block px-8 py-[11px] bg-deepBlue text-white text-[13px] font-medium
                       rounded-[6px] tracking-[0.04em] overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96A] focus-visible:ring-offset-2
                       border border-white/5
                       transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)]
                       hover:scale-[1.02] hover:bg-[#162a45] hover:shadow-[0_16px_32px_-8px_rgba(30,58,95,0.3)]
                       active:scale-[0.985]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1100ms] ease-[cubic-bezier(0.2,1,0.2,1)]" />
            <span className="relative z-10 flex items-center gap-2">
              Book Consultation
              <svg className="w-3.5 h-3.5 opacity-70 transition-transform duration-700 ease-[cubic-bezier(0.2,1,0.2,1)] group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            className="md:hidden relative z-[60] flex flex-col justify-center items-center w-11 h-11 gap-[5px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96A] focus-visible:ring-offset-2 rounded-md"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="block w-5 h-[1.5px] bg-deepBlue origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="block w-5 h-[1.5px] bg-deepBlue origin-center"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="block w-5 h-[1.5px] bg-deepBlue origin-center"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed inset-0 z-40 md:hidden bg-[#FAFBFA]/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.04 * i }}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileOpen(false);
                    setTimeout(() => scrollTo(item.toLowerCase()), 400);
                  }}
                  className={`text-[24px] tracking-[0.02em] font-heading font-medium transition-colors duration-500
                    ${activeSection === item.toLowerCase() ? "text-deepBlue" : "text-deepBlue/50 hover:text-deepBlue/80"}`}
                >
                  {item}
                </motion.a>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.04 * NAV_LINKS.length }}
                onClick={() => {
                  setMobileOpen(false);
                  setTimeout(() => scrollTo("contact"), 400);
                }}
                className="mt-6 px-9 py-3.5 bg-deepBlue text-white text-[14px] font-medium
                           rounded-[7px] tracking-[0.04em] min-w-[240px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96A] focus-visible:ring-offset-2
                           shadow-[0_8px_24px_-8px_rgba(30,58,95,0.25)]
                           transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)]
                           hover:scale-[1.02] active:scale-[0.985]"
              >
                Book Consultation
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

