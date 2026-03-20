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
      { label: "移住", href: "/programme-content" },
      { label: "大学", href: "/programme-content" },
      { label: "インバウンド", href: "/programme-content" },
      { label: "企業向け映像", href: "/programme-content" },
    ],
  },
  {
    label: "Our Work",
    items: [
      { label: "Programme Content", href: "/programme-content" },
      { label: "Corporate Video", href: "/programme-content" },
      { label: "Drone", href: "/japan-drone-video-photo" },
      { label: "VR", href: "/vr-360-tours-japan" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    label: "About Us",
    items: [
      { label: "Our Company", href: "/about" },
      { label: "About Us", href: "/about" },
      { label: "Our Gear", href: "/about" },
      { label: "Privacy Policy", href: "/about" },
      { label: "Contact", href: "/contact" },
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
        className="text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide flex items-center gap-1"
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
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 min-w-[200px] bg-dark-800 border border-white/10 rounded-lg shadow-xl py-2 z-50">
          {menu.items.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-xl font-bold tracking-tight">
              move<span className="text-accent-warm">-</span>ment
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
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
            className="md:hidden text-white p-2"
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
        <div className="md:hidden bg-dark-800 border-t border-white/5 max-h-[80vh] overflow-y-auto">
          {navMenus.map((menu, i) => (
            <div key={i} className="border-b border-white/5">
              <div className="px-4 py-3 text-sm font-semibold text-accent-warm">
                {menu.label}
              </div>
              {menu.items.map((item, j) => (
                <Link
                  key={j}
                  href={item.href}
                  className="block px-6 py-2 text-sm text-white/70 hover:text-white"
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
