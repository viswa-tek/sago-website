import type { Metadata } from "next";
import { businessInfo } from "@/content/business";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { averageRating } from "@/content/reviews";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${businessInfo.name}, a trusted mobile accessories, computer accessories, mobile service, laptop service, Xerox, and printout shop in Maharaja Nagar, Tirunelveli.`,
  alternates: { canonical: `${businessInfo.seo.siteUrl}/about/` },
};

const milestones = [
  {
    year: "2021",
    title: "Store Founded",
    description: "Started with a bold vision to provide quality accessories at affordable prices — the first dedicated tech accessories hub in Maharaja Nagar.",
    icon: "🚀",
    color: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/30",
    achievement: "Grand Opening · Maharaja Nagar",
  },
  {
    year: "2021",
    title: "Computer Range Added",
    description: "Expanded into computer peripherals — keyboards, mice, RAM, SSDs — becoming a one-stop destination for all tech needs.",
    icon: "💻",
    color: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/30",
    achievement: "100+ Computer SKUs Stocked",
  },
  {
    year: "2023",
    title: "1000+ Products",
    description: "Grew our inventory to over 1000 products across 100+ brands, earning the loyalty of customers across Tirunelveli.",
    icon: "📦",
    color: "from-emerald-500 to-teal-500",
    glow: "shadow-emerald-500/30",
    achievement: "1000+ SKUs · 100+ Brands",
  },
  {
    year: "2026",
    title: "Trusted by Thousands",
    description: `Achieved a ${averageRating.toFixed(1)}★ Google Rating — a testament to our commitment to quality, fair pricing, and outstanding customer service.`,
    icon: "⭐",
    color: "from-amber-500 to-orange-500",
    glow: "shadow-amber-500/30",
    achievement: `${averageRating.toFixed(1)}★ Google Rating Achieved`,
  },
];

function MilestoneGraphic({ index }: { index: number }) {
  const cfgs = [
    {
      g: ["#7c3aed", "#9333ea"],
      el: (id: string) => (
        <g>
          <ellipse cx="100" cy="100" rx="72" ry="72" fill="none" stroke={`url(#${id})`} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.35" />
          <ellipse cx="100" cy="100" rx="48" ry="48" fill="none" stroke={`url(#${id})`} strokeWidth="1" opacity="0.2" />
          <path d="M100 45 L114 82 L108 115 L92 115 L86 82 Z" fill={`url(#${id})`} opacity="0.85" />
          <path d="M100 30 L111 55 L89 55 Z" fill={`url(#${id})`} opacity="0.7" />
          <path d="M86 105 L72 126 L92 115 Z" fill={`url(#${id})`} opacity="0.5" />
          <path d="M114 105 L128 126 L108 115 Z" fill={`url(#${id})`} opacity="0.5" />
          <circle cx="100" cy="80" r="8" fill="none" stroke="#fff" strokeWidth="2" opacity="0.45" />
          <path d="M94 115 Q100 132 106 115" fill={`url(#${id})`} opacity="0.35" />
          <circle cx="44" cy="52" r="3.5" fill={`url(#${id})`} opacity="0.7" />
          <circle cx="158" cy="64" r="2.5" fill={`url(#${id})`} opacity="0.6" />
          <circle cx="160" cy="130" r="4" fill={`url(#${id})`} opacity="0.55" />
          <circle cx="38" cy="140" r="2.5" fill={`url(#${id})`} opacity="0.6" />
          <circle cx="172" cy="100" r="5" fill={`url(#${id})`} opacity="0.8" />
          <circle cx="28" cy="100" r="5" fill={`url(#${id})`} opacity="0.8" />
          <circle cx="100" cy="28" r="4" fill={`url(#${id})`} opacity="0.6" />
        </g>
      ),
    },
    {
      g: ["#3b82f6", "#06b6d4"],
      el: (id: string) => (
        <g>
          <rect x="40" y="48" width="120" height="84" rx="7" fill={`url(#${id})`} opacity="0.12" />
          <rect x="40" y="48" width="120" height="84" rx="7" fill="none" stroke={`url(#${id})`} strokeWidth="2" opacity="0.6" />
          <rect x="50" y="58" width="100" height="64" rx="4" fill={`url(#${id})`} opacity="0.07" />
          {[68,76,84,92,100,108].map((y, i) => (
            <rect key={i} x="60" y={y} width={[52,38,64,28,48,44][i]} height="3" rx="1.5" fill={`url(#${id})`} opacity={0.35 + i * 0.03} />
          ))}
          <rect x="95" y="132" width="10" height="18" rx="2" fill={`url(#${id})`} opacity="0.45" />
          <rect x="78" y="148" width="44" height="5" rx="2.5" fill={`url(#${id})`} opacity="0.35" />
          <circle cx="162" cy="75" r="4" fill={`url(#${id})`} opacity="0.7" />
          <line x1="157" y1="72" x2="174" y2="58" stroke={`url(#${id})`} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
          <circle cx="177" cy="56" r="3" fill={`url(#${id})`} opacity="0.5" />
          <circle cx="35" cy="88" r="4" fill={`url(#${id})`} opacity="0.7" />
          <line x1="40" y1="85" x2="24" y2="70" stroke={`url(#${id})`} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
          <circle cx="21" cy="67" r="3" fill={`url(#${id})`} opacity="0.5" />
          <circle cx="158" cy="118" r="3" fill={`url(#${id})`} opacity="0.6" />
          <circle cx="38" cy="128" r="3.5" fill={`url(#${id})`} opacity="0.6" />
          <rect x="116" y="107" width="3" height="10" rx="1.5" fill="#fff" opacity="0.55" />
        </g>
      ),
    },
    {
      g: ["#10b981", "#14b8a6"],
      el: (id: string) => (
        <g>
          <polygon points="100,38 136,58 136,96 100,76" fill={`url(#${id})`} opacity="0.28" />
          <polygon points="100,38 64,58 64,96 100,76" fill={`url(#${id})`} opacity="0.48" />
          <polygon points="64,58 100,38 136,58 100,78" fill={`url(#${id})`} opacity="0.68" />
          <polygon points="64,84 95,100 95,132 64,116" fill={`url(#${id})`} opacity="0.35" />
          <polygon points="64,84 33,100 33,132 64,116" fill={`url(#${id})`} opacity="0.55" />
          <polygon points="33,100 64,84 95,100 64,116" fill={`url(#${id})`} opacity="0.75" />
          <polygon points="136,84 167,100 167,132 136,116" fill={`url(#${id})`} opacity="0.28" />
          <polygon points="136,84 105,100 105,132 136,116" fill={`url(#${id})`} opacity="0.48" />
          <polygon points="105,100 136,84 167,100 136,116" fill={`url(#${id})`} opacity="0.65" />
          <path d="M100 162 L100 142 M92 150 L100 142 L108 150" stroke={`url(#${id})`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.65" />
          <circle cx="38" cy="54" r="3.5" fill={`url(#${id})`} opacity="0.7" />
          <circle cx="166" cy="48" r="4" fill={`url(#${id})`} opacity="0.65" />
          <circle cx="172" cy="148" r="2.5" fill={`url(#${id})`} opacity="0.55" />
          <circle cx="28" cy="152" r="3" fill={`url(#${id})`} opacity="0.6" />
          <path d="M170 72 L172 78 L178 78 L173 82 L175 88 L170 84 L165 88 L167 82 L162 78 L168 78 Z" fill={`url(#${id})`} opacity="0.6" />
        </g>
      ),
    },
    {
      g: ["#f59e0b", "#f97316"],
      el: (id: string) => (
        <g>
          <path d="M100 33 L111 68 L150 68 L119 90 L130 125 L100 103 L70 125 L81 90 L50 68 L89 68 Z" fill={`url(#${id})`} opacity="0.75" />
          <path d="M100 50 L108 74 L133 74 L113 87 L121 111 L100 97 L79 111 L87 87 L67 74 L92 74 Z" fill={`url(#${id})`} opacity="0.35" />
          <line x1="100" y1="20" x2="100" y2="10" stroke={`url(#${id})`} strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />
          <line x1="136" y1="30" x2="144" y2="22" stroke={`url(#${id})`} strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />
          <line x1="157" y1="62" x2="168" y2="58" stroke={`url(#${id})`} strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />
          <line x1="64" y1="30" x2="56" y2="22" stroke={`url(#${id})`} strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />
          <line x1="43" y1="62" x2="32" y2="58" stroke={`url(#${id})`} strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />
          <circle cx="34" cy="130" r="8" fill={`url(#${id})`} opacity="0.28" />
          <circle cx="34" cy="118" r="5" fill={`url(#${id})`} opacity="0.38" />
          <circle cx="54" cy="146" r="8" fill={`url(#${id})`} opacity="0.28" />
          <circle cx="54" cy="134" r="5" fill={`url(#${id})`} opacity="0.38" />
          <circle cx="166" cy="130" r="8" fill={`url(#${id})`} opacity="0.28" />
          <circle cx="166" cy="118" r="5" fill={`url(#${id})`} opacity="0.38" />
          <circle cx="146" cy="146" r="8" fill={`url(#${id})`} opacity="0.28" />
          <circle cx="146" cy="134" r="5" fill={`url(#${id})`} opacity="0.38" />
          <rect x="72" y="148" width="56" height="12" rx="6" fill={`url(#${id})`} opacity="0.28" />
        </g>
      ),
    },
  ];
  const cfg = cfgs[index];
  if (!cfg) return null;
  const id = `mg${index}`;
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full max-w-[260px] animate-milestone-float" style={{ animationDelay: `${index * 0.5}s` }}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={cfg.g[0]} />
          <stop offset="100%" stopColor={cfg.g[1]} />
        </linearGradient>
        <radialGradient id={`${id}bg`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={cfg.g[0]} stopOpacity="0.18" />
          <stop offset="100%" stopColor={cfg.g[1]} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="90" fill={`url(#${id}bg)`} />
      {cfg.el(id)}
    </svg>
  );
}



