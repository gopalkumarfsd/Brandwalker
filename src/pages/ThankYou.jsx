import React from "react";
import {
  CheckCircle2,
  ArrowRight,
  Home,
  MessageCircle,
} from "lucide-react";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-7 sm:p-10 lg:p-14 text-center">
          <div className="mx-auto w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
            <CheckCircle2
              size={48}
              className="text-green-600"
            />
          </div>

          <p className="mt-7 text-blue-600 text-sm font-bold uppercase tracking-[0.2em]">
            Thank You
          </p>

          <h1 className="mt-3 text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Your enquiry has been received!
          </h1>

          <p className="mt-5 text-slate-600 leading-relaxed">
            Thank you for sharing your exhibition requirements with
            Brandwalker. Our team will review your enquiry and get in
            touch with you shortly.
          </p>

          <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-5 text-left">
            <p className="font-bold text-slate-950">
              What happens next?
            </p>

            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• Our team reviews your requirements.</li>
              <li>• We discuss your stall and event requirements.</li>
              <li>• We plan the next steps for your project.</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-bold transition"
            >
              <Home size={18} />
              Back to Home
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3.5 rounded-xl font-bold transition"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>

          <a
            href="/#portfolio"
            className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-slate-500 hover:text-blue-600 transition"
          >
            View Our Work
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}