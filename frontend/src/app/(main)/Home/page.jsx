'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import icons
const FaLeaf = dynamic(() => import('react-icons/fa').then(mod => mod.FaLeaf));
const FaHandHoldingHeart = dynamic(() => import('react-icons/fa').then(mod => mod.FaHandHoldingHeart));
const FaTruck = dynamic(() => import('react-icons/fa').then(mod => mod.FaTruck));
const FaShieldAlt = dynamic(() => import('react-icons/fa').then(mod => mod.FaShieldAlt));
const GiStoneWheel = dynamic(() => import('react-icons/gi').then(mod => mod.GiStoneWheel));

export default function Home() {
  // Sample featured products data with actual images
  const featuredProducts = [
    {
      id: 1,
      name: "Handcrafted Ceramic Pot",
      price: "₹1,499",
      image: "/images/pot.jpg",
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-amber-50 to-amber-100">
        <div className="absolute inset-0 bg-[url('/images/herosection1.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
            {/* Left side - Text content */}
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-800 mb-6 animate-fade-in">
                Handcrafted Pottery for Your Home
              </h1>
              <p className="text-xl text-gray-600 mb-8 animate-fade-in-delay">
                Discover unique, handcrafted pottery pieces that bring warmth and character to your space.
              </p>
              <div className="flex gap-4 animate-fade-in-delay-2">
                <Link 
                  href="/products" 
                  className="px-8 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Shop Now
                </Link>
                <Link 
                  href="/about" 
                  className="px-8 py-3 border-2 border-amber-600 text-amber-700 rounded-md hover:bg-amber-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="relative h-[500px] w-full animate-float">
              <div className="absolute inset-0 bg-amber-100 rounded-full opacity-20 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
              <img
                src="/images/herosection1.jpg"
                alt="Handcrafted Pottery"
                className="w-full h-full object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                style={{ objectPosition: 'center' }}
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-200 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Add these styles to your global CSS or create a new style block */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.3s both;
        }
        .animate-fade-in-delay-2 {
          animation: fadeIn 1s ease-out 0.6s both;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg hover:bg-amber-50 transition-colors duration-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                <GiStoneWheel className="text-amber-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Handcrafted</h3>
              <p className="text-gray-600">Each piece is uniquely crafted by skilled artisans</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-amber-50 transition-colors duration-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                <FaLeaf className="text-amber-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Made with sustainable materials and practices</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-amber-50 transition-colors duration-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                <FaTruck className="text-amber-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Carefully packaged and delivered to your door</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-amber-50 transition-colors duration-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                <FaShieldAlt className="text-amber-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality Assured</h3>
              <p className="text-gray-600">100% satisfaction guarantee on all products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-gray-600">Discover our most popular handcrafted pieces</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200">
                <div className="relative h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm">
                    {product.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-amber-600 font-medium">{product.price}</p>
                  <button className="mt-4 w-full py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/products" 
              className="inline-block px-8 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors duration-200"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

