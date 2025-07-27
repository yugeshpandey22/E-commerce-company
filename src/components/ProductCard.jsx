import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="relative group bg-white border">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-auto" />
        {product.badge && (
          <span className={`absolute top-4 left-4 px-2 py-1 text-xs font-semibold text-white rounded-full ${product.badgeColor}`}>
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4 text-left">
        <h3 className="text-gray-500 text-sm">{product.type}</h3>
        <h2 className="font-semibold">{product.name}</h2>
        <div className="text-sm mt-1">
          {product.originalPrice && (
            <span className="line-through text-gray-400 mr-2">{product.originalPrice}</span>
          )}
          <span className="text-black font-bold">{product.price}</span>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-sm gap-2">
        <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Add to cart</button>
        <div className="flex gap-4 underline">
          <button>&lt; Compare</button>
          <button>&lt; Like</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
