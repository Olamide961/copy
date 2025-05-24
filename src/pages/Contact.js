import React from "react";
import {
  FaLinkedin,
  FaTelegram,
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="space-y-16 p-6 text-center">
      {/* Contact Form Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-24">
          <p className="text-lg font-medium">Send us a message</p>
          <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6 space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="tel"
              placeholder="Mobile No"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <checkbox className="text-sm text-gray-500">Want us to give you a call? </checkbox>
            <button className="w-full bg-black text-white py-2 rounded hover:bg-blue-700">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Socials Section */}
      <div>
        <h3 className="text-sm tracking-widest text-gray-500 mb-4">SOCIALS</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex gap-6 text-2xl justify-center">
              <FaLinkedin />
              <FaTelegram />
              <MdEmail />
              <FaInstagram />
              <FaXTwitter />
              <FaFacebook />
            </div>
          </div>
          <p className="text-lg font-medium">Connect with us on the socials</p>
        </div>
      </div>

      {/* News Updates Section */}
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="text-lg font-medium text-center">
            <p>Get the latest news</p>
            <p>Promotional offers and Listings</p>
          </div>
          <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-4 h-64 overflow-y-auto text-left text-sm space-y-2">
            {[...Array(6)].map((_, i) => (
              <div key={i}>
                <div>Product News: lorem ipsum</div>
                <div className="text-blue-600 font-medium">Promo: 50% Percent OFF</div>
              </div>
            ))}
            <div className="text-blue-600 font-medium mt-2">Don’t miss out on our offers</div>
          </div>
        </div>
      </div>

      {/* WhatsApp Icon */}
      <div className="fixed bottom-4 right-4 text-green-500 text-4xl">
        <FaWhatsapp />
      </div>
    </div>
  );
};

export default Contact;
