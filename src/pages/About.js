import React from "react";
import { FaUsers, FaChalkboardTeacher, FaHandshake, FaLightbulb, FaUserTie, FaUserFriends } from "react-icons/fa";

export default function AboutUsPage() {
  return (
    <div className="p-6 space-y-12 max-w-6xl mx-auto text-center">
      <h1 className="text-2xl font-semibold underline">About Us</h1>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 text-left">
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <FaUsers /> ABOUT US
            </div>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <FaChalkboardTeacher /> Mission & Vision
            </div>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
        </div>
        <div>
          <div className="bg-gray-300 h-64 w-full rounded-xl" />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-lg font-semibold">Team Members</h2>
        <div className="border rounded-lg p-4 max-w-md mx-auto bg-white">
          <img src="https://via.placeholder.com/150" alt="team" className="mx-auto mb-2" />
          <p className="font-medium">Boss Leo</p>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        <div className="mt-2 flex justify-center gap-4 text-xl">
          <button>{"<"}</button>
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>
          <button>{">"}</button>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Core Value</h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div>
            <FaUsers className="text-xl mb-1" />
            <p className="font-semibold">Teamwork</p>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet...</p>
          </div>
          <div>
            <FaHandshake className="text-xl mb-1" />
            <p className="font-semibold">Integrity</p>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet...</p>
          </div>
          <div>
            <FaUserTie className="text-xl mb-1" />
            <p className="font-semibold">Professionalism</p>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet...</p>
          </div>
          <div>
            <FaLightbulb className="text-xl mb-1" />
            <p className="font-semibold">Innovation</p>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet...</p>
          </div>
          <div>
            <FaUserFriends className="text-xl mb-1" />
            <p className="font-semibold">Customer-Focused</p>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet...</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Sustainability</h2>
        <div className="border rounded-md overflow-hidden">
          <button className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 font-medium">Commitments to CO2 Per Worker & Project Execution</button>
          <div className="p-4 text-sm text-gray-600 border-t">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
        </div>
        <div className="mt-4 divide-y divide-gray-200 text-left">
          <div className="py-2 cursor-pointer hover:text-blue-600">Sustainable Growth</div>
          <div className="py-2 cursor-pointer hover:text-blue-600">Thoughtful Swap</div>
          <div className="py-2 cursor-pointer hover:text-blue-600">Less Commute</div>
        </div>
      </div>

      <div className="text-left">
        <h2 className="text-lg font-semibold text-center">History & Growth Projection</h2>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula ex eu lacus congue, ac sollicitudin neque ullamcorper...</p>
      </div>
    </div>
  );
}
