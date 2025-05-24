import img from "../assets/img/img.png";

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
        <div className="flex flex-row items-center space-x-4">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="relative w-24 h-24 border border-gray-300 rounded-lg flex items-center justify-center"
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
          <svg
            width="60"
            height="60"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49 310.784C49 310.784 55.8767 201.811 81.9121 196.645C107.948 191.48 169.612 267.296 188.066 260.808C206.52 254.321 194.058 155.388 217.361 148.612C235.914 143.216 266.26 215.58 283.99 206.113C301.721 196.645 288.02 158.236 300.978 139.676C313.937 121.115 336.988 111.221 350.241 111.221"
              stroke="#000"
              strokeOpacity="0.9"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M325.961 89.2161C325.961 89.2161 346.799 108.461 350.278 111.319C353.757 114.177 343.558 133.629 343.558 144.608"
              stroke="#000"
              strokeOpacity="0.9"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left">
        <p className="mb-14 text-3xl md:text-3xl tracking-widest text-gray-700">
          What can we offer you
        </p>
      </div>
    </div>
  );
}
