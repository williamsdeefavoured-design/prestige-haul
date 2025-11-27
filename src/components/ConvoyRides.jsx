import React from 'react'
import MainBtn from "./MainBtn";
import corollaImg from "../assets/corolla.png"
import { Link } from "react-router-dom";

function ConvoyRides() {
return (
    <div className="convoy flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-24 px-6 md:px-12 lg:px-24 py-16 md:py-24">
      {/* LEFT SIDE (IMAGE) */}
      <div className="left md:w-1/2 flex justify-center">
        <img
          src={corollaImg}
          alt="Haulage Map"
          className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="right md:w-1/2 text-center md:text-left">
        <h3 className="font-semibold underline text-blue-700 text-sm md:text-base tracking-wide">
          PERSONAL RIDE JUST FOR YOU
        </h3>

        <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 font-bold mt-4 md:mt-6 leading-snug">
          Comfort in every ride
        </h1>

        <p className="sub-text font-medium mt-4 text-gray-600 text-sm sm:text-base">
          Move together — effortlessly and in style. Whether it’s a wedding
          convoy, a corporate event, or group transportation,{" "}
          <span className="font-semibold text-blue-700">PrestigeHaul </span>
          ensures every ride runs smoothly, safely, and right on time. Enjoy
          premium vehicles, professional drivers, and a service tailored to keep
          your journey seamless.
        </p>

        {/* FEATURE LIST
        <div className="all-items flex flex-col gap-4 md:gap-5 mt-6">
          {[
            "Luxury & Standard Vehicles: Choose the perfect ride for your occasion",
            "Coordinated Convoys: Stay in sync from start to destination",
            "Professional Chauffeurs: Experienced drivers for every trip",
            "Timely Arrivals: Punctual pickups and smooth transitions",
            "Custom Packages: Designed for weddings, events, or business travel",
          ].map((item, index) => (
            <div
              key={index}
              className="list flex items-start gap-3 text-left justify-center md:justify-start"
            >
              <i className="fa-solid fa-check text-blue-700 mt-1"></i>
              <p className="text-gray-600 text-sm sm:text-base">{item}</p>
            </div>
          ))}
        </div> */}

        {/* BUTTONS */}
        <div className="links flex flex-col sm:flex-row gap-5 sm:gap-10 items-center justify-center md:justify-start mt-8">
          <Link to="/order">
            <MainBtn text="Order Your Ride" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ConvoyRides