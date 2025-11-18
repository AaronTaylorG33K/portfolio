import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ThreeBackground from './components/ThreeBackground';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen w-full text-white selection:bg-primary selection:text-white">
      <Navbar />
      
      {/* 3D Background Layer - Suspense fallback avoids white flash */}
      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>

      {/* Content Layer */}
      <div className="relative z-10">
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </div>

      {/* Floating AI Assistant */}
      <AIChat />
    </main>
  );
};

export default App;