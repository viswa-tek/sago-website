"use client";

import Link from "next/link";
import { businessInfo } from "@/content/business";
import { averageRating } from "@/content/reviews";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [status, setStatus] = useState<{ isOpen: boolean; message: string }>({
    isOpen: false,
    message: "Loading...",
  });

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const ISTOffset = 330; // IST is UTC +5:30
      const istTime = new Date(now.getTime() + (now.getTimezoneOffset() + ISTOffset) * 60000);
      
      const day = istTime.getDay();
      const hour = istTime.getHours();
      const minute = istTime.getMinutes();
      const timeInMinutes = hour * 60 + minute;

      // Sunday closed
      if (day === 0) {
        setStatus({ isOpen: false, message: "Closed Today (Sunday)" });
        return;
      }

      // 9:15 AM = 555 mins
      // 2:00 PM = 840 mins
      // 4:00 PM = 960 mins
      // 9:15 PM = 1275 mins
      
      if (timeInMinutes >= 555 && timeInMinutes < 840) {
        setStatus({ isOpen: true, message: "Open Now • Closes for lunch at 2:00 PM" });
      } else if (timeInMinutes >= 840 && timeInMinutes < 960) {
        setStatus({ isOpen: false, message: "Closed for Lunch • Opens at 4:00 PM" });
      } else if (timeInMinutes >= 960 && timeInMinutes < 1275) {
        setStatus({ isOpen: true, message: "Open Now • Closes at 9:15 PM" });
      } else {
        setStatus({ isOpen: false, message: "Closed Now • Opens at 9:15 AM" });
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const images = [
    "/images/shop/shop-interior-1.jpg",
    "/images/shop/shop-interior-2.jpg",
    "/images/shop/shop-interior-3.jpg",
    "/images/shop/shop-exterior-night.jpg",
  ];

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-140px)] mt-[120px] mx-4 sm:mx-6 lg:mx-8 mb-20 rounded-[40px] lg:rounded-[64px] flex items-center justify-center overflow-hidden shadow-2xl border border-primary-900/20">
      {/* Full Background Image Slider */}
      {images.map((img, idx) => (
        <div 
          key={img} 
          className={`absolute inset-0 w-full h-full transition-opacity duration-1500 ease-in-out ${
            idx === activeImage ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <img 
            src={img} 
            alt={`Shop View ${idx + 1}`} 
            className={`w-full h-full object-cover transform transition-transform duration-[10000ms] ${
              idx === activeImage ? "scale-105" : "scale-100"
            }`}
            onError={(e) => {
              (e.target as HTMLImageElement).src = images[0];
            }}
          />
          {/* Cinematic Dark Overlays */}
          <div className="absolute inset-0 bg-primary-950/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/40 to-primary-950" />
        </div>
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mt-20 animate-reveal">
        {/* Status Badge */}
        <div className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full ${status.isOpen ? 'bg-green-500 text-white' : 'bg-red-500 text-white'} text-[11px] font-black tracking-[0.2em] uppercase mb-10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-white/20 backdrop-blur-md`}>
          <span className={`w-2.5 h-2.5 rounded-full bg-white ${status.isOpen ? 'animate-pulse' : ''}`} />
          {status.message}
        </div>
        
        <h1 className="text-5xl md:text-7xl xl:text-8xl font-display font-black text-white leading-[1.1] mb-8 tracking-tighter drop-shadow-2xl">
          Uncompromising <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-white">Tech Quality</span> <br className="hidden md:block" />
          in Tirunelveli
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-100/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
          SagO is Tirunelveli&apos;s destination for mobile and computer accessories, service support, recharges, SIM cards, feature phones, Xerox, and printout needs.
        </p>

        <div className="flex flex-wrap gap-6 justify-center mb-12">
          <Link href="/products" className="btn-elegant bg-accent-500 text-white hover:bg-accent-400 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(25,146,212,0.4)] border border-accent-400/50 group">
            <span className="relative z-10 flex items-center gap-2">
              Explore Collection
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </span>
          </Link>
          <Link href="/#services" className="btn-elegant bg-white/10 backdrop-blur-md text-white border border-white/20 hover:border-white/50 hover:bg-white/20 flex items-center gap-2 group">
            <svg className="w-5 h-5 text-accent-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.83-5.83M11.42 15.17 5.77 20.82a2.25 2.25 0 0 1-3.18-3.18l5.65-5.65m3.18 3.18 3.75-3.75m0 0 1.77-1.77a3.75 3.75 0 0 0-5.3-5.3L9.87 6.12m5.3 5.3L9.87 6.12m0 0 1.42-1.42" /></svg>
            View Services
          </Link>
          <a href={businessInfo.googleMapsLink} target="_blank" rel="noopener noreferrer" className="btn-elegant bg-white/10 backdrop-blur-md text-white border border-white/20 hover:border-white/50 hover:bg-white/20 flex items-center gap-2 group">
            <svg className="w-5 h-5 text-accent-400 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            Find Our Store
          </a>
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center gap-3 z-20 mb-10">
          {images.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === activeImage ? "w-10 bg-accent-400" : "w-3 bg-white/40 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Stats Row */}
        <div className="flex justify-center gap-8 md:gap-24 border-t border-white/10 pt-12 pb-12">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">{averageRating.toFixed(1)}<span className="text-accent-400 text-3xl">★</span></div>
            <div className="text-[10px] md:text-xs text-primary-200 font-bold uppercase tracking-[0.2em] mt-2">Google Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">8+</div>
            <div className="text-[10px] md:text-xs text-primary-200 font-bold uppercase tracking-[0.2em] mt-2">Store Services</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">2021</div>
            <div className="text-[10px] md:text-xs text-primary-200 font-bold uppercase tracking-[0.2em] mt-2">Established</div>
          </div>
        </div>
      </div>
    </section>
  );
}
