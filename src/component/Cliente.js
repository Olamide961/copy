import { useEffect, useRef } from "react";
import img from "../assets/img/img.png";


const partners = [
  { name: "Business Name", logo: "" },
  { name: "Business Name", logo: "" },
  { name: "Business Name", logo: "" },
  { name: "Business Name", logo: "" },
  { name: "Business Name", logo: "" },
  { name: "Business Name", logo: "" },
];

export default function Cliente () {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({
          left: 200,
          behavior: "smooth",
        });

        // Reset scroll if end reached
        if (
          carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
          carouselRef.current.scrollWidth
        ) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000); // scroll every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-14 py-10 px-4 text-center">
      <h2 className="text-xl font-semibold mb-6">Clientele</h2>
      <div
        ref={carouselRef}
        className="flex justify-center overflow-x-auto no-scrollbar space-x-6 px-4"
      >
        {partners.map((partner, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-36 text-center opacity-80 hover:opacity-100 transition"
          >
            <div className="border p-4 rounded">
              <img
                src={img}
                alt={partner.name}
                className="mx-auto w-20 h-20 object-contain"
              />
            </div>
            <p className="text-sm mt-2 text-gray-700">{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
