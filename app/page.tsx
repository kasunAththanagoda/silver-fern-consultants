import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { ServiceCards } from '@/components/ServiceCards';
import { CTA } from '@/components/CTA';
import { UniGrid } from '@/components/UniGrid';
// import { TestimonialStrip } from '@/components/TestimonialStrip';
import { InstitutionsSection } from '@/components/InstitutionsSection';
import { ImmigrationAdvisor } from '@/components/ImmigrationAdvisor';

export default function HomePage() {
  return (
    <>
      {/* <Hero /> */}
      <section className="container mt-16">
        <div className="relative overflow-hidden rounded-2xl border border-neutral-800 p-6 md:p-8">
          {/* Soft background accents */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-brand-700/10 blur-3xl" />

          <span className="inline-block text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-brand-600/20 text-brand-300 border border-brand-700/40">Our Expertise</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-brand-400 via-brand-500 to-brand-700 bg-clip-text text-transparent">
            What we do
          </h2>
          <p className="text-gray-300 mt-2 max-w-2xl">
            End-to-end guidance—from course selection and university applications to scholarships, visas, and pre & postdeparture support.
          </p>

          <ServiceCards className="mt-8" />
        </div>
      </section>
      {/* <section className="container mt-16">
        <h2 className="text-2xl md:text-3xl font-bold">Top New Zealand Institutions</h2>
        <UniGrid className="mt-6" />
        <div className="mt-6">
          <Link className="btn btn-outline" href="/courses">Explore Courses & Careers</Link>
        </div>
      </section> */}
      <InstitutionsSection />
      <ImmigrationAdvisor />
      {/* <TestimonialStrip /> */}
      <CTA />
    </>
  );
}
