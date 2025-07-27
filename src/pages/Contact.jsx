import React from "react";

const CheckoutPage = () => {
  return (
    <div className="bg-white">
      {/* Banner */}
      <div
        className="h-48 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/Rectangle 1.png')` }}
      >
        <div className="text-center text-white">
          <h1 className="text-3xl font-semibold">Contact</h1>
          <p className="text-sm">Home &gt; Contact</p>
        </div>
      </div>

      {/* Checkout Section */}
      <div className="px-4 md:px-20 py-10 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Billing Details */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Billing details</h2>

            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="border p-2 w-full text-sm" />
              <input type="text" placeholder="Last Name" className="border p-2 w-full text-sm" />
            </div>

            <input type="text" placeholder="Company Name (Optional)" className="border p-2 w-full mt-4 text-sm" />
            <select className="border p-2 w-full mt-4 text-sm">
              <option>Sri Lanka</option>
            </select>
            <input type="text" placeholder="Street address" className="border p-2 w-full mt-4 text-sm" />
            <input type="text" placeholder="Town / City" className="border p-2 w-full mt-4 text-sm" />
            <select className="border p-2 w-full mt-4 text-sm">
              <option>Western Province</option>
            </select>
            <input type="text" placeholder="ZIP code" className="border p-2 w-full mt-4 text-sm" />
            <input type="text" placeholder="Phone" className="border p-2 w-full mt-4 text-sm" />
            <input type="email" placeholder="Email address" className="border p-2 w-full mt-4 text-sm" />
            <input type="text" placeholder="Additional Information" className="border p-2 w-full mt-4 text-sm" />
          </div>

          {/* Order Summary */}
          <div className="md:ml-10">
            <div className="flex justify-between text-sm mb-4 font-medium">
              <p>Product</p>
              <p>Subtotal</p>
            </div>

            <div className="flex justify-between text-sm mb-2">
              <p>Asgaard sofa × 1</p>
              <p>Rs. 250,000.00</p>
            </div>

            <div className="flex justify-between text-sm mb-2">
              <p>Subtotal</p>
              <p>Rs. 250,000.00</p>
            </div>

            <div className="flex justify-between text-sm font-bold text-yellow-600 mb-6">
              <p>Total</p>
              <p>Rs. 250,000.00</p>
            </div>

            {/* Payment Options */}
            <div className="mb-4">
              <label className="flex items-center space-x-2 mb-2">
                <input type="radio" name="payment" className="accent-black" defaultChecked />
                <span className="text-sm font-medium">Direct Bank Transfer</span>
              </label>
              <p className="text-xs text-gray-500 mb-4">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
              </p>

              <label className="flex items-center space-x-2 mb-2">
                <input type="radio" name="payment" className="accent-black" />
                <span className="text-sm font-medium">Cash On Delivery</span>
              </label>
            </div>

            <p className="text-xs text-gray-500 mb-6">
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className="font-bold">privacy policy</span>.
            </p>

            <button className="border border-black rounded px-8 py-2 text-sm font-medium hover:bg-black hover:text-white transition">
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
