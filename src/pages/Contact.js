import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaTelegram, FaInstagram, FaXTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="space-y-16 p-6 text-center">
      {/* Contact Form Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-8">Contact Us</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <p className="text-lg font-medium">Send us a message</p>
          <Card className="w-full max-w-sm shadow-md">
            <CardContent className="space-y-4 p-6">
              <Input placeholder="Email" type="email" />
              <Input placeholder="Mobile No" type="tel" />
              <Input placeholder="Your Message" type="text" />
              <div className="text-sm text-gray-500">Want us to give you a call?</div>
              <Button className="w-full">Submit</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Socials Section */}
      <div>
        <h3 className="text-sm tracking-widest text-gray-500 mb-4">SOCIALS</h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <Card className="shadow-md p-4">
            <CardContent className="flex gap-6 text-2xl justify-center">
              <FaLinkedin />
              <FaTelegram />
              <MdEmail />
              <FaInstagram />
              <FaXTwitter />
              <FaFacebook />
            </CardContent>
          </Card>
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
          <Card className="w-full max-w-sm shadow-md">
            <CardContent className="p-4 h-64 overflow-y-auto text-left text-sm space-y-2">
              {[...Array(6)].map((_, i) => (
                <div key={i}>
                  <div>Product News: lorem ipsum</div>
                  <div className="text-blue-600 font-medium">Promo: 50% Percent OFF</div>
                </div>
              ))}
              <div className="text-blue-600 font-medium mt-2">Don’t miss out on our offers</div>
            </CardContent>
          </Card>
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
