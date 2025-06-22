'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaShoppingCart, FaHeart, FaStar, FaShieldAlt, FaTag, FaCreditCard } from 'react-icons/fa';
import { RiSecurePaymentLine } from "react-icons/ri";

const products = [
  {
    id: 1,
    name: 'Clay Blossom Vase',
    store: 'ClayBlossoms Official',
    description: 'Handmade clay vase with beautiful floral design, perfect for displaying fresh flowers or as a decorative piece in your home. This exquisite piece is crafted by skilled artisans using traditional pottery techniques.',
    price: 2499,
    originalPrice: 3799,
    images: [
      '/images/pot.png',
      '/images/teaset.jpg',
      '/images/jug.png',
      '/images/mug.jpg'
    ],
    category: 'Vases',
    rating: 4.8,
    ratingsCount: 4275,
    boughtInPastMonth: 800,
    inStock: true,
    deliveryLocation: 'Lucknow 226005',
    deliveryDate: 'Tuesday, 24 June',
    soldBy: 'CLAYGLAZE ARTISONS',
    protectionPlans: [
        { name: '1 Year Plan', price: 1770 },
        { name: '2 Year Plan', price: 3186 },
    ]
  },
  {
    id: 2,
    name: 'Blossom Pot',
    store: 'ClayBlossoms Official',
    description: 'Beautiful handcrafted pot for your indoor plants, made with premium clay and traditional techniques. Features excellent drainage and is perfect for a variety of plants.',
    price: 1899,
    originalPrice: 2299,
    images: [
      '/images/teaset.jpg',
      '/images/pot.png',
      '/images/jug.png',
      '/images/mug.jpg'
    ],
    category: 'Pots',
    rating: 4.6,
    ratingsCount: 3102,
    boughtInPastMonth: 650,
    inStock: true,
    deliveryLocation: 'Lucknow 226005',
    deliveryDate: 'Wednesday, 25 June',
    soldBy: 'ClayBlossoms Store',
    protectionPlans: [
        { name: '1 Year Plan', price: 1500 },
        { name: '2 Year Plan', price: 2800 },
    ]
  },
  {
    id: 3,
    name: 'Artistic Mug',
    store: 'ClayBlossoms Official',
    description: 'Unique handcrafted mug with artistic patterns, perfect for your morning coffee or tea. Each mug is individually crafted and painted, making it a one-of-a-kind piece.',
    price: 899,
    originalPrice: 1199,
    images: [
      '/images/mug.jpg',
      '/images/pot.png',
      '/images/teaset.jpg',
      '/images/jug.png'
    ],
    category: 'Mugs',
    rating: 4.9,
    ratingsCount: 5210,
    boughtInPastMonth: 1200,
    inStock: true,
    deliveryLocation: 'Lucknow 226005',
    deliveryDate: 'Tuesday, 24 June',
    soldBy: 'Artisan Creations',
    protectionPlans: [
        { name: '1 Year Plan', price: 500 },
        { name: '2 Year Plan', price: 900 },
    ]
  },
  {
    id: 4,
    name: 'Decorative Jug',
    store: 'ClayBlossoms Official',
    description: 'Elegant decorative jug that adds charm to any room, handcrafted with attention to detail. This beautiful piece can be used as a vase or simply as a decorative accent.',
    price: 1799,
    originalPrice: 2199,
    images: [
      '/images/jug.png',
      '/images/mug.jpg',
      '/images/pot.png',
      '/images/teaset.jpg'
    ],
    category: 'Jugs',
    rating: 4.7,
    ratingsCount: 2840,
    boughtInPastMonth: 500,
    inStock: false,
    deliveryLocation: 'Lucknow 226005',
    deliveryDate: 'Friday, 27 June',
    soldBy: 'CLAYGLAZE ARTISONS',
    protectionPlans: [
        { name: '1 Year Plan', price: 1200 },
        { name: '2 Year Plan', price: 2200 },
    ]
  }
];

