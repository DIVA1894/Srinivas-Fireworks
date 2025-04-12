import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Catalogue from "../assets/catalogue.pdf";

const SimpleNavbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgClass = isHomePage
    ? isScrolled
      ? "bg-white shadow-md"
      : "bg-gradient-to-b from-black to-black/0"
    : "bg-white shadow-md";

  const textColor = isHomePage && !isScrolled ? "text-white" : "text-red-600";
  const linkColor = isHomePage && !isScrolled ? "text-white" : "text-gray-800";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <h1
          className={`text-2xl font-bold transition-all duration-300 ${textColor}`}
          style={{ fontFamily: "'Tektur', sans-serif" }}
        >
          Srinivas Fireworks
        </h1>
        <ul
  className={`flex gap-6 text-lg font-medium transition-all duration-300 ${linkColor}`}
  style={{ fontFamily: "'Poppins', sans-serif" }}
>
  <li>
    <Link to="/" className="hover:text-red-500">Home</Link>
  </li>
  <li>
    <Link to="/products" className="hover:text-red-500">Products</Link>
  </li>
  <li>
    <Link to="/cart" className="hover:text-red-500">Cart</Link>
  </li>
  <li>
    <Link to="/contact" className="hover:text-red-500">Contact</Link>
  </li>
  <li>
    <a
      href={Catalogue}
      download="catalogue.pdf"
      className="hover:text-red-500"
    >
      Catalogue
    </a>
  </li>
</ul>

      </div>
    </nav>
  );
};

export default SimpleNavbar;
