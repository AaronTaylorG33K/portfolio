import React, { useState, useEffect } from 'react';
import { PORTFOLIO_OWNER } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/80 backdrop-blur-md py-4 shadow-lg border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          {PORTFOLIO_OWNER}.
        </a>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a 
          href="#contact"
          className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all border border-white/10 backdrop-blur-sm"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;