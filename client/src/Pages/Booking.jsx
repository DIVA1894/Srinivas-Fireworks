import React from "react";

const Booking = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold">Confirm Your Booking</h2>
      <form className="mt-4">
        <input type="text" placeholder="Name" className="border p-2 w-full" />
        <input type="text" placeholder="Phone Number" className="border p-2 w-full mt-2" />
        <textarea placeholder="Address" className="border p-2 w-full mt-2"></textarea>
        <button className="mt-4 bg-green-500 text-white px-4 py-2">Submit</button>
      </form>
    </div>
  );
};

export default Booking;
