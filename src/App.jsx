import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}