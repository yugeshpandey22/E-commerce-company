import React from "react";

const ProductCard = ({ title, image, price }) => (
  <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-yellow-600 font-bold">₹{price}</p>
    </div>
  </div>
);

const ProductSection = () => {
  const products = [
    { title: "Modern Chair", image: "/img/chair1.jpg", price: 2499 },
    { title: "Wooden Table", image: "/img/table1.jpg", price: 3499 },
    { title: "Elegant Sofa", image: "/img/sofa1.jpg", price: 7999 },
    { title: "Reading Lamp", image: "/img/lamp1.jpg", price: 1199 },
  ];

  return (
    <section className="py-16 px-6">
      <h2 className="text-2xl font-bold mb-8 text-center">Our Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
