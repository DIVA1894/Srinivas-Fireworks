import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Order from "./Pages/Order";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Footer from "./Components/Footer";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/products" element={<Products/>} />
        {/* <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} /> */}
        <Route path="/booking" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
