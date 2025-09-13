'use client';
import React from 'react';
import Image from 'next/image';

type Institution = { 
  name: string; 
  location?: string; 
  img?: string;
  description?: string;
  website?: string;
};

export function InstitutionsSection({ showImages = false }: { showImages?: boolean }) {
  // Using placeholder images from Unsplash with consistent dimensions
  const getUniversityImage = (query: string) => {
    return `https://source.unsplash.com/random/400x300/?${encodeURIComponent(query + ' university new zealand')}`;
  };

  const universities: Institution[] = [
    { 
      name: 'University of Auckland', 
      location: 'Auckland', 
      img: getUniversityImage('University of Auckland'),
      description: 'New Zealand\'s largest university with a strong focus on research and innovation.',
      website: 'https://www.auckland.ac.nz/'
    },
    { 
      name: 'Auckland University of Technology (AUT)', 
      location: 'Auckland', 
      img: getUniversityImage('AUT New Zealand'),
      description: 'Contemporary university with a focus on work-ready graduates and industry connections.',
      website: 'https://www.aut.ac.nz/'
    },
    { 
      name: 'University of Otago', 
      location: 'Dunedin', 
      img: getUniversityImage('University of Otago'),
      description: 'New Zealand\'s first university, known for its health sciences and research.',
      website: 'https://www.otago.ac.nz/'
    },
    { 
      name: 'University of Canterbury', 
      location: 'Christchurch', 
      img: getUniversityImage('University of Canterbury'),
      description: 'Comprehensive university with strong engineering and science programs.',
      website: 'https://www.canterbury.ac.nz/'
    },
    { 
      name: 'Lincoln University', 
      location: 'Lincoln', 
      img: getUniversityImage('Lincoln University New Zealand'),
      description: 'Specialist land-based university focusing on agriculture, environment, and business.',
      website: 'https://www.lincoln.ac.nz/'
    },
    { 
      name: 'Massey University', 
      location: 'Multiple campuses', 
      img: getUniversityImage('Massey University New Zealand'),
      description: 'Known for distance education and strong programs in business, health, and creative arts.',
      website: 'https://www.massey.ac.nz/'
    },
    { 
      name: 'University of Waikato', 
      location: 'Hamilton', 
      img: getUniversityImage('University of Waikato'),
      description: 'Innovative university with strong Māori and Pacific studies programs.',
      website: 'https://www.waikato.ac.nz/'
    },
    { 
      name: 'Victoria University of Wellington', 
      location: 'Wellington', 
      img: getUniversityImage('Victoria University Wellington'),
      description: 'Renowned for law, humanities, and research excellence in New Zealand\'s capital city.',
      website: 'https://www.wgtn.ac.nz/'
    },
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

  function UniversityCard({ university }: { university: Institution }) {
    return (
      <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/10">
        <div className="h-48 relative overflow-hidden">
          {university.img ? (
            <Image 
              src={university.img} 
              alt={university.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
              <span className="text-4xl font-bold text-neutral-700">{university.name.charAt(0)}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            {university.website && (
              <a 
                href={university.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium text-white bg-brand-600 hover:bg-brand-500 px-3 py-1.5 rounded-lg transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Visit Website
              </a>
            )}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1">{university.name}</h3>
          {university.location && (
            <div className="flex items-center text-sm text-gray-400 mb-2">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {university.location}
            </div>
          )}
          {university.description && (
            <p className="text-sm text-gray-300 line-clamp-2">{university.description}</p>
          )}
        </div>
      </div>
    );
  }

  function UniversityGrid({ title, description, universities }: { title: string; description: string; universities: Institution[] }) {
    return (
      <div className="mb-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-400">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {universities.map((university, idx) => (
            <UniversityCard key={idx} university={university} />
          ))}
        </div>
      </div>
    );
  }

  function OtherInstitutions({ title, description, items }: { title: string; description: string; items: Institution[] }) {
    return (
      <div className="relative group p-6 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/50 transition-colors">
        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 opacity-60 group-hover:opacity-100 transition-opacity" />
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-400 mt-1 text-sm">{description}</p>
        <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-gray-200 text-sm">
          {items.map((it, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <div className="h-10 w-10 shrink-0 rounded-lg bg-gradient-to-br from-neutral-700 to-neutral-800 text-white flex items-center justify-center font-bold">
                {it.name.charAt(0)}
              </div>
              <div>
                <div className="font-medium">{it.name}</div>
                {it.location && (
                  <div className="text-gray-400 text-xs">{it.location}</div>
                )}
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

        <OtherInstitutions
          title="Te Pūkenga (16+)"
          description="New Zealand's network of institutes of technology, polytechnics and industry training organisations. They offer vocational education and training, including certificates, diplomas and some degrees."
          items={tePukenga}
        />

        <OtherInstitutions
          title="Private Training Establishments (PTEs) (400+)"
          description="Private institutions offering specialized vocational and professional training, including certificates, diplomas, and some degrees in specific fields."
          items={ptes}
        />

        <OtherInstitutions
          title="Wānanga (3)"
          description="Māori teaching and research institutions offering programs in Māori tradition, custom, and contemporary Māori knowledge."
          items={wananga}
        />
      </div>
    </section>
  );
}
