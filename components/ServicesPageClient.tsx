'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ServiceCards } from '@/components/ServiceCards';

export function ServicesPageClient() {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* Hero header */}
      <section className="container pt-12">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative overflow-hidden rounded-2xl border border-neutral-800 p-6 md:p-10"
        >
          {/* Soft accents */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-brand-700/10 blur-3xl" />

          <span className="inline-block text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-brand-600/20 text-brand-300 border border-brand-700/40">What we offer</span>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-brand-400 via-brand-500 to-brand-700 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-gray-300 mt-2 max-w-2xl">
            Transparent, ethical and student-first guidance—from course selection and applications to scholarships, visas and pre‑departure support.
          </p>

          {/* Feature badges */}
          <div className="mt-5 flex flex-wrap gap-2 text-xs text-gray-200">
            <span className="inline-flex items-center gap-1 rounded-lg border border-neutral-800 bg-neutral-900/50 px-3 py-1">⚡ Quick response</span>
            <span className="inline-flex items-center gap-1 rounded-lg border border-neutral-800 bg-neutral-900/50 px-3 py-1">🤝 Personalized plan</span>
            <span className="inline-flex items-center gap-1 rounded-lg border border-neutral-800 bg-neutral-900/50 px-3 py-1">🎓 Scholarship guidance</span>
            <span className="inline-flex items-center gap-1 rounded-lg border border-neutral-800 bg-neutral-900/50 px-3 py-1">🛂 Visa support</span>
          </div>
        </motion.div>
      </section>

      {/* Services grid (reusing component) */}
      <section className="container mt-10">
        <ServiceCards />
      </section>

      {/* Value strip */}
      <section className="container mt-12">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: '⏱️', title: '48h Application Review', desc: 'Fast, thorough feedback on documents and SOPs.' },
            { icon: '🧭', title: 'End‑to‑End Guidance', desc: 'From shortlisting to arrival and settling in.' },
            { icon: '⭐', title: 'Student‑First Approach', desc: 'Transparent advice tailored to your goals.' },
          ].map((x, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl border border-neutral-800 p-6 bg-neutral-950">
              <div className="text-2xl">{x.icon}</div>
              <div className="mt-2 font-semibold">{x.title}</div>
              <div className="text-sm text-gray-400">{x.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="container my-12">
        <div className="relative overflow-hidden rounded-2xl border border-neutral-800 p-6 md:p-8 text-center">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-700/20 via-brand-600/10 to-brand-500/20" />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Ready to get started?</h2>
            <p className="mt-2 text-gray-300 max-w-2xl mx-auto">Book your free consultation with our Colombo-based experts and get a personalized plan for your New Zealand journey.</p>
            <div className="mt-5">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-3 font-bold text-black shadow-xl hover:from-brand-500 hover:to-brand-600 transition-colors">
                📞 Book FREE Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
