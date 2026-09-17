import React from "react";
import {
  Box,
  Layers,
  PenTool,
  Monitor,
  Tv,
  Truck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Services() {
  const servicesData = [
    {
      id: "custom-stalls",
      title: "Custom Exhibition Stalls",
      description:
        "Custom-designed exhibition stalls created around your brand, products, space, and visitor experience.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=85",
      icon: Box,
      features: [
        "Custom Stall Design",
        "Wooden & Metal Fabrication",
        "Complete Execution",
      ],
    },
    {
      id: "3d-design",
      title: "3D Stall Design & Rendering",
      description:
        "Visualize your exhibition stall before fabrication with detailed 3D concepts and presentation-ready designs.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
      icon: PenTool,
      features: [
        "Photorealistic 3D Views",
        "Detailed Floor Plans",
        "Lighting & Branding Concepts",
      ],
    },
    {
      id: "double-decker",
      title: "Double-Decker Exhibition Stalls",
      description:
        "Premium multi-level exhibition spaces designed to maximize your available area and create dedicated hospitality zones.",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=85",
      icon: Layers,
      features: [
        "Space Optimization",
        "Premium Meeting Areas",
        "Complete Structural Execution",
      ],
    },
    {
      id: "modular-booths",
      title: "Modular & Portable Booths",
      description:
        "Flexible exhibition booth solutions designed for brands that participate in multiple events and exhibitions.",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=85",
      icon: Monitor,
      features: [
        "Quick Installation",
        "Reusable Components",
        "Flexible Configurations",
      ],
    },
    {
      id: "av-led",
      title: "AV & LED Solutions",
      description:
        "Integrated LED displays, digital screens, audio, and interactive solutions to make your exhibition space more engaging.",
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=85",
      icon: Tv,
      features: [
        "LED Display Solutions",
        "Digital Screens",
        "Audio & Presentation Setup",
      ],
    },
    {
      id: "logistics",
      title: "Installation & Logistics",
      description:
        "Complete on-site coordination including transportation, installation, electrical work, supervision, and dismantling.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85",
      icon: Truck,
      features: [
        "Event Logistics",
        "On-Site Installation",
        "Post-Event Dismantling",
      ],
    },
  ];

  const handleServiceClick = () => {
    const contactSection =
      document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="services"
      className="py-20 bg-slate-900 text-white font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 inline-block mb-3">
            Our Services
          </span>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Complete Exhibition Solutions Under One Roof
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            From concept and 3D design to fabrication,
            installation, branding, and dismantling, we
            help you create an exhibition space that
            represents your brand professionally.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComponent = service.icon;

            return (
              <div
                key={service.id}
                className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col shadow-xl"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  {/* Icon */}
                  <div className="absolute top-4 left-4 p-2.5 bg-blue-600/90 backdrop-blur-md rounded-xl text-white shadow-lg">
                    <IconComponent size={20} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map(
                        (feature, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-xs text-gray-300"
                          >
                            <CheckCircle2
                              size={14}
                              className="text-blue-500 shrink-0"
                            />

                            <span>{feature}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={handleServiceClick}
                    type="button"
                    className="w-full pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>
                      Discuss Your Requirement
                    </span>

                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Planning an exhibition or trade show?
          </p>

          <button
            type="button"
            onClick={handleServiceClick}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all"
          >
            Get a Free Consultation
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}