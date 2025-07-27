import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import SlideCart from "../components/SlideCart";

const About = () => {
  const [quantity, setQuantity] = useState(1);
  const [showCart, setShowCart] = useState(false);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => quantity > 1 && setQuantity(quantity - 1);

  useEffect(() => {
    const timer = setTimeout(() => setShowCart(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-4 md:p-20 relative">
      {/* Slide Cart */}
      <SlideCart visible={showCart} onClose={() => setShowCart(false)} />

      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-4">
        <Link to="/" className="hover:underline">Home</Link> {">"}{" "}
        <Link to="/shop" className="hover:underline">Shop</Link> {">"} Asgaard sofa
      </div>

      {/* Product Section */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left: Image */}
        <div>
          <img src="/Group 102.png" alt="Asgaard Sofa" className="w-full rounded-md" />
        </div>

        {/* Right: Product Info */}
        <div>
          <h2 className="text-3xl font-semibold">Asgaard sofa</h2>
          <p className="text-2xl text-orange-600 my-2">Rp 250.000,00</p>
          <div className="flex items-center gap-1 mb-2">
            {[...Array(4)].map((_, i) => <AiFillStar key={i} className="text-yellow-500" />)}
            <AiOutlineStar className="text-yellow-500" />
            <span className="text-sm text-gray-500 ml-2">5 Customer Review</span>
          </div>
          <p className="text-gray-600 mb-4">
            Setting the bar as one of the loudest speakers in its class...
          </p>

          {/* Size */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Size</label>
            <div className="flex gap-2">
              <button className="border px-3 py-1">L</button>
              <button className="border px-3 py-1">XL</button>
            </div>
          </div>

          {/* Color */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Color</label>
            <div className="flex gap-2">
              <span className="w-5 h-5 bg-yellow-500 rounded-full inline-block"></span>
              <span className="w-5 h-5 bg-purple-900 rounded-full inline-block"></span>
              <span className="w-5 h-5 bg-gray-900 rounded-full inline-block"></span>
            </div>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center border px-2">
              <button onClick={decrement} className="px-2">-</button>
              <span className="px-2">{quantity}</span>
              <button onClick={increment} className="px-2">+</button>
            </div>
            <button className="bg-orange-600 text-white px-6 py-2 rounded flex items-center gap-2">
              <AiOutlineShoppingCart /> Add To Cart
            </button>
          </div>

          {/* Extra Info */}
          <div className="text-sm text-gray-500 space-y-1">
            <div><b>SKU:</b> SS001</div>
            <div><b>Category:</b> Sofas</div>
            <div><b>Tags:</b> Sofa, Chair, Home, Shop</div>
            <div className="flex items-center gap-2">
              <b>Share:</b> <AiOutlineShareAlt /> <AiOutlineHeart />
            </div>
          </div>
        </div>
      </div>

      {/* Tab Section */}
      <div className="mt-20">
        <div className="border-b mb-4">
          <button className="px-4 py-2 border-b-2 border-black">Description</button>
          <button className="px-4 py-2 text-gray-500">Additional Information</button>
          <button className="px-4 py-2 text-gray-500">Reviews [5]</button>
        </div>
        <p className="text-gray-600 mb-6">
          Embracing the rock spirit, the Kilburn speaker takes the unmistakable sound...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/Group 106.png" className="rounded" />
          <img src="/Group 106.png" className="rounded" />
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20">
        <h3 className="text-2xl font-semibold mb-4">Related Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Syltherine", "Leviosa", "Lolito", "Respira"].map((name, i) => (
            <div key={i} className="border p-2">
              <img src="/Rectangle 25.png" className="rounded mb-2 w-full h-56 object-cover" />
              <h4 className="font-medium">{name}</h4>
              <p className="text-gray-600 text-sm">Stylish {name}</p>
              <p className="text-orange-600">Rp 2.500.000</p>
              <p className="text-gray-400 line-through text-sm">Rp 3.500.000</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
