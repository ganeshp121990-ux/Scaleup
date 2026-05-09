"use client";
import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image"



const EASE = [0.2, 1, 0.2, 1];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  const router = useRouter();
  const sectionRef = useRef(null);
  const [phase, setPhase] = useState(0);

  const idleDrift = useMotionValue(0);
  const idleBreath = useMotionValue(1);

  useAnimationFrame((time) => {

    idleDrift.set(Math.sin(time / 7000) * 1.2);

    idleBreath.set(0.97 + Math.sin(time / 9000) * 0.025);
  });


  useEffect(() => {

    const t1 = setTimeout(() => setPhase(1), 400);

    const t2 = setTimeout(() => setPhase(2), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);


  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });


  const vidScale = useTransform(smooth, [0, 1], [1, 1.06]);
  const vidY = useTransform(smooth, [0, 1], ["0%", "4%"]);


  const lightY = useTransform(smooth, [0, 1], ["0%", "10%"]);

    const grainY = useTransform(smooth, [0, 1], ["0%", "18%"]);

    
  const txtY = useTransform(smooth, [0, 1], ["0%", "12%"]);
  const txtOpacity = useTransform(smooth, [0, 0.55, 1], [1, 1, 0]);

  
  const tagDelay = 0.1;
  const headDelay = 0.4;
  const subDelay = 1.0;
  const ctaDelay = 1.3;
  const trustDelay = 1.7;

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[100lvh] flex items-center justify-center overflow-hidden bg-[#FAFBFA]"
    >
      
      <motion.div
        style={{ scale: vidScale, y: vidY }}
        className="absolute inset-[-4%] pointer-events-none will-change-transform"
      >
        <motion.div
          initial={{ filter: "blur(12px) contrast(0.9)" }}
          animate={
            phase >= 1
              ? { filter: "blur(0px) contrast(1.05)" }
              : { filter: "blur(12px) contrast(0.9)" }
          }
          transition={{ duration: 1.4, ease: [0.3, 1, 0.2, 1] }}
          className="w-full h-full"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover mix-blend-multiply opacity-[0.28] contrast-[1.05] saturate-[0.75]"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </motion.div>

          
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #FAFBFA 0%, transparent 8%, transparent 88%, #FAFBFA 100%), " +
              "linear-gradient(to right,  #FAFBFA 0%, transparent 5%, transparent 95%, #FAFBFA 100%)",
          }}
        />
      </motion.div>

      
      <motion.div
        style={{ y: lightY, opacity: useTransform(idleBreath, (v) => v * 0.92) }}
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        <div
          className="absolute -top-[25%] -right-[12%] w-[65vw] h-[65vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.85) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute -bottom-[18%] -left-[8%] w-[50vw] h-[50vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(253,250,244,0.88) 0%, transparent 60%)",
          }}
        />
        
        <div
          className="absolute top-[15%] left-[35%] w-[40vw] h-[30vw] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(ellipse, rgba(200,169,106,0.05) 0%, transparent 65%)",
          }}
        />
      </motion.div>

      
      <motion.div
        style={{ y: grainY }}
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        
        <div
          className="absolute inset-0 opacity-[0.026]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "128px 128px",
          }}
        />
       
        <div
          className="absolute inset-0 opacity-[0.016]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #1E3A5F 1px, transparent 1px), " +
              "linear-gradient(to bottom, #1E3A5F 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 55% 55% at 50% 50%, black 0%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 55% 55% at 50% 50%, black 0%, transparent 100%)",
          }}
        />
      </motion.div>

      
      <motion.div
        style={{ y: txtY, opacity: txtOpacity, translateY: idleDrift }}
        className="relative z-10 pt-36 pb-24 md:pt-52 md:pb-36 text-center px-6 max-w-5xl mx-auto w-full will-change-transform"
      >
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={phase === 2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: EASE, delay: tagDelay }}
          className="flex items-center justify-center gap-4 mb-8 md:mb-12"
        >
          <span className="h-px w-6 md:w-12 bg-deepBlue/15" />
          <p className="text-deepBlue/70 font-medium text-[11px] md:text-[10px] uppercase tracking-[0.4em] font-body">
            AAT Licensed Accountants & UK Business Advisory
          </p>
          <span className="h-px w-6 md:w-12 bg-deepBlue/15" />
        </motion.div>

        
        <motion.h1
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={
            phase === 2
              ? { opacity: 1, y: 0, scale: [0.96, 1.03, 1] }
              : {}
          }
          transition={{
            opacity: { duration: 1.4, ease: EASE, delay: headDelay },
            y: { duration: 1.4, ease: EASE, delay: headDelay },
            scale: { duration: 2.2, ease: EASE, delay: headDelay },
          }}
          className="text-[30px] sm:text-5xl md:text-6xl lg:text-[64px] font-semibold leading-[1.04] tracking-[-0.02em] text-deepBlue font-heading mb-8 md:mb-10"
        >
          Strategic Accounting &<br className="hidden md:block" />
          <span className="relative inline-block overflow-hidden">
            <span className="relative z-10"> Talent Solutions for UK Growth</span>
            
            <motion.span
              initial={{ x: "-120%" }}
              animate={phase === 2 ? { x: "240%" } : {}}
              transition={{
                duration: 3.2,
                ease: [0.25, 0.1, 0.25, 1],
                delay: headDelay + 1.6,
                repeat: Infinity,
                repeatDelay: 8,
              }}
              className="absolute inset-0 z-20 w-[30%] pointer-events-none"
              style={{
                background:
                  "linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.3) 42%, rgba(255,255,255,0.22) 58%, transparent 100%)",
              }}
            />
          </span>
        </motion.h1>

        
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={phase === 2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, ease: EASE, delay: subDelay }}
          className="text-deepBlue/80 text-[15px] md:text-[18px] lg:text-[20px] font-normal max-w-[620px] mx-auto font-body leading-[1.7] tracking-[0.01em] mb-6 md:mb-8"
        >
          Professional bookkeeping, tax compliance, and Recruitment Process Outsourcing (RPO) delivered by AAT Licensed Accountants.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={phase === 2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, ease: EASE, delay: ctaDelay }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 md:mt-10 justify-center items-center"
        >
          
          <button
            onClick={() => scrollTo("contact")}
            className="group relative px-9 py-[14px] bg-deepBlue text-white text-[13px] font-medium
                       rounded-[7px] min-w-[200px] tracking-[0.04em] overflow-hidden
                       border border-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96A] focus-visible:ring-offset-2
                       transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)]
                       hover:scale-[1.02] shadow-md hover:shadow-[0_18px_50px_-10px_rgba(30,58,95,0.32)]
                       active:scale-[0.985]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1100ms] ease-[cubic-bezier(0.2,1,0.2,1)]" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Book a Free Consultation
              <svg
                className="w-3.5 h-3.5 opacity-70 transition-transform duration-700 ease-[cubic-bezier(0.2,1,0.2,1)] group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </button>

          
          <button
            onClick={() => scrollTo("services")}
            className="group relative px-9 py-[14px] text-deepBlue text-[13px] font-medium
                       rounded-[7px] min-w-[200px] tracking-[0.04em] overflow-hidden
                       border border-deepBlue/[0.20] focus:outline-none focus-visible:ring-2 focus-visible:ring-deepBlue focus-visible:ring-offset-2
                       transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)]
                       hover:scale-[1.02] hover:border-deepBlue/25 hover:bg-deepBlue/[0.02]
                       active:scale-[0.985]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-deepBlue/[0.04] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1100ms] ease-[cubic-bezier(0.2,1,0.2,1)]" />
            <span className="relative z-10">Explore Services</span>
          </button>
        </motion.div>






        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={phase === 2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: EASE, delay: trustDelay }}
          className="mt-16 flex justify-center"
        >
          <div className="mt-16 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center">

              {/* AAT */}
              <div className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition">
                <Image src="/logos/aat.svg" alt="AAT" width={28} height={28} />
                <div className="leading-tight">
                  <p className="text-[11px] font-semibold text-deepBlue">AAT</p>
                  <p className="text-[10px] text-gray-500">LICENSED</p>
                </div>
              </div>

              {/* ICO */}
              <div className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition">
                <Image src="/logos/ico.svg" alt="ICO" width={28} height={28} />
                <div className="leading-tight">
                  <p className="text-[11px] font-semibold text-deepBlue">ICO</p>
                  <p className="text-[10px] text-gray-500">REGISTERED</p>
                </div>
              </div>

              {/* Xero */}
              <div className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition">
                <Image src="/logos/xero.svg" alt="Xero" width={28} height={28} />
                <div className="leading-tight">
                  <p className="text-[11px] font-semibold text-deepBlue">Xero</p>
                  <p className="text-[10px] text-gray-500">PARTNER</p>
                </div>
              </div>

              {/* QuickBooks */}
              <div className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition">
                <Image src="/logos/quickbooks.svg" alt="QuickBooks" width={28} height={28} />
                <div className="leading-tight">
                  <p className="text-[11px] font-semibold text-deepBlue">QuickBooks</p>
                  <p className="text-[10px] text-gray-500">PARTNER</p>
                </div>
              </div>

              {/* FreeAgent Certified (NEW) */}
              <div className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition">
                <Image src="/logos/freeagent.svg" alt="FreeAgent" width={28} height={28} />
                <div className="leading-tight">
                  <p className="text-[11px] font-semibold text-deepBlue">FreeAgent</p>
                  <p className="text-[10px] text-gray-500">CERTIFIED</p>
                </div>
              </div>

              {/* Sage 50 Certified (NEW) */}
              <div className="flex items-center justify-center gap-3 px-5 py-3 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition">
                <Image src="/logos/sage50.svg" alt="Sage 50" width={28} height={28} />
                <div className="leading-tight">
                  <p className="text-[11px] font-semibold text-deepBlue">Sage 50</p>
                  <p className="text-[10px] text-gray-500">CERTIFIED</p>
                </div>
              </div>

            </div>
          </div>


        </motion.div>
      </motion.div>
    </section >
  );
}