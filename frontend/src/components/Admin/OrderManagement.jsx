'use client';
import React, { useState, useEffect } from 'react';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleStatusChange = (orderId, newStatus) => {
    // Update order status logic here
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Management</h2>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">Order ID</th>
              <th className="text-left p-4">Customer</th>
              <th className="text-left p-4">Date</th>
              <th className="text-left p-4">Amount</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-b">
                <td className="p-4">#{order._id}</td>
                <td className="p-4">{order.customer.name}</td>
                <td className="p-4">{new Date(order.date).toLocaleDateString()}</td>
                <td className="p-4">₹{order.totalAmount}</td>
                <td className="p-4">
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(order._id, e.target.value)}
                    className="border rounded px-2 py-1"
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
                <td className="p-4">
                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[600px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Order Details</h3>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700">Order Information</h4>
                <p>Order ID: #{selectedOrder._id}</p>
                <p>Date: {new Date(selectedOrder.date).toLocaleDateString()}</p>
                <p>Status: {selectedOrder.status}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Customer Information</h4>
                <p>Name: {selectedOrder.customer.name}</p>
                <p>Email: {selectedOrder.customer.email}</p>
                <p>Phone: {selectedOrder.customer.phone}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Shipping Address</h4>
                <p>{selectedOrder.shippingAddress.street}</p>
                <p>{selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state}</p>
                <p>{selectedOrder.shippingAddress.pincode}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Order Items</h4>
                <table className="w-full mt-2">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Product</th>
                      <th className="text-left py-2">Quantity</th>
                      <th className="text-left py-2">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedOrder.items.map((item) => (
                      <tr key={item._id} className="border-b">
                        <td className="py-2">{item.product.name}</td>
                        <td className="py-2">{item.quantity}</td>
                        <td className="py-2">₹{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-right">
                <p className="font-bold">Total Amount: ₹{selectedOrder.totalAmount}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderManagement; 