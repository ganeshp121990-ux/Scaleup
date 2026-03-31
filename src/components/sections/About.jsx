"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-[#050505] text-white py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#C6A96B] text-xs tracking-[0.3em] uppercase mb-6"
          >
            About the Firm
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-semibold leading-tight"
          >
            Most firms record history.
            <br />
            We design financial clarity for what comes next.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-gray-400 leading-relaxed"
          >
            Nayan Dhinoja & Associates is a future-focused UK accounting
            practice supporting modern businesses with tax strategy,
            compliance, and financial precision. We work with founders,
            international companies, and growing enterprises who require
            more than traditional accounting.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-gray-400 leading-relaxed"
          >
            Our approach combines deep regulatory expertise with a modern
            advisory mindset. Every engagement is built around clarity,
            control, and long-term financial confidence.
          </motion.p>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="grid grid-cols-2 gap-6">

          <div className="border border-white/10 p-8 rounded-xl bg-white/[0.02] backdrop-blur-sm">
            <p className="text-3xl font-semibold text-[#C6A96B]">10+</p>
            <p className="text-sm text-gray-400 mt-2">
              Years combined experience
            </p>
          </div>

          <div className="border border-white/10 p-8 rounded-xl bg-white/[0.02] backdrop-blur-sm">
            <p className="text-3xl font-semibold text-[#C6A96B]">UK</p>
            <p className="text-sm text-gray-400 mt-2">
              Registered & compliant
            </p>
          </div>

          <div className="border border-white/10 p-8 rounded-xl bg-white/[0.02] backdrop-blur-sm">
            <p className="text-3xl font-semibold text-[#C6A96B]">Global</p>
            <p className="text-sm text-gray-400 mt-2">
              International clients
            </p>
          </div>

          <div className="border border-white/10 p-8 rounded-xl bg-white/[0.02] backdrop-blur-sm">
            <p className="text-3xl font-semibold text-[#C6A96B]">100%</p>
            <p className="text-sm text-gray-400 mt-2">
              Confidential advisory
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
