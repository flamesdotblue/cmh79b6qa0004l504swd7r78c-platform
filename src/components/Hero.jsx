import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-6 pt-14 pb-10 lg:pt-24 lg:pb-16 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-300 text-xs mb-5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Banking-grade security, privacy-first
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
            A 3‑stage cybersecurity framework for modern banking
          </h1>
          <p className="mt-5 text-neutral-300 text-lg max-w-xl">
            AegisCore unifies machine learning threat detection, blockchain-backed integrity, and open-source encryption firmware to safeguard digital banking with transparency and control.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#demo" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-emerald-500 text-neutral-900 font-medium hover:bg-emerald-400 transition-colors">
              Launch interactive demo
            </a>
            <a href="#docs" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-neutral-700/70 text-neutral-200 hover:border-neutral-600 transition-colors">
              Read technical brief
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 text-center">
            <div>
              <dt className="text-xs text-neutral-400">Detection latency</dt>
              <dd className="text-emerald-300 font-semibold text-xl"><span className="tabular-nums">{'< 50ms'}</span></dd>
            </div>
            <div>
              <dt className="text-xs text-neutral-400">Integrity proofs</dt>
              <dd className="text-emerald-300 font-semibold text-xl">Zero‑trust</dd>
            </div>
            <div>
              <dt className="text-xs text-neutral-400">Crypto modules</dt>
              <dd className="text-emerald-300 font-semibold text-xl">Open & auditable</dd>
            </div>
          </dl>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[600px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-neutral-800/60 bg-neutral-900/40">
            <Spline scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12),rgba(0,0,0,0))]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
