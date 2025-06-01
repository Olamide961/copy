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
import arrow from "../assets/img/arrow.png"

const Contact = () => {
  return (
    <div className="space-y-16 p-6 text-center">
      {/* Contact Form Section */}
      <div className="">
        <div className="flex flex-col border-b-2 border-red-400 ">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <div className="flex flex-col md:flex-row items-center justify-center mt-14">
          <p className="text-4xl font-medium ">Send us a message</p>
          <div >
            <img
            src={arrow}
            alt=""
            className="" />
          </div>
          <div className="ml-9 mb-6">
          <h2 className="text-xl mb-2 ml-9 text-center md:text-left">
            SEND US A MESSAGE
          </h2>
          <div className="w-full bg-gray-100 p-12 rounded-2xl shadow-xl max-w-sm">
      {/* Email */}
      <div className="relative mb-6 ">
        <label className="absolute -top-2 left-3 px-1 bg-gray-100 text-sm z-10">
          E-Mail
        </label>
        <input
          type="email"
          placeholder="info@example.com ..."
          className="w-full border border-black rounded-md px-3 py-2 focus:outline-none text-sm"
        />
      </div>

      {/* Mobile No */}
      <div className="relative mb-6">
        <label className="absolute -top-2 left-3 px-1 bg-gray-100 text-sm z-10">
          Mobile No
        </label>
        <input
          type="tel"
          placeholder="+ 000 0000 000"
          className="w-full border border-black rounded-md px-3 py-2 focus:outline-none text-sm"
        />
      </div>

      {/* Textarea */}
      <div className="relative mb-3">
        <label className="absolute -top-2 left-3 px-1 bg-gray-100 text-sm z-10">
          Text Field
        </label>
        <textarea
          placeholder="Placeholder ..."
          rows="3"
          className="w-full border border-black rounded-md px-3 py-2 focus:outline-none text-sm"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-24 bg-black text-white font-bold py-2 rounded-md hover:bg-gray-800"
      >
        SUBMIT
      </button>

      {/* Checkbox */}
      <div className="text-sm">
        <span className="mr-2 font-semibold">want us to give you a call ?</span>
        <input
          type="checkbox"
          className="w-5 h-5 border border-black rounded-md"
        />
      </div>
      </div>
        </div>
        </div>
        
      </div>

        </div>  
       
      <div className="border-b-2 border-red-400">
        <h3 className="text-lg tracking-widest text-gray-500 mb-9">SOCIALS</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-24">
          <div className="bg-gray-200 rounded-lg shadow-lg p-24 mb-6">
            <div className="grid grid-cols-3 gap-14">
              <div className="text-5xl text-blue-600 flex justify-center items-center">
                <FaLinkedin />
              </div>
              <div className="text-5xl text-blue-400 flex justify-center items-center">
                <FaTelegram />
              </div>
              <div className="text-5xl text-red-500 flex justify-center items-center">
                <MdEmail />
              </div>
              <div className="text-5xl text-pink-500 flex justify-center items-center">
                <FaInstagram />
              </div>
              <div className="text-5xl text-black flex justify-center items-center">
                <FaXTwitter />
              </div>
              <div className="text-5xl text-blue-700 flex justify-center items-center">
                <FaFacebook />
              </div>
            </div>
          </div>
          <p className="text-2xl font-medium">Connect with us on the socials</p>
        </div>
      </div>

      {/* News Updates Section */}
      <div className="mt-32">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="text-2xl font-medium text-center">
            <p>Get the latest news</p>
            <p>Promotional offers and Listings</p>
          </div>
          <div className="">
            <img 
            src={arrow}
            alt=""
            className="" />
          </div>
          
          <div className="w-full max-w-sm bg-gray-100 rounded-xl shadow-xl p-4 h-64 overflow-y-auto text-left text-sm space-y-2 ml-9">
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
      <div className="fixed -bottom-3 right-4 text-green-500 text-4xl">
        <FaWhatsapp />
      </div>
    </div>
  );
};

export default Contact;
