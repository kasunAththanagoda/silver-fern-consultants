import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageTransition } from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Silver Fern Consultancy | Study in New Zealand from Sri Lanka',
  description: 'We help Sri Lankan students choose the right New Zealand course, apply to universities, and secure visas. Free consultation and personalized guidance.',
  openGraph: {
    title: 'Silver Fern Consultancy',
    description: 'Study in New Zealand from Sri Lanka with trusted guidance.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
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
