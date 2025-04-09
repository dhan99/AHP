import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-lighter w-full">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-24 mb-4 w-full">
            <Link href="/legal" className="text-sm text-black font-gibson font-light hover:underline">
              Legal
            </Link>
            <Link href="/privacy" className="text-sm text-black font-gibson font-light hover:underline">
              Privacy
            </Link>
            <Link href="/producer-compensation" className="text-sm text-black font-gibson font-light hover:underline">
              Producer Compensation Disclosure
            </Link>
            <Link href="/underwriting-companies" className="text-sm text-black font-gibson font-light hover:underline">
              Underwriting Companies
            </Link>
          </div>
          
          <div className="border-t border-black pt-4">
            <p className="text-xs font-gibson font-light text-black leading-relaxed">
              © 2025 Intact Insurance Group USA LLC
              <br /><br />
              Intact Insurance Specialty Solutions is the marketing brand for the insurance company subsidiaries of Intact Insurance Group USA LLC. Coverages are underwritten by Atlantic Specialty Insurance Company. This material is intended as a general description of certain types of insurance coverages and services. Coverages and availability vary by state; exclusions and deductibles may apply. Please refer to the actual policies or consult with your independent insurance advisor for descriptions of coverages, terms and conditions.
              <br /><br />
              *Intact Insurance is backed by the financial strength of Atlantic Specialty Insurance Company, a subsidiary of Intact Financial Corporation (TSX:IFC), rated A+ by A.M. Best.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 