'use client';
import Image from 'next/image';
import React from 'react';

export type Advisor = {
  name: string;
  occupation: string;
  licenseNumber: string;
  photoSrc: string; // path in /public
};

export function ImmigrationAdvisor({
  advisor = {
    name: 'KESHIYA DASON',
    occupation: 'LICENSED IMMIGRATION ADVISOR (Provisional)',
    licenseNumber: '202400713',
    photoSrc: '/advisor.png',
  },
}: {
  advisor?: Advisor;
}) {
  return (
    <section className="container mt-16">
      <div className="relative overflow-hidden rounded-2xl border border-neutral-800 p-6 md:p-8">
        {/* Soft background accents */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-brand-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-brand-700/10 blur-3xl" />

        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6">
          {/* Photo */}
          <div className="relative w-full md:w-56 h-56 md:h-auto md:min-h-[220px] overflow-hidden rounded-2xl border border-neutral-800">
            <Image
              src={advisor.photoSrc}
              alt={`${advisor.name} - ${advisor.occupation}`}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Details */}
          <div className="flex-1">
            <span className="inline-block text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-brand-600/20 text-brand-300 border border-brand-700/40">Our Immigration Adviser</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-extrabold">
              {advisor.name}
            </h2>
            <p className="text-gray-300 mt-1">{advisor.occupation}</p>
            <div className="mt-3 inline-flex items-center gap-2 text-sm text-gray-200 bg-neutral-900/40 border border-neutral-800 rounded-xl px-3 py-2">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-500" />
              License: <span className="font-semibold">{advisor.licenseNumber}</span>
            </div>
            <p className="mt-4 text-gray-400 text-sm max-w-2xl">
              Get ethical guidance on eligibility, pathways, documentation, and timelines from our licensed professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
