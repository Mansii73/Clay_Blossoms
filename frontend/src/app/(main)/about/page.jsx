import React from "react";

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">
                About Us
              </h1>
              <p className="text-xl text-amber-700 font-medium italic">
                Handcrafted with Heart. Inspired by Earth.
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 flex items-center gap-2">
                <span className="text-amber-600">Our Story</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to <span className="font-semibold text-amber-700">ClayBlossom</span>, your go-to destination for beautifully handcrafted pottery and clay items. Our journey started with a deep love for earthy art and traditional craftsmanship. What began as a humble local studio has blossomed into a vibrant space for artisans to share their soulful creations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 flex items-center gap-2">
                <span className="text-amber-600">What We Offer</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="font-medium text-amber-700">🏺 Decorative & Functional Pots</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="font-medium text-amber-700">🍵 Elegant Tea Sets</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="font-medium text-amber-700">🧴 Eco-friendly Bottles</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="font-medium text-amber-700">🎁 Custom Gift Items</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 flex items-center gap-2">
                <span className="text-amber-600">Our Commitment</span>
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <p className="text-gray-600">Supporting Local Artisans</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <p className="text-gray-600">Promoting Sustainable Living</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <p className="text-gray-600">Delivering Unique, Handmade Quality</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif font-semibold text-gray-800 flex items-center gap-2">
                <span className="text-amber-600">Join Our Journey</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Whether you're an art lover, eco-conscious shopper, or someone looking for something special, we invite you to be a part of our journey. Let's fill your space with warmth, art, and earthy elegance.
              </p>
              <button className="mt-4 px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors duration-200">
                Explore Our Collection
              </button>
            </section>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="absolute -inset-4 bg-amber-100 rounded-2xl transform rotate-3"></div>
            <img
              src="/images/herosec.jpg - Copy.jpg"
              alt="Clay pottery display"
              className="relative rounded-xl shadow-lg object-cover h-[600px] w-full transform -rotate-3 hover:rotate-0 transition-all duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-amber-700 font-medium">Handcrafted with love since 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




