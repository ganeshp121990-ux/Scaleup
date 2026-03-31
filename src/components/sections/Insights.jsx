"use client";

import { motion } from "framer-motion";

export default function Insights() {
  const posts = [
    {
      title: "2026 UK Tax Changes Every Business Should Know",
      category: "Tax Update",
      date: "Jan 2026"
    },
    {
      title: "How Smart Directors Reduce Corporation Tax",
      category: "Strategy",
      date: "Dec 2025"
    },
    {
      title: "HMRC Compliance: Avoid Costly Mistakes",
      category: "Compliance",
      date: "Nov 2025"
    }
  ];

  return (
    <section className="relative py-40 md:py-56 bg-[#050505] text-white overflow-hidden">

      {/* subtle glow */}
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-[#C6A96B]/5 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-20"
        >
          <p className="text-xs tracking-[0.35em] text-gray-500 uppercase mb-6">
            Insights
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Clarity beyond compliance.
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Expert insights, tax updates, and strategic thinking for UK
            business owners and directors.
          </p>
        </motion.div>

        {/* grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="group relative border border-white/10 rounded-2xl p-8 h-[320px] flex flex-col justify-between hover:border-white/20 transition"
            >
              {/* category */}
              <p className="text-xs tracking-widest text-gray-500 uppercase">
                {post.category}
              </p>

              {/* title */}
              <h3 className="text-xl font-medium mt-6 leading-snug group-hover:text-white transition">
                {post.title}
              </h3>

              {/* footer */}
              <div className="flex items-center justify-between mt-10">
                <span className="text-gray-500 text-sm">{post.date}</span>

                <span className="text-xs tracking-widest text-gray-400 uppercase group-hover:text-white transition">
                  Read
                </span>
              </div>

              {/* hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-white/5 to-transparent" />
            </motion.article>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <button className="px-8 py-3 border border-white/20 rounded-full text-sm tracking-wide hover:bg-white hover:text-black transition">
            View All Insights
          </button>
        </div>

      </div>
    </section>
  );
}
