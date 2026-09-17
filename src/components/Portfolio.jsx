import React, { useEffect, useState } from "react";
import {
  X,
  MapPin,
  Maximize2,
  ArrowRight,
} from "lucide-react";

const expoProjects = [
  {
    id: 1,
    title: "18m x 12m Double Decker Expo Stall",
    category: "Custom Stalls",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=85",
    description:
      "A two-level exhibition space designed around premium visitor areas, brand visibility, product displays, and meeting zones.",
    city: "New Delhi",
    venue: "Pragati Maidan",
    area: "216 Sq. Meters",
  },
  {
    id: 2,
    title: "Automotive & EV Showcase Booth",
    category: "Custom Stalls",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=85",
    description:
      "A contemporary exhibition concept focused on product presentation, visitor movement, branding, and interactive display areas.",
    city: "Greater Noida",
    venue: "India Expo Mart",
    area: "150 Sq. Meters",
  },
  {
    id: 3,
    title: "Pharma & Healthcare Pavilion",
    category: "Modular Booths",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1000&q=85",
    description:
      "A clean and functional modular exhibition environment designed for product communication, meetings, and efficient setup.",
    city: "Mumbai",
    venue: "Bombay Exhibition Centre",
    area: "90 Sq. Meters",
  },
  {
    id: 4,
    title: "Industrial Machinery Display",
    category: "Custom Stalls",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85",
    description:
      "A spacious exhibition setup planned for large product displays, visitor circulation, branding, and demonstration areas.",
    city: "Hyderabad",
    venue: "HITEX Exhibition Centre",
    area: "300 Sq. Meters",
  },
];

const categories = [
  "All",
  "Custom Stalls",
  "Modular Booths",
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [selectedProject, setSelectedProject] =
    useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? expoProjects
      : expoProjects.filter(
          (project) =>
            project.category === activeCategory
        );

  // Prevent background page scrolling while modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const scrollToContact = () => {
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
      id="portfolio"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-600 font-bold uppercase text-xs tracking-widest">
            Our Portfolio
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-2">
            Exhibition Projects
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Explore selected exhibition concepts and
            stall solutions designed to create strong
            brand visibility and engaging visitor
            experiences.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() =>
                setActiveCategory(category)
              }
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid sm:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() =>
                setSelectedProject(project)
              }
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" ||
                  event.key === " "
                ) {
                  setSelectedProject(project);
                }
              }}
              role="button"
              tabIndex={0}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-72 bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold flex items-center gap-2">
                    View Project
                    <Maximize2 size={18} />
                  </span>
                </div>

                {/* Category */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 text-blue-700 px-3 py-1.5 rounded-full text-xs font-bold shadow">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                  <MapPin size={13} />
                  <span>
                    {project.venue},{" "}
                    {project.city}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500">
                    {project.area}
                  </span>

                  <span className="text-sm font-semibold text-blue-600 flex items-center gap-1">
                    View Details
                    <ArrowRight
                      size={15}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 text-sm mb-4">
            Have an upcoming exhibition?
          </p>

          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all"
          >
            Discuss Your Exhibition
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() =>
            setSelectedProject(null)
          }
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() =>
                setSelectedProject(null)
              }
              className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-900 bg-white/95 hover:bg-white p-2.5 rounded-full shadow-md transition"
              aria-label="Close project details"
            >
              <X size={20} />
            </button>

            {/* Modal Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 sm:h-80 object-cover"
            />

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                {selectedProject.category}
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
                {selectedProject.title}
              </h3>

              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Project Details */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <span className="text-gray-400 block text-xs uppercase tracking-wide">
                    Venue
                  </span>

                  <span className="font-semibold text-gray-800 text-sm mt-1 block">
                    {selectedProject.venue}
                  </span>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <span className="text-gray-400 block text-xs uppercase tracking-wide">
                    Location
                  </span>

                  <span className="font-semibold text-gray-800 text-sm mt-1 block">
                    {selectedProject.city}
                  </span>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <span className="text-gray-400 block text-xs uppercase tracking-wide">
                    Stall Area
                  </span>

                  <span className="font-semibold text-gray-800 text-sm mt-1 block">
                    {selectedProject.area}
                  </span>
                </div>
              </div>

              {/* Modal CTA */}
              <button
                type="button"
                onClick={() => {
                  setSelectedProject(null);
                  scrollToContact();
                }}
                className="mt-7 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition"
              >
                Discuss a Similar Project
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}