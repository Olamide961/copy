import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img from "../assets/img/img.png"
import img4 from "../assets/img/img4.png"
const shops = [
  {
    title: "tech shop",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:{img}, // replace with your actual image
  },
  {
    title: "media shop",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    image: "https://via.placeholder.com/100",
  },
  {
    title: "culinary shop",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    image: "https://via.placeholder.com/100",
  },
];

export default function ShopCarousel() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? shops.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === shops.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex justify-center items-center p-8 mt-9 space-x-2 max-w-screen-xl mx-auto">
      {/* Left Title */}
      <h2 className="text-4xl font-light tracking-wide text-gray-800">shops</h2>

      {/* Carousel */}
      <div className="flex items-center space-x-4">
        <button
          onClick={prevSlide}
          className="border rounded-full p-2 hover:bg-gray-100"
        >
          <ChevronLeft />
        </button>

        {/* Image & Details */}
        <div className="flex items-center space-x-6">
          {/* Image Box */}
          <div className="w-40 h-40 border flex items-center justify-center">
            <img
              src={img}
              alt={shops[index].title}
              className="w-16 h-16"
            />
          </div>

          {/* Details */}
          <div className="max-w-xs text-left">
            <h3 className="text-sm font-semibold mb-2 capitalize">
              {shops[index].title}
            </h3>
            <p className="text-xs text-gray-600 mb-3">{shops[index].description}</p>
            <button className="bg-black text-white text-xs py-1 px-4 rounded">
              Start Shopping
            </button>

            {/* Dots */}
            <div className="flex items-center mt-3 space-x-1">
              {shops.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === index ? "bg-black" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="border rounded-full p-2 hover:bg-gray-100"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Large Background Icon (optional) */}
      <div className="hidden lg:block">
        <img
          src={img4}
          alt="Background Art"
          className="w-48 h-48 object-contain opacity-60"
        />
      </div>
    </div>
  );
}
