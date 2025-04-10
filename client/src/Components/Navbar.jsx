import React from "react";
import { Link, useLocation } from "react-router-dom";

const SimpleNavbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`shadow-md p-4 ${
        isHomePage
          ? "absolute top-0 left-0 right-0 bg-transparent z-50"
          : "relative bg-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1
          className={`text-2xl font-bold ${
            isHomePage ? "text-white" : "text-red-600"
          }`}
          style={{ fontFamily: "'Tektur', sans-serif" }}
        >
          Srinivas Fireworks
        </h1>
        <ul
          className={`flex gap-6 text-lg font-medium ${
            isHomePage ? "text-white" : "text-gray-800"
          }`}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <li>
            <Link to="/" className="hover:text-pink-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-pink-300">
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-pink-300">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-pink-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SimpleNavbar;
