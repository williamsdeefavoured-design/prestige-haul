import React from "react";
import bgVid from "../assets/hero-vid.mp4";

function Hero() {
  return (
    <div className="hero-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        id="bgVid"
        className="hero-video"
      >
        <source src={bgVid} type="video/mp4" />
      </video>

      <div className="hero-overlay text-center flex flex-col items-center justify-center px-4 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight mb-4">
          #1 BEST HAULAGE <br />
          <span>MARKETPLACE</span>
        </h1>

        <p className="text-gray-100 text-base sm:text-lg md:text-2xl max-w-3xl leading-relaxed">
          Find & sub-contract loads 24/7 with{" "}
          <span className="font-semibold">PrestigeHaul</span> — a free
          & simple digital haulage platform built for movers, drivers, and
          logistics companies.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">
            Book a Ride
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