const values = [
  {
    icon: "🎯",
    title: "Quality First",
    description: "Every item is sourced from verified suppliers and tested before stocking. We never compromise on what you get.",
    gradient: "from-rose-500/10 to-pink-500/10",
    border: "border-rose-200/60",
    iconBg: "bg-rose-100",
  },
  {
    icon: "💡",
    title: "Expert Knowledge",
    description: "Our team stays current with the latest tech, ensuring you always get the most informed recommendation.",
    gradient: "from-amber-500/10 to-yellow-500/10",
    border: "border-amber-200/60",
    iconBg: "bg-amber-100",
  },
  {
    icon: "🤝",
    title: "Customer Focus",
    description: "Your satisfaction is our north star. We listen, advise, and ensure you leave with exactly what you need.",
    gradient: "from-emerald-500/10 to-teal-500/10",
    border: "border-emerald-200/60",
    iconBg: "bg-emerald-100",
  },
  {
    icon: "💰",
    title: "Fair Pricing",
    description: "Premium quality shouldn't break the bank. We price transparently so every customer gets real value for money.",
    gradient: "from-blue-500/10 to-cyan-500/10",
    border: "border-blue-200/60",
    iconBg: "bg-blue-100",
  },
];

const stats = [
  { value: `${averageRating.toFixed(1)}★`, label: "Google Rating" },
  { value: "1000+", label: "Happy Customers" },
  { value: "100+", label: "Premium Brands" },
  { value: "5+", label: "Years of Trust" },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "About", url: "/about/" }]} />

      {/* ─── Cinematic Hero ─── */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden bg-primary-950">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary-500/15 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#020617_100%)]" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
              Est. 2021 · Tirunelveli
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-display font-black text-white leading-[1.02] tracking-tighter mb-8">
              Our
              <span className="block pb-2 text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-primary-300 to-white">
                Story
              </span>
            </h1>
            <p className="text-xl text-primary-200/70 max-w-xl leading-relaxed">
              From a single shop in Maharaja Nagar to Tirunelveli&apos;s most trusted tech accessories destination — this is how we got here.
            </p>
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10">
            {stats.map((s) => (
              <div key={s.label} className="bg-primary-950/80 backdrop-blur-md px-6 py-7 text-center hover:bg-white/5 transition-colors">
                <div className="text-2xl sm:text-3xl font-black text-white mb-1">{s.value}</div>
                <div className="text-[10px] text-primary-400 font-bold uppercase tracking-[0.2em]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Story Section ─── */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-primary-100 rounded-full blur-3xl opacity-60" />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent-100 rounded-full blur-3xl opacity-60" />
              <div className="relative rounded-[40px] overflow-hidden border-8 border-white shadow-2xl shadow-primary-900/15 transform -rotate-2 hover:rotate-0 transition-all duration-700 group">
                <img
                  src="/images/shop/shop-interior-1.jpg"
                  alt="SagO Mobile & Computer Accessories Shop"
                  className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-4 bg-white rounded-3xl shadow-2xl shadow-primary-900/20 border border-primary-50 p-5">
                <div className="text-4xl font-black text-primary-950 leading-none">{averageRating.toFixed(1)}<span className="text-accent-500 text-2xl">★</span></div>
                <div className="text-[10px] font-black text-primary-600 uppercase tracking-[0.2em] mt-1">Google Rating</div>
                <div className="text-[9px] text-primary-400 mt-0.5">500+ Reviews</div>
              </div>
              <div className="absolute -top-4 -left-4 bg-primary-900 text-white rounded-2xl shadow-xl px-5 py-3">
                <div className="text-2xl font-black leading-none">2021</div>
                <div className="text-[9px] text-primary-300 uppercase tracking-widest mt-0.5">Since</div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500" /> Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-black text-primary-950 leading-tight mb-8">
                Your Trusted Partner in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                  Tech Excellence
                </span>
              </h2>
              <div className="space-y-5 text-lg text-primary-700/75 leading-relaxed">
                <p>
                  <strong className="text-primary-950 font-bold">{businessInfo.name}</strong> is a premier retail store in the heart of Maharaja Nagar, Tirunelveli — dedicated to high-quality mobile and computer accessories at genuinely competitive prices.
                </p>
                <p>
                  Founded with a passion for technology and exceptional service, we have grown from a small accessories shop to one of the region&apos;s most trusted stores. Our commitment to quality, fair pricing, and expert guidance has earned us thousands of loyal customers.
                </p>
                <p>
                  Whether you need a simple screen protector, or a complete laptop upgrade with SSD and RAM, we have you covered. Our team is always ready to help you find exactly what your device needs.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={businessInfo.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-900 text-white rounded-xl font-semibold text-sm hover:bg-primary-800 transition-colors shadow-lg shadow-primary-900/20"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Visit Our Store
                </a>
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-200 text-primary-900 rounded-xl font-semibold text-sm hover:border-primary-400 hover:bg-primary-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="py-24 bg-gradient-to-b from-surface-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-500 font-bold text-xs uppercase tracking-[0.25em]">Our Core Values</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-surface-900 mt-3 mb-4">What Drives Us</h2>
            <p className="text-surface-600 max-w-xl mx-auto text-sm leading-relaxed">Principles that have guided every decision since day one.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className={`group relative bg-gradient-to-br ${v.gradient} border ${v.border} rounded-3xl p-7 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-full blur-3xl -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700" />
                <div className={`relative w-14 h-14 ${v.iconBg} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  {v.icon}
                </div>
                <h3 className="relative font-black text-surface-900 text-lg mb-3">{v.title}</h3>
                <p className="relative text-surface-700/70 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Milestones Timeline ─── */}
      <section className="py-32 bg-primary-950 relative overflow-hidden" id="milestones">
        {/* Ambient orbs */}
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] bg-violet-500/[0.07] rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-cyan-500/[0.07] rounded-full blur-[130px]" />
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[300px] h-[300px] bg-amber-500/[0.05] rounded-full blur-[100px]" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        {/* Floating particles */}
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13].map((idx) => (
          <div key={idx} className="animate-particle absolute w-1.5 h-1.5 rounded-full bg-white/20"
            style={{ left: `${(idx * 7 + 5) % 95}%`, top: `${(idx * 11 + 8) % 90}%`, animationDuration: `${3.5 + (idx % 4) * 0.6}s`, animationDelay: `${idx * 0.3}s` }} />
        ))}

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent-400 text-[11px] font-black uppercase tracking-[0.25em] mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
              Our Journey
            </div>
            <h2 className="text-5xl sm:text-6xl font-display font-black text-white tracking-tight mb-5">
              Milestones That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-accent-400 to-amber-400">
                Shaped Us
              </span>
            </h2>
            <p className="text-primary-300/60 max-w-lg mx-auto text-sm leading-relaxed">
              From a bold startup to Tirunelveli&apos;s most trusted tech accessories destination — every year, a new chapter.
            </p>
          </div>

          {/* Year progress track */}
          <div className="relative max-w-2xl mx-auto mb-24 px-6">
            <div className="absolute top-5 left-[10%] right-[10%] h-px overflow-hidden">
              <div className="h-full bg-gradient-to-r from-violet-500 via-accent-400 to-amber-400" />
              <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
            </div>
            <div className="flex items-start justify-between relative z-10">
              {milestones.map((m, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${m.color} flex items-center justify-center text-lg shadow-lg ring-4 ring-primary-950 animate-node-pulse`}
                    style={{ animationDelay: `${i * 0.55}s` }}>
                    {m.icon}
                  </div>
                  <span className="text-[11px] font-black text-white/40 tracking-widest">{m.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline cards */}
          <div className="relative">
            {/* Central vertical connector */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/30 via-accent-400/30 to-amber-400/30" />

            <div className="space-y-28">
              {milestones.map((m, i) => (
                <div key={i} className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>

                  {/* Central pulse node */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 items-center justify-center">
                    <div className={`absolute w-20 h-20 rounded-full bg-gradient-to-br ${m.color} opacity-10 animate-ping`} style={{ animationDuration: "2.5s", animationDelay: `${i * 0.6}s` }} />
                    <div className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${m.color} shadow-2xl flex items-center justify-center ring-4 ring-primary-950 text-xl`}>
                      {m.icon}
                    </div>
                  </div>

                  {/* Illustration side */}
                  <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-16 py-4">
                    <div className="relative w-full max-w-[260px] aspect-square">
                      <div className={`absolute inset-0 flex items-center justify-center text-[130px] font-black select-none pointer-events-none text-transparent bg-clip-text bg-gradient-to-br ${m.color} opacity-[0.06] leading-none`}>
                        {m.year}
                      </div>
                      <div className="relative z-10 flex items-center justify-center w-full h-full">
                        <MilestoneGraphic index={i} />
                      </div>
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`w-full lg:w-1/2 px-4 ${i % 2 !== 0 ? "lg:pr-24 lg:pl-8" : "lg:pl-24 lg:pr-8"}`}>
                    <div className="group relative bg-white/[0.04] border border-white/10 rounded-[2rem] p-8 lg:p-10 overflow-hidden hover:bg-white/[0.07] hover:border-white/20 transition-all duration-700 hover:-translate-y-1">
                      {/* Corner glow */}
                      <div className={`absolute -top-10 ${i % 2 !== 0 ? "-right-10" : "-left-10"} w-40 h-40 bg-gradient-to-br ${m.color} opacity-10 rounded-full blur-3xl group-hover:opacity-25 transition-opacity duration-700`} />
                      {/* Bottom accent line */}
                      <div className={`absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r ${m.color} opacity-20 group-hover:opacity-50 transition-opacity`} />

                      {/* Icon + year + sequence */}
                      <div className="flex items-center gap-4 mb-7 relative">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center text-2xl shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                          {m.icon}
                        </div>
                        <div>
                          <div className={`text-xs font-black uppercase tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r ${m.color}`}>{m.year}</div>
                          <div className="text-white/25 text-[10px] uppercase tracking-widest font-bold mt-0.5">Milestone</div>
                        </div>
                        <div className="ml-auto text-6xl font-black text-white/[0.04] select-none leading-none">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 relative">{m.title}</h3>
                      <p className="text-primary-300/55 text-sm leading-relaxed relative mb-7">{m.description}</p>

                      {/* Achievement chip */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/70 text-xs font-bold relative`}>
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-br ${m.color} shadow-sm`} />
                        {m.achievement}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Store Gallery ─── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary-500 font-bold text-xs uppercase tracking-[0.25em]">Our Store</span>
            <h2 className="text-3xl font-display font-black text-surface-900 mt-3 mb-4">Store Gallery</h2>
            <p className="text-surface-600 max-w-xl mx-auto text-sm">Take a virtual tour of our premium retail space in Tirunelveli.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 rounded-3xl overflow-hidden shadow-xl h-[400px]">
              <img src="/images/shop/shop-interior-1.jpg" alt="SagO Store Interior View 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl h-[400px]">
              <img src="/images/shop/shop-interior-2.jpg" alt="SagO Store Interior View 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl h-[300px]">
              <img src="/images/shop/shop-interior-3.jpg" alt="SagO Store Interior View 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="md:col-span-2 rounded-3xl overflow-hidden h-[300px] flex items-center justify-center bg-primary-900 text-white p-8 relative">
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-black mb-2">Visit Us in Person</h3>
                <p className="text-primary-100/70 mb-6 max-w-sm mx-auto text-sm">Experience the quality of our products first-hand. We are here to help you find exactly what you need.</p>
                <a href={businessInfo.googleMapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-900 rounded-xl font-bold text-sm hover:bg-primary-50 transition-colors shadow-lg">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Open in Google Maps
                </a>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-950/70 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white, transparent 50%)" }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-display font-black mb-4">Visit Our Store Today</h2>
          <p className="text-white/75 mb-8 max-w-xl mx-auto">Experience the SagO difference — quality products, expert advice, and the best prices in Tirunelveli.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={businessInfo.googleMapsLink} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-white text-primary-700 rounded-xl font-bold text-sm hover:bg-primary-50 transition-colors shadow-xl">
              Get Directions
            </a>
            <a href={`tel:${businessInfo.phone}`} className="px-8 py-3.5 border-2 border-white/40 text-white rounded-xl font-bold text-sm hover:bg-white/10 hover:border-white transition-colors">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
