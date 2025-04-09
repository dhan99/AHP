import React from 'react';
import Image from 'next/image';

const WhySection: React.FC = () => {
  return (
    <section className="w-full bg-primary-dark px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left column with benefits */}
          <div className="flex items-center justify-center h-full">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <Image 
                    src="/images/specialty-expertise-icon.svg" 
                    alt="Specialty Expertise" 
                    width={12} 
                    height={12}
                  />
                </div>
                <span className="font-gibson font-light text-lg text-white">Specialty expertise</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <Image 
                    src="/images/dedicated-teams-icon.svg" 
                    alt="Dedicated Teams" 
                    width={12} 
                    height={12}
                  />
                </div>
                <span className="font-gibson font-light text-lg text-white">Dedicated local teams</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <Image 
                    src="/images/responsive-claims-icon.svg" 
                    alt="Responsive Claims" 
                    width={12} 
                    height={12}
                  />
                </div>
                <span className="font-gibson font-light text-lg text-white">Responsive claims support</span>
              </div>
            </div>
          </div>
          
          {/* Right column with image */}
          <div>
            <div style={{ height: '450px', width: '100%', position: 'relative' }}>
              <img 
                src="/images/company-logo.jpg" 
                alt="Intact Company Logo" 
                className="rounded-lg"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection; 