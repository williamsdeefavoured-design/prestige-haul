import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import { FaTrash } from "react-icons/fa";
import logo from "../assets/cargo-truck.png";

export default function History() {
  const [rides, setRides] = useState([]);
  const [selectedRide, setSelectedRide] = useState(null);

  // Load saved rides from localStorage
  useEffect(() => {
    const savedRides = JSON.parse(localStorage.getItem("ridesHistory") || "[]");
    setRides(savedRides);
  }, []);

  // Delete a ride
  const deleteRide = (index) => {
    const updated = rides.filter((_, i) => i !== index);
    setRides(updated);
    localStorage.setItem("ridesHistory", JSON.stringify(updated));
  };

  // Download selected ride as PDF
  const downloadPDF = (ride) => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Prestige Haul Receipt", 20, 20);
    doc.setFontSize(12);
    doc.text(`Date: ${ride.date}`, 20, 40);
    doc.text(`Rider: ${ride.riderName}`, 20, 50);
    doc.text(`Rider ID: ${ride.riderId}`, 20, 60);
    doc.text(`Vehicle: ${ride.vehicle}`, 20, 70);
    doc.text(`Pickup Location: ${ride.location}`, 20, 80);
    doc.text(`Total: ${ride.price}`, 20, 90);
    doc.save(`receipt-${ride.riderId}-${ride.date}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Payment History</h1>

      {rides.length === 0 && (
        <p className="text-center text-gray-500">No rides/payments found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {rides.map((ride, i) => (
          <div
            key={i}
            className="relative bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
          >
            {/* Delete button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteRide(i);
              }}
              className="absolute top-2 right-2 text-red-600 hover:text-red-800"
            >
              <FaTrash />
            </button>

            {/* Clicking card opens modal */}
            <div onClick={() => setSelectedRide(ride)}>
              <h2 className="font-semibold text-lg">{ride.riderName}</h2>
              <p className="text-sm text-gray-500">{ride.riderId}</p>
              <p className="text-sm text-gray-500">{ride.vehicle}</p>
              <p className="text-sm text-gray-500">{ride.date}</p>
              <p className="font-bold text-gray-700">{ride.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Receipt Popup */}
      {selectedRide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 text-gray-600 font-bold text-xl"
              onClick={() => setSelectedRide(null)}
            >
              &times;
            </button>

            <div className="flex items-center mb-4">
              <img src={logo} alt="Logo" className="w-12 h-12 mr-2" />
              <h2 className="text-2xl font-bold">Prestige Haul Receipt</h2>
            </div>

            <p className="text-gray-600 text-sm">Date: {selectedRide.date}</p>
            <p className="text-gray-600 text-sm">
              Rider: {selectedRide.riderName}
            </p>
            <p className="text-gray-600 text-sm">
              Rider ID: {selectedRide.riderId}
            </p>
            <p className="text-gray-600 text-sm">
              Vehicle: {selectedRide.vehicle}
            </p>
            <p className="text-gray-600 text-sm">
              Pickup Location: {selectedRide.location}
            </p>

            <div className="flex justify-between items-center border-t border-gray-200 pt-4 mt-4">
              <span className="font-semibold text-gray-700">Total:</span>
              <span className="text-lg font-bold text-gray-800">
                {selectedRide.price}
              </span>
            </div>

            <button
              onClick={() => downloadPDF(selectedRide)}
              className="mt-4 w-full bg-blue-700 text-white px-4 py-2 rounded-xl hover:bg-blue-800 transition"
            >
              Download PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
