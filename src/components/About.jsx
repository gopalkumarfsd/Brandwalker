import React from "react";
import {
  ShieldCheck,
  Award,
  Users,
  Building2,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Images */}
          <div className="grid grid-cols-2 gap-4 relative">

            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=85"
              alt="Brandwalker exhibition stall"
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
              loading="lazy"
            />

            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=85"
              alt="Exhibition and event setup"
              className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-blue-600/10 rounded-3xl -z-10 blur-xl"></div>
          </div>

          {/* Content */}
          <div>
            <span className="text-blue-700 font-bold uppercase text-sm tracking-wider">
              Who We Are
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2 leading-tight">
              Creating Exhibition Experiences That Get Noticed
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed text-base">
              <strong className="text-slate-900">
                Brandwalker
              </strong>{" "}
              specializes in exhibition stall design,
              3D visualization, fabrication, and complete
              event execution. We create customized spaces
              that help brands stand out and connect with
              their audience.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed text-base">
              From compact modular stalls to large
              custom-built exhibition spaces, our team
              manages the complete process — from concept
              and 3D design to fabrication, branding,
              electrical setup, installation, and
              dismantling.
            </p>

            {/* Features */}
            <div className="mt-8 grid sm:grid-cols-2 gap-5">

              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg mt-1">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Turnkey Execution
                  </h4>

                  <p className="text-xs text-gray-500 mt-1">
                    Complete execution from design to
                    dismantling.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg mt-1">
                  <Award size={20} />
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Creative 3D Designs
                  </h4>

                  <p className="text-xs text-gray-500 mt-1">
                    Detailed and realistic exhibition
                    visualizations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg mt-1">
                  <Users size={20} />
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Experienced Team
                  </h4>

                  <p className="text-xs text-gray-500 mt-1">
                    Skilled professionals handling every
                    stage of execution.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg mt-1">
                  <Building2 size={20} />
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Custom Solutions
                  </h4>

                  <p className="text-xs text-gray-500 mt-1">
                    Exhibition spaces designed around
                    your brand and requirements.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}