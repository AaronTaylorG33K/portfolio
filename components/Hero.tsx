import React from 'react';
import { PORTFOLIO_OWNER, PORTFOLIO_ROLE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center z-10">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium animate-fade-in-up">
          Available for Freelance
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
          Designing the Future<br /> with <span className="text-primary">Code</span>.
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Hi, I'm {PORTFOLIO_OWNER}. A {PORTFOLIO_ROLE} specializing in building immersive web experiences with React, Three.js, and AI integration.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#projects" 
            className="px-8 py-3.5 rounded-lg bg-primary hover:bg-indigo-600 text-white font-semibold transition-all shadow-lg shadow-primary/25"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-all backdrop-blur-sm"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      {/* Decorative gradient blobs */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;