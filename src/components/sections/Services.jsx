"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "UK Company Accounting",
    desc: "End-to-end statutory accounts, filings, and financial reporting for UK companies operating locally or internationally.",
  },
  {
    title: "Corporation Tax Strategy",
    desc: "Proactive tax planning, compliance, and optimisation designed to protect cashflow and reduce long-term liability.",
  },
  {
    title: "International Structuring",
    desc: "Advisory for founders and global firms expanding into the UK market with clarity on cross-border tax exposure.",
  },
  {
    title: "VAT & Compliance",
    desc: "VAT registrations, filings, investigations, and ongoing compliance across domestic and international transactions.",
  },
  {
    title: "R&D & Innovation Relief",
    desc: "Maximise UK innovation incentives including R&D credits and advanced relief structures for modern companies.",
  },
  {
    title: "CFO & Advisory",
    desc: "Ongoing strategic support, forecasting, and decision-level financial guidance for scaling businesses.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#050505] text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#C6A96B] text-xs tracking-[0.3em] uppercase mb-6"
          >
            Services
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-semibold leading-tight"
          >
            Built for modern UK businesses
            <br />
            operating with global ambition.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-6 text-gray-400"
          >
            We combine compliance, advisory, and forward planning to give
            companies clarity, control, and confidence as they scale.
          </motion.p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group border border-white/10 rounded-xl p-8 bg-white/[0.02] backdrop-blur-sm hover:border-[#C6A96B]/40 transition"
            >
              <div className="mb-6 h-px w-12 bg-[#C6A96B]" />

              <h3 className="text-xl font-medium mb-4">
                {s.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {s.desc}
              </p>

              <div className="mt-6 text-xs tracking-widest text-gray-500 uppercase">
                Learn more →
              </div>
            </motion.div>
          ))}
        </div>

        {/* LOWER STRIP (adds depth + length) */}
        <div className="mt-24 border-t border-white/10 pt-16 grid md:grid-cols-3 gap-10 text-center">

          <div>
            <p className="text-3xl font-semibold text-[#C6A96B]">UK</p>
            <p className="text-gray-400 text-sm mt-2">
              Chartered accounting expertise
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold text-[#C6A96B]">Global</p>
            <p className="text-gray-400 text-sm mt-2">
              International clients supported
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold text-[#C6A96B]">Secure</p>
            <p className="text-gray-400 text-sm mt-2">
              Confidential financial handling
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
