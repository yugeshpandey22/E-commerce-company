import React from "react";
const products = [
  {
    id: 1,
    title: "Asgaard Sofa",
    image: "/sofa.png",
    rating: 4.5,
    reviews: "65 Reviews",
    attributes: {
      "Sales Package": "1 sectional sofa",
      "Secondary Material": "Solid Wood",
      "Configuration": "L-shaped",
      "Upholstery Material": "Fabric + Cotton",
      "Upholstery Color": "Bright Grey & Lion",
      "Filling Material": "Foam",
      "Adjustable Headrest": "No",
      "Maximum Load Capacity": "250 KG",
      "Origin of Manufacture": "India",
      "Width": "265.2 cm",
      "Height": "101.6 cm",
      "Depth": "167.6 cm",
      "Weight": "45.6 kg",
      "Seat Height": "45.6 cm",
      "Warranty Summary": "1 Year Manufacturing Warranty",
      "Covered in Warranty": "Warranty of the product is limited to manufacturing defects only.",
      "Not Covered in Warranty": "Warranty does not cover any external accessories...",
      "Domestic Warranty": "1 Year"
    }
  },
  {
    id: 2,
    title: "Outdoor Sofa Set",
    image: "/sofa.png",
    rating: 4.5,
    reviews: "65 Reviews",
    attributes: {
      "Sales Package": "1 Three Seater & 2 Single",
      "Secondary Material": "Solid Wood",
      "Configuration": "L-shaped",
      "Upholstery Material": "Fabric + Cotton",
      "Upholstery Color": "Bright Grey & Lion",
      "Filling Material": "Mattress",
      "Adjustable Headrest": "No",
      "Maximum Load Capacity": "250 KG",
      "Origin of Manufacture": "India",
      "Width": "305.2 cm",
      "Height": "111.6 cm",
      "Depth": "175.6 cm",
      "Weight": "49.6 kg",
      "Seat Height": "48.6 cm",
      "Warranty Summary": "12 Year Manufacturing Warranty",
      "Covered in Warranty": "Warranty of the product is limited to manufacturing defects only.",
      "Not Covered in Warranty": "Warranty does not cover any external accessories...",
      "Domestic Warranty": "2 Years"
    }
  }
];

const attributeSections = [
  { title: "General", keys: ["Sales Package", "Secondary Material", "Configuration", "Upholstery Material", "Upholstery Color"] },
  { title: "Product", keys: ["Filling Material", "Adjustable Headrest", "Maximum Load Capacity", "Origin of Manufacture"] },
  { title: "Dimensions", keys: ["Width", "Height", "Depth", "Weight", "Seat Height"] },
  { title: "Warranty", keys: ["Warranty Summary", "Covered in Warranty", "Not Covered in Warranty", "Domestic Warranty"] }
];

const ProductComparison = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: "url('/Rectangle 1.png')" }}>
        <div className="absolute inset-0 bg-white/70 flex flex-col justify-center items-center">
          <img src="/Meubel House_Logos-05.png" alt="Logo" className="w-10 h-10 mb-2" />
          <h1 className="text-2xl font-semibold">Product Comparison</h1>
          <p className="text-sm text-gray-500 mt-1">Home &gt; Comparison</p>
        </div>
      </div>

      {/* Main Comparison Grid */}
      <div className="px-4 md:px-20 py-10 overflow-x-auto">
        <div className="grid grid-cols-[200px_repeat(2,_minmax(200px,_1fr))] gap-4 text-sm">
          {/* Header Row */}
          <div></div>
          {products.map((p, index) => (
            <div key={index} className="text-center border p-4 rounded shadow-sm">
              <img src={p.image} alt={p.title} className="mx-auto w-28 h-28 object-contain mb-2" />
              <h2 className="font-semibold text-base">{p.title}</h2>
              <p className="text-yellow-500 text-xs">⭐ {p.rating} | {p.reviews}</p>
            </div>
          ))}

          {/* Add a Product */}
          <div></div>
          <div className="col-span-2 flex justify-end">
            <button className="border border-yellow-600 text-yellow-600 px-4 py-1 text-sm hover:bg-yellow-100">Add A Product</button>
          </div>

          {/* Dynamic Rows */}
          {attributeSections.map(section => (
            <React.Fragment key={section.title}>
              <div className="font-semibold py-2">{section.title}</div>
              {products.map((p, i) => (
                <div key={i}></div>
              ))}
              {section.keys.map((key) => (
                <React.Fragment key={key}>
                  <div className="text-gray-600 py-2 border-b">{key}</div>
                  {products.map((p, i) => (
                    <div className="py-2 border-b" key={i}>{p.attributes[key]}</div>
                  ))}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}

          {/* Add to Cart */}
          <div></div>
          {products.map((p, index) => (
            <div key={index} className="py-4">
              <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 w-full">Add To Cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Feature Section */}
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

export default ProductComparison;
