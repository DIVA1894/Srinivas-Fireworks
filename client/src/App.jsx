import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Booking from "./Pages/Booking";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
