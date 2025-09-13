'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

type Uni = { name: string; location?: string; img?: string };

const UNIVERSITIES: Uni[] = [
  { name: 'University of Auckland', location: 'Auckland', img: '/institutions/universities/university-of-auckland.jpg' },
  { name: 'Auckland University of Technology (AUT)', location: 'Auckland', img: '/institutions/universities/aut.jpg' },
  { name: 'University of Otago', location: 'Dunedin', img: '/institutions/universities/university-of-otago.jpg' },
  { name: 'University of Canterbury', location: 'Christchurch', img: '/institutions/universities/university-of-canterbury.jpg' },
  { name: 'Lincoln University', location: 'Lincoln', img: '/institutions/universities/lincoln-university.jpg' },
  { name: 'Massey University', location: 'Multiple campuses', img: '/institutions/universities/massey-university.jpg' },
  { name: 'University of Waikato', location: 'Hamilton', img: '/institutions/universities/university-of-waikato.jpg' },
  { name: 'Victoria University of Wellington', location: 'Wellington', img: '/institutions/universities/victoria-university-of-wellington.jpg' },
];

function UniCard({ uni }: { uni: Uni }){
  return (
    <div className="group relative p-4 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/50 transition-colors">
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900">
          {uni.img ? (
            <Image src={uni.img} alt={uni.name} fill className="object-cover" />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-brand-600 to-brand-700 text-black font-bold">
              {uni.name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <div className="font-semibold text-gray-100 group-hover:text-white transition-colors">{uni.name}</div>
          {uni.location && (
            <div className="text-xs text-gray-400">{uni.location}</div>
          )}
        </div>
      </div>
      <div className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-10 blur-2xl bg-brand-500 transition-opacity" />
    </div>
  );
}

export function UniversitiesShowcase(){
  return (
    <section className="container mt-16">
      <div className="mb-4">
        <span className="inline-block text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-brand-600/20 text-brand-300 border border-brand-700/40">Universities</span>
        <h2 className="mt-3 text-2xl md:text-3xl font-extrabold">New Zealand Universities</h2>
        <p className="text-gray-300 mt-2 max-w-2xl">A quick glance at the eight government-funded universities across New Zealand.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {UNIVERSITIES.map((u)=> (
          <UniCard key={u.name} uni={u} />
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link href="/universities" className="btn btn-outline">
          See more universities
        </Link>
      </div>
    </section>
  );
}
