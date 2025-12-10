import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/cargo-truck.png"; // replace with your logo

export default function Receipt({ ride }) {
  // `ride` could be passed via state or props with details
  const {
    riderName = "Adebayo Samuel",
    riderId = "RH-1001",
    vehicle = "Toyota Hiace",
    location = "Warri",
    date = new Date().toLocaleDateString(),
    price = "₦5,000",
  } = ride || {};

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-10">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <img src={logo} alt="Company Logo" className="w-16 h-16" />
          <h1 className="text-2xl font-bold text-gray-800">Prestige Haul</h1>
        </div>

        {/* Receipt Info */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Ride Receipt</h2>
          <p className="text-gray-600 text-sm">Date: {date}</p>
          <p className="text-gray-600 text-sm">Rider: {riderName}</p>
          <p className="text-gray-600 text-sm">Rider ID: {riderId}</p>
          <p className="text-gray-600 text-sm">Vehicle: {vehicle}</p>
          <p className="text-gray-600 text-sm">Pickup Location: {location}</p>
        </div>

        {/* Price Section */}
        <div className="flex justify-between items-center border-t border-gray-200 pt-4">
          <span className="font-semibold text-gray-700">Total:</span>
          <span className="text-lg font-bold text-gray-800">{price}</span>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>Thank you for choosing Prestige Haul!</p>
          <p>
            <Link to="/" className="text-blue-600 hover:underline">
              Back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
