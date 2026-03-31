"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Their clarity and precision around UK tax and compliance gave us confidence expanding into the UK market. Everything was structured and proactive.",
    name: "International Founder",
    role: "SaaS Company",
  },
  {
    quote:
      "A modern accounting partner who understands both compliance and growth. Communication is clear, direct, and strategic.",
    name: "Managing Director",
    role: "UK Business",
  },
  {
    quote:
      "We moved from reactive accounting to forward planning. The difference in control and reporting has been significant.",
    name: "Finance Lead",
    role: "Global Firm",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#050505] text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#C6A96B] text-xs tracking-[0.3em] uppercase mb-6"
          >
            Client Perspective
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-semibold leading-tight"
          >
            Trusted by founders,
            <br />
            directors, and global teams.
          </motion.h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/10 rounded-xl p-8 bg-white/[0.02] backdrop-blur-sm"
            >
              <p className="text-gray-300 leading-relaxed">
                “{t.quote}”
              </p>

              <div className="mt-8">
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TRUST STRIP */}
        <div className="mt-24 border-t border-white/10 pt-16 text-center">
          <p className="text-gray-400 text-sm">
            Confidentiality and discretion are central to every engagement.
            Client names and data are protected.
          </p>
        </div>

      </div>
    </section>
  );
}
