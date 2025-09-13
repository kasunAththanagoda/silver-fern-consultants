import React from 'react';
import Image from 'next/image';

// Site-wide cover image banner with split layout: text on the left, image on the right.
// Place your image at /public/cover.jpg (or pass a custom src prop).
export function CoverImage({
  src = '/cover.jpg',
  heightClass = 'h-56 md:h-72 lg:h-80',
  children,
}: {
  src?: string;
  heightClass?: string;
  children?: React.ReactNode;
}) {
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
