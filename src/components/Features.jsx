import React from 'react';
import { Cpu, Server, Lock, Shield } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, subtitle, points }) => (
  <div className="group rounded-xl border border-neutral-800/70 bg-neutral-900/30 p-6 hover:border-emerald-600/40 hover:bg-neutral-900/50 transition-colors">
    <div className="flex items-start gap-4">
      <div className="h-11 w-11 rounded-md bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5 text-emerald-400" />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-neutral-400 text-sm mt-1">{subtitle}</p>
      </div>
    </div>
    <ul className="mt-4 space-y-2 text-sm text-neutral-300 list-disc pl-5">
      {points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Three-stage protection, one unified framework</h2>
          <p className="mt-3 text-neutral-300">From real-time anomaly detection to tamper-proof logging and open encryption, AegisCore hardens every layer of your banking stack.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <FeatureCard
            icon={Cpu}
            title="Stage 1 — ML Threat Intelligence"
            subtitle="Adaptive detection at the edge and core"
            points={[
              'Streaming anomaly detection on transactions and auth flows',
              'Federated learning for privacy-preserving model updates',
              'Auto remediation playbooks with human-in-the-loop approval'
            ]}
          />
          <FeatureCard
            icon={Server}
            title="Stage 2 — Blockchain Integrity"
            subtitle="Cryptographic proofs for events and policies"
            points={[
              'Immutable, append-only audit trail with Merkle proofs',
              'Consensus-backed policy attestations across regions',
              'Selective disclosure for regulators and internal audit'
            ]}
          />
          <FeatureCard
            icon={Lock}
            title="Stage 3 — Open Encryption Firmware"
            subtitle="Auditable, FIPS-ready crypto modules"
            points={[
              'Hardware-accelerated AES-GCM, ChaCha20-Poly1305, and PQC-ready interfaces',
              'Transparent HSM/KMS integration with sealed-secrets rotation',
              'Open-source firmware, reproducible builds, formal verification roadmap'
            ]}
          />
        </div>

        <div id="architecture" className="mt-14 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-xl border border-neutral-800/70 bg-neutral-900/30 p-6">
            <h3 className="text-lg font-semibold">Reference architecture</h3>
            <p className="text-sm text-neutral-400 mt-1">How the stages orchestrate for layered defense in depth.</p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <div className="rounded-lg border border-neutral-800/70 p-4">
                <p className="text-xs text-emerald-300 mb-1">Edge</p>
                <p className="text-sm text-neutral-300">SDKs in mobile/web clients send signed telemetry to the ML gateway. Local models gate risky actions before server round-trips.</p>
              </div>
              <div className="rounded-lg border border-neutral-800/70 p-4">
                <p className="text-xs text-emerald-300 mb-1">Core</p>
                <p className="text-sm text-neutral-300">The decision engine correlates signals, writes integrity anchors to a permissioned ledger, and triggers policy workflows.</p>
              </div>
              <div className="rounded-lg border border-neutral-800/70 p-4">
                <p className="text-xs text-emerald-300 mb-1">Crypto</p>
                <p className="text-sm text-neutral-300">Encryption firmware enforces key lifecycles, handles envelope encryption, and provides attestations for every cryptographic action.</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-neutral-800/70 bg-neutral-900/30 p-6">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="h-5 w-5 text-emerald-400" />
              <h3 className="text-lg font-semibold">Regulatory alignment</h3>
            </div>
            <ul className="text-sm text-neutral-300 space-y-2 list-disc pl-5">
              <li>Aligned to PCI DSS 4.0, ISO 27001, SOC 2</li>
              <li>Data residency and regional consensus support</li>
              <li>Granular retention controls and right-to-be-forgotten hooks</li>
            </ul>
            <div className="mt-4 text-xs text-neutral-400">
              Evidence packs and mappings available in the documentation.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
