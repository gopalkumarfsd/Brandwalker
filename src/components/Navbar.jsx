import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Phone,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-slate-200"
          : "bg-slate-950/80 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}
          <a
            href="#home"
            onClick={handleNavClick}
            className="flex items-center gap-3 group"
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg transition ${
                scrolled
                  ? "bg-blue-600 text-white"
                  : "bg-blue-500 text-white"
              }`}
            >
              B
            </div>

            <div className="leading-tight">
              <div
                className={`text-lg font-black tracking-tight transition ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                BRANDWALKER
              </div>

              <div
                className={`text-[10px] font-semibold tracking-[0.18em] transition ${
                  scrolled ? "text-slate-500" : "text-slate-300"
                }`}
              >
                EXHIBITION & EVENTS
              </div>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  scrolled
                    ? "text-slate-600 hover:text-blue-600"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className={`inline-flex items-center gap-2 text-sm font-semibold transition ${
                scrolled
                  ? "text-slate-700 hover:text-blue-600"
                  : "text-slate-200 hover:text-white"
              }`}
            >
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-600/20"
            >
              Get a Quote
              <ArrowRight size={16} />
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition ${
              scrolled
                ? "text-slate-900 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-xl">
          <div className="px-4 py-5 space-y-1">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="block px-4 py-3 rounded-lg text-slate-700 font-semibold hover:bg-slate-50 hover:text-blue-600 transition"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 mt-3 border-t border-slate-200 space-y-3">

              <a
                href="tel:+919876543210"
                onClick={handleNavClick}
                className="flex items-center gap-2 px-4 py-3 text-slate-700 font-semibold"
              >
                <Phone size={17} />
                +91 98765 43210
              </a>

              <a
                href="#contact"
                onClick={handleNavClick}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-bold transition"
              >
                Get a Free Quote
                <ArrowRight size={17} />
              </a>

            </div>
          </div>
        </div>
      )}
    </header>
  );
}