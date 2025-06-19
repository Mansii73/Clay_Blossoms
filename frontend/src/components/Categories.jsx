import React from 'react';

export const Categories = () => {
  const categories = [
    { name: 'Pots', image: '/images/pot.png' },
    { name: 'Tea Sets', image: '/images/teaset.jpg' },
    { name: 'Jugs', image: '/images/jug.png' },
    { name: 'Coffee Mugs', image: '/images/mug.jpg' },


    { name: 'Bottle', image: '/images/bottle.jpg' },
    { name: 'Bowls', image: '/images/jugs.png' },
    { name: 'Dinner Set', image: '/images/set.png' },
    { name: 'Kettle', image: '/images/kettle.png' },

    { name: 'Cups', image: '/images/cups.png' },
    { name: 'Tropical Lunar Lamp', image: '/images/lamp.png' },
    { name: 'Plates', image: '/images/plate.png' },
    { name: 'Round Vases', image: '/images/roundvase.png' },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
            </div>
          ))}
        </div>

{/* 
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
            </div>
          ))}
        </div> */}


      </div>
    </section>
  );
};





export default Categories;