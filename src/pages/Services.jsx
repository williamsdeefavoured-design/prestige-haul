import React from "react";
import cargoTruck from "../assets/cargo-truck.png";
import convoyImg from "../assets/canster.png"; // Replace with a better convoy image if you have one
import haulageImg from "../assets/hilux.png"; // Replace with correct haulage image
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="w-full bg-gray-100 min-h-screen py-16 px-6 md:px-14">

      {/* HEADER */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-extrabold text-blue-700">
          Our Services
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
          PrestigeHaul provides reliable, secure and fast transportation, haulage and convoy solutions across Ekiti State and nearby regions.  
        </p>
      </div>

      {/* SERVICE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

        {/* CONVOY SERVICE */}
        <div className="bg-white shadow-lg rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8">
          
          <img
            src={haulageImg}
            alt="Haulage Service"
            className="w-40 md:w-56 object-contain"
          />
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">
              Professional Convoy Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Whether it’s VIP movement, corporate travel, or official motorcade, 
              our convoy fleet ensures **safety, coordination, and prestige**.  
              Our trained riders and clean vehicles move with discipline and excellence.
            </p>

            <Link to="/order">
              <button className="mt-5 bg-blue-700 text-white px-5 py-2 rounded-xl hover:bg-blue-800 transition">
                Book a Convoy
              </button>
            </Link>
          </div>
        </div>

        {/* HAULAGE SERVICE */}
        <div className="bg-white shadow-lg rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8">
          <img
            src={convoyImg}
            alt="Convoy Service"
            className="w-40 md:w-56 object-contain"
          />
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">
              Heavy-Duty Haulage
            </h2>
            <p className="text-gray-600 leading-relaxed">
              From cargo trucks to high-capacity cansters, we transport goods across  
              **Ekiti State, Ondo, Oyo, Osun, Lagos, and neighbouring regions**.  
              Your items arrive safely, quickly, and handled with top-tier professionalism.
            </p>

            <Link to="/order">
              <button className="mt-5 bg-blue-700 text-white px-5 py-2 rounded-xl hover:bg-blue-800 transition">
                Request Haulage
              </button>
            </Link>
          </div>
        </div>

      </div>

      {/* BOTTOM CTA */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold text-gray-800">
          Need a ride, haulage, or convoy?
        </h2>
        <p className="text-gray-600 mt-2">
          PrestigeHaul delivers excellence on every road.
        </p>

        <Link to="/order">
          <button className="mt-6 bg-blue-700 text-white px-8 py-3 rounded-2xl text-lg hover:scale-105 transition">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Services;
