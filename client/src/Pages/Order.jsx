import React, { useState } from "react";
import axios from "axios";

const Order = () => {
  const selectedItems = [
    {
      name: "Hydrogen Bomb",
    },
  ];
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const amount = selectedItems.length * 100; 

  const handlePayment = async () => {
    if (!name || !mobile || !address || !email || selectedItems.length === 0) {
      alert("Please fill all details and select items.");
      return;
    }

    const options = {
      key: "rzp_test_4rdgre6savrrmw",
      amount: amount * 100, 
      currency: "INR",
      name: "Srinivas Fireworks",
      description: "Order Payment",
      handler: async function (response) {
        alert(`Payment successful: ${response.razorpay_payment_id}`);

        await axios.post("http://localhost:5000/api/payments/save-payment", {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          amount: amount * 100,
          customer_name: name,
          customer_email: email,
        });

        await axios.post("http://localhost:5000/api/orders/place-order", {
          name,
          phone: mobile,
          address,
          items: selectedItems.map((item) => item.name),
        });

        alert("Order placed successfully!");
        setName("");
        setMobile("");
        setAddress("");
        setEmail("");
      },
      prefill: {
        name: name,
        email: email,
        contact: mobile,
      },
      theme: {
        color: "#f37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="order-form">
      <h2>Place Your Order</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Shipping Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      ></textarea>

      <h4>Selected Items:</h4>
      <ul>
        {selectedItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>

      <button onClick={handlePayment}>
        Make Payment ₹{(amount * 100) / 100}
      </button>
    </div>
  );
};

export default Order;
