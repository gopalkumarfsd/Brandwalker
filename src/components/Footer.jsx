 import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  Send,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

import { subscribeEmail } from "../services/api";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // =========================
  // Newsletter Subscribe
  // =========================
  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    try {
      const data = await subscribeEmail(email);

      console.log("Subscriber Saved:", data);

      setSubscribed(true);
      setEmail("");

      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    } catch (error) {
      console.error("Subscribe Error:", error);
      alert(error.message);
    }
  };

  // =========================
  // Scroll To Top
  // =========================
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 text-gray-400 pt-12 pb-8 border-t border-slate-800 font-sans w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* =========================================
            1. Main 4-Column Footer Layout
        ========================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-slate-800/80">

          {/* =========================================
              Column 1: Brand Info & Social
          ========================================== */}
          <div className="space-y-4">

            {/* Brand */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={scrollToTop}
            >
              <span className="text-xl font-black tracking-wider text-blue-500">
                BRAND
              </span>

              <span className="text-xl font-black tracking-wider text-white">
                WAKERS
              </span>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-400 leading-relaxed">
              India's premier turnkey exhibition stall designing & fabrication
              agency. Delivering custom 3D trade show booths and pavilions
              nationwide.
            </p>

            {/* =========================================
                Social Media
            ========================================== */}
            <div className="flex gap-2.5 pt-1">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/expobrandwakers/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 hover:bg-blue-600 hover:text-white rounded-lg text-gray-400 transition"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/expobrandwakers/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 hover:bg-blue-600 hover:text-white rounded-lg text-gray-400 transition"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.28-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.07 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/expobrandwakers/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 hover:bg-blue-600 hover:text-white rounded-lg text-gray-400 transition"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@expobrandwakers"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 hover:bg-blue-600 hover:text-white rounded-lg text-gray-400 transition"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a2.99 2.99 0 0 0-2.104-2.117C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.394.569A2.99 2.99 0 0 0 .502 6.186C0 8.08 0 12 0 12s0 3.92.502 5.814a2.99 2.99 0 0 0 2.104 2.117C4.495 20.5 12 20.5 12 20.5s7.505 0 9.394-.569a2.99 2.99 0 0 0 2.104-2.117C24 15.92 24 12 24 12s0-3.92-.502-5.814zM9.6 15.5v-7l6.4 3.5-6.4 3.5z" />
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href="https://in.pinterest.com/expobrandwakers/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 hover:bg-blue-600 hover:text-white rounded-lg text-gray-400 transition"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.429 7.618 11.165-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.963 1.407-5.963s-.359-.719-.359-1.781c0-1.669.968-2.916 2.171-2.916 1.024 0 1.518.769 1.518 1.69 0 1.03-.655 2.568-.994 3.995-.283 1.195.6 2.169 1.777 2.169 2.133 0 3.773-2.249 3.773-5.496 0-2.872-2.065-4.882-5.013-4.882-3.414 0-5.416 2.561-5.416 5.208 0 1.031.397 2.138.893 2.738.098.119.112.223.083.344-.091.378-.293 1.195-.333 1.363-.052.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.162 0 7.398 2.966 7.398 6.931 0 4.136-2.608 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.85c-.27 1.04-1.002 2.342-1.492 3.137C9.078 23.799 10.52 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>

            </div>
          </div>

          {/* =========================================
              Column 2: Expo Services
          ========================================== */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2.5">
              Expo Services
            </h4>

            <ul className="space-y-2 text-xs">
              {[
                "Custom Exhibition Stalls",
                "3D Stall Design & Rendering",
                "Double-Decker Pavilions",
                "Modular & Portable Booths",
                "On-Site Exhibition Setup",
                "AV & Structural LED Walls",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="hover:text-blue-400 transition flex items-center gap-1 group"
                  >
                    <ChevronRight
                      size={12}
                      className="text-blue-500 opacity-0 group-hover:opacity-100 transition shrink-0"
                    />

                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================================
              Column 3: Major Venues
          ========================================== */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2.5">
              Major Venues Covered
            </h4>

            <ul className="space-y-2 text-xs">
              {[
                "Pragati Maidan (New Delhi)",
                "IEML (Greater Noida)",
                "BEC / NESCO (Mumbai)",
                "BIEC (Bangalore)",
                "HITEX Centre (Hyderabad)",
                "Helipad Centre (Gandhinagar)",
              ].map((venue, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-400"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full shrink-0"></span>
                  <span>{venue}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================================
              Column 4: Contact Info
          ========================================== */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-2.5">
              Contact & Units
            </h4>

            <div className="space-y-3 text-xs">

              {/* Google Maps Location */}
              <a
                href="https://maps.app.goo.gl/hiHRt3FhNPQhs2A28?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-blue-400 transition"
              >
                <MapPin
                  size={15}
                  className="text-blue-500 shrink-0 mt-0.5"
                />

                <span>
                  Delhi NCR (HQ), Mumbai & Bangalore Facilities
                </span>
              </a>

              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <Phone
                  size={15}
                  className="text-blue-500 shrink-0"
                />

                <span className="text-white font-semibold">
                  +91 98765 43210
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <Mail
                  size={15}
                  className="text-blue-500 shrink-0"
                />

                <span className="text-gray-300">
                  info@brandwakers.com
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* =========================================
            2. Newsletter Subscription
        ========================================== */}
        <div className="my-8 bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="text-center md:text-left">

            <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider">
              Exhibition Newsletter
            </span>

            <p className="text-xs text-white font-medium mt-0.5">
              Get latest 3D stall design trends & expo tips directly to your
              mail.
            </p>

          </div>

          <div className="w-full md:w-auto shrink-0">

            {/* Success Message */}
            {subscribed ? (
              <div className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border border-blue-500/30">
                <CheckCircle2 size={16} />
                Subscribed Successfully!
              </div>
            ) : (

              /* Subscribe Form */
              <form
                onSubmit={handleSubscribe}
                className="flex gap-2 w-full md:w-auto"
              >

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Corporate Email"
                  className="px-3.5 py-2 text-xs rounded-xl bg-slate-950 text-white placeholder-gray-500 border border-slate-800 focus:outline-none focus:border-blue-500 w-full md:w-64"
                  required
                />

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl font-semibold text-xs transition flex items-center justify-center gap-1.5 shrink-0"
                >
                  Subscribe
                  <Send size={12} />
                </button>

              </form>
            )}

          </div>
        </div>

        {/* =========================================
            3. Bottom Bar
        ========================================== */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-500 gap-3 pt-2">

          <p>
            ©️ {new Date().getFullYear()} Brandwakers Exhibition Services.
            All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <a
              href="#"
              className="hover:text-gray-300 transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-gray-300 transition"
            >
              Terms of Service
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-blue-400 hover:text-white transition font-medium bg-slate-900 px-3 py-1 rounded-full border border-slate-800"
            >
              Back to top
              <ArrowUp size={12} />
            </button>

          </div>
        </div>

      </div>
    </footer>
  );
}