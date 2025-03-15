import React from "react";

const About = () => {
  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold text-center">About Srinivas Fireworks</h2>
      <p className="text-center text-gray-600 mt-2">
        Celebrating moments with the brightest fireworks since [Year of Establishment].
      </p>

      <div className="max-w-3xl mx-auto mt-5 p-5 border rounded-lg shadow-lg bg-white">
        <h3 className="text-xl font-semibold">Our Story</h3>
        <p className="mt-2 text-gray-700">
          Srinivas Fireworks was founded with the vision of making celebrations more 
          memorable. Based in Sivakasi, the heart of India's fireworks industry, we 
          specialize in crafting high-quality, eco-friendly fireworks.
        </p>

        <h3 className="text-xl font-semibold mt-4">Our Commitment</h3>
        <p className="mt-2 text-gray-700">
          🎇 Safety First: All our products meet industry safety standards.  
          🌿 Eco-Friendly: We strive to create fireworks with minimal environmental impact.  
          ⭐ Customer Satisfaction: We ensure the best experience for our customers.  
        </p>

        <h3 className="text-xl font-semibold mt-4">Why Choose Us?</h3>
        <ul className="list-disc pl-5 mt-2 text-gray-700">
          <li>Wide range of vibrant and high-quality fireworks.</li>
          <li>Affordable prices with special festive discounts.</li>
          <li>Trusted by customers across India for over [X] years.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Visit Us</h3>
        <p className="mt-2 text-gray-700">
          📍 <strong>Location:</strong> Sivakasi, Tamil Nadu, India  
          📞 <strong>Call:</strong> +91 98765 43210  
          📧 <strong>Email:</strong> info@srinivasfireworks.com  
        </p>
      </div>
    </div>
  );
};

export default About;
