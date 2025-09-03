import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { ServiceCards } from '@/components/ServiceCards';
import { CTA } from '@/components/CTA';
import { UniGrid } from '@/components/UniGrid';
import { TestimonialStrip } from '@/components/TestimonialStrip';

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="container mt-16">
        <h2 className="text-2xl md:text-3xl font-bold">What we do</h2>
        <p className="text-gray-600 mt-2">End-to-end guidance—from course selection to visa success.</p>
        <ServiceCards className="mt-6" />
      </section>
      <section className="container mt-16">
        <h2 className="text-2xl md:text-3xl font-bold">Top New Zealand Institutions</h2>
        <UniGrid className="mt-6" />
        <div className="mt-6">
          <Link className="btn btn-outline" href="/courses">Explore Courses & Careers</Link>
        </div>
      </section>
      <TestimonialStrip />
      <CTA />
    </>
  );
}
