import React from "react";

const HeroBanner = () => {
  return (
    <section className="relative bg-gray-100 py-20 px-6 text-center">
      <h2 className="text-4xl font-semibold mb-2">Discover Our New Collection</h2>
      <p className="text-gray-600 mb-6">Upgrade your home with premium furniture</p>
      <button className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500">
        Shop Now
      </button>
    </section>
  );
};

export default HeroBanner;
