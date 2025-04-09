import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          {/* Truck image positioned on the right side */}
          <div className="absolute right-0 top-0 h-full w-2/3 md:w-1/2">
            <Image
              src="/images/truck-hero-image.jpg"
              alt="Trucking Hero Image"
              fill
              className="object-cover object-center scale-125"
              priority
            />
          </div>
          
          {/* Gradient overlay matching Figma design exactly */}
          <div className="absolute left-0 top-0 h-full w-1/2 bg-white"></div>
          <div className="absolute  left-1/2 top-0 h-full w-1/6 bg-gradient-to-r from-white to-transparent"></div>
        </div>
      </div>
      
      {/* Content container - positioned on the left side */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-md md:max-w-lg pr-4 md:pr-0">
          <h3 className="font-gibson font-semibold text-base text-gray uppercase tracking-wider mb-3">GET STARTED</h3>
          <h1 className="font-gibson font-light text-3xl md:text-4xl text-gray mb-6">Trucking Insurance</h1>
          <p className="font-gibson font-light text-sm md:text-base text-gray mb-8">
            Intact Insurance A&H producers can secure an occupational accident, non-trucking liability or vehicle physical liability policy online with minimal data entry and accelerated processing times, backed by an <span className="font-semibold">A+ rating</span>*.
          </p>
          <a 
            href="https://intactspecialty.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-secondary text-white font-gibson font-semibold px-6 py-4 rounded hover:bg-opacity-90 transition-colors"
          >
            LOGIN
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 