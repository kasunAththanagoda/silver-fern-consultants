'use client';
import React from 'react';
import Image from 'next/image';

type Institution = { name: string; location?: string; img?: string };

export function InstitutionsSection({ showImages = false }: { showImages?: boolean }) {
  const universities: Institution[] = [
    { name: 'University of Auckland', location: 'Auckland', img: '/institutions/universities/university-of-auckland.jpg' },
    { name: 'Auckland University of Technology (AUT)', location: 'Auckland', img: '/institutions/universities/aut.jpg' },
    { name: 'University of Otago', location: 'Dunedin', img: '/institutions/universities/university-of-otago.jpg' },
    { name: 'University of Canterbury', location: 'Christchurch', img: '/institutions/universities/university-of-canterbury.jpg' },
    { name: 'Lincoln University', location: 'Lincoln', img: '/institutions/universities/lincoln-university.jpg' },
    { name: 'Massey University', location: 'Multiple campuses (Palmerston North, plus others)', img: '/institutions/universities/massey-university.jpg' },
    { name: 'University of Waikato', location: 'Hamilton', img: '/institutions/universities/university-of-waikato.jpg' },
    { name: 'Victoria University of Wellington', location: 'Wellington', img: '/institutions/universities/victoria-university-of-wellington.jpg' },
  ];

  const tePukenga: Institution[] = [
    { name: 'Ara Institute of Canterbury' },
    { name: 'Eastern Institute of Technology (EIT)', location: 'Hawke’s Bay/Napier' },
    { name: 'Manukau Institute of Technology (MIT)', location: 'Auckland' },
    { name: 'Nelson Marlborough Institute of Technology (NMIT)' },
    { name: 'NorthTec', location: 'Whangārei' },
    { name: 'Otago Polytechnic' },
    { name: 'Southern Institute of Technology (SIT)', location: 'Invercargill' },
    { name: 'Toi Ohomai Institute of Technology', location: 'Bay of Plenty (Tauranga & Rotorua)' },
    { name: 'Waikato Institute of Technology (Wintec)', location: 'Hamilton' },
    { name: 'Wellington Institute of Technology (WelTec)', location: 'Wellington' },
    { name: 'Western Institute of Technology at Taranaki (WITT)', location: 'New Plymouth' },
    { name: 'Whitireia Community Polytechnic', location: 'Porirua' },
    { name: 'Plus others like Tai Poutini Polytechnic and Universal College of Learning (UCOL)' },
  ];

  const ptes: Institution[] = [
    { name: 'Auckland Institute of Studies' },
    { name: 'Media Design School', location: 'Auckland' },
    { name: 'Whitecliffe Colleges – Arts & Design, Fashion & Sustainability, Technology & Innovation' },
    { name: 'AcademyEx' },
    { name: 'Le Cordon Bleu New Zealand' },
    { name: 'Aspire2 International' },
    { name: 'New Zealand Tertiary College (NZTC)' },
    { name: 'Pacific International Hotel Management School (PIHMS)' },
    { name: 'Cornell Institute of Business & Technology' },
    { name: 'New Zealand School of Tourism' },
    { name: 'NZ School of Education (NZSE)', location: 'Auckland' },
    { name: 'Taylors College, Edenz Colleges, Kauri Academy, Newton College of Business & Technology' },
    { name: 'UP International College, Yoobee Colleges (creative tech)' },
  ];

  const wananga: Institution[] = [
    { name: 'Te Wānanga o Aotearoa' },
    { name: 'Te Wānanga o Raukawa' },
    { name: 'Te Whare Wānanga o Awanuiārangi' },
  ];

  function Thumb({ item }: { item: Institution }){
    const initial = item.name?.charAt(0) ?? '?';
    if (showImages && item.img) {
      return (
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900">
          <Image src={item.img} alt={item.name} fill className="object-cover" />
        </div>
      );
    }
    return (
      <div className="h-10 w-10 shrink-0 rounded-lg bg-gradient-to-br from-brand-600 to-brand-700 text-black flex items-center justify-center font-bold">
        {initial}
      </div>
    );
  }

  function ListCard({ title, description, items }: { title: string; description: string; items: Institution[] }) {
    return (
      <div className="relative group p-6 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/50 transition-colors">
        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 opacity-60 group-hover:opacity-100 transition-opacity" />
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-400 mt-1 text-sm">{description}</p>
        <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-gray-200 text-sm">
          {items.map((it, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <Thumb item={it} />
              <div>
                <div className="font-medium">{it.name}</div>
                {it.location ? (
                  <div className="text-gray-400 text-xs">{it.location}</div>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <section className="container mt-16">
      <div className="relative overflow-hidden rounded-2xl border border-neutral-800 p-6 md:p-8">
        <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-brand-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-brand-700/10 blur-3xl" />

        <span className="inline-block text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-brand-600/20 text-brand-300 border border-brand-700/40">Institutions</span>
        <h2 className="mt-3 text-2xl md:text-3xl font-extrabold">New Zealand Tertiary Institutions</h2>
        <p className="text-gray-300 mt-2 max-w-3xl">
          New Zealand offers a comprehensive tertiary ecosystem: eight government-funded universities, a network of applied learning providers under Te Pūkenga, a vibrant private provider sector, and three wānanga grounded in Māori knowledge systems.
        </p>

        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <ListCard
            title="Universities"
            description="All eight government-funded universities offer bachelor’s, master’s, and doctoral programs."
            items={universities}
          />
          <ListCard
            title="Institutes of Technology, Polytechnics, Te Pūkenga"
            description="Providers of vocational, technical and applied learning—many integrated under the national entity Te Pūkenga."
            items={tePukenga}
          />
          <ListCard
            title="Private Training Establishments (PTEs)"
            description="Specialised private institutions offering vocational, professional, creative, hospitality and language programs."
            items={ptes}
          />
          <ListCard
            title="Wānanga (Māori‑centred)"
            description="Government-recognised wānanga offering certificates through to doctorates within a Māori cultural context."
            items={wananga}
          />
        </div>
      </div>
    </section>
  );
}
