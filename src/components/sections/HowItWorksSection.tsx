import React from 'react';
import Image from 'next/image';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-gibson font-semibold text-2xl text-gray mb-12 text-center">How it works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Image
                src="/images/pad-icon.svg"
                alt="Qualify & Quote"
                width={50}
                height={50}
              />
              <Image
                src="/images/person-icon.svg"
                alt="Person Icon"
                width={30}
                height={30}
                className="ml-2"
              />
            </div>
            <h3 className="font-gibson text-xl text-gray text-center mb-4">Qualify & Quote</h3>
            <hr className="w-16 border-t-3 border-[#D8D8D8] mb-4" />
            <p className="font-gibson text-lg text-gray text-center">
              Enter business information to get a quote online
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Image
                src="/images/computer-icon.svg"
                alt="Share & Apply"
                width={50}
                height={50}
              />
              <Image
                src="/images/multi-devices-icon.svg"
                alt="Multiple Devices"
                width={50}
                height={50}
                className="ml-2"
              />
            </div>
            <h3 className="font-gibson text-xl text-gray text-center mb-4">Share & Apply</h3>
            <hr className="w-16 border-t-3 border-[#D8D8D8] mb-4" />
            <p className="font-gibson text-lg text-gray text-center">
              Seamlessly pass documents between agency and motor carrier
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Image
                src="/images/other-endorsements-icon.svg"
                alt="Issue & Enroll"
                width={50}
                height={50}
              />
              <div className="bg-primary rounded-xl w-8 h-8 flex items-center justify-center ml-2">
                <Image
                  src="/images/checkmark-icon.svg"
                  alt="Checkmark"
                  width={16}
                  height={16}
                />
              </div>
            </div>
            <h3 className="font-gibson text-xl text-gray text-center mb-4">Issue & Enroll</h3>
            <hr className="w-16 border-t-3 border-[#D8D8D8] mb-4" />
            <p className="font-gibson text-lg text-gray text-center">
              Motor carriers sign and send invites to enroll
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 