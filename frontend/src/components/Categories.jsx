import React from 'react';

export const Categories = () => {
  const categories = [
    { name: 'Pots', image: '/images/pot.png', price: 499 },
    { name: 'Tea Sets', image: '/images/teaset.jpg', price: 899 },
    { name: 'Jugs', image: '/images/jug.png', price: 399 },
    { name: 'Coffee Mugs', image: '/images/mug.jpg', price: 299 },
    { name: 'Bottle', image: '/images/bottle.jpg', price: 349 },
    { name: 'Bowls', image: '/images/jugs.png', price: 249 },
    { name: 'Dinner Set', image: '/images/set.png', price: 1299 },
    { name: 'Kettle', image: '/images/kettle.png', price: 599 },
    { name: 'Cups', image: '/images/cups.png', price: 199 },
    { name: 'Tropical Lunar Lamp', image: '/images/lamp.png', price: 799 },
    { name: 'Plates', image: '/images/plate.png', price: 399 },
    { name: 'Round Vases', image: '/images/roundvase.png', price: 699 },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{category.name}</h3>
              {/* Price Tag */}
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-bold text-base px-6 py-2 rounded-full mb-3 shadow">
                ₹{category.price}
              </span>
              {/* Buttons */}
              <div className="flex gap-3">
                <button className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded transition">
                  <span className="text-lg font-bold">+</span> Add to Cart
                </button>
                <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded transition">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;