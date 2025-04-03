import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold">Buzz<span className="text-yellow-400">Arketing</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "font-medium text-yellow-500" : "text-gray-800 hover:text-yellow-500 transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? "font-medium text-yellow-500" : "text-gray-800 hover:text-yellow-500 transition-colors"
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              isActive ? "font-medium text-yellow-500" : "text-gray-800 hover:text-yellow-500 transition-colors"
            }
          >
            Services
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? "font-medium text-yellow-500" : "text-gray-800 hover:text-yellow-500 transition-colors"
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 cursor-pointer"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-md absolute w-full">
          <div className="flex flex-col gap-4">
            <NavLink 
              to="/" 
              onClick={toggleMobileMenu}
              className={({ isActive }) => 
                isActive ? "font-medium text-yellow-500 py-2" : "text-gray-800 hover:text-yellow-500 py-2 transition-colors"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={toggleMobileMenu}
              className={({ isActive }) => 
                isActive ? "font-medium text-yellow-500 py-2" : "text-gray-800 hover:text-yellow-500 py-2 transition-colors"
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              onClick={toggleMobileMenu}
              className={({ isActive }) => 
                isActive ? "font-medium text-yellow-500 py-2" : "text-gray-800 hover:text-yellow-500 py-2 transition-colors"
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={toggleMobileMenu}
              className={({ isActive }) => 
                isActive ? "font-medium text-yellow-500 py-2" : "text-gray-800 hover:text-yellow-500 py-2 transition-colors"
              }
            >
              Contact
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;