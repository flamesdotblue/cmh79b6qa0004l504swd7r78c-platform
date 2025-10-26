import React from 'react';

const CTA = () => {
  return (
    <section id="demo" className="py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="rounded-2xl border border-emerald-600/30 bg-gradient-to-br from-emerald-500/10 via-neutral-900 to-neutral-900 p-8 md:p-10">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-semibold">See AegisCore in action</h3>
            <p className="text-neutral-300 mt-2">Get a guided tour of our ML detection console, integrity explorer, and encryption policy editor. We will tailor the demo to your banking use cases.</p>
          </div>
          <form className="mt-6 grid sm:grid-cols-[1fr_auto] gap-3 max-w-xl" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Work email address"
              className="w-full rounded-md bg-neutral-950/60 border border-neutral-700/70 px-4 py-3 text-sm outline-none focus:border-emerald-500/70"
            />
            <button className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-emerald-500 text-neutral-900 font-medium hover:bg-emerald-400 transition-colors">
              Request demo
            </button>
          </form>
          <p className="mt-3 text-xs text-neutral-400">By requesting a demo you agree to our terms and privacy policy.</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
