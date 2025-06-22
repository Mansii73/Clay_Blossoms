'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLeaf, FaTruck, FaShieldAlt, FaShoppingCart } from 'react-icons/fa';
import { GiStoneWheel } from 'react-icons/gi';

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "Handcrafted Ceramic Pot",
      price: "₹1,499",
      image: "/images/pot.png",
      category: "Pots"
    },
    {
      id: 2,
      name: "Artistic Tea Set",
      price: "₹2,999",
      image: "/images/teaset.jpg",
      category: "Tea Sets"
    },
    {
      id: 3,
      name: "Patterned Mug",
      price: "₹899",
      image: "/images/Demoiselle patterened mugs -Waves,matte blue.png",
      category: "Mugs"
    },
    {
      id: 4,
      name: "Decorative Jug",
      price: "₹699",
      image: "/images/jug.png",
      category: "Jugs"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-800 leading-tight">
                Handcrafted{' '}
                <span className="text-amber-600">Pottery</span>{' '}
                for Your Home
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Discover unique, handcrafted pottery pieces that bring warmth and character to your space. 
                Each piece tells a story of tradition and craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/products" 
                  className="px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-semibold text-center"
                >
                  Shop Now
                </Link>
                <Link 
                  href="/about" 
                  className="px-8 py-4 border-2 border-amber-600 text-amber-700 rounded-lg hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-semibold text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/herosec.jpg"
                  alt="Handcrafted Pottery Collection"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
              Why Choose ClayBlossoms?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We bring you the finest handcrafted pottery with quality, sustainability, and beauty in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl hover:bg-amber-50 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                <GiStoneWheel className="text-amber-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Handcrafted</h3>
              <p className="text-gray-600 text-sm">Each piece is uniquely crafted by skilled artisans</p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:bg-amber-50 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                <FaLeaf className="text-amber-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600 text-sm">Made with sustainable materials and practices</p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:bg-amber-50 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                <FaTruck className="text-amber-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Carefully packaged and delivered to your door</p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:bg-amber-50 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                <FaShieldAlt className="text-amber-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality Assured</h3>
              <p className="text-gray-600 text-sm">100% satisfaction guarantee on all products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular handcrafted pieces
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-amber-600 font-bold text-lg mb-3">{product.price}</p>
                  <button className="w-full py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors duration-200 font-semibold flex items-center justify-center gap-2">
                    <FaShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/products" 
              className="inline-block px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-semibold"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of customers who have already discovered the beauty of handcrafted pottery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products" 
              className="px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              Start Shopping
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

