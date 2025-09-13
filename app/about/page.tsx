import Image from 'next/image';
import Link from 'next/link';
import { FaGraduationCap, FaHandsHelping, FaGlobe, FaAward } from 'react-icons/fa';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Silver Fern Consultancy',
  description: 'Learn about Silver Fern Consultancy, your trusted education partner in Sri Lanka for studying in New Zealand. Ethical, transparent, and personalized guidance.',
};

const values = [
  {
    icon: <FaGraduationCap className="w-8 h-8 text-brand-500" />,
    title: 'Expert Guidance',
    description: 'Our team of experienced education consultants provides expert advice tailored to your academic goals.'
  },
  {
    icon: <FaHandsHelping className="w-8 h-8 text-brand-500" />,
    title: 'Personalized Support',
    description: 'We understand every student is unique and provide customized solutions for your study abroad journey.'
  },
  {
    icon: <FaGlobe className="w-8 h-8 text-brand-500" />,
    title: 'Global Network',
    description: 'Strong partnerships with top New Zealand institutions ensure you get the best opportunities.'
  },
  {
    icon: <FaAward className="w-8 h-8 text-brand-500" />,
    title: 'Proven Track Record',
    description: 'Hundreds of successful student placements with high visa approval rates.'
  }
];


export default function AboutPage() {
  return (
    <div className="bg-neutral-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-brand-900 to-neutral-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Trusted Partner in New Zealand Education</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Guiding Sri Lankan students to academic success in New Zealand's world-class education system since 2010.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image
                  src="/certificate.jpg"
                  alt="our story"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6">
                At Silver Fern Consultancy ,Our team of dedicated professionals combines local expertise with in-depth knowledge of the New Zealand education system.
              </p>
              <p className="text-gray-300 mb-8">
                We take pride in our ethical approach, ensuring that every student receives honest advice and support throughout their study abroad journey. Our success is measured by the achievements of our students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-neutral-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-neutral-900 p-6 rounded-lg hover:bg-neutral-800 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* CTA Section */}
      <section className="py-16 bg-brand-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let us help you navigate your path to studying in New Zealand. Book a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-brand-900 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Book a Consultation
            </Link>
            <Link 
              href="/services" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
