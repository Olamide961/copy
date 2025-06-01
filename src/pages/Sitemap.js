import React from "react";

export default function  Sitemap() {
  return (
    <div className="min-h-screen p-8 relative">
      <div className="flex justify-center mb-10 relative">
        <div className="text-white bg-black px-8 py-4 rounded-md text-xl font-bold">6te9 LTD</div>
      </div>

      <div className="flex justify-center items-start space-x-8">
        {/* 6te9 Tech Column */}
        <div className="flex flex-col items-center">
          <div className="bg-black text-white w-52 h-40 rounded-md flex items-center justify-center font-semibold mb-2">6te9 tech</div>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-gray-300 w-52 h-9 rounded mb-2"></div>
          ))}
        </div>

        {/* 6te9 Media Column */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-400 text-white w-52 h-40 rounded-md flex items-center justify-center font-semibold mb-2">6te9 media</div>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-blue-200 w-52 h-9 rounded mb-2"></div>
          ))}
        </div>

        {/* 6te9 Culinary Column */}
        <div className="flex flex-col items-center">
          <div className="bg-orange-500 text-white w-52 h-40 rounded-md flex items-center justify-center font-semibold mb-2">6te9 culinary</div>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-orange-200 w-52 h-9 rounded mb-2"></div>
          ))}
        </div>

        {/* Side Navigation */}
        <div className="flex flex-col ml-10 space-y-4">
          <button className="flex items-center bg-gray-200 px-4 py-2 rounded-full space-x-2">
            <span className="w-3 h-3 bg-white border rounded-full"></span>
            <span>About Us</span>
          </button>
          <button className="flex items-center bg-gray-200 px-4 py-2 rounded-full space-x-2">
            <span className="w-3 h-3 bg-white border rounded-full"></span>
            <span>Products</span>
          </button>
          <button className="flex items-center bg-gray-200 px-4 py-2 rounded-full space-x-2">
            <span className="w-3 h-3 bg-white border rounded-full"></span>
            <span>Contact Us</span>
          </button>
        </div>
      </div>

      {/* WhatsApp Icon */}
      <div className="fixed bottom-4 right-4">
        <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp" className="w-12 h-12" />
      </div>
    </div>
  );
}
