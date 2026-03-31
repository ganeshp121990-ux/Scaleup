"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden px-6"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute inset-0 bg-[#050505]" />

        <div className="absolute top-1/3 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-[#C6A96B]/10 blur-[160px] rounded-full" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 pt-40 pb-32 text-center px-6 max-w-5xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-8 text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          UK Chartered Accountants
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-semibold leading-tight gradient-text"
        >
          Designing Financial
          <br />
          Clarity for What’s Next
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="mt-6 text-gray-400 text-lg max-w-xl mx-auto"
        >
          A future-focused UK accounting firm helping businesses move
          with precision, confidence, and control.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          className="mt-12 flex gap-4 justify-center"
        >
          <button className="px-6 py-3 rounded-full bg-[#C6A96B] text-black text-sm font-medium hover:scale-105 transition">
            Book Consultation
          </button>

          <button className="px-6 py-3 rounded-full border border-white/20 text-white text-sm hover:bg-white/5 transition">
            View Services
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          className="mt-6 text-xs tracking-widest text-gray-500 uppercase"
        >
          Trusted by UK Businesses • Tax • Compliance • Advisory
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-xs tracking-widest text-gray-500 uppercase"
        >
          <span>HMRC Registered</span>
          <span>UK Businesses</span>
          <span>Tax Advisory</span>
          <span>Compliance</span>
        </motion.div>
      </div>
    </section>
  );
}
