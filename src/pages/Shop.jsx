import React, { useState } from "react";
import { FaShareAlt, FaHeart, FaBalanceScale } from "react-icons/fa";

// Generate 24 products by repeating a set of 4
const allProducts = Array(24)
  .fill(null)
  .map((_, index) => {
    const products = [
      {
        name: "Syltherine",
        type: "Stylish chair",
        price: "Rp 2.500.000",
        originalPrice: "Rp 3.500.000",
        image: "/Group 106.png",
        badge: "-30%",
        badgeColor: "bg-red-500",
      },
      {
        name: "Leviosa",
        type: "Minimalist chair",
        price: "Rp 2.500.000",
        image: "/Group 106.png",
      },
      {
        name: "Lolito",
        type: "Luxury big sofa",
        price: "Rp 7.000.000",
        originalPrice: "Rp 14.000.000",
        image: "/Group 106.png",
        badge: "-50%",
        badgeColor: "bg-red-500",
      },
      {
        name: "Respira",
        type: "Outdoor table and stool",
        price: "Rp 500.000",
        image: "/Group 106.png",
        badge: "New",
        badgeColor: "bg-teal-500",
      },
    ];
    return products[index % 4];
  });

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  const currentProducts = allProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-white">
      {/* Banner */}
      <div
        className="h-48 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/Rectangle 1.png')`}}
      >
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Shop</h1>
          <p className="text-sm text-gray-700">Home &gt; Shop</p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-yellow-50 p-4 flex flex-wrap items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <button className="px-2 py-1 border">Filter</button>
          <button className="px-2 py-1 border">☰</button>
          <span>
            Showing {(currentPage - 1) * productsPerPage + 1}–
            {Math.min(currentPage * productsPerPage, allProducts.length)} of{" "}
            {allProducts.length} results
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span>Show</span>
          <select className="border px-2 py-1">
            <option>{productsPerPage}</option>
          </select>
          <span>Short by</span>
          <select className="border px-2 py-1">
            <option>Default</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 py-10">
        {currentProducts.map((product, index) => (
          <div key={index} className="relative group bg-white border">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto"
              />
              {product.badge && (
                <span
                  className={`absolute top-4 left-4 px-2 py-1 text-xs font-semibold text-white rounded-full ${product.badgeColor}`}
                >
                  {product.badge}
                </span>
              )}
            </div>
            <div className="p-4 text-left">
              <h3 className="text-gray-500 text-sm">{product.type}</h3>
              <h2 className="font-semibold">{product.name}</h2>
              <div className="text-sm mt-1">
                {product.originalPrice && (
                  <span className="line-through text-gray-400 mr-2">
                    {product.originalPrice}
                  </span>
                )}
                <span className="text-black font-bold">{product.price}</span>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-sm">
              <button className="bg-white text-black px-4 py-2 mb-3 rounded hover:bg-gray-200">
                Add to cart
              </button>
              <div className="flex gap-6 text-lg">
                Share<FaShareAlt className="cursor-pointer hover:text-gray-300" />
                Compare<FaBalanceScale className="cursor-pointer hover:text-gray-300" />
                Like<FaHeart className="cursor-pointer hover:text-gray-300" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center pb-10 gap-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`px-4 py-2 border rounded ${
              currentPage === i + 1 ? "bg-yellow-300 text-black" : ""
            }`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="px-4 py-2 border rounded"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Shop;
