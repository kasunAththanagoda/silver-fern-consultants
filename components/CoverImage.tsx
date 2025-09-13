import React from 'react';
import Image from 'next/image';

// Site-wide cover image banner.
// Modes:
// - background (default): full-width image with text overlay
// - split: text left, image right
// Place your image at /public/cover.jpg (or pass a custom src prop).
export function CoverImage({
  src = '/cover.jpg',
  heightClass = 'h-56 md:h-72 lg:h-80',
  layout = 'background',
  children,
}: {
  src?: string;
  heightClass?: string;
  layout?: 'background' | 'split';
  children?: React.ReactNode;
}) {
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
              <Image
                src={src}
                alt="Cover"
                fill
                priority
                className="object-cover"
              />
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
        <Image src={src} alt="Cover" fill priority className="object-cover object-top" />
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
