import React from "react";
import img from "../assets/img/img.png"

const products = [
  {
    title: "tech",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "media",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "culinary",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const Product = () => {
  return (
    <div className="py-16 px-4 text-center h-screen">
      {/* Header */}
      
      <h2 className="text-2xl font-semibold mb-2">Products</h2>
      <p className="max-w-xl mx-auto text-gray-700 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="text-lg mb-16">
        There is something everyone deserves with{" "}
        <span className="font-bold">6te9</span>
      </p>

      {/* Centered Product Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative group border rounded-xl  cursor-pointer transition-all duration-300"
          >
            {/* Default View */}
            <div className="flex flex-col items-center justify-center p-24">
              <div>
                <img
                  src={img}
                  alt="placeholder"
                  className="w-24 h-24"
                />
              </div>
              <p className="absolute bottom-[-7px] bg-white px-4 z-1000 text-md">{product.title}</p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-xl">
              <div className="space-y-2">
                <p className="text-sm">{product.description}</p>
              </div>
              <div className="mt-6">
                <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-100 text-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
