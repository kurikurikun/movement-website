"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavMenu {
  label: string;
  items: DropdownItem[];
}

const navMenus: NavMenu[] = [
  {
    label: "実績",
    items: [
      { label: "移住促進", href: "/regional-migration" },
      { label: "大学プロモーション", href: "/university-promotion-video-japan" },
      { label: "インバウンド観光", href: "/inbound-tourism" },
      { label: "企業向け映像", href: "https://www.filminginjapan.com/" },
    ],
  },
  {
    label: "Our Work",
    items: [
      { label: "Programme Content", href: "/video-programme-content-japan" },
      { label: "Corporate Video", href: "https://www.filminginjapan.com/" },
      { label: "Drone Video & Photo", href: "/japan-drone-video-photo" },
      { label: "VR / 360° Tours", href: "/vr-360-tours-japan" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    label: "About Us",
    items: [
      { label: "Our Company", href: "/about" },
      { label: "Our People", href: "/our-people" },
      { label: "Our Gear", href: "/kizai-equipment-video-japan" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

function DropdownMenu({
  menu,
  isOpen,
  onToggle,
}: {
  menu: NavMenu;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        if (isOpen) onToggle();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onToggle]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={onToggle}
        className="text-neutral-500 hover:text-neutral-900 transition-colors text-sm font-medium tracking-[0.15em] uppercase flex items-center gap-1 group"
      >
        {menu.label}
        <svg
          className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-warm group-hover:w-full transition-all duration-300" />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-3 min-w-[220px] bg-white border border-neutral-200 rounded-none shadow-2xl py-2 z-50">
          {menu.items.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="block px-5 py-2.5 text-sm text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 hover:pl-7 transition-all duration-200"
              onClick={onToggle}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navigation() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      {/* Top accent line */}
      <div className="h-[2px] bg-gradient-to-r from-accent-warm via-accent-warm-light to-accent-warm" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 glitch-hover">
            <span className="text-2xl font-black tracking-tight text-neutral-900">
              move<span className="text-accent-warm">-</span>ment
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navMenus.map((menu, i) => (
              <DropdownMenu
                key={i}
                menu={menu}
                isOpen={openMenu === i}
                onToggle={() => setOpenMenu(openMenu === i ? null : i)}
              />
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-neutral-900 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 max-h-[80vh] overflow-y-auto">
          {navMenus.map((menu, i) => (
            <div key={i} className="border-b border-neutral-200">
              <div className="px-4 py-3 text-xs font-mono font-semibold text-accent-warm tracking-[0.2em] uppercase">
                {menu.label}
              </div>
              {menu.items.map((item, j) => (
                <Link
                  key={j}
                  href={item.href}
                  className="block px-6 py-2.5 text-sm text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
