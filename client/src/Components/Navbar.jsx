import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-red-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Srinivas Fireworks</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
