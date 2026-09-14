import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Top Announcement / Info Bar */}   

      {/* <div className="bg-slate-950 text-gray-300 text-xs py-2 px-4 hidden md:block border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Phone size={13} className="text-blue-400" /> +91 98765 43210</span>
            <span className="flex items-center gap-1.5"><Mail size={13} className="text-blue-400" /> info@brandwakers.com</span>
            <span className="flex items-center gap-1.5"><MapPin size={13} className="text-blue-400" /> Delhi NCR | Mumbai | Bangalore</span>
          </div>
          <div className="font-semibold text-blue-400 uppercase tracking-wider text-[10px]">
            India's Premier Exhibition & Expo Agency
          </div>
        </div>
      </div> */}

      {/* Main Navbar */}    
      <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-19 items-center">
            
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="text-3xl font-black tracking-wider text-blue-600">BRAND</span>
              <span className="text-3xl font-black tracking-wider text-slate-900">WAKERS</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-gray-700">
              <a href="#home" className="hover:text-blue-600 transition">Home</a>
              <a href="#about" className="hover:text-blue-600 transition">About Us</a>
              <a href="#services" className="hover:text-blue-600 transition">Services</a>
              <a href="#portfolio" className="hover:text-blue-600 transition">Our Work</a>
              <a href="#process" className="hover:text-blue-600 transition">Process</a>
              <a href="#contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition shadow-md shadow-blue-500/20">
                Book Expo Stall
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 p-2">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 px-6 pt-3 pb-6 space-y-3 font-medium text-gray-700">
            <a href="#home" onClick={() => setIsOpen(false)} className="block py-2 border-b border-gray-50">Home</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 border-b border-gray-50">About Us</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block py-2 border-b border-gray-50">Services</a>
            <a href="#portfolio" onClick={() => setIsOpen(false)} className="block py-2 border-b border-gray-50">Our Work</a>
            <a href="#process" onClick={() => setIsOpen(false)} className="block py-2 border-b border-gray-50">Process</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block text-center bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 mt-4 font-semibold">
              Book Expo Stall
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}