import { useEffect, useState } from "react";
import Order from "./Order";
import axios from "axios";

const CrackersPage = () => {
  const [groupedCrackers, setGroupedCrackers] = useState({});
  const [quantities, setQuantities] = useState({});
  const [showOrderPopup, setShowOrderPopup] = useState(false);

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

  const getSelectedItems = () => {
    const selected = [];

    Object.entries(quantities).forEach(([id, { quantity, price }]) => {
      if (quantity > 0) {
        const cracker = Object.values(groupedCrackers)
          .flat()
          .find((item) => item._id === id);

        if (cracker) {
          selected.push({
            name: cracker.name,
            quantity,
            price,
            total: price * quantity,
          });
        }
      }
    });

    return selected;
  };

  const handleCheckout = () => {
    const selectedItems = getSelectedItems();
    if (selectedItems.length === 0) {
      alert("Please select at least one item.");
      return;
    }
    setShowOrderPopup(true);
  };

  const closePopup = () => {
    setShowOrderPopup(false);
  };

  return (
    <div className="pt-16 px-8 relative">
      <div className="p-6 bg-gradient-to-br from-yellow-50 to-red-50 min-h-screen">
        <div className="sticky top-18 bg-green-200 text-green-900 font-bold p-4 rounded-md shadow-md text-center text-2xl mb-6">
          💰 Total Amount: ₹{getGrandTotal()}
        </div>

        {Object.keys(groupedCrackers).map((type) => (
          <div key={type} className="mb-12">
            <h2 className="text-3xl font-extrabold text-red-600 mb-6 border-l-4 border-red-500 pl-3">
              🎇 {type}
            </h2>

            <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
              <table className="min-w-full text-center">
                <thead className="bg-gray-100 border-b">
                  <tr className="text-gray-700">
                    <th className="p-4">Image</th>
                    <th className="p-4">Name</th>
                    <th className="p-4">Price</th>
                    <th className="p-4">Quantity</th>
                    <th className="p-4">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {groupedCrackers[type].map((cracker, index) => {
                    const { _id, image, name, price } = cracker;
                    const qty = quantities[_id]?.quantity || 0;
                    const total = qty * price;

                    return (
                      <tr
                        key={_id}
                        className={`hover:bg-yellow-50 ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                      >
                        <td className="p-4">
                          <img
                            src={image}
                            alt={name}
                            className="h-20 w-20 object-cover mx-auto rounded shadow-md"
                          />
                        </td>
                        <td className="p-4 text-lg font-medium">{name}</td>
                        <td className="p-4 text-green-700 font-semibold">
                          ₹{price}
                        </td>
                        <td className="p-4">
                          <input
                            type="number"
                            min="0"
                            value={qty}
                            onChange={(e) =>
                              handleQuantityChange(_id, price, e.target.value)
                            }
                            className="w-20 text-center border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-red-300"
                          />
                        </td>
                        <td className="p-4 text-blue-800 font-semibold">
                          ₹{total}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <div className="text-center mt-10">
          <button
            onClick={handleCheckout}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-xl shadow-lg"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Order Popup Modal */}
      {showOrderPopup && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.48)] flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Order
              selectedItems={getSelectedItems()}
              totalAmount={getGrandTotal()}
              closePopup={closePopup}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CrackersPage;

