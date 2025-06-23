"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Toaster } from 'react-hot-toast';

const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/voicecart/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "dumdonjup";

export default function AddProduct() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    sku: "",
    details: "",
    images: []
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Product name is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!formData.price || formData.price <= 0) newErrors.price = "Valid price is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.stock || formData.stock < 0) newErrors.stock = "Valid stock quantity is required";
    if (!formData.sku.trim()) newErrors.sku = "SKU is required";
    if (formData.images.length === 0) newErrors.images = "At least one image is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    const validFiles = files.filter(file => {
      if (!allowedTypes.includes(file.type)) {
        toast.error(`${file.name} is not a valid image file`);
        return false;
      }
      if (file.size > maxSize) {
        toast.error(`${file.name} is too large. Maximum size is 10MB`);
        return false;
      }
      return true;
    });
    if (validFiles.length > 0) {
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...validFiles]
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      // Upload images to Cloudinary and collect URLs
      const imageUrls = [];
      for (const image of formData.images) {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        const res = await fetch(CLOUDINARY_UPLOAD_URL, {
          method: "POST",
          body: data
        });
        const fileRes = await res.json();
        if (fileRes.secure_url) {
          imageUrls.push(fileRes.secure_url);
        } else {
          throw new Error("Image upload failed");
        }
      }
      // Prepare product data for backend
      const productData = {
        name: formData.name.trim(),
        description: formData.description.trim(),
        price: formData.price,
        category: formData.category,
        stock: formData.stock,
        sku: formData.sku,
        details: formData.details,
        images: imageUrls
      };
      // Send to backend
      const response = await fetch("http://localhost:5000/product/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData)
      });
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || "Failed to create product");
      }
      toast.success("Product added successfully!");
      router.push("/Products");
    } catch (error) {
      console.error('Error creating product:', error);
      toast.error(error.message || "Failed to add product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Add New Product</h1>
            <button 
              onClick={() => router.back()}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500`}
                placeholder="Enter product name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            {/* Product Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                className={`w-full px-4 py-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500`}
                placeholder="Enter product description"
              ></textarea>
              {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
            </div>
            {/* Price and Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                  Price (₹) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border ${errors.price ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500`}
                  placeholder="Enter price"
                />
                {errors.price && <p className="mt-1 text-sm text-red-500">{errors.price}</p>}
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border ${errors.category ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500`}
                >
                  <option value="">Select a category</option>
                  <option value="pots">Pots</option>
                  <option value="vases">Vases</option>
                  <option value="decorative">Decorative</option>
                  <option value="tableware">Tableware</option>
                  <option value="jewelry">Jewelry</option>
                  <option value="other">Other</option>
                </select>
                {errors.category && <p className="mt-1 text-sm text-red-500">{errors.category}</p>}
              </div>
            </div>
            {/* Stock and SKU */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">
                  Stock Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border ${errors.stock ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500`}
                  placeholder="Enter stock quantity"
                />
                {errors.stock && <p className="mt-1 text-sm text-red-500">{errors.stock}</p>}
              </div>
              <div>
                <label htmlFor="sku" className="block text-sm font-medium text-gray-700 mb-1">
                  SKU <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="sku"
                  name="sku"
                  value={formData.sku}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border ${errors.sku ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500`}
                  placeholder="Enter SKU"
                />
                {errors.sku && <p className="mt-1 text-sm text-red-500">{errors.sku}</p>}
              </div>
            </div>
            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Images <span className="text-red-500">*</span>
              </label>
              <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 ${errors.images ? 'border-red-500' : 'border-gray-300'} border-dashed rounded-lg`}>
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-amber-600 hover:text-amber-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-amber-500"
                    >
                      <span>Upload a file</span>
                      <input 
                        id="file-upload" 
                        type="file"
                        multiple
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>
              {errors.images && <p className="mt-1 text-sm text-red-500">{errors.images}</p>}
            </div>
            <button type="submit" className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
              {loading ? 'Adding...' : 'Add Product'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ProductImage({ product }) {
  return (
    <img
      className="h-10 w-10 rounded-full object-cover"
      src={
        product.images && product.images.length > 0 && product.images[0]
          ? product.images[0]
          : "/images/placeholder.png"
      }
      alt={product.name}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "/images/placeholder.png";
      }}
    />
  );
}
   