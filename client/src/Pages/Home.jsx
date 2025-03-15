import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold">Welcome to Srinivas Fireworks</h1>
      <p className="mt-2 text-lg">Explore our wide range of fireworks.</p>
      <Link to="/products">
        <button className="mt-5 bg-yellow-500 text-white px-4 py-2 rounded">
          Shop Now
        </button>
      </Link>
    </div>
  );
};

export default Home;
