import React from "react";
import { Link } from "react-router-dom";
import vid from "../assets/videoplayback (1).mp4";
import { ShinyButton } from "../Components/magicui/shiny-button";
import { MagicCard } from "../Components/magicui/magic-card";
import door from "../assets/fast-delivery.png";

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
            style={{ fontFamily: "'poppins',serif" }}
            className="text-5xl font-bold"
          >
            Welcome to Srinivas Fireworks
          </h1>
          <p className="mt-2 text-lg">Explore our wide range of fireworks.</p>
          <Link to="/products">
            <ShinyButton className="mt-5 bg-green-300 cursor-pointer hover:scale-105 transition-all px-4 py-2 rounded">
              Shop Now
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
              <img src={door} className="h-[80px]" alt="Doorstep Delivery" />
            </div>
            <h1 className="text-3xl font-bold m-2">
              24/7 Customer Support
            </h1>
            <p className="text-xl">
              Our team is available round the clock to assist you with orders,
              recommendations, and queries.
            </p>
          </MagicCard>
          <MagicCard className="p-6 rounded-lg shadow-lg text-center flex flex-col items-center justify-center">
          <div className="flex justify-center">
              <img src={door} className="h-[80px]" alt="Doorstep Delivery" />
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
    </div>
  );
};

export default Home;
