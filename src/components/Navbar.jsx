import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
    <Link to="/" className="text-xl font-bold text-gray-800">
      Furnire
    </Link>
    <nav className="space-x-6 text-gray-700">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  </header>
);

export default Navbar;
