"use client";

import React, { useState } from 'react';

const Contact = () => {
  const [contactNumber, setContactNumber] = useState('');

  const handleContactChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setContactNumber(value);
    }
  };

  return (
    <div>
      <div className="mt-7 max-w-lg mx-auto bg-white border border-gray-200 rounded-xl shadow-2xs dark:bg-neutral-900 dark:border-neutral-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Contact Us</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Feel free to reach out by filling the form below.
            </p>
          </div>

          <div className="mt-5">
            <form>
              <div className="grid gap-y-4">

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 dark:text-white">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="py-2.5 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="py-2.5 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
                    required
                  />
                </div>

                {/* Contact Number */}
                <div>
                  <label htmlFor="contact" className="block text-sm mb-2 dark:text-white">Contact Number</label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    value={contactNumber}
                    onChange={handleContactChange}
                    className="py-2.5 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1 dark:text-neutral-400">Enter 10 digits only</p>
                </div>

                {/* Queries */}
                <div>
                  <label htmlFor="query" className="block text-sm mb-2 dark:text-white">Your Query</label>
                  <textarea
                    id="query"
                    name="query"
                    rows="4"
                    className="py-2.5 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500"
                    placeholder="Write your query here..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Submit
                </button>

              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;


