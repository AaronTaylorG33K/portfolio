import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Create Something Extraordinary</h2>
        <p className="text-xl text-gray-400 mb-10">
          Whether you have a question, a project idea, or just want to say hi, I'm always open to discussing new opportunities.
        </p>
        
        <a 
          href="mailto:alex@example.com" 
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:-translate-y-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
          Say Hello
        </a>

        <div className="mt-16 flex justify-center gap-6">
          {/* Social Icons (Placeholders) */}
          {['GitHub', 'Twitter', 'LinkedIn', 'Dribbble'].map((social) => (
            <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors font-medium">
              {social}
            </a>
          ))}
        </div>

        <footer className="mt-20 pt-8 border-t border-white/5 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Alex Dev. Built with React, Three.js & Gemini.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;