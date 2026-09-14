import React from 'react';
import { MessageSquare, Layout, HardHat, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="h-7 w-7 text-blue-600" />,
    step: '01',
    title: 'Brief & Requirements',
    desc: 'We analyze your stall dimensions, open sides, budget, branding guidelines, and product placement goals.'
  },
  {
    icon: <Layout className="h-7 w-7 text-blue-600" />,
    step: '02',
    title: '3D Design & Rendering',
    desc: 'Our architects create high-resolution 3D stall renders with accurate lighting, graphics, and walkthroughs.'
  },
  {
    icon: <HardHat className="h-7 w-7 text-blue-600" />,
    step: '03',
    title: 'In-House Fabrication',
    desc: 'Structure building, woodworking, painting, graphics printing, and pre-assembly at our workshops.'
  },
  {
    icon: <CheckCircle className="h-7 w-7 text-blue-600" />,
    step: '04',
    title: 'On-Site Setup & Handover',
    desc: 'Timely installation at the expo venue, AV testing, live support during the show, and post-event dismantle.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-400 font-bold uppercase text-xs tracking-wider">How We Work</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-2">Our Execution Process</h2>
          <p className="mt-4 text-gray-400">Streamlined workflow ensuring hassle-free exhibition setup.</p>
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-8">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-slate-800/60 p-8 rounded-2xl border border-slate-700/50 relative">
              <span className="text-4xl font-black text-slate-700 absolute top-4 right-6">{s.step}</span>
              <div className="p-3 bg-blue-600/10 border border-blue-500/20 w-fit rounded-xl mb-6">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}