'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Site-wide cover image banner with image rotation support
// Modes:
// - background (default): full-width image with text overlay
// - split: text left, image right
// Images will automatically rotate every 5 seconds

type CoverImageProps = {
  images?: string[];
  heightClass?: string;
  layout?: 'background' | 'split';
  children?: React.ReactNode;
  rotationInterval?: number;
};

const defaultImages = [
  '/cover.jpg',
  '/graduation2.jpg',
  '/cover2.jpg',
  '/cover3.jpeg',
  '/cover4.jpg',
  '/cover5.jpg',
  '/cover6.jpeg',
];

export function CoverImage({
  images = defaultImages,
  heightClass = 'h-56 md:h-72 lg:h-80',
  layout = 'background',
  children,
  rotationInterval = 8000,
}: CoverImageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [images.length, rotationInterval]);

  const currentImage = images[currentImageIndex];
  if (layout === 'split') {
    return (
      <section className={`relative w-full ${heightClass} select-none`}>
        <div className="container h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-center">
            {/* Left: title and details */}
            <div className="order-2 md:order-1 flex items-center">
              <div className="py-6">
                {children}
              </div>
            </div>

            {/* Right: image */}
            <div className="order-1 md:order-2 relative h-full rounded-xl overflow-hidden">
              {images.map((image, index) => (
                <div 
                  key={image}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={image}
                    alt="Cover"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // background mode (default)
  return (
    <section className={`relative w-full ${heightClass} select-none`}>
      {/* Background image */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div 
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt="Cover"
              fill
              priority
              className="object-cover object-top"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Overlay content */}
      <div className="relative h-full">
        <div className="container h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
