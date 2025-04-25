'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Responsive Navbar with mobile menu
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Check if the link is active
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="font-bold text-xl flex items-center">
          <span className="text-primary">Next</span>
          <span className="text-black">.js</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link 
                href="/" 
                className={`font-medium ${isActive('/') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/features" 
                className={`font-medium ${isActive('/features') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
              >
                Features
              </Link>
            </li>
            <li>
              <Link 
                href="/pricing" 
                className={`font-medium ${isActive('/pricing') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link 
                href="/blog" 
                className={`font-medium ${isActive('/blog') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="text-gray-700 hover:text-primary font-medium">
            Login
          </Link>
          <Link href="/signup" className="btn btn-primary">
            Sign Up
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-slideDown">
          <div className="container">
            <nav className="mb-6">
              <ul className="space-y-4">
                <li>
                  <Link 
                    href="/" 
                    className={`block font-medium ${isActive('/') ? 'text-primary' : 'text-gray-700'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/features" 
                    className={`block font-medium ${isActive('/features') ? 'text-primary' : 'text-gray-700'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/pricing" 
                    className={`block font-medium ${isActive('/pricing') ? 'text-primary' : 'text-gray-700'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog" 
                    className={`block font-medium ${isActive('/blog') ? 'text-primary' : 'text-gray-700'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
            
            <div className="flex flex-col space-y-3">
              <Link 
                href="/login" 
                className="block text-center py-2 text-gray-700 font-medium border border-gray-200 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                href="/signup" 
                className="block text-center py-2 bg-primary text-white font-medium rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 