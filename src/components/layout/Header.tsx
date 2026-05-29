"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { businessInfo } from "@/content/business";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

// Pages with dark hero backgrounds — header needs light text when un-scrolled
const darkHeroPages = ["/about", "/reviews", "/contact"];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isDarkPage = darkHeroPages.some((p) => pathname === p || pathname === `${p}/`);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname === href.replace(/\/$/, "");
  const closeMenu = () => setIsMobileMenuOpen(false);

  // Derived colour tokens based on scroll + page type
  const navTextColor   = isScrolled ? "text-primary-800" : isDarkPage ? "text-white/90" : "text-primary-800";
  const navHoverBg     = isScrolled ? "hover:bg-primary-50" : isDarkPage ? "hover:bg-white/10" : "hover:bg-primary-50";
  const navHoverText   = isScrolled ? "hover:text-primary-950" : isDarkPage ? "hover:text-white" : "hover:text-primary-950";
  const activeClasses  = isScrolled || !isDarkPage
    ? "bg-primary-900 text-white shadow-md shadow-primary-900/20"
    : "bg-white/15 text-white backdrop-blur-sm";
  const logoNameColor  = isScrolled ? "text-primary-950" : isDarkPage ? "text-white" : "text-primary-950";
  const logoSubColor   = isScrolled ? "text-primary-500" : isDarkPage ? "text-white/50" : "text-primary-500";
  const phoneColor     = isScrolled ? "text-primary-900" : isDarkPage ? "text-white/80" : "text-primary-900";
  const phoneHover     = isDarkPage && !isScrolled ? "hover:text-white" : "hover:text-primary-600";
  const hamburgerColor = isScrolled ? "text-primary-900" : isDarkPage ? "text-white" : "text-primary-900";
  const hamburgerHover = isDarkPage && !isScrolled ? "hover:bg-white/10" : "hover:bg-primary-50";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-3 px-4" : "py-5 px-4"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-500 border ${
          isScrolled
            ? "glass-card px-6 py-2 shadow-xl shadow-primary-900/5"
            : isDarkPage
            ? "bg-primary-950/40 backdrop-blur-md border-white/10 px-6 py-2"
            : "bg-transparent border-transparent px-6 py-2"
        }`}
      >
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group" aria-label="Home" onClick={closeMenu}>
            <div className="w-12 h-12 rounded-2xl overflow-hidden bg-white flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm border border-primary-50">
              <img
                src="/logo.png"
                alt="SagO Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  (e.target as HTMLImageElement).parentElement!.classList.add("bg-primary-900", "text-white");
                  (e.target as HTMLImageElement).parentElement!.innerHTML = "S";
                }}
              />
            </div>
            <div className="flex min-w-0 items-center gap-3">
              <span className={`font-pristina text-5xl leading-none transition-colors duration-300 ${logoNameColor}`}>
                {businessInfo.shortName}
              </span>
              <span className={`hidden sm:flex flex-col gap-1 whitespace-nowrap text-[9px] font-black uppercase tracking-[0.2em] leading-none transition-colors duration-300 ${logoSubColor}`}>
                <span>Mobile &amp;</span>
                <span>Computer Accessories</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  isActive(link.href)
                    ? activeClasses
                    : `${navTextColor} ${navHoverBg} ${navHoverText}`
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${businessInfo.phone}`}
              className={`font-bold text-sm transition-colors duration-300 ${phoneColor} ${phoneHover}`}
            >
              {businessInfo.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className={`btn-elegant text-xs !px-6 !py-2.5 rounded-full shadow-md transition-all duration-300 ${
                isDarkPage && !isScrolled
                  ? "bg-white text-primary-900 hover:bg-primary-50"
                  : "bg-primary-900 text-white hover:bg-primary-800"
              }`}
            >
              Visit Store
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${hamburgerColor} ${hamburgerHover}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-4">
              <span className={`absolute left-0 w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 w-5 h-0.5 bg-current transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? "top-1.5 -rotate-45" : "top-3"}`} />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-x-4 top-24 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isMobileMenuOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
      }`}>
        <div className="glass-card p-6 rounded-[32px] shadow-2xl border-primary-100 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`block px-6 py-4 rounded-2xl text-lg font-bold transition-colors ${
                isActive(link.href) ? "bg-primary-900 text-white" : "text-primary-800 hover:bg-primary-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 mt-4 border-t border-primary-100 flex gap-4">
            <a href={`tel:${businessInfo.phone}`} className="flex-1 btn-elegant bg-primary-100 text-primary-900 text-center py-4 rounded-2xl font-bold">Call</a>
            <a href={businessInfo.whatsapp} className="flex-1 btn-elegant bg-[#25D366] text-white text-center py-4 rounded-2xl font-bold">WhatsApp</a>
          </div>
        </div>
      </div>
    </header>
  );
}
