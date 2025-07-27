import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import Hero from '../assets/scandinavian-interior-mockup-wall-decal-background 1.png'
import Dinning from '../assets/image 106.png'
import Living from '../assets/image 101.png'
import Bedroom from '../assets/image 100.png'
import Syltherine from '../assets/Images (1).png'
import Leviosa from '../assets/Images (2).png'
import Lolito from '../assets/Images (3).png'
import Respira from '../assets/Images (4).png'
import Grifo from '../assets/Images.png'
import Muggo from '../assets/Images (5).png'
import Pingky from '../assets/Images (6).png'
import Potty from '../assets/Images (7).png'
import { ArrowRight } from "lucide-react";
import Setup2 from "../assets/Rectangle 38.png";
import Setup3 from "../assets/Rectangle 37 (1).png";
import Setup1 from "../assets/Rectangle 36 (1).png";
import Setup4 from "../assets/Rectangle 39.png";
import Setup5 from "../assets/Rectangle 40 (1).png";
import Setup6 from "../assets/Rectangle 43.png";
import Setup7 from "../assets/Rectangle 41.png";
import Setup8 from "../assets/Rectangle 45.png";
import Setup9 from "../assets/Rectangle 44.png";


export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="bg-gray-100 p-10 flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img src={Hero} alt="Hero" className="w-full" />
        </div>
        <div className="md:w-1/2" style={{ backgroundColor: "#FFF3E3", height: "330px" }}>
          <h5 className="text-sm-bold mb-2 ms-3 text-black mt-10">New Arrival</h5>
          <h1 className="text-4xl font-bold mb-4 text-yellow-600 ms-3">
            Discover Our <br /> New Collection
          </h1>
          <p className="mb-4 text-center ms-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-yellow-600 text-white px-6 py-3 ml-12">BUY NOW</button>
        </div>
      </section>

      {/* Browse Range */}
      <section className="text-center py-10">
        <h2 className="text-2xl font-bold mb-2">Browse The Range</h2>
        <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-20">
          <div className="space-y-2">
            <img src={Dinning} alt="dining" className="rounded w-full h-56" />
            <p className="capitalize font-medium">dining</p>
          </div>
          <div className="space-y-2">
            <img src={Bedroom} alt="Bedroom" className="rounded w-full h-56 " />
            <p className="capitalize font-medium">living</p>
          </div>
          <div className="space-y-2">
            <img src={Living} alt="bedroom" className="rounded w-full  h-56 " />
            <p className="capitalize font-medium">bedroom</p>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-10 px-4 md:px-20">
        <h2 className="text-2xl font-bold text-center mb-6">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Syltherine", image: `${Syltherine}` },
            { name: "Leviosa", image: `${Leviosa}` },
            { name: "Lolito", image: `${Lolito}`},
            { name: "Respira", image: `${Respira}` },
            { name: "Grifo", image: `${Grifo}` },
            { name: "Muggo", image: `${Muggo}` },
            { name: "Pingky", image: `${Pingky}` },
            { name: "Potty", image: `${Potty}` }
          ].map((product, i) => (
            <div key={i} className="border p-2 rounded shadow-sm">
              <img src={product.image} alt={product.name} className="w-full h-40 mb-2" />
              <h4 className="font-semibold">{product.name}</h4>
              <p className="text-sm text-gray-500">Stylish item</p>
              <p className="text-yellow-600 font-bold">Rp 2.500.000</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="border px-6 py-2 text-yellow-400">Show More</button>
        </div>
      </section>

     {/* Inspiration Carousel */}
 <section className="bg-[#FFF3E3] py-10 px-4 md:px-20">
      <div className="flex flex-col md:flex-row md:items-center gap-10">
        {/* Text Section */}
        <div className="flex-1 max-w-md">
          <h2 className="text-[24px] md:text-[32px] font-medium tracking-wide mb-2 text-[#333]">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-gray-700 mb-6 text-[14px] leading-relaxed">
            Our designer already made a lot of beautiful prototypes of rooms that inspire you
          </p>
          <button className="bg-[#B88E2F] hover:bg-[#a87c20] text-white font-semibold px-6 py-3 text-sm">
            Explore More
          </button>
        </div>

        {/* Slider Section */}
        <div className="flex-1 flex gap-6 overflow-x-auto hide-scrollbar">
          {/* Slide 1 */}
          <div className="relative min-w-[300px] md:min-w-[350px]">
            <img
              src={Dinning}
              alt="Room Inspiration 1"
              className="rounded-lg object-cover h-[400px] w-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white/80 px-4 py-3 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">01 — Bed Room</p>
                <p className="text-md font-semibold">Inner Peace</p>
              </div>
              <button className="bg-[#B88E2F] text-white p-2 rounded-full">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="relative min-w-[300px] md:min-w-[350px]">
            <img
              src={Living}
              alt="Room Inspiration 2"
              className="rounded-lg object-cover h-[400px] w-full"
            />
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        <span className="h-2 w-2 rounded-full bg-[#B88E2F]"></span>
        <span className="h-2 w-2 rounded-full bg-gray-300"></span>
        <span className="h-2 w-2 rounded-full bg-gray-300"></span>
        <span className="h-2 w-2 rounded-full bg-gray-300"></span>
      </div>
    </section>

      <section className="text-center py-10">
      <h3 className="text-lg text-gray-500">Share your setup with</h3>
      <h2 className="text-3xl font-bold mb-6">#FurniroFurniture</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-20">
        <img src={Setup1} className="w-full h-44 " alt="Setup 1" />
        <img src={Setup2} className="w-full h-44 " alt="Setup 2" />
        <img src={Setup3} className="w-full h-44 " alt="Setup 3" />
        <img src={Setup4} className="w-full h-44 " alt="Setup 4" />
        <img src={Setup5} className="w-full h-44 " alt="Setup 5" />
        <img src={Setup6} className="w-full h-44 " alt="Setup 6" />
        <img src={Setup7} className="w-full h-44 " alt="Setup 7" />
        <img src={Setup8} className="w-full h-44 " alt="Setup 8" />
        <img src={Setup9} className="w-full h-44 " alt="Setup 9" />

      </div>
    </section>
      {/* <Footer /> */}
    </div>
  );
}
