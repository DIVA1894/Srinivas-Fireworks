import React from "react";
import { Link } from "react-router-dom";
import vid from "../assets/videoplayback (1).mp4";

const Home = () => {
  return (
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
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center top-72">
        <h1 className="text-5xl font-bold">Welcome to Srinivas Fireworks</h1>
        <p className="mt-2 text-lg">Explore our wide range of fireworks.</p>
        <Link to="/products">
          <button className="mt-5 bg-yellow-500 text-white px-4 py-2 rounded">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
