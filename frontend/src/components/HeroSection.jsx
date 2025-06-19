import Link from 'next/link';
import React from 'react';
import { NavLink } from 'react-router-dom';


export const HeroSection = () => {
  return (
    <div>
      <Link href={'/'}>
        <img src='images/herosec.jpg' alt="my img" />
      </Link>  
    </div>
  );
};
