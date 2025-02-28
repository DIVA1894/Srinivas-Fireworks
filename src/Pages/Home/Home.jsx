import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white w-full flex flex-col">
      {/* Navbar */}
      <nav className="bg-black text-white p-4 shadow-lg fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Srinivas Fireworks</h1>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">Products</a></li>
            <li><a href="#" className="hover:text-yellow-400">About</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>
      </nav>
      {/* Hero Section - 100% Full Screen */}
      <header
        className="flex-grow flex items-center justify-center bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://source.unsplash.com/1920x1080/?fireworks')",
          height: "100vh" // Ensures full screen
        }}
      >
        <div className="bg-black bg-opacity-50 p-10 text-center rounded-lg">
          <h2 className="text-5xl font-bold mb-4">Light Up Your Celebrations!</h2>
          <p className="text-xl">Discover a wide range of fireworks for every occasion.</p>
          <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400">
            Explore Now
          </button>
        </div>
      </header>

      {/* Footer - Sticks to Bottom */}
      <footer className="bg-black text-white text-center p-4">
        <p>© 2024 Srinivas Fireworks. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-yellow-400">Facebook</a>
          <a href="#" className="hover:text-yellow-400">Instagram</a>
          <a href="#" className="hover:text-yellow-400">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