const BrowseProductPage = ({ params }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  const productId = parseInt(params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="max-w-2xl mx-auto py-20 text-center">
        <h1 className="text-2xl text-red-500 mb-4">Product not found</h1>
        <p className="text-gray-600">The product you're looking for doesn't exist.</p>
      </div>
    );
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-4 flex gap-4">
            {/* Vertical Thumbnails */}
            <div className="flex flex-col gap-3">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`relative h-16 w-16 cursor-pointer rounded-md overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index 
                      ? 'border-amber-500' 
                      : 'border-gray-300 hover:border-amber-400'
                  }`}
                  onMouseEnter={() => setSelectedImage(index)}
                >
                  <Image src={image} alt={`Thumbnail ${index + 1}`} fill className="object-cover"/>
                </div>
              ))}
            </div>
            {/* Main Image */}
            <div className="relative flex-1 h-[500px]">
              <Image
                src={product.images[selectedImage]}
                alt={`${product.name} - View ${selectedImage + 1}`}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Middle Column: Product Details */}
          <div className="lg:col-span-4">
            <h1 className="text-2xl font-medium text-gray-900 mb-1">{product.name}</h1>
            <a href="#" className="text-sm text-blue-600 hover:underline hover:text-orange-600">Visit the {product.store} Store</a>
            
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm">{product.rating}</span>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => <FaStar key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} />)}
              </div>
              <a href='#' className="text-sm text-blue-600 hover:underline">{product.ratingsCount} ratings</a>
            </div>

            <p className="text-sm text-gray-600 mt-1">{product.boughtInPastMonth}+ bought in past month</p>
            <hr className="my-4"/>

            <div>
                <div className='bg-red-600 text-white text-sm font-bold inline-block px-2 py-1 rounded'>Limited time deal</div>
                <div className="flex items-baseline gap-3 mt-2">
                  <span className="text-3xl font-normal text-red-600">-{discount}%</span>
                  <span className="text-3xl font-medium">
                    <span className='text-xl align-top'>₹</span>{product.price.toLocaleString()}
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  M.R.P.: <span className="line-through">₹{product.originalPrice.toLocaleString()}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Inclusive of all taxes</p>
            </div>
            
            <hr className="my-4"/>

            {/* Offers */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2"><FaTag className="text-green-600"/> Offers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-3">
                      <h4 className="font-bold">No Cost EMI</h4>
                      <p className="text-sm text-gray-600">Upto ₹2,509.18 EMI interest savings on select Credit Cards</p>
                      <a href="#" className="text-sm text-blue-600 hover:underline mt-1 inline-block">3 offers &gt;</a>
                  </div>
                  <div className="border rounded-lg p-3">
                      <h4 className="font-bold">Bank Offer</h4>
                      <p className="text-sm text-gray-600">Upto ₹3,000.00 discount on select Credit Cards, HDFC</p>
                      <a href="#" className="text-sm text-blue-600 hover:underline mt-1 inline-block">38 offers &gt;</a>
                  </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Purchase Box */}
          <div className="lg:col-span-2">
            <div className="border rounded-lg p-4 space-y-4">
                <div className="text-xl font-medium">₹{product.price.toLocaleString()}</div>
                <p className="text-sm text-gray-600">
                    FREE scheduled delivery as soon as <span className="font-bold text-green-700">{product.deliveryDate}</span>. 
                    Order within <span className="text-green-700">5 hrs 46 mins</span>. 
                    <a href="#" className="text-blue-600 hover:underline">Details</a>
                </p>
                <p>Delivering to <a href="#" className="text-blue-600 hover:underline">{product.deliveryLocation} - Update location</a></p>

                <div className="text-lg font-bold text-green-700">In stock</div>
                <p className="text-sm">Ships from <span className="font-medium">Amazon</span></p>
                <p className="text-sm">Sold by <span className="font-medium">{product.soldBy}</span></p>

                <div className="flex items-center gap-2">
                    <label htmlFor="quantity" className="text-sm">Quantity:</label>
                    <select id="quantity" className="border rounded p-1">
                        {[...Array(10)].map((_, i) => <option key={i+1} value={i+1}>{i+1}</option>)}
                    </select>
                </div>

                <button className="w-full bg-yellow-400 hover:bg-yellow-500 rounded-full py-2 font-medium">Add to Cart</button>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-2 font-medium">Buy Now</button>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <RiSecurePaymentLine className="text-gray-400" size={20}/>
                    <span>Secure transaction</span>
                </div>
                <hr/>
                <div>
                    <h4 className="font-bold">Add a Protection Plan:</h4>
                    {product.protectionPlans.map(plan => (
                        <div key={plan.name} className="flex items-center gap-2 mt-1">
                            <input type="checkbox" id={plan.name}/>
                            <label htmlFor={plan.name} className="text-sm">
                                {plan.name} for <span className="font-bold">₹{plan.price.toLocaleString()}</span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseProductPage;