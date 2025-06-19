import React from 'react';

export const FeaturedProducts = () => {
  const products = [
    { id: 1, name: 'Clay Pot', price: '$25', image: '/images/clay-pot.jpg' },
    { id: 2, name: 'Tea Set', price: '$45', image: '/images/tea-set.jpg' },
    { id: 3, name: 'Clay Vase', price: '$30', image: '/images/clay-vase.jpg' },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <a
                href={`/browse-product`}
                className="mt-4 inline-block px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




 

export default FeaturedProducts;