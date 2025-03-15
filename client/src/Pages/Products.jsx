import React, { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Rocket", price: 100 },
  { id: 2, name: "Sparklers", price: 50 },
  { id: 3, name: "Crackers", price: 150 },
];

const Products = ({ cart, setCart }) => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, value) => {
    setQuantities({ ...quantities, [productId]: parseInt(value) || 1 });
  };

  const addToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">Our Products</h2>
      <div className="grid grid-cols-3 gap-4 mt-5">
        {products.map((product) => (
          <div key={product.id} className="p-4 border">
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <input
              type="number"
              min="1"
              defaultValue="1"
              onChange={(e) => handleQuantityChange(product.id, e.target.value)}
              className="border p-1 w-16"
            />
            <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 ml-2"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <Link to="/cart">
        <button className="mt-5 bg-green-500 text-white px-4 py-2 rounded">
          Go to Cart
        </button>
      </Link>
    </div>
  );
};

export default Products;
