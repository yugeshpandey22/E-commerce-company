import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const products = [ /* array */ ];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id.toString() === id);
  if (!product) return <div>Product not found</div>;

  return (
    <>
      <Navbar />
      <div className="px-6 py-10">
        <div className="md:flex gap-6">
          <img src={product.image} alt={product.title} className="w-full md:w-1/2 object-cover rounded-lg" />
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-xl text-yellow-600 mb-4">₹{product.price}</p>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <button className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500">Add to cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
