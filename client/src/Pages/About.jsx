import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFire } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-red-50 via-white to-yellow-50 min-h-screen flex flex-col items-center px-6 py-20">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold text-red-700 drop-shadow-lg">
          About Srinivas Fireworks
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Celebrating moments with the brightest fireworks since{" "}
          <span className="font-semibold text-black">1995</span>.
        </p>
      </div>

      <div className="mt-12 bg-white rounded-3xl shadow-2xl p-10 max-w-4xl w-full transition-all duration-300 hover:scale-[1.02]">
        {/* Our Story */}
        <div>
          <h3 className="text-3xl font-bold text-red-600 flex items-center gap-2">
            <FaFire className="text-red-500" /> Our Story
          </h3>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Srinivas Fireworks was founded with the vision of making
            celebrations more memorable. Based in{" "}
            <span className="font-semibold text-gray-900">Sivakasi</span>, the
            heart of India’s fireworks industry, we specialize in crafting
            high-quality, eco-friendly fireworks.
          </p>
        </div>

        {/* Commitment */}
        <div className="mt-10">
          <h3 className="text-3xl font-bold text-red-600">Our Commitment</h3>
          <ul className="mt-3 space-y-3 text-gray-700">
            <li>
              🎇 <strong>Safety First:</strong> All our products meet strict
              industry safety standards.
            </li>
            <li>
              🌿 <strong>Eco-Friendly:</strong> We create fireworks with minimal
              environmental impact.
            </li>
            <li>
              ⭐ <strong>Customer Satisfaction:</strong> We prioritize your joy
              and experience.
            </li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="mt-10">
          <h3 className="text-3xl font-bold text-red-600">Why Choose Us?</h3>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
            <li>Wide range of vibrant and high-quality fireworks.</li>
            <li>Affordable pricing with seasonal and festive discounts.</li>
            <li>
              Trusted by customers across India for over{" "}
              <span className="font-semibold text-black">29 years</span>.
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mt-10">
          <h3 className="text-3xl font-bold text-red-600">Visit Us</h3>
          <div className="mt-4 space-y-3 text-gray-700">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" />
              <strong>Location:</strong> Sivakasi, Tamil Nadu, India
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-500" />
              <strong>Call:</strong> +91 98765 43210
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              <strong>Email:</strong> info@srinivasfireworks.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
