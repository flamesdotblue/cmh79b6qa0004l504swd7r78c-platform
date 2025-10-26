import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-inter">
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-emerald-900/10 via-transparent to-transparent pointer-events-none" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-neutral-800/60 py-6 text-sm text-neutral-400">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} AegisCore Labs. All rights reserved.</p>
          <p className="text-neutral-500">Secure by design • ML + Blockchain + Open Encryption</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
