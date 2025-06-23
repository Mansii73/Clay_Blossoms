import React from 'react';
import Image from 'next/image';
import { ShoppingCart, Zap } from 'lucide-react';

const products = [
  {
    name: 'Classic Mug',
    image: '/images/mug.jpg',
    price: '₹325',
  },
  {
    name: 'Serving Plate',
    image: '/images/plate.png',
    price: '₹845',
  },
  {
    name: 'Vintage Bottle',
    image: '/images/bottle.jpg',
    price: '₹365',
  },
  {
    name: 'Clay Pot',
    image: '/images/pot.png',
    price: '₹545',
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col group">
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif mb-2 flex-grow">{product.name}</h3>
                <p className="text-2xl font-bold text-amber-700 mb-4">{product.price}</p>
                <div className="flex gap-2 mt-auto">
                  <button className="flex items-center justify-center gap-2 flex-1 px-3 py-1 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors">
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
                  <button className="flex items-center justify-center gap-2 flex-1 px-3 py-1 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors">
                    <Zap size={18} />
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;