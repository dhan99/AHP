import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white border-b border-primary py-3 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <div className="relative h-9 w-24">
              <Image 
                src="/images/logo-part1.svg" 
                alt="Intact Logo" 
                width={100}
                height={30}
                className="absolute left-0 top-0 h-full w-auto"
              />
            </div>
          </div>
          <span className="font-slate text-xl text-gray ml-2">Commercial Trucking Insurance</span>
        </div>
        
        <Link href="/login" className="border-2 border-primary text-primary font-gibson font-semibold rounded px-4 py-2 flex items-center gap-2 hover:bg-primary hover:text-white transition-colors">
          Login
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 1L11 6L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 