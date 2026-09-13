import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl brand-gradient flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
                DS
              </div>
              <div className="flex items-center font-bold text-xl tracking-tight">
                <span className="text-slate-900">Dev</span>
                <span className="text-[#FF3B81] ml-0.5">Stack</span>
              </div>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-[#FF3B81] transition-colors">
              Home
            </a>
            <a href="#technologies" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Technologies
            </a>
            <a href="#projects" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Projects
            </a>
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Contact
            </a>
          </nav>

            <div className="flex items-center gap-3 sm:gap-4">
            <button className="text-sm font-medium text-slate-700 hover:text-slate-900 px-3 py-2 transition-colors">
              Sign In
            </button>
            <button className="brand-gradient hover:brand-gradient-hover text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all transform active:scale-95">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fadeIn">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#FF3B81] bg-pink-50/50"
          >
            Home
          </a>
          <a
            href="#technologies"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            Technologies
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
