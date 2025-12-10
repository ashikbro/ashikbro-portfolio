import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center space-x-2 text-gray-400">
            <span>© {new Date().getFullYear()} Ashik. Built with</span>
            <FaHeart className="text-red-500" />
            <span>using React & TailwindCSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
