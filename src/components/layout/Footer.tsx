"use client";

import Link from "next/link";
import { businessInfo } from "@/content/business";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900/20 rounded-full blur-[100px] -z-0 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[minmax(280px,1.25fr)_minmax(220px,1fr)_minmax(300px,1.2fr)_minmax(300px,1.2fr)] gap-y-16 gap-x-16 2xl:gap-x-24 mb-20">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-4 mb-8 group">
              <div className="w-14 h-14 shrink-0 rounded-2xl overflow-hidden bg-white flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm border border-white/10">
                <img 
                  src="/logo.png" 
                  alt="SagO Logo" 
                  className="w-full h-full object-contain p-1.5"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.classList.add('bg-primary-900', 'text-white');
                    (e.target as HTMLImageElement).parentElement!.innerHTML = 'S';
                  }}
                />
              </div>
              <div className="flex min-w-0 items-center gap-3">
                <span className="font-pristina text-5xl leading-none tracking-tight">{businessInfo.shortName}</span>
                <span className="flex flex-col gap-1 whitespace-nowrap text-[9px] text-primary-300 font-black uppercase tracking-[0.2em] leading-none">
                  <span>Mobile &amp;</span>
                  <span>Computer Accessories</span>
                </span>
              </div>
            </Link>
            <p className="text-primary-300/80 leading-relaxed mb-10 max-w-xs">
              Tirunelveli&apos;s premier destination for high-quality mobile and computer accessories since 2021.
            </p>
            <div className="flex gap-4">
              <a href={businessInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-all shadow-sm" aria-label="Instagram">
                <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                  <defs>
                    <radialGradient id="instagramGradient" cx="30%" cy="107%" r="150%">
                      <stop offset="0" stopColor="#fdf497" />
                      <stop offset="0.05" stopColor="#fdf497" />
                      <stop offset="0.45" stopColor="#fd5949" />
                      <stop offset="0.6" stopColor="#d6249f" />
                      <stop offset="0.9" stopColor="#285AEB" />
                    </radialGradient>
                  </defs>
                  <path fill="url(#instagramGradient)" d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Z" />
                  <path fill="url(#instagramGradient)" d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                  <circle cx="17.35" cy="6.65" r="1.2" fill="url(#instagramGradient)" />
                </svg>
              </a>
              <a href={businessInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 transition-all shadow-sm" aria-label="Facebook">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.25 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.25 22 17.08 22 12.06Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold text-lg mb-8 tracking-tight">Quick Navigation</h4>
            <ul className="space-y-4">
              {[
                { label: "Home", href: "/" },
                { label: "Our Products", href: "/products" },
                { label: "Services", href: "/#services" },
                { label: "About Our Story", href: "/about" },
                { label: "Customer Reviews", href: "/reviews" },
                { label: "Get in Touch", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-300/70 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold text-lg mb-8 tracking-tight">Store Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-5">
                <div className="w-5 h-5 text-primary-400 mt-1 shrink-0">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <span className="text-primary-300/70 text-sm leading-relaxed">{businessInfo.address.full}</span>
              </li>
              <li className="flex gap-5">
                <div className="w-5 h-5 text-primary-400 mt-1 shrink-0">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <span className="text-primary-300/70 text-sm font-bold tracking-wider">{businessInfo.phoneDisplay}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold text-lg mb-8 tracking-tight">Visit Us</h4>
            <div className="bg-primary-900/30 border border-white/5 p-6 rounded-3xl max-w-sm">
              <p className="text-sm text-primary-300/70 mb-4 font-medium">Monday — Saturday</p>
              <p className="text-xl font-display font-bold mb-2">9:15 AM — 9:15 PM</p>
              <p className="text-[10px] uppercase tracking-widest text-primary-500 font-bold mb-6">Break: 2:00 PM - 4:00 PM</p>
              <a href={businessInfo.googleMapsLink} target="_blank" rel="noopener noreferrer" className="block text-center py-3 rounded-xl bg-white text-primary-950 text-sm font-bold hover:bg-primary-100 transition-colors">
                Get Directions
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-primary-500 text-xs font-medium uppercase tracking-widest">
            © {currentYear} {businessInfo.name}. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs text-primary-500 font-medium uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
