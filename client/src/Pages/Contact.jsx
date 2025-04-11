import React from "react";

const Contact = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold text-center">Contact Us</h2>
      <p className="text-center text-gray-600 mt-2">
        Have questions? Reach out to us!
      </p>

      <div className="max-w-lg mx-auto mt-5 p-5 border rounded-lg shadow-lg">
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 w-full rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-2 w-full rounded"
          />
          <input
            type="text"
            placeholder="Your Phone Number"
            className="border p-2 w-full rounded"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="border p-2 w-full rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>

      

      <div className="text-center mt-5">
        <p>📞 Phone: +91 98765 43210</p>
        <p>📧 Email: contact@srinivasfireworks.com</p>
        <p>📍 Address: Sivakasi, Tamil Nadu, India</p>
      </div>
    </div>
  );
};

export default Contact;
