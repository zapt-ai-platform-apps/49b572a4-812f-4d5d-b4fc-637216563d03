import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">Buzz<span className="text-yellow-400">Arketing</span></span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              At BuzzArketing, we believe a strong, authentic identity is the key to long-term success. We help businesses and charities build this foundation, transforming them into sustainable brands that last.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-yellow-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</Link></li>
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Contact details</h3>
              <a href="mailto:hello@buzzarketing.com" className="text-gray-300 hover:text-yellow-400 transition-colors">
                hello@buzzarketing.com
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} BuzzArketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;