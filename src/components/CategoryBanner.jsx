import React from "react";

const CategoryBanner = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 py-10">
      <div className="relative h-64 bg-gray-300 rounded-lg overflow-hidden">
        <img src="/img/bedroom.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h3 className="text-white text-xl font-semibold">Bedroom</h3>
        </div>
      </div>
      <div className="relative h-64 bg-gray-300 rounded-lg overflow-hidden">
        <img src="/img/livingroom.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h3 className="text-white text-xl font-semibold">Living Room</h3>
        </div>
      </div>
      <div className="relative h-64 bg-gray-300 rounded-lg overflow-hidden">
        <img src="/img/dining.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h3 className="text-white text-xl font-semibold">Dining</h3>
        </div>
      </div>
    </section>
  );
};

export default CategoryBanner;
