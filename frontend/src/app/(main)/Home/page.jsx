'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLeaf, FaTruck, FaShieldAlt, FaShoppingCart } from 'react-icons/fa';
import { GiStoneWheel } from 'react-icons/gi';
import Carousel from '@/components/Carousel';
import FeaturedProducts from '@/components/FeaturedProducts';

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;

