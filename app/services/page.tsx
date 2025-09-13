import type { Metadata } from 'next';
import { ServicesPageClient } from '@/components/ServicesPageClient';

export const metadata: Metadata = {
  title: 'Our Services | Silver Fern Consultancy',
  description: 'Explore the comprehensive services offered by Silver Fern Consultancy for studying in New Zealand. From free counselling to visa guidance and career roadmaps.',
};

export default function ServicesPage(){
  return <ServicesPageClient />;
}
