export default function Global() {
  return (
    <section className="py-56 bg-[#050505] text-white relative overflow-hidden">
      
      {/* subtle glow */}
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-[#C6A96B]/10 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* small label */}
        <p className="text-xs tracking-[0.35em] text-gray-500 uppercase mb-8">
          Global Desk
        </p>

        {/* main heading */}
        <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-10">
          Supporting Global Businesses  
          <br />
          Expanding Into the UK
        </h2>

        {/* description */}
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mb-20">
          We advise international founders, investors, and enterprises
          entering the United Kingdom — providing structure, compliance,
          and long-term financial clarity.
        </p>

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur">
            <p className="text-sm text-gray-400 mb-3">Market Entry</p>
            <h3 className="text-xl font-medium">
              UK Company Setup & Structure
            </h3>
          </div>

          <div className="p-8 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur">
            <p className="text-sm text-gray-400 mb-3">Tax Strategy</p>
            <h3 className="text-xl font-medium">
              Cross-Border Tax Planning
            </h3>
          </div>

          <div className="p-8 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur">
            <p className="text-sm text-gray-400 mb-3">Compliance</p>
            <h3 className="text-xl font-medium">
              Ongoing UK Reporting & Support
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
}
