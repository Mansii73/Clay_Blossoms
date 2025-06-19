'use client';
import React, { useState } from 'react';

const AdminSettingsPage = () => {
  const [profile, setProfile] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
    password: '',
    confirmPassword: ''
  });
  const [site, setSite] = useState({
    siteName: 'ClayBlossoms',
    contactEmail: 'support@clayblossoms.com',
    maintenanceMode: false
  });
  const [message, setMessage] = useState('');

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSiteChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSite((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    if (profile.password && profile.password !== profile.confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }
    setMessage('Profile updated successfully!');
  };

  const handleSiteSubmit = (e) => {
    e.preventDefault();
    setMessage('Site settings updated successfully!');
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Settings</h1>
      {message && <div className="mb-4 p-2 bg-green-100 text-green-800 rounded">{message}</div>}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
        <form onSubmit={handleProfileSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input type="text" name="name" value={profile.name} onChange={handleProfileChange} className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" name="email" value={profile.email} onChange={handleProfileChange} className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">New Password</label>
            <input type="password" name="password" value={profile.password} onChange={handleProfileChange} className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input type="password" name="confirmPassword" value={profile.confirmPassword} onChange={handleProfileChange} className="w-full border px-3 py-2 rounded" />
          </div>
          <button type="submit" className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700">Update Profile</button>
        </form>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Site Settings</h2>
        <form onSubmit={handleSiteSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Site Name</label>
            <input type="text" name="siteName" value={site.siteName} onChange={handleSiteChange} className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Contact Email</label>
            <input type="email" name="contactEmail" value={site.contactEmail} onChange={handleSiteChange} className="w-full border px-3 py-2 rounded" />
          </div>
          <div className="flex items-center">
            <input type="checkbox" name="maintenanceMode" checked={site.maintenanceMode} onChange={handleSiteChange} className="mr-2" />
            <label className="text-sm font-medium">Enable Maintenance Mode</label>
          </div>
          <button type="submit" className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700">Update Site Settings</button>
        </form>
      </div>
    </div>
  );
};

export default AdminSettingsPage;