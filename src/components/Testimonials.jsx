import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    company: 'EV Motion Dynamics',
    review: 'Brandwakers designed our 180 sqm stall for Auto Expo. The 3D render match with the actual build was 100%. Highly professional team.',
    rating: 5
  },
  {
    id: 2,
    name: 'Ananya Verma',
    company: 'BioPharma Health',
    review: 'Flawless execution at Pragati Maidan. Handed over the stall 6 hours before deadline. All LED screen cabling and graphics were top class.',
    rating: 5
  },
  { 
    id: 3,
    name: 'Vikram Mehta',
    company: 'Apex Industrial Tools',
    review: 'Their team handled our heavy machinery booth effortlessly. Great flooring support and excellent lighting layout.',
    rating: 5
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(current === 0 ? reviews.length - 1 : current - 1);
  const next = () => setCurrent(current === reviews.length - 1 ? 0 : current + 1);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-blue-600 font-bold uppercase text-xs tracking-wider">Client Feedback</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">What Exhibition Managers Say</h2>
        
        <div className="mt-12 bg-slate-50 p-8 sm:p-12 rounded-3xl border border-gray-100 relative shadow-sm">
          <Quote className="text-blue-200 h-16 w-16 mx-auto mb-4" />
          <p className="text-lg sm:text-xl text-slate-700 italic leading-relaxed">
            "{reviews[current].review}"
          </p>
          
          <div className="mt-6 flex justify-center gap-1">
            {[...Array(reviews[current].rating)].map((_, i) => (
              <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
            ))}
          </div>

          <h4 className="mt-4 font-bold text-slate-900 text-lg">{reviews[current].name}</h4>
          <p className="text-xs text-gray-500 font-medium">{reviews[current].company}</p>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="p-3 bg-white hover:bg-blue-600 hover:text-white border border-gray-200 rounded-full transition shadow-sm">
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} className="p-3 bg-white hover:bg-blue-600 hover:text-white border border-gray-200 rounded-full transition shadow-sm">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}