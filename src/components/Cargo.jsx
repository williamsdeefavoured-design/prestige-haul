import React from "react";
import cargoImg from "../assets/cargo-truck.png";
import MainBtn from "./MainBtn";
import { Link } from "react-router-dom";

function Cargo() {
  return (
    <div className="haulage flex flex-col-reverse md:flex-row items-center justify-between gap-10 border-b border-gray-400 md:gap-16 lg:gap-24 px-6 md:px-12 lg:px-24 py-16 md:py-24">
      {/* LEFT SIDE */}
      <div className="left md:w-1/2 text-center md:text-left">
        <h3 className="font-semibold underline text-blue-700 text-sm md:text-base tracking-wide">
          PLATFORM FOR HAULAGE
        </h3>

        <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 font-bold mt-4 md:mt-6 leading-snug">
          Move it all in one take
        </h1>

        <p className="sub-text font-medium mt-4 text-gray-600 text-sm sm:text-base">
          Get your loads moved from anywhere you are, into Ekiti state at an
          affordable price beffiting for you. No matter what it is, be it Goods,
          House items... we got you covered at <span>PrestigeHaul </span>
        </p>

        {/* FEATURE LIST */}
        {/* <div className="all-items flex flex-col gap-4 md:gap-5 mt-6">
          {[
            "Minimised Downtime: Reduce empty running and boost profits",
            "Boost Efficiency: Find contracts suited to your routes",
            "Maximise Earnings: Eliminate unprofitable journeys",
            "Dedicated Haulage: Secure consistent long-term jobs",
            "Real-time Load Matching: Get instant load updates",
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
          <Link to="/signup">
            <MainBtn text="Get a truck your size" />
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE (IMAGE) */}
      <div className="right md:w-1/2 flex justify-center">
        <Link to='/rides'>
          <img
            src={cargoImg}
            alt="Haulage Map"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain"
          />
        </Link>
      </div>
    </div>
  );
}

export default Cargo;
