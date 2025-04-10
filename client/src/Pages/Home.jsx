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
            <ShinyButton className="mt-5 transparent cursor-pointer hover:scale-105 transition-all px-4 py-2 rounded">
              <h1 class="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Shop now
              </h1>
            </ShinyButton>
          </Link>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Home;
