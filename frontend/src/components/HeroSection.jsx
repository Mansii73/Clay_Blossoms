"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from "next/link";

const slides = [
  {
    image: '/images/herosec.jpg',
    title: 'Brewing Rituals, One Sip at a Time',
    subtitle: 'Unique, Functional Drinkware created in small batches',
  },
  {
    image: '/images/teaset.jpg',
    title: 'Soulful Aromatherapy with Handcrafted Clay',
    subtitle: 'Slow-Crafted Ceramics made for Soulful Homes',
  },
  {
    image: '/images/set.png',
    title: 'Handmade pieces that speak from the heart',
    subtitle: 'Made in Pondicherry - Artisanal Pottery for Everyday Rituals',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-8">
            <h1 className="text-5xl lg:text-7xl font-serif mb-4 animate-fade-in-down">{slide.title}</h1>
            <p className="text-xl lg:text-2xl mb-8 animate-fade-in-up">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full text-black z-10"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full text-black z-10"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default HeroSection;
