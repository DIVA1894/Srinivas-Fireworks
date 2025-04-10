import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // Get current route
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Check if user is on the Home Page
  const isHomePage = location.pathname === "/";

  return (
    <div
      className={`fixed z-50 w-full transition-all duration-300 ${
        isHomePage
          ? isScrolled
            ? 'bg-white shadow-md' // Change when scrolled
            : 'bg-gradient-to-b from-black to-black/0' // Transparent when at the top
          : 'bg-white shadow-md' // White navbar for all other pages
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
    </div>
  );
};

export default Navbar;
