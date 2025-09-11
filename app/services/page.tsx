import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Silver Fern Consultancy',
  description: 'Explore the comprehensive services offered by Silver Fern Consultancy for studying in New Zealand. From free counselling to visa guidance and career roadmaps.',
};

export default function ServicesPage(){
  return (
    <section className="container py-12">
      <h1 className="text-3xl md:text-4xl font-bold">Our Services</h1>
      <p className="text-gray-300 mt-2">Transparent, ethical and student-first guidance.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {[
          {title:'Free Counselling',desc:'Profile evaluation, budget planning, city and university shortlisting.'},
          {title:'Application Support',desc:'SOP review, document checklist, timelines and submissions.'},
          {title:'Scholarships & Funding',desc:'Identify scholarships, fee waivers and part-time work options.'},
          {title:'Visa Guidance',desc:'GTE/financial guidance, visa file prep, interview practice.'},
          {title:'Accommodation & Arrival',desc:'On/near-campus housing, airport pickup pointers, settling-in tips.'},
          {title:'Career Roadmap',desc:'Internships, graduate roles, and post-study work pathways.'}
        ].map((s,i)=> (
          <div key={i} className="card p-6">
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="text-gray-400 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
