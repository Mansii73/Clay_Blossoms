'use client';

import React from 'react';
import Link from 'next/link';
import { FaBox, FaShoppingCart, FaUsers, FaRupeeSign } from 'react-icons/fa';

export default function AdminDashboard() {
  // Sample data - replace with actual API calls
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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex gap-4">
          <Link
            href="/admin/products/add"
            className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700"
          >
            Add Product
          </Link>
          <Link
            href="/admin/orders/new"
            className="px-4 py-2 border border-amber-600 text-amber-600 rounded-md hover:bg-amber-50"
          >
            New Order
          </Link>
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
                    <Link
                      href={`/admin/orders/${order.id}`}
                      className="text-amber-600 hover:text-amber-900"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 