'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  FaHome, 
  FaBox, 
  FaShoppingCart, 
  FaUsers, 
  FaCog,
  FaBars,
  FaTimes,
  FaPlus,
  FaEdit,
  FaTrash,
  FaRupeeSign
} from 'react-icons/fa';
import axios from 'axios';
import ProductManagement from './Admin/ProductManagement';

const Admin = () => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Pots', 'Tea Sets', 'Mugs', 'Jugs', 'Bowls', 'Vases'];

  // Sample data for dashboard
  const stats = [
    { title: 'Total Products', value: '156', icon: <FaBox />, color: 'bg-blue-500' },
    { title: 'Total Orders', value: '1,234', icon: <FaShoppingCart />, color: 'bg-green-500' },
    { title: 'Total Users', value: '789', icon: <FaUsers />, color: 'bg-purple-500' },
    { title: 'Total Revenue', value: '₹2,34,567', icon: <FaRupeeSign />, color: 'bg-amber-500' },
  ];

  const recentOrders = [
    { id: '1', customer: 'John Doe', amount: '₹1,499', status: 'Delivered' },
    { id: '2', customer: 'Jane Smith', amount: '₹2,999', status: 'Processing' },
    { id: '3', customer: 'Mike Johnson', amount: '₹899', status: 'Pending' },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    router.push(`/admin/${tab === 'dashboard' ? '' : tab}`);
  };

  const handleAddProduct = () => {
    router.push('/admin/products/add');
  };

  const handleEditProduct = (id) => {
    router.push(`/admin/products/edit/${id}`);
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`/api/products/${id}`);
        setProducts(products.filter(product => product.id !== id));
      } catch (error) {
        setError('Failed to delete product');
      }
    }
  };

  const handleViewOrder = (id) => {
    router.push(`/admin/orders/${id}`);
  };

  const handleViewUser = (id) => {
    router.push(`/admin/manage-user/${id}`);
  };

  useEffect(() => {
    if (activeTab === 'products') {
      fetchProducts();
    }
  }, [activeTab]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data.products);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch products');
      setLoading(false);
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex gap-4">
          <button
            onClick={() => handleTabChange('products')}
            className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700"
          >
            Add Product
          </button>
          <button
            onClick={() => handleTabChange('orders')}
            className="px-4 py-2 border border-amber-600 text-amber-600 rounded-md hover:bg-amber-50"
          >
            New Order
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex items-center"
          >
            <div className={`p-3 rounded-full ${stat.color} text-white mr-4`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    #{order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                        order.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
                        'bg-yellow-100 text-yellow-800'}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      onClick={() => handleTabChange('orders')}
                      className="text-amber-600 hover:text-amber-900"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Products</h1>
        <button
          onClick={() => handleTabChange('add-product')}
          className="flex items-center px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700"
        >
          <FaPlus className="mr-2" />
          Add Product
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProducts.map((product) => (
                <tr key={product._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full object-cover"
                          src={product.images[0]}
                          alt={product.name}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {product.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {product.description.substring(0, 50)}...
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ₹{product.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.stock}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${product.featured ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
                    >
                      {product.featured ? 'Featured' : 'Regular'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleEditProduct(product._id)}
                        className="text-amber-600 hover:text-amber-900"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product._id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Sidebar Toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-amber-600 text-white"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-40 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-amber-600">ClayBlossoms</h1>
          <p className="text-gray-500 text-sm">Admin Panel</p>
        </div>

        <nav className="mt-6">
          <button
            onClick={() => handleTabChange('dashboard')}
            className={`
              w-full flex items-center px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600
              ${activeTab === 'dashboard' ? 'bg-amber-50 text-amber-600 border-r-4 border-amber-600' : ''}
            `}
          >
            <FaHome className="mr-3" />
            Dashboard
          </button>
          <button
            onClick={() => handleTabChange('products')}
            className={`
              w-full flex items-center px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600
              ${activeTab === 'products' ? 'bg-amber-50 text-amber-600 border-r-4 border-amber-600' : ''}
            `}
          >
            <FaBox className="mr-3" />
            Products
          </button>
          <button
            onClick={() => handleTabChange('orders')}
            className={`
              w-full flex items-center px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600
              ${activeTab === 'orders' ? 'bg-amber-50 text-amber-600 border-r-4 border-amber-600' : ''}
            `}
          >
            <FaShoppingCart className="mr-3" />
            Orders
          </button>
          <button
            onClick={() => handleTabChange('users')}
            className={`
              w-full flex items-center px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600
              ${activeTab === 'users' ? 'bg-amber-50 text-amber-600 border-r-4 border-amber-600' : ''}
            `}
          >
            <FaUsers className="mr-3" />
            Users
          </button>
          <button
            onClick={() => handleTabChange('settings')}
            className={`
              w-full flex items-center px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600
              ${activeTab === 'settings' ? 'bg-amber-50 text-amber-600 border-r-4 border-amber-600' : ''}
            `}
          >
            <FaCog className="mr-3" />
            Settings
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`
        min-h-screen transition-all duration-300 ease-in-out
        ${sidebarOpen ? 'lg:ml-64' : 'ml-0'}
      `}>
        <div className="p-8">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'products' && <ProductManagement />}
          {activeTab === 'orders' && <div>Orders Page</div>}
          {activeTab === 'users' && <div>Users Page</div>}
          {activeTab === 'settings' && <div>Settings Page</div>}
        </div>
      </main>
    </div>
  );
};

export default Admin;
