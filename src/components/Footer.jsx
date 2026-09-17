import React from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { subscribeEmail } from "../services/api";

export default function Footer() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    try {
      setLoading(true);
      setStatus("");

      await subscribeEmail(email);

      setStatus("Thanks! You're subscribed.");
      setEmail("");
    } catch (error) {
      setStatus(
        error.message ||
          "Unable to subscribe. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-slate-950 text-white">

      {/* TOP CTA */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="bg-blue-600 rounded-3xl px-6 sm:px-10 lg:px-14 py-10 sm:py-12">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

              <div className="max-w-2xl">
                <p className="text-blue-100 text-xs font-bold uppercase tracking-[0.2em]">
                  Ready for your next exhibition?
                </p>

                <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 leading-tight">
                  Let's build a stall that gets noticed.
                </h2>

                <p className="text-blue-100 mt-3 text-sm sm:text-base leading-relaxed">
                  Share your exhibition requirements with our
                  team and let's plan your project from design
                  to execution.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-6 py-3.5 rounded-xl font-bold text-sm transition-all shrink-0"
              >
                Start Your Project
                <ArrowRight size={18} />
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* BRAND */}
          <div className="lg:col-span-4">

            <a
              href="#home"
              className="inline-block text-2xl sm:text-3xl font-black tracking-tight"
            >
              <span className="text-blue-500">
                BRAND
              </span>

              <span className="text-white">
                {" "}WAKERS
              </span>
            </a>

            <p className="text-slate-400 mt-5 leading-relaxed text-sm max-w-sm">
              Exhibition stall design, 3D visualization,
              fabrication and complete event execution for
              brands across India.
            </p>

            {/* SOCIAL MEDIA */}
            <div className="flex flex-wrap items-center gap-3 mt-7">

              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/expobrandwakers/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.67.33-1 1-1z" />
                </svg>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/expobrandwakers/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/company/expobrandwakers/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 5 3.5ZM3 10h4v11H3V10Zm6 0h3.8v1.5h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.65 4.78 6.1V21h-4v-4.8c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.84 1.25-1.84 2.54V21H9V10Z" />
                </svg>
              </a>

              {/* YOUTUBE */}
              <a
                href="https://www.youtube.com/@expobrandwakers"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.4.58A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.85.58 9.4.58 9.4.58s7.55 0 9.4-.58a3 3 0 0 0 2.1-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.5 3.9-6.5 3.9Z" />
                </svg>
              </a>

              {/* PINTEREST */}
              <a
                href="https://in.pinterest.com/expobrandwakers/"
                aria-label="Pinterest"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 3 5.58 3 10.12c0 3.1 1.74 5.84 4.45 6.87-.05-.59-.01-1.3.15-1.97l1.03-4.34s-.26-.53-.26-1.31c0-1.23.71-2.15 1.6-2.15.75 0 1.11.56 1.11 1.23 0 .75-.48 1.88-.73 2.93-.21.88.44 1.6 1.31 1.6 1.57 0 2.77-1.66 2.77-4.06 0-2.12-1.52-3.6-3.69-3.6-2.51 0-3.98 1.88-3.98 3.82 0 .76.29 1.57.66 2.01.07.08.08.15.06.24l-.25 1.03c-.04.17-.14.2-.32.12-1.2-.56-1.95-2.32-1.95-3.74 0-3.05 2.22-5.85 6.4-5.85 3.36 0 5.97 2.39 5.97 5.58 0 3.33-2.1 6.01-5.01 6.01-.98 0-1.9-.51-2.22-1.11l-.6 2.28c-.22.83-.82 1.87-1.22 2.5.92.28 1.89.43 2.9.43 5.52 0 9-3.58 9-8.12C21 5.58 17.52 2 12 2Z" />
                </svg>
              </a>

            </div>
          </div>

          {/* SERVICES */}
          <div className="lg:col-span-2">

            <h3 className="text-sm font-bold uppercase tracking-wider">
              Services
            </h3>

            <ul className="mt-5 space-y-3 text-sm">

              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-white transition"
                >
                  Custom Exhibition Stalls
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-white transition"
                >
                  3D Stall Design
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-white transition"
                >
                  Double-Decker Stalls
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-white transition"
                >
                  Modular Booths
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-white transition"
                >
                  LED & AV Solutions
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-white transition"
                >
                  Installation & Logistics
                </a>
              </li>

            </ul>
          </div>

          {/* COMPANY */}
          <div className="lg:col-span-2">

            <h3 className="text-sm font-bold uppercase tracking-wider">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm">

              <li>
                <a
                  href="#about"
                  className="text-slate-400 hover:text-white transition"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#portfolio"
                  className="text-slate-400 hover:text-white transition"
                >
                  Our Work
                </a>
              </li>

              <li>
                <a
                  href="#process"
                  className="text-slate-400 hover:text-white transition"
                >
                  Our Process
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-white transition"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-blue-400 transition"
                   >
                  Privacy Policy
                </a>
              </li>

              <li>
                  <a
                   href="/terms-and-conditions"
                   className="hover:text-blue-400 transition"
                     >
                   Terms & Conditions
                   </a>
              </li>

            </ul>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-4">

            <h3 className="text-sm font-bold uppercase tracking-wider">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4">

              {/* PHONE */}
              <a
                href="tel:+919876543210"
                className="flex items-start gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Phone
                    size={17}
                    className="text-blue-400"
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Phone / WhatsApp
                  </p>

                  <p className="text-sm font-semibold text-slate-200 group-hover:text-blue-400 transition">
                    +91 98765 43210
                  </p>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:info@brandwakers.com"
                className="flex items-start gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Mail
                    size={17}
                    className="text-blue-400"
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Email
                  </p>

                  <p className="text-sm font-semibold text-slate-200 group-hover:text-blue-400 transition">
                    info@brandwakers.com
                  </p>
                </div>
              </a>

              {/* LOCATION - CLICKABLE */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Pearls+Omaxe+Tower+Netaji+Subhash+Place+Pitampura+Delhi+110034"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Pearls Omaxe Tower location in Google Maps"
                className="flex items-start gap-3 group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all">
                  <MapPin
                    size={17}
                    className="text-blue-400 group-hover:text-white transition"
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-500 group-hover:text-blue-400 transition">
                    Our Office
                  </p>

                  <p className="text-sm font-semibold text-slate-200 group-hover:text-blue-400 transition leading-relaxed">
                    Pearls Omaxe Tower
                  </p>

                  <p className="text-xs text-slate-400 group-hover:text-slate-300 transition leading-relaxed mt-1">
                    Netaji Subhash Place, Pitampura
                    <br />
                    New Delhi - 110034
                  </p>

                  <p className="text-xs text-blue-400 font-semibold mt-2">
                    Click to view on Google Maps →
                  </p>
                </div>
              </a>

            </div>
          </div>

        </div>

        {/* NEWSLETTER */}
        <div className="mt-14 pt-8 border-t border-white/10">

          <div className="grid lg:grid-cols-2 gap-6 items-center">

            <div>
              <h3 className="text-lg font-bold">
                Get exhibition updates
              </h3>

              <p className="text-sm text-slate-400 mt-1">
                Subscribe for exhibition tips, design ideas
                and project updates.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3"
            >

              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatus("");
                }}
                placeholder="Enter your email address"
                className="flex-1 min-w-0 bg-white/5 border border-white/10 text-white placeholder:text-slate-500 px-4 py-3 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white px-5 py-3 rounded-xl font-bold text-sm transition"
              >
                {loading
                  ? "Subscribing..."
                  : "Subscribe"}

                {!loading && (
                  <ArrowRight size={17} />
                )}
              </button>

            </form>
          </div>

          {status && (
            <p className="text-sm text-slate-400 mt-3">
              {status}
            </p>
          )}

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">

            <p>
              © {new Date().getFullYear()} Brand Wakers.
              All rights reserved.
            </p>

            <p>
              Exhibition Stall Design & Fabrication
            </p>

          </div>
        </div>
      </div>

    </footer>
  );
}