import React from 'react';
import Image from 'next/image';
import { InsuranceProduct } from '@/types';

const insuranceProducts: InsuranceProduct[] = [
  {
    id: 'occupational-accident',
    title: 'Occupational Accident',
    description: 'Essential coverage for independent contractors who are not eligible for workers\' compensation. Protects drivers by covering medical expenses, disability benefits, and accidental death in the event if a work related injury.',
    icon: '/images/medical-icon.svg'
  },
  {
    id: 'non-trucking-liability',
    title: 'Non-Trucking Liability',
    description: 'Covers drivers for drivers when they are using the truck for non-business purposes, such as personal errands or commuting. This protection fills the gap when a driver is off dispatch, shielding them from potential liability claims that could otherwise be costly.',
    icon: '/images/off-road-accident-icon.svg'
  },
  {
    id: 'vehicle-physical-damage',
    title: 'Vehicle Physical Damage',
    description: 'Pays for repairs or replacement of the truck in case of damage from accident, fire, theft, or natural disasters. This coverage helps protect a motor carrier\'s investment in equipment, ensuring the vehicle stays on the road with minimal financial setbacks.',
    icon: '/images/roadside-assistance-icon.svg'
  }
];

const ProductsSection: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#F5F8FA] to-[#D3E3E5] pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="font-gibson font-light text-2xl text-gray text-center mb-8">
          Accident & Health <span className="font-semibold">products available online</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {insuranceProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-md shadow-card p-6 flex flex-col items-center h-full"
            >
              <div className="mb-4 flex items-center justify-center w-12 h-12">
                <Image 
                  src={product.icon}
                  alt={product.title}
                  width={50}
                  height={50}
                  className="w-auto h-auto"
                />
              </div>
              <h3 className="font-gibson text-lg font-normal text-gray text-center mb-4">
                {product.title}
              </h3>
              <div className="w-full flex-grow">
                <p className="font-ibm text-sm text-gray text-center">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <p className="font-gibson font-light text-base text-gray text-center mb-2 italic">
          Underwritten by [Underwriting Company]. [Product] not available to motor carriers located in [state], [state], and [state]
        </p>
        <p className="font-gibson font-light text-base text-gray text-center italic">
          Learn more about Accident & Health and their full suite of products.
        </p>
      </div>
    </section>
  );
};

export default ProductsSection; 