import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import Script from 'next/script';
import { CoverImage } from '@/components/CoverImage';
import Link from 'next/link';
import Image from 'next/image';

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
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Study in {" "}
            <span
              className="bg-gradient-to-r from-emerald-300 via-brand-400 to-sky-400 bg-clip-text text-transparent animate-aurora"
              style={{ backgroundSize: '200% 200%' }}
            >
              New Zealand
            </span>{" "}
            with trusted guidance
          </h1>
          <div className="mt-3 flex items-center justify-center gap-3">
            <Image src="/logo.png" alt="Silver Fern Consultancy logo" width={44} height={44} className="rounded" />
            <span className="text-white font-bold text-lg md:text-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">Silver Fern Consultancy</span>
          </div>
          <p
            className="mt-2 md:mt-3 text-2xl md:text-xl font-extrabold uppercase tracking-widest bg-gradient-to-r from-emerald-300 via-brand-400 to-sky-400 bg-clip-text text-transparent animate-aurora"
            style={{ backgroundSize: '200% 200%' }}
          >
            Pathway to Aurora
          </p>
          <p className="text-gray-100 mt-3 max-w-2xl text-base md:text-lg lg:text-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
            Professional, transparent guidance from Sri Lanka to New Zealand—course selection, university placement, scholarships, visa support and pre and post departure support.
          </p>
          <div className="mt-4">
            <Link href="/contact" className="btn btn-outline">
              Start your journey with us
            </Link>
          </div>
        </CoverImage>
        <main>
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        {/* Floating WhatsApp button */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
