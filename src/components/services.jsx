import React from 'react';
import { 
  Box, 
  Layers, 
  PenTool, 
  Monitor, 
  Tv, 
  Truck, 
  ArrowRight,
  CheckCircle2 
} from 'lucide-react';

export default function Services() {
  // Services Data with Unsplash Exhibition Images
  const servicesData = [
    {
      id: 'custom-stalls',
      title: 'Custom Exhibition Stalls',
      description: 'Tailor-made booth designs crafted from high-grade wooden and metal structures to match your unique brand identity.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
      icon: Box,
      features: ['Wooden & Metal Fabrication', 'Brand Centric Layouts', 'Turnkey Execution']
    },
    {
      id: '3d-design',
      title: '3D Stall Design & Rendering',
      description: 'Photorealistic 3D visualization and CAD walkthroughs before actual fabrication to ensure zero design flaws.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      icon: PenTool,
      features: ['360° VR Preview', 'Detailed Floor Plans', 'Lighting Simulation']
    },
    {
      id: 'double-decker',
      title: 'Double-Decker Pavilions',
      description: 'Maximize space efficiency with structural two-story exhibition booths designed for premium VIP hospitality zones.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
      icon: Layers,
      features: ['Structural Stability Certified', 'VIP Lounge Spaces', 'High Visibility']
    },
    {
      id: 'modular-booths',
      title: 'Modular & Portable Booths',
      description: 'Reusable, lightweight aluminum frame systems ideal for frequent trade show exhibitors seeking cost-effective setups.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
      icon: Monitor,
      features: ['Easy Assembly & Dismantle', 'Eco-friendly Materials', 'Re-configurable']
    },
    {
      id: 'av-led',
      title: 'AV & Structural LED Walls',
      description: 'High-definition seamless LED displays, sound systems, and interactive touch kiosks to capture audience attention.',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
      icon: Tv,
      features: ['P2/P3 Indoor LED Panels', 'Interactive Touch Screens', 'Surround Sound']
    },
    {
      id: 'logistics',
      title: 'On-Site Setup & Logistics',
      description: 'End-to-end transportation, venue clearance, electrical wiring, on-site supervision, and post-event teardown.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      icon: Truck,
      features: ['Pan-India Logistics', '24/7 On-site Engineers', 'Safe Teardown']
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 inline-block mb-3">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Comprehensive Exhibition Solutions
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            From 3D conceptualization to final structural dismantling, we deliver world-class trade show booths across major venues in India.
          </p>
        </div>

        {/* Services Cards Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col shadow-xl"
              >
                {/* 1. Service Image Section */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-4 left-4 p-2.5 bg-blue-600/90 backdrop-blur-md rounded-xl text-white shadow-lg">
                    <IconComponent size={20} />
                  </div>
                </div>

                {/* 2. Service Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                          <CheckCircle2 size={14} className="text-blue-500 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span>Explore Service</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}