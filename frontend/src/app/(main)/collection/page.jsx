'use client';
import React, { useEffect, useState } from 'react';

const CollectionPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/product/getall')
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-8">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow rounded-lg p-6 flex flex-col items-center"
          >
            <img
              src={product.image || '/images/placeholder.png'}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <span className="inline-block bg-yellow-200 text-gray-900 font-bold text-base px-4 py-1 rounded-full mb-2">
              ₹{product.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;