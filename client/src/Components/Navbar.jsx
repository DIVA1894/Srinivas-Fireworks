import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`shadow-md p-4 ${
        isHomePage
          ? "absolute top-0 left-0 right-0 bg-transparent z-50"
          : "relative bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <h1 className={`text-3xl font-bold transition-all duration-300 ${
            isHomePage && !isScrolled ? 'text-white' : 'text-black'
          }`} style={{fontFamily : "'Tektur',serif"}}>
            Srinivas Fireworks
          </h1>
        </div>
        <div>
          <ul style={{fontFamily:"'poppins',serif"}} className={`text-xl font-semibold flex gap-5 transition-all duration-300 ${
            isHomePage && !isScrolled ? 'text-white' : 'text-black'
          }`}>
            <Link to="/" className='hover:text-red-300 cursor-pointer transition-all'>Home</Link>
            <Link to="/products" className='hover:text-red-300 cursor-pointer transition-all'>Shop</Link>
            <Link to="/cart" className='hover:text-red-300 cursor-pointer transition-all'>Cart</Link>
            <Link to="/contact" className='hover:text-red-300 cursor-pointer transition-all'>Contact</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
