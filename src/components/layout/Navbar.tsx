import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-white border-b border-primary py-3 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <a href="https://intactspecialty.com" target="_blank" rel="noopener noreferrer" className="relative h-9 w-24">
              <Image 
                src="/images/logo-part1.svg" 
                alt="Intact Logo" 
                width={100}
                height={30}
                className="absolute left-0 top-0 h-full w-auto"
              />
            </a>
          </div>
          <span className="font-slate text-xl text-gray ml-2">Commercial Trucking Insurance</span>
        </div>
        
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={toggleDropdown}
            className="border-2 border-primary text-primary font-gibson font-semibold rounded px-4 py-2 flex items-center gap-2 hover:bg-primary hover:text-white transition-colors"
          >
            Login
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 12 12" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={`transform transition-transform ${isDropdownOpen ? 'rotate-90' : ''}`}
            >
              <path d="M6 1L11 6L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              <Link 
                href="/login/broker" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white"
                onClick={() => setIsDropdownOpen(false)}
              >
                Broker
              </Link>
              <Link 
                href="/login/motor-carrier" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white"
                onClick={() => setIsDropdownOpen(false)}
              >
                Motor Carrier
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 