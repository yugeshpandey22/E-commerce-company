import React from "react";
import { FaTrash } from "react-icons/fa";

const CartPage = () => {
  return (
    <div className="bg-white">
      {/* Top Banner */}
      <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: "url('/Rectangle 1.png')" }}>
        <div className="absolute inset-0 bg-white/70 flex flex-col justify-center items-center">
          <img src="/Group 55.png" alt="Logo" className="w-10 h-10 mb-2" />
          <h1 className="text-2xl font-semibold">Cart</h1>
          <p className="text-sm text-gray-500 mt-1">Home &gt; Cart</p>
        </div>
      </div>

      {/* Cart Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 px-4 md:px-20 py-12">
        {/* Left - Cart Table */}
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-4 font-semibold border-b text-center py-4 bg-[#f9f1e7]">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
          </div>

          {/* Product Row */}
          <div className="grid grid-cols-4 items-center text-center border-b py-4">
            <div className="flex items-center justify-center">
              <img src="/Group 94.png" alt="sofa" className="w-16 h-16 object-contain rounded mr-2" />
              <p>Asgaard sofa</p>
            </div>
            <div>Rs. 250,000.00</div>
            <div>
              <input type="number" value={1} className="w-12 border text-center rounded" />
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>Rs. 250,000.00</span>
              <FaTrash className="text-gray-400 hover:text-red-500 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Right - Cart Totals */}
        <div className="w-full lg:w-1/3 bg-[#f9f1e7] p-6 rounded">
          <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
          <div className="flex justify-between py-2 border-b">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between py-4 font-semibold text-orange-500 text-lg">
            <span>Total</span>
            <span>Rs. 250,000.00</span>
          </div>
          <button className="w-full border border-black py-2 hover:bg-black hover:text-white transition">
            Check Out
          </button>
        </div>
      </div>

      {/* Bottom Features Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center bg-[#f9f1e7] px-4 md:px-20 py-10 text-sm">
        <div>
          <img src="/trophy 1.png" className="mx-auto mb-2 w-6 h-6" alt="quality" />
          <p className="font-semibold">High Quality</p>
          <p className="text-gray-500">crafted from top materials</p>
        </div>
        <div>
          <img src="/guarantee.png" className="mx-auto mb-2 w-6 h-6" alt="warranty" />
          <p className="font-semibold">Warranty Protection</p>
          <p className="text-gray-500">Over 2 years</p>
        </div>
        <div>
          <img src="/shipping.png" className="mx-auto mb-2 w-6 h-6" alt="shipping" />
          <p className="font-semibold">Free Shipping</p>
          <p className="text-gray-500">Order over 150 $</p>
        </div>
        <div>
          <img src="/customer-support.png" className="mx-auto mb-2 w-6 h-6" alt="support" />
          <p className="font-semibold">24 / 7 Support</p>
          <p className="text-gray-500">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
