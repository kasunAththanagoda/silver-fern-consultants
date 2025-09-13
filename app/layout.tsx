import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';
import Script from 'next/script';
import { CoverImage } from '@/components/CoverImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    default: 'Silver Fern Consultancy | Study in New Zealand from Sri Lanka',
    template: '%s | Silver Fern Consultancy',
  },
  description: 'We help Sri Lankan students choose the right New Zealand course, apply to universities, and secure visas. Free consultation and personalized guidance.',
  keywords: [
    'study in New Zealand',
    'New Zealand education',
    'Sri Lankan students',
    'overseas education consultancy',
    'visa guidance NZ',
    'university application NZ',
    'scholarships New Zealand',
    'Silver Fern Consultancy',
    'Colombo education consultants',
    'New Zealand student visa'
  ],
  alternates: {
    canonical: 'https://www.silverfernconsultancy.lk',
  },
  openGraph: {
    title: 'Silver Fern Consultancy | Study in New Zealand from Sri Lanka',
    description: 'We help Sri Lankan students choose the right New Zealand course, apply to universities, and secure visas. Free consultation and personalized guidance.',
    url: 'https://www.silverfernconsultancy.lk',
    siteName: 'Silver Fern Consultancy',
    images: [
      {
        url: 'https://www.silverfernconsultancy.lk/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Silver Fern Consultancy - Study in New Zealand',
      },
    ],
    locale: 'en_LK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@silverfernconsultancy',
    creator: '@silverfernconsultancy',
    title: 'Silver Fern Consultancy | Study in New Zealand from Sri Lanka',
    description: 'We help Sri Lankan students choose the right New Zealand course, apply to universities, and secure visas. Free consultation and personalized guidance.',
    images: ['https://www.silverfernconsultancy.lk/twitter-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Silver Fern Consultancy',
    url: 'https://www.silverfernconsultancy.lk',
    logo: 'https://www.silverfernconsultancy.lk/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+94-XX-XXX-XXXX',
      contactType: 'customer service',
      email: 'info@silverfern.lk',
    },
    sameAs: [
      'https://www.facebook.com/silverfernconsultancy',
      'https://www.linkedin.com/company/silverfernconsultancy',
      // Add other social media profiles here
    ],
  };

  return (
    <html lang="en">
      <head>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <CoverImage heightClass="h-[70vh] md:h-[80vh] lg:h-screen">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
            Study in New Zealand with trusted guidance
          </h1>
          <p className="text-gray-200/90 mt-2 max-w-2xl">
            Professional, transparent guidance from Sri Lanka to New Zealand—course selection, university placement, scholarships, visa support and pre and post departure support.
          </p>
          <div className="mt-4">
            <Link href="/contact" className="btn btn-outline">
              Get FREE Consultation
            </Link>
          </div>
        </CoverImage>
        <main>
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
