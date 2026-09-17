import React, { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#portfolio" },
  { label: "Process", href: "#process" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="h-20 flex items-center justify-between">
          {/* LOGO */}
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center shrink-0"
            aria-label="Brand Wakers Home"
          >
            <span className="text-2xl sm:text-3xl font-black tracking-tight">
              <span className="text-blue-600">BRAND</span>
              <span className="text-slate-900"> WAKERS</span>
            </span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors duration-200 group"
              >
                {link.label}

                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
              aria-label="Call Brand Wakers"
            >
              <Phone size={17} />
              <span>Call Us</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl text-sm font-bold shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all duration-200"
            >
              Book Expo Stall
              <ArrowRight size={17} />
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-slate-200 text-slate-800 hover:bg-slate-50 transition"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 py-4">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="px-3 py-3.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-3 pt-4 border-t border-slate-100 space-y-3">
                <a
                  href="tel:+919876543210"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full border border-slate-200 text-slate-800 px-4 py-3 rounded-xl text-sm font-semibold hover:bg-slate-50 transition"
                >
                  <Phone size={17} />
                  Call Us
                </a>

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl text-sm font-bold transition"
                >
                  Book Expo Stall
                  <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}