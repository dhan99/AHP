import React, { useState } from 'react';
import { UserRole } from '@/types';
import { useAppStore } from '@/store/useAppStore';
import Image from 'next/image';

const UserTypeSection: React.FC = () => {
  const { setUserRole, userRole } = useAppStore();
  
  const handleRoleSelection = (role: UserRole) => {
    setUserRole(role);
  };
  
  return (
    <section className="w-full bg-blue-light py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-gibson font-semibold text-gray text-center mb-12">[Headline]</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brokers Tab */}
          <div 
            className={`bg-white p-6 rounded-lg shadow-tab flex flex-col cursor-pointer
              ${userRole === 'broker' ? 'border-l-4 border-primary' : ''}
            `}
            onClick={() => handleRoleSelection('broker')}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 mr-3 flex-shrink-0">
                <Image 
                  src="/images/person-icon.svg"
                  alt="Brokers"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl font-gibson font-semibold text-gray">Brokers</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="border-b border-gray-200 pb-2">
                <p className="text-sm font-ibm text-gray">Login with your producer credentials</p>
              </li>
              <li className="border-b border-gray-200 pb-2">
                <p className="text-sm font-ibm text-gray">[Placeholder text to come]</p>
              </li>
              <li className="border-b border-gray-200 pb-2">
                <p className="text-sm font-ibm text-gray">[Placeholder text to come]</p>
              </li>
            </ul>
          </div>
          
          {/* Motor Carriers Tab */}
          <div 
            className={`bg-white p-6 rounded-lg shadow-tab flex flex-col cursor-pointer
              ${userRole === 'motorCarrier' ? 'border-l-4 border-primary' : ''}
            `}
            onClick={() => handleRoleSelection('motorCarrier')}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 mr-3 flex-shrink-0">
                <Image 
                  src="/images/computer-icon.svg"
                  alt="Motor Carriers"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl font-gibson font-semibold text-gray">Motor Carriers</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="border-b border-gray-200 pb-2">
                <p className="text-sm font-ibm text-gray">[Placeholder text to come]</p>
              </li>
              <li className="border-b border-gray-200 pb-2">
                <p className="text-sm font-ibm text-gray">[Placeholder text to come]</p>
              </li>
              <li className="border-b border-gray-200 pb-2">
                <p className="text-sm font-ibm text-gray">[Placeholder text to come]</p>
              </li>
            </ul>
          </div>
          
          {/* Drivers Tab */}
          <div 
            className={`bg-white p-6 rounded-lg shadow-tab flex flex-col cursor-pointer
              ${userRole === 'driver' ? 'border-l-4 border-primary' : ''}
            `}
            onClick={() => handleRoleSelection('driver')}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 mr-3 flex-shrink-0">
                <Image 
                  src="/images/credit-card-icon.svg"
                  alt="Drivers"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-xl font-gibson font-semibold text-gray">Drivers</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="border-b border-gray-200 pb-2">
                <p className="text-sm font-ibm text-gray">[Placeholder text to come]</p>
              </li>
              <li className="border-b border-gray-200 pb-2">
                <p className="text-sm font-ibm text-gray">[Placeholder text to come]</p>
              </li>
              <li className="pb-2">
                <p className="text-base font-ibm font-semibold text-gray text-center mt-4">
                  Encourage your motor carrier to sponsor a plan today!
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserTypeSection; 