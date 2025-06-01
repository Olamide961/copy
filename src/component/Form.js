import img from "../assets/img/img.png";
import path from "../assets/img/Path.png"

export default function Form() {
  const products = [
    { label: "6te9 tech" },
    { label: "6te9 media" },
    { label: "6te9 culinary" },
  ];

  return (
    <div className="flex flex-col mt-20 md:flex-row justify-center items-center p-6 space-y-6 md:space-y-0 md:space-x-6">
      {/* PRODUCTS AND SVG CONTAINER */}
      <div className="flex items-center space-x-4">
        {/* Product List */}
        <div className="flex flex-row items-center space-x-9">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="relative w-44 h-44 border border-gray-300 rounded-lg flex items-center justify-center"
            >
              <img src={img} alt={item.label} className="w-8 h-8" />
              <div className="absolute bottom-[-10px] bg-white px-2 z-10 text-xs">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* SVG close to product list */}
        <div className="ml-2">
          <img
          src={path}
          alt="path"
          className="w-32 h-24"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left">
        <p className="mb-14 text-3xl md:text-3xl tracking-widest text-gray-700">
          What can we offer <br /> <span className="block text-center">You</span>
        </p>
      </div>
    </div>
  );
}
