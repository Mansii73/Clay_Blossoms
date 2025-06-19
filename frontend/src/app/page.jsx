'use client';
import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { Categories } from '@/components/Categories';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <Categories />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;