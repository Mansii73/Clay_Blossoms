import React from 'react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jane Doe',
      feedback: 'The clay pots are absolutely stunning! They add so much charm to my kitchen.',
    },
    {
      name: 'John Smith',
      feedback: 'I love the tea set I purchased. It’s perfect for hosting guests.',
    },
    {
      name: 'Emily Johnson',
      feedback: 'The craftsmanship is amazing. Highly recommend ClayBlossom!',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <p className="text-gray-600 mb-4">"{testimonial.feedback}"</p>
              <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;