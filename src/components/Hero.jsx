import React from "react";
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=85"
          alt="Professional exhibition and event setup"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[680px] lg:min-h-[760px] flex items-center py-28 sm:py-32 lg:py-36">

          <div className="max-w-4xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />

              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                Exhibition Stall Design & Fabrication
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-7 text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.05]">
              Exhibition Stalls That{" "}
              <span className="text-blue-400">
                Make Your Brand Stand Out.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
              From creative 3D stall design to fabrication,
              installation and on-site execution, we create
              exhibition spaces that attract attention and
              represent your brand professionally.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-9">

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20"
              >
                Get a Free Consultation
                <ArrowRight size={19} />
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white px-7 py-4 rounded-xl font-bold backdrop-blur-sm transition-all"
              >
                View Our Work
              </a>

            </div>

            {/* Trust points */}
            <div className="flex flex-wrap gap-x-7 gap-y-3 mt-9">

              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2
                  size={18}
                  className="text-blue-400"
                />
                Custom Stall Design
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2
                  size={18}
                  className="text-blue-400"
                />
                3D Visualization
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2
                  size={18}
                  className="text-blue-400"
                />
                Complete Execution
              </div>

            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-green-400 hover:text-green-300 transition"
            >
              <MessageCircle size={18} />
              Discuss Your Project on WhatsApp
            </a>

          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}