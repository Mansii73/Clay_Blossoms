'use client';
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import Categories from '@/components/Categories';
import Testimonials from '@/components/Testimonials';
// import BrowsePage from '@/components/products/BrowsePage'; // Uncomment if you want to use it

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      {/* <BrowsePage /> */}
      <Categories />
      <Testimonials />
    </div>
  );
};

export default LandingPage;