import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className={`text-2xl font-bold transition-colors duration-300 ${
            scrolled || mobileMenuOpen ? "text-gray-900" : "text-white"
          }`}>
            Buzz<span className="text-yellow-400">Arketing</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => `
              font-medium transition-colors duration-300 
              ${scrolled 
                ? (isActive ? "text-yellow-500" : "text-gray-800 hover:text-yellow-500") 
                : (isActive ? "text-yellow-400" : "text-white hover:text-yellow-400")
              }
            `}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `
              font-medium transition-colors duration-300 
              ${scrolled 
                ? (isActive ? "text-yellow-500" : "text-gray-800 hover:text-yellow-500") 
                : (isActive ? "text-yellow-400" : "text-white hover:text-yellow-400")
              }
            `}
          >
            About
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => `
              font-medium transition-colors duration-300 
              ${scrolled 
                ? (isActive ? "text-yellow-500" : "text-gray-800 hover:text-yellow-500") 
                : (isActive ? "text-yellow-400" : "text-white hover:text-yellow-400")
              }
            `}
          >
            Services
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `
              font-medium transition-colors duration-300 
              ${scrolled 
                ? (isActive ? "text-yellow-500" : "text-gray-800 hover:text-yellow-500") 
                : (isActive ? "text-yellow-400" : "text-white hover:text-yellow-400")
              }
            `}
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden cursor-pointer z-50 transition-colors duration-300 ${
            scrolled || mobileMenuOpen ? "text-gray-900" : "text-white"
          }`}
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

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 animate-fadeIn">
          <div className="flex flex-col items-center justify-center h-full">
            <nav className="flex flex-col gap-8 text-center">
              <NavLink 
                to="/" 
                onClick={toggleMobileMenu}
                className={({ isActive }) => 
                  isActive ? "text-3xl font-bold text-yellow-500" : "text-3xl font-bold text-gray-800 hover:text-yellow-500 transition-colors"
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                onClick={toggleMobileMenu}
                className={({ isActive }) => 
                  isActive ? "text-3xl font-bold text-yellow-500" : "text-3xl font-bold text-gray-800 hover:text-yellow-500 transition-colors"
                }
              >
                About
              </NavLink>
              <NavLink 
                to="/services" 
                onClick={toggleMobileMenu}
                className={({ isActive }) => 
                  isActive ? "text-3xl font-bold text-yellow-500" : "text-3xl font-bold text-gray-800 hover:text-yellow-500 transition-colors"
                }
              >
                Services
              </NavLink>
              <NavLink 
                to="/contact" 
                onClick={toggleMobileMenu}
                className={({ isActive }) => 
                  isActive ? "text-3xl font-bold text-yellow-500" : "text-3xl font-bold text-gray-800 hover:text-yellow-500 transition-colors"
                }
              >
                Contact
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;