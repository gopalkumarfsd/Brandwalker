import React, { useState } from 'react';
import { ExternalLink, X, MapPin, Maximize2 } from 'lucide-react';

const expoProjects = [
  {
    id: 1,
    title: '18m x 12m Double Decker Expo Stall',
    category: 'Custom Stalls',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    description: 'A two-story pavilion built for a major tech summit featuring VIP lounges, interactive LED walls, and meeting pods.',
    city: 'Pragati Maidan, New Delhi',
    area: '216 Sq. Meters'
  },
  {
    id: 2,
    title: 'Automotive & EV Showcase Booth',
    category: '3D Renderings',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    description: 'Sleek, futuristic booth with custom acrylic flooring, overhead branding trusses, and vehicle turntables.',
    city: 'Auto Expo, Greater Noida',
    area: '150 Sq. Meters'
  },
  {
    id: 3,
    title: 'Pharma & Healthcare Pavilion',
    category: 'Modular Booths',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80',
    description: 'Clean, modern modular stall setup designed for quick deployment across international pharmaceutical trade fairs.',
    city: 'BEC, Mumbai',
    area: '90 Sq. Meters'
  },
  {
    id: 4,
    title: 'Industrial Heavy Machinery Display',
    category: 'Custom Stalls',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    description: 'Reinforced floor layout built to sustain heavy equipment load with hanging fabric banners and product zones.',
    city: 'HITEX, Hyderabad',
    area: '300 Sq. Meters'
  }
];

const categories = ['All', 'Custom Stalls', '3D Renderings', 'Modular Booths'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = activeCategory === 'All' 
    ? expoProjects 
    : expoProjects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-blue-600 font-bold uppercase text-xs tracking-wider">Recent Exhibitions</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-2">Featured Expo Stalls</h2>
          <p className="mt-4 text-gray-600">Take a look at some of the custom stalls and pavilions we have built.</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-12 grid sm:grid-cols-2 gap-8">
          {filtered.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition duration-300"
            >
              <div className="relative overflow-hidden h-72">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                />
                <div className="absolute inset-0 bg-blue-950/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semibold gap-2">
                  View Full Showcase <Maximize2 size={18} />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{project.category}</span>
                  <span className="text-xs text-gray-500 flex items-center gap-1"><MapPin size={12} /> {project.city}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-100 p-2 rounded-full"
            >
              <X size={20} />
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-2xl mb-4" />
            <span className="text-xs font-bold text-blue-600 uppercase">{selectedProject.category}</span>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">{selectedProject.title}</h3>
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">{selectedProject.description}</p>
            
            <div className="mt-6 pt-4 border-t border-gray-100 grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-400 block text-xs">Venue / City</span>
                <span className="font-semibold text-gray-800">{selectedProject.city}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-xs">Stall Area</span>
                <span className="font-semibold text-gray-800">{selectedProject.area}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}