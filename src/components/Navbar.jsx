import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-lg font-bold">Brew Haven</div>
        <div className="space-x-4">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/menu" className="hover:text-gray-400">
            Menu
          </a>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <a href="/gallery" className="hover:text-gray-400">
            Gallery
          </a>
          <a href="/blog" className="hover:text-gray-400">
            Blog
          </a>
          <a href="/contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
