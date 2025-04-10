import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // You can use any icon library like lucide or heroicons

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isHomePage && !isScrolled ? "bg-transparent" : "bg-white shadow-md"
  }`;

  const textColor = isHomePage && !isScrolled ? "text-white" : "text-black";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="z-50">
      <nav className={navbarClasses}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div>
            <h1
              className={`text-3xl font-bold ${textColor} transition-all duration-300`}
              style={{ fontFamily: "'Tektur', serif" }}
            >
              Srinivas Fireworks
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul
            style={{ fontFamily: "'Poppins', serif" }}
            className={`hidden md:flex text-xl font-semibold gap-5 ${textColor} transition-all duration-300`}
          >
            <Link to="/" className="hover:text-red-400 transition-all">
              Home
            </Link>
            <Link to="/products" className="hover:text-red-400 transition-all">
              Shop
            </Link>
            <Link to="/cart" className="hover:text-red-400 transition-all">
              Cart
            </Link>
            <Link to="/contact" className="hover:text-red-400 transition-all">
              Contact
            </Link>
          </ul>

          {/* Mobile Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={`focus:outline-none ${textColor}`}>
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className={`md:hidden px-4 pb-4 pt-2 ${textColor}`}>
            <ul
              style={{ fontFamily: "'Poppins', serif" }}
              className="flex flex-col gap-3 text-lg font-semibold"
            >
              <Link to="/" onClick={toggleMenu} className="hover:text-red-400">
                Home
              </Link>
              <Link to="/products" onClick={toggleMenu} className="hover:text-red-400">
                Shop
              </Link>
              <Link to="/cart" onClick={toggleMenu} className="hover:text-red-400">
                Cart
              </Link>
              <Link to="/contact" onClick={toggleMenu} className="hover:text-red-400">
                Contact
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
