import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
const SlideCart = ({ visible, onClose }) => {
  const navigate = useNavigate();
  const [showCompare, setShowCompare] = useState(false); // Control compare view

  if (!visible) return null;

  const cartItems = [
    {
      id: 1,
      name: "Asgaard sofa",
      image: "https://via.placeholder.com/100x100",
      price: 250000,
    },
    {
      id: 2,
      name: "Casaliving Wood",
      image: "https://via.placeholder.com/100x100",
      price: 270000,
    },
  ];

  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg z-50 p-6 overflow-y-auto transition-transform duration-300">
      {/* Close Button */}
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-500">
        <AiOutlineClose size={24} />
      </button>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-6 mt-2">
        {showCompare ? "Product Comparison" : "Shopping Cart"}
      </h2>
      <hr className="mb-6" />

      {showCompare ? (
        <>
          {/* Compare Component */}
          <div className="overflow-y-auto max-h-[80vh]">
            <Compare />
          </div>
          <button
            onClick={() => setShowCompare(false)}
            className="mt-4 text-sm text-blue-600 underline"
          >
            ← Back to Cart
          </button>
        </>
      ) : (
        <>
          {/* Cart Items */}
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-start justify-between mb-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-md font-medium">{item.name}</h3>
                <p className="text-gray-600 mt-1">
                  1 x{" "}
                  <span className="text-yellow-600 font-semibold">
                    Rs. {item.price.toLocaleString()}
                  </span>
                </p>
              </div>
              <button className="text-gray-500 ml-2 mt-1">
                <AiOutlineClose size={18} />
              </button>
            </div>
          ))}

          {/* Subtotal */}
          <div className="flex justify-between items-center mt-6 mb-10">
            <p className="text-lg font-medium">Subtotal</p>
            <p className="text-yellow-700 text-lg font-bold">
              Rs. {subtotal.toLocaleString()}
            </p>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => navigate("/cart")}
              className="border rounded-full py-2 text-sm font-medium hover:bg-gray-100"
            >
              Cart
            </button>
            <button
              onClick={() => navigate("/checkout")}
              className="border rounded-full py-2 text-sm font-medium hover:bg-gray-100"
            >
              Checkout
            </button>
            <button
              onClick={() => navigate("/Compare")}
              className="border rounded-full py-2 text-sm font-medium hover:bg-gray-100"
            >
              Comparison
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SlideCart;
