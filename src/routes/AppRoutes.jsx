import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import ProductDetail from "../pages/ProductDetail";
import Compare from "../pages/Compare";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} /> {/* ✅ Fixed */}
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};

export default AppRoutes;
