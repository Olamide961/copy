import img from "../assets/img/img.png"

export default function Product() {
    const products = [
        {label: "6te9 tech"},
        {label: "6te9 media"},
        {label: "6te9 culinary"},
    ]
    return (
      <section className="py-16 px-4 text-center">
        {/* Section Title */}
        <h2 className="text-xl font-medium inline-block relative mb-2">Products
            <span className="block h-0.5 w-1/2 bg-gray-400 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full"></span>
        </h2>
        <p className="max-w-md mx-auto text-sm font-thin leading-relaxed mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
  
        {/* Subheading */}
        <h3 className="text-lg font-base tracking-wider mb-9">
          There is something everyone deserves with <span className="font-bold">6te9</span>
        </h3>

        <div></div>
        <div className="flex justify-center items-center space-x-14">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="relative w-40 h-40 border border-gray-300 rounded-lg flex items-center justify-center"
            >
              <img src={img} alt={item.label} className="w-8 h-8" />
              <div className="absolute bottom-[-10px] bg-white px-2 z-10 text-xs">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row justify-center mt-32">
          <div>
          <span className="absolute block h-1 w-32 bg-gray-400 left-1/2 transform -translate-x-1/2 translate-y-full"></span>
          </div>
          
          <div className="mt-1.5">
            <p className="text-sm">We understand the distinct difference between problem and their solution</p>
          </div>  
        </div>
      </section>
    );
  }
  