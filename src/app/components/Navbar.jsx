'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center size-8 rounded bg-primary/20 text-primary">
              <span className="material-symbols-outlined text-xl">terminal</span>
            </div>
            <span className="text-lg font-bold tracking-tight">Subroto</span>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#about">About</a>
            <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#project">Projects</a>
            <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#skills">Skills</a>
            <a className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#contact">Contact</a>
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <button className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Resume</span>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors p-2"
              aria-label="Toggle mobile menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-3 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
          <a 
            href="#about" 
            onClick={closeMobileMenu}
            className="block px-3 py-2 rounded-lg text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            About
          </a>
          <a 
            href="#project" 
            onClick={closeMobileMenu}
            className="block px-3 py-2 rounded-lg text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Projects
          </a>
          <a 
            href="#skills" 
            onClick={closeMobileMenu}
            className="block px-3 py-2 rounded-lg text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Skills
          </a>
          <a 
            href="#contact" 
            onClick={closeMobileMenu}
            className="block px-3 py-2 rounded-lg text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Contact
          </a>
          
          {/* Mobile Resume Button */}
          <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white px-4 py-3 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-primary/20 mt-4">
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>Resume</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
