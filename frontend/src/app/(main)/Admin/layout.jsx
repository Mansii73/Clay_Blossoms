'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FaHome, 
  FaBox, 
  FaShoppingCart, 
  FaUsers, 
  FaCog,
  FaBars,
  FaTimes
} from 'react-icons/fa';

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', icon: <FaHome />, path: '/admin' },
    { name: 'Products', icon: <FaBox />, path: '/admin/products' },
    { name: 'Orders', icon: <FaShoppingCart />, path: '/admin/orders' },
    { name: 'Users', icon: <FaUsers />, path: '/admin/users' },
    { name: 'Settings', icon: <FaCog />, path: '/admin/settings' },
  ];

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
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`
                flex items-center px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600
                ${pathname === item.path ? 'bg-amber-50 text-amber-600 border-r-4 border-amber-600' : ''}
              `}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`
        min-h-screen transition-all duration-300 ease-in-out
        ${sidebarOpen ? 'lg:ml-64' : 'ml-0'}
      `}>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
} 