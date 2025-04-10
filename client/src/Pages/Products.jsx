import { useEffect, useState } from "react";
import axios from "axios";

const CrackersPage = () => {
  const [groupedCrackers, setGroupedCrackers] = useState({});
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/crackers/getall-crackers")
      .then((res) => {
        setGroupedCrackers(res.data);
      })
      .catch((err) => {
        console.error("Error fetching crackers", err);
      });
  }, []);

  const handleQuantityChange = (id, price, value) => {
    const quantity = parseInt(value) || 0;
    setQuantities((prev) => ({
      ...prev,
      [id]: { quantity, price },
    }));
  };

  const getGrandTotal = () => {
    return Object.values(quantities).reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  return (
    <div className="p-4">
      {/* 🧾 Display Total Amount on Top */}
      <div className="sticky top-0 z-50 bg-green-100 text-green-800 font-semibold p-4 rounded-b shadow text-center text-xl">
        Total Amount: ₹{getGrandTotal()}
      </div>

      {/* 🎆 Crackers Tables by Type */}
      {Object.keys(groupedCrackers).map((type) => (
        <div key={type} className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">{type}</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-center">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">Image</th>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Price</th>
                  <th className="border p-2">Quantity</th>
                  <th className="border p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {groupedCrackers[type].map((cracker) => {
                  const { _id, image, name, price } = cracker;
                  const qty = quantities[_id]?.quantity || 0;
                  const total = qty * price;

                  return (
                    <tr key={_id}>
                      <td className="border p-2">
                        <img
                          src={image}
                          alt={name}
                          className="h-20 w-20 object-cover mx-auto"
                        />
                      </td>
                      <td className="border p-2">{name}</td>
                      <td className="border p-2">₹{price}</td>
                      <td className="border p-2">
                        <input
                          type="number"
                          min="0"
                          value={qty}
                          onChange={(e) =>
                            handleQuantityChange(_id, price, e.target.value)
                          }
                          className="w-16 border rounded px-2"
                        />
                      </td>
                      <td className="border p-2">₹{total}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CrackersPage;
