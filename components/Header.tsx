'use client';

import { FaBell, FaUser, FaSearch } from 'react-icons/fa';

// Header component for site navigation
export default function Header() {
  return (
    <header className="bg-white shadow-sm h-16 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold">Welcome, Rohan</h1>
        <span className="ml-2 bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">Admin</span>
      </div>
      
      <div className="flex items-center space-x-5">
        <div className="relative hidden md:flex">
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 w-64"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        
        <button className="text-gray-500 hover:text-gray-700 relative">
          <FaBell size={20} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
            3
          </span>
        </button>
        
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
            <FaUser className="text-white" size={16} />
          </div>
        </div>
      </div>
    </header>
  );
} 