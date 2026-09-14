import React from 'react';
import { ShieldCheck, Award, Users, Building2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4 relative">
            <img 
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80" 
              alt="Expo Stall Fabrication" 
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80" 
              alt="3D Stall Design" 
              className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
            />
            <div className="absolute inset-0 bg-blue-600/10 rounded-3xl -z-10 blur-xl"></div>
          </div>

          {/* Details */}
          <div>
            <span className="text-blue-600 font-bold uppercase text-xs tracking-wider">Who We Are</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2 leading-tight">
              Crafting Immersive Trade Show Experiences
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-base">
              At **Brandwakers**, we specialize in conceptualizing, designing 3D models, and fabricating customized exhibition stalls for trade shows across India and worldwide. 
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed text-base">
              From small modular displays to double-decker exhibition pavilions, we handle everything under one roof: architectural 3D rendering, carpentry, graphics printing, electrical setup, and teardown.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg mt-1"><ShieldCheck size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Turnkey Execution</h4>
                  <p className="text-xs text-gray-500">Design to dismantle complete service</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg mt-1"><Award size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Award-Winning 3D</h4>
                  <p className="text-xs text-gray-500">Photorealistic 3D visualization</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}