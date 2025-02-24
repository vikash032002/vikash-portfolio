import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      

        {/* Copyright Text */}
        <p className="text-gray-400 text-sm text-center">
          &copy; {new Date().getFullYear()} Vikash Kumar. All rights reserved.
        </p>
     
    </footer>
  );
};

export default Footer;
