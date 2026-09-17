import React from "react";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <div className="mx-auto w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center text-3xl font-black shadow-xl">
          B
        </div>

        <p className="mt-8 text-blue-400 font-bold uppercase tracking-[0.2em] text-sm">
          Page Not Found
        </p>

        <h1 className="mt-3 text-6xl sm:text-8xl font-black tracking-tight">
          404
        </h1>

        <h2 className="mt-5 text-2xl sm:text-3xl font-bold">
          Looks like this page moved.
        </h2>

        <p className="mt-4 text-slate-400 leading-relaxed">
          The page you're looking for doesn't exist or the link may be
          incorrect.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-bold transition"
          >
            <Home size={18} />
            Go Home
          </a>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/10 px-6 py-3.5 rounded-xl font-bold transition"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}