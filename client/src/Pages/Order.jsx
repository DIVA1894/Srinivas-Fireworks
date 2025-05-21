import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Order = ({ selectedItems = [], totalAmount = 0, closePopup }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    document.body.appendChild(script);
  }, []);

  const generateInvoice = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const title = "Invoice - Srinivas Fireworks";
    const textWidth = doc.getTextWidth(title);
    const x = (pageWidth - textWidth) / 2;

    doc.setFontSize(16);
    doc.text(title, x, 15);

    doc.setFontSize(12);
    doc.text(`Customer Name: ${name}`, 14, 30);
    doc.text(`Phone: ${mobile}`, 14, 40);
    doc.text(`Email: ${email}`, 14, 50);
    doc.text(`Address: ${address}`, 14, 60);

    autoTable(doc, {
      startY: 70,
      head: [["Product", "Quantity", "Price", "Total"]],
      body: selectedItems.map((item) => [
        item.name,
        item.quantity,
        `Rs. ${item.price}`,
        `Rs. ${item.total}`,
      ]),
    });

    const finalY = doc.lastAutoTable.finalY || 100;
    doc.text(`Total Amount: Rs. ${totalAmount}`, 14, finalY + 10);
    doc.save("invoice.pdf");
  };

  const handlePayment = async () => {
    if (!razorpayLoaded) return alert("Razorpay not loaded yet.");

    if (!name || !mobile || !address || !email || selectedItems.length === 0) {
      return alert("Please fill all details and select items.");
    }

    try {
      // Step 1: Place Order
      const orderRes = await axios.post(
        "https://srinivas-fireworks-backend.onrender.com/api/orders/place-order",
        {
          name,
          phone: mobile,
          email,
          address,
          items: selectedItems,
        }
      );

      const orderId = orderRes.data.order._id;

      const options = {
        key: "rzp_test_4rdgre6savrrmw", // Replace with your key
        amount: totalAmount * 100,
        currency: "INR",
        name: "Srinivas Fireworks",
        description: "Order Payment",
        handler: async function (response) {
          alert(`Payment successful: ${response.razorpay_payment_id}`);

          await axios.post("https://srinivas-fireworks-backend.onrender.com/api/payments/save-payment", {
            orderId,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            amount: totalAmount * 100,
            currency: "INR",
            customer_name: name,
            customer_email: email,
          });

          generateInvoice();
          alert("Order placed successfully!");

          setName("");
          setMobile("");
          setAddress("");
          setEmail("");

          if (typeof closePopup === "function") closePopup();
        },
        prefill: {
          name,
          email,
          contact: mobile,
        },
        theme: { color: "#f37254" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment failed:", err);
      alert("Error placing order or payment.");
    }
  };

  return (
    <div className="p-2 max-w-3xl mx-auto bg-white rounded-lg mt-3">
      <h2 className="text-2xl font-bold mb-4">Place Your Order</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 mb-3 rounded"
      />
      <input
        type="text"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        className="w-full border p-2 mb-3 rounded"
      />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-2 mb-3 rounded"
      />
      <textarea
        placeholder="Shipping Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full border p-2 mb-4 rounded"
      ></textarea>
      <h4 className="text-lg font-semibold mb-2">Selected Items:</h4>
      <ul className="mb-4">
        {selectedItems.map((item, index) => (
          <li key={index} className="text-gray-700">
            ✅ {item.name} — {item.quantity} × ₹{item.price} = ₹{item.total}
          </li>
        ))}
      </ul>
      <div className="text-xl font-bold mb-4">💰 Total: ₹{totalAmount}</div>
      <button
        onClick={handlePayment}
        disabled={!razorpayLoaded}
        className={`${
          razorpayLoaded
            ? "bg-green-500 hover:bg-green-600"
            : "bg-gray-400 cursor-not-allowed"
        } text-white px-5 py-3 rounded-lg w-full`}
      >
        {razorpayLoaded
          ? `Make Payment ₹${totalAmount}`
          : "Loading Payment Gateway..."}
      </button>
    </div>
  );
};

export default Order;
