'use client';
import React, { useState, useEffect } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserStatus = (userId, isActive) => {
    // Update user status logic here
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">User Management</h2>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">User</th>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Joined Date</th>
              <th className="text-left p-4">Orders</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b">
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                      {user.name.charAt(0)}
                    </div>
                    <span>{user.name}</span>
                  </div>
                </td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{new Date(user.createdAt).toLocaleDateString()}</td>
                <td className="p-4">{user.orders.length}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    user.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {user.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="p-4">
                  <button
                    onClick={() => setSelectedUser(user)}
                    className="text-blue-600 hover:text-blue-800 mr-2"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => handleUserStatus(user._id, !user.isActive)}
                    className={`${
                      user.isActive ? 'text-red-600 hover:text-red-800' : 'text-green-600 hover:text-green-800'
                    }`}
                  >
                    {user.isActive ? 'Deactivate' : 'Activate'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* User Details Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[600px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">User Details</h3>
              <button
                onClick={() => setSelectedUser(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700">Personal Information</h4>
                <p>Name: {selectedUser.name}</p>
                <p>Email: {selectedUser.email}</p>
                <p>Phone: {selectedUser.phone}</p>
                <p>Joined: {new Date(selectedUser.createdAt).toLocaleDateString()}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Addresses</h4>
                {selectedUser.addresses.map((address, index) => (
                  <div key={index} className="mt-2 p-2 border rounded">
                    <p>{address.street}</p>
                    <p>{address.city}, {address.state}</p>
                    <p>{address.pincode}</p>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Recent Orders</h4>
                <table className="w-full mt-2">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Order ID</th>
                      <th className="text-left py-2">Date</th>
                      <th className="text-left py-2">Amount</th>
                      <th className="text-left py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedUser.orders.slice(0, 5).map((order) => (
                      <tr key={order._id} className="border-b">
                        <td className="py-2">#{order._id}</td>
                        <td className="py-2">{new Date(order.date).toLocaleDateString()}</td>
                        <td className="py-2">₹{order.totalAmount}</td>
                        <td className="py-2">
                          <span className={`px-2 py-1 rounded-full text-sm ${
                            order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                            order.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement; 