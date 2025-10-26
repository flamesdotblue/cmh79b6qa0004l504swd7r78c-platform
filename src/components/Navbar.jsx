import React from 'react';
import { Shield } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-800/60">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-md bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
            <Shield className="h-5 w-5 text-emerald-400" />
          </div>
          <span className="text-lg font-semibold tracking-tight">AegisCore</span>
          <span className="ml-2 text-xs px-2 py-0.5 rounded bg-neutral-800/80 border border-neutral-700/60 text-neutral-300">Cybersecurity Framework</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#docs" className="hover:text-white transition-colors">Docs</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-4 py-2 text-sm rounded-md border border-neutral-700/70 hover:border-neutral-600 transition-colors">Sign in</button>
          <button className="inline-flex px-4 py-2 text-sm rounded-md bg-emerald-500 text-neutral-900 font-medium hover:bg-emerald-400 transition-colors">Request demo</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
