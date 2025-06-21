'use client';
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Clay Blossom Vase',
    description: 'Handmade clay vase with floral design.',
    price: 25,
    image: '/images/vase1.jpg',
  },
  {
    id: 2,
    name: 'Blossom Pot',
    description: 'Beautiful pot for your indoor plants.',
    price: 18,
    image: '/images/pot1.jpg',
  },
  // Add more products as needed
];

const BrowseProductPage = ({ params }) => {
  // Get productId from params and convert to number
  const productId = parseInt(params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="max-w-2xl mx-auto py-20 text-center text-2xl text-red-500">
        Product not found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 flex flex-col md:flex-row bg-white rounded-xl shadow-lg">
      {/* Left: Image and Price */}
      <div className="md:w-1/2 flex flex-col items-center justify-center bg-gray-50 rounded-lg p-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover rounded-lg mb-6"
        />
        <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-bold text-lg px-8 py-2 rounded-full shadow mb-2">
          ₹{product.price}
        </span>
      </div>
      {/* Right: Details and Buttons */}
      <div className="md:w-1/2 flex flex-col justify-center p-6">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-8">{product.description}</p>
        <div className="flex gap-4">
          <button className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded transition text-lg shadow">ems-center gap-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded transition text-lg shadow">
            <span className="text-xl font-bold">+</span> Add to Cart
          </button>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded transition text-lg shadow">lassName="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded transition text-lg shadow">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowseProductPage;