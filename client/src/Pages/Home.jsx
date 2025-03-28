import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-300 to-orange-500 text-white text-center p-10">
      <h1 className="text-5xl font-extrabold drop-shadow-lg">Welcome to Srinivas Fireworks</h1>
      <p className="mt-4 text-xl font-medium drop-shadow-md">
        Explore our wide range of fireworks and light up your celebrations!
      </p>
      
      <Link to="/products">
        <button className="mt-6 bg-white text-orange-600 px-6 py-3 text-lg font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:bg-orange-600 hover:text-white">
          🎇 Shop Now
        </button>
      </Link>
      
      <div className="mt-10">
        <img 
          src="https://source.unsplash.com/800x500/?fireworks,celebration" 
          alt="Fireworks" 
          className="w-full max-w-2xl rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default Home;
