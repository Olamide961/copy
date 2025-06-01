import { useEffect, useRef } from "react";
import img from "../assets/img/img.png"; // Replace with real image path

const partners = [
  { id: 1, name: "Business Name", image: "" },
  { id: 2, name: "Business Name", image: "" },
  { id: 3, name: "Business Name", image: "" },
  { id: 4, name: "Business Name", image: "" },
  { id: 5, name: "Business Name", image: "" },
];

const totalItems = partners.length;
const extendedPartners = [...partners, ...partners]; // Duplicate for seamless loop

export default function PartnersCarousel () {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Partners & Affiliates</h2>
      <div className="overflow-hidden">
        <div
          className="flex animate-scroll"
          style={{
            width: `${(extendedPartners.length / totalItems) * 100}%`,
          }}
        >
          {extendedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 flex justify-center items-center flex-col"
              style={{ width: `${50/ totalItems}%` }}
            >
              <img
                src={img}
                alt={partner.name}
                className="w-32 h-48 object-cover mb-2"
              />
              <p className="text-gray-600 text-center">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};