import React from 'react';
import Image from 'next/image';

const SelfServiceSection: React.FC = () => {
  return (
    <section className="relative w-full bg-primary-light text-white py-16 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="flex-1">
            <h3 className="font-gibson font-semibold text-lg uppercase mb-3">Self service</h3>
            <h2 className="font-gibson font-semibold text-3xl mb-6">Policies at your speed.</h2>
            <p className="font-gibson font-light text-base mb-8">
              Use our online platform to secure Occupational-Accident, Non-Trucking Liability, and Vehicle Physical Damage coverage for motor carriers with 50 units and under.
            </p>
          </div>
          
          <div className="flex-1">
            <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 border-b border-white border-opacity-50 pb-4">

              </div>
              <div className="flex items-center gap-4 border-b border-white border-opacity-50 pb-4">
                <Image 
                  src="/images/minimal-data-entry-icon.svg" 
                  alt="Minimal Data Entry" 
                  width={40} 
                  height={40}
                />
                <span className="font-gibson font-light text-xl">Minimal data entry</span>
              </div>
              
              <div className="flex items-center gap-4 border-b border-white border-opacity-50 pb-4">
                <Image 
                  src="/images/instant-issue-icon.svg" 
                  alt="Instant Issue" 
                  width={40} 
                  height={40}
                />
                <span className="font-gibson font-light text-xl">Instant issue</span>
              </div>
              
              <div className="flex items-center gap-4 border-b border-white border-opacity-50 pb-4">
                <Image 
                  src="/images/credit-card-icon.svg" 
                  alt="Credit Card Payment" 
                  width={40} 
                  height={40}
                />
                <span className="font-gibson font-light text-xl">Credit card payment support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfServiceSection; 