import React from "react";
import { Link } from "react-router-dom";
import vid from "../assets/videoplayback (1).mp4";
import door from "../assets/fast-delivery.png";
import pay from "../assets/payment-method.png";
import sup from "../assets/support.png";
import TestimonialCard from "./TestimonialCard";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="relative min-h-screen">
        <div className="">
          <video
            src={vid}
            className="absolute -z-10 w-full h-screen object-cover"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
        <div className="absolute top-0 left-0 w-full h-screen bg-black/50 -z-5"></div>
        <div className="relative space-y-3 flex flex-col items-center justify-center h-full text-white text-center top-79">
          <h1
            style={{ fontFamily: "'Merriweather', serif" }}
            className="md:text-5xl text-3xl font-bold"
          >
            Celebrate Every Spark of Joy 🎇
          </h1>
          <p className="mt-2 text-xl font-light max-w-2xl">
            Dive into a world of vibrant fireworks and let your celebrations shine brighter than ever before. 
            We bring sparkle, sound, and smiles — all in one place!
          </p>
          <Link to="/products">
            <button
              className="relative inline-flex items-center justify-center px-4 py-2 
             text-md cursor-pointer font-bold text-white transition-all duration-300 
             rounded-full shadow-lg bg-gradient-to-r 
             from-yellow-400 via-yellow-500 to-orange-500 
             hover:from-yellow-500 hover:to-orange-600 
             hover:shadow-xl hover:scale-105"
            >
              <span className="relative z-10 tracking-wide uppercase">
                🔥 Ignite Your Spark
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div className="my-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-lg shadow-lg text-center flex flex-col items-center justify-center bg-white">
            <img src={door} className="h-[80px]" alt="Doorstep Delivery" />
            <h1 className="text-2xl md:text-3xl font-semibold m-2">
              Fast Delivery
            </h1>
            <p className="text-base md:text-lg text-gray-700">
              Get your fireworks delivered straight to your doorstep — safely, quickly, and on time.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-lg text-center flex flex-col items-center justify-center bg-white">
            <img src={sup} className="h-[80px]" alt="24/7 Support" />
            <h1 className="text-2xl md:text-3xl font-semibold m-2">
              Anytime Support
            </h1>
            <p className="text-base md:text-lg text-gray-700">
              Our team is always just a message away to help you with anything — from orders to fireworks tips!
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-lg text-center flex flex-col items-center justify-center bg-white">
            <img src={pay} className="h-[80px]" alt="Secure Payments" />
            <h1 className="text-2xl md:text-3xl font-semibold m-2">
              Trusted Payments
            </h1>
            <p className="text-base md:text-lg text-gray-700">
              Shop confidently with secure and seamless payment options for a stress-free experience.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="bg-yellow-200 text-center p-4 rounded shadow mx-6">
          <h2 className="text-2xl font-bold">🔥 Festive Bonanza is On!</h2>
          <p className="text-gray-800">
            Enjoy up to <span className="font-semibold">50% OFF</span> on bestselling fireworks. Don't miss out!
          </p>
        </div>
      </div>

      <div className="my-5">
        <h2 className="text-3xl font-bold text-center mt-10 mb-4">
          💬 What Customers Are Saying
        </h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center px-6">
          <TestimonialCard
            name="Ravi"
            text="Absolutely love the collection! Fast service and top quality."
          />
          <TestimonialCard
            name="Meena"
            text="Ordered for Diwali — smooth process and fireworks were stunning!"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
