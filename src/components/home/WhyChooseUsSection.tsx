const reasons = [
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: "Best Prices",
    description: "Competitive prices that match or beat online stores, with no shipping costs or waiting time.",
    color: "text-emerald-400",
    glow: "bg-emerald-400",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: "Genuine Products",
    description: "We stock only authentic, quality-tested products from trusted brands with proper warranty.",
    color: "text-blue-400",
    glow: "bg-blue-400",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    title: "Walk-in & Buy",
    description: "See the product in person, test it, and take it home immediately. No waiting for delivery.",
    color: "text-fuchsia-400",
    glow: "bg-fuchsia-400",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
    title: "Expert Guidance",
    description: "Our knowledgeable staff helps you choose the right accessory for your specific device and needs.",
    color: "text-amber-400",
    glow: "bg-amber-400",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
    title: "Huge Selection",
    description: "Over 100+ products across mobile and computer accessories. If we don't have it, we can order it.",
    color: "text-pink-400",
    glow: "bg-pink-400",
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
    title: "Easy Returns",
    description: "Hassle-free exchange and return policy on all products with proper bills and invoices.",
    color: "text-cyan-400",
    glow: "bg-cyan-400",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-32 relative overflow-hidden bg-primary-950 text-white">
      {/* Luxurious Dark Background Elements */}
      <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-800/20 via-primary-950 to-primary-950 -z-10" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px] -z-10 animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[150px] -z-10 animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-reveal">
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-accent-400 uppercase tracking-[0.3em] mb-6 shadow-xl">
            The SagO Standard
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white mt-2 mb-6 tracking-tighter">
            Excellence in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-white">Every Detail</span>
          </h2>
          <p className="text-lg text-primary-200/80 mt-6 max-w-2xl mx-auto leading-relaxed font-light">
            We don&apos;t just sell accessories; we curate a premium tech lifestyle. Experience the perfect harmony of global quality and dedicated local service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`group bg-primary-900/30 backdrop-blur-xl rounded-[32px] p-8 border border-white/5 hover:border-white/20 hover:bg-primary-800/40 transition-all duration-700 relative overflow-hidden animate-reveal stagger-${(i % 4) + 1}`}
              id={`reason-${i}`}
            >
              {/* Glowing ambient orb behind the icon */}
              <div className={`absolute top-8 left-8 w-20 h-20 opacity-0 group-hover:opacity-20 ${reason.glow} rounded-full blur-2xl transition-all duration-700 -z-10`} />
              
              <div className={`relative w-16 h-16 rounded-2xl bg-white/5 shadow-inner flex items-center justify-center ${reason.color} mb-8 group-hover:scale-110 border border-white/10 transition-all duration-500`}>
                {reason.icon}
              </div>
              <h3 className={`text-2xl font-display font-bold text-white mb-4 group-hover:${reason.color} transition-colors duration-300`}>
                {reason.title}
              </h3>
              <p className="text-primary-200/60 text-sm leading-relaxed font-light group-hover:text-primary-100/90 transition-colors duration-300">
                {reason.description}
              </p>
              
              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-tl-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
