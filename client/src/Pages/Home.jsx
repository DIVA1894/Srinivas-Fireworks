import React from "react";
import { Link } from "react-router-dom";
import vid from "../assets/videoplayback (1).mp4";
import { ShinyButton } from "../Components/magicui/shiny-button";
import { MagicCard } from "../Components/magicui/magic-card";
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
        <div className="relative flex flex-col items-center justify-center h-full text-white text-center top-79">
          <h1
            style={{ fontFamily: "'Poppins',serif" }}
            className="text-5xl font-bold"
          >
            Welcome to Srinivas Fireworks
          </h1>
          <p className="mt-2 text-lg">Explore our wide range of fireworks.</p>
          <Link to="/products">
            <ShinyButton className="mt-5 transparent cursor-pointer hover:scale-105 transition-all px-4 py-2 rounded">
              <h1 class="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Shop now
              </h1>
            </ShinyButton>
          </Link>
        </div>
      </div>
      <div className="my-10">
        <div className="grid grid-cols-3 px-5 gap-5">
          <MagicCard className="p-6 rounded-lg shadow-lg text-center flex flex-col items-center justify-center">
            <div className="flex justify-center">
              <img src={door} className="h-[80px]" alt="Doorstep Delivery" />
            </div>
            <h1 className="text-3xl font-bold m-2">Doorstep Delivery</h1>
            <p className="text-xl">
              Enjoy hassle-free shopping with our fast and reliable delivery
              service right to your location.
            </p>
          </MagicCard>

          <MagicCard className="p-6 rounded-lg shadow-lg text-center flex flex-col items-center justify-center">
            <div className="flex justify-center">
              <img src={sup} className="h-[80px]" alt="Doorstep Delivery" />
            </div>
            <h1 className="text-3xl font-bold m-2">24/7 Customer Support</h1>
            <p className="text-xl">
              Our team is available round the clock to assist you with orders,
              recommendations, and queries.
            </p>
          </MagicCard>
          <MagicCard className="p-6 rounded-lg shadow-lg text-center flex flex-col items-center justify-center">
            <div className="flex justify-center">
              <img src={pay} className="h-[80px]" alt="Doorstep Delivery" />
            </div>
            <h1 className="text-3xl text-center font-bold m-2">
              Easy & Secure Payments
            </h1>
            <p className="text-xl text-center">
              Choose from multiple safe payment options for a smooth shopping
              experience.
            </p>
          </MagicCard>
        </div>
      </div>

      <div className="">
        <div className="bg-yellow-200 text-center p-4 rounded shadow mx-6">
          <h2 className="text-2xl font-bold">🎉 Diwali Sale is Live!</h2>
          <p>Get up to 50% off on selected fireworks. Hurry up!</p>
        </div>
      </div>

      <div className="my-5">
        <h2 className="text-3xl font-bold text-center mt-10 mb-4">
          ❤️ What Our Customers Say
        </h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center px-6">
          <TestimonialCard
            name="Ravi"
            text="Best prices and super-fast delivery!"
          />
          <TestimonialCard
            name="Meena"
            text="Safe and vibrant fireworks. Loved it!"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
