import type { Metadata } from 'next';
import { InstitutionsSection } from '@/components/InstitutionsSection';

export const metadata: Metadata = {
  title: 'Universities & Institutions in New Zealand',
  description:
    'Explore New Zealand\'s eight government-funded universities, Te Pūkenga (institutes of technology and polytechnics), Private Training Establishments, and Wānanga with key details.',
};

export default function UniversitiesPage() {
  return (
    <>
      <section className="container py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold">Universities & Institutions in New Zealand</h1>
        <p className="text-gray-300 mt-3 max-w-3xl">
          New Zealand\'s tertiary landscape includes research-intensive universities, applied and vocational providers under Te Pūkenga,
          a vibrant private sector, and three government-recognised wānanga. Below is a curated overview to help you map your options.
        </p>
      </section>

      <InstitutionsSection showImages />
    </>
  );
}
