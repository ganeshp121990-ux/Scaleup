"use client";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery & Assessment",
    desc: "We begin with a detailed review of your business structure, goals, and current financial position to identify opportunities and risks.",
  },
  {
    title: "Strategy & Planning",
    desc: "A tailored accounting and tax strategy is developed based on UK regulations and your long-term growth direction.",
  },
  {
    title: "Implementation",
    desc: "We handle registrations, filings, structuring, and compliance with precision while keeping communication transparent.",
  },
  {
    title: "Ongoing Advisory",
    desc: "Continuous monitoring, reporting, and advisory support ensure you stay compliant and financially confident as you grow.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#050505] text-white py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#C6A96B] text-xs tracking-[0.3em] uppercase mb-6"
          >
            Our Process
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-semibold leading-tight"
          >
            Structured. Transparent.
            <br />
            Built for long-term clarity.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-6 text-gray-400"
          >
            We follow a clear, structured approach so international and UK
            clients always know where they stand and what comes next.
          </motion.p>
        </div>

        {/* TIMELINE */}
        <div className="relative border-l border-white/10 pl-10 space-y-20">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {/* DOT */}
              <div className="absolute -left-[24px] top-2 w-4 h-4 rounded-full bg-[#C6A96B]" />

              <h3 className="text-xl font-medium mb-3">
                {step.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                {step.desc}
              </p>
            </motion.div>
          ))}

        </div>

        {/* BOTTOM STRIP */}
        <div className="mt-28 grid md:grid-cols-3 gap-10 text-center border-t border-white/10 pt-16">

          <div>
            <p className="text-3xl font-semibold text-[#C6A96B]">01</p>
            <p className="text-gray-400 text-sm mt-2">
              Clear onboarding process
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold text-[#C6A96B]">02</p>
            <p className="text-gray-400 text-sm mt-2">
              Direct partner communication
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold text-[#C6A96B]">03</p>
            <p className="text-gray-400 text-sm mt-2">
              Ongoing financial clarity
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
