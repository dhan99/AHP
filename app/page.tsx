'use client';

import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import ProductsSection from '@/components/sections/ProductsSection';
import WhySection from '@/components/sections/WhySection';
import SelfServiceSection from '@/components/sections/SelfServiceSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ManageFleetSection from '@/components/sections/ManageFleetSection';
import UserTypeSection from '@/components/sections/UserTypeSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col w-full">
        <HeroSection />
        <SelfServiceSection />
        <HowItWorksSection />
        <ManageFleetSection />
        <ProductsSection />
        <UserTypeSection />
        <WhySection />
        <ContactSection />
      </div>
    </Layout>
  );
} 