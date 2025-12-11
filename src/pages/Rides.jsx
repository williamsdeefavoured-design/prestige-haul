import React, { useState, useEffect } from "react";
import cargoTruck from "../assets/cargo-truck.png";
import cargoTruckSide from "../assets/cargo-truck-side.png";
import canster from "../assets/canster.png";
import corolla from "../assets/corolla.png";
import corollaNew from "../assets/corolla-new.png";
import toyotaPrado from "../assets/toyota-prado.png";
import pradoWhite from "../assets/prado-white.png";
import hiace from "../assets/hiace.png";
import hilux from "../assets/hilux.png";
import ConvoyRides from "../components/ConvoyRides";
import Cargo from "../components/Cargo";
import Haulage from "../components/Haulage";
import "../index.css";
import { Link } from "react-router-dom";
import RiderCards from "../components/RiderCards";

// Rider images
import rider1 from "../assets/rider.png";
import rider2 from "../assets/rider-2.png";
import rider3 from "../assets/rider-3.png";
import rider4 from "../assets/rider-4.png";
import rider5 from "../assets/rider-5.png";
import rider6 from "../assets/rider-6.png";
import rider7 from "../assets/rider-7.png";
import rider8 from "../assets/rider-8.png";
import rider9 from "../assets/rider-9.png";
import rider10 from "../assets/rider-10.png";
import rider11 from "../assets/rider-11.png";
import rider12 from "../assets/rider-12.png";
import rider13 from "../assets/rider-13.png";
import rider14 from "../assets/rider-14.png";

// ✅ Static ratings for each rider
const staticRatings = [4.5, 4.2, 4.8, 4.0, 3.9, 4.7, 4.3, 4.6, 4.1, 4.4, 4.9, 3.8, 4.2, 4.5];

// ✅ Static locations for each rider
const locations = [
  "Lagos", "Ibadan", "Port Harcourt", "Enugu",
  "Kano", "Warri", "Onitsha", "Abuja",
  "Benin", "Jos", "Kaduna", "Owerri",
  "Abeokuta", "Calabar"
];

function Rides() {
  const riderImages = [
    rider1, rider2, rider3, rider4, rider5, rider6, rider7,
    rider8, rider9, rider10, rider11, rider12, rider13, rider14
  ];

  const cars = [
    { image: cargoTruck, title: "Cargo Truck", description: "Heavy-duty truck..." },
    { image: canster, title: "Canster Truck", description: "Ideal for liquids..." },
    { image: corolla, title: "Toyota Corolla", description: "Durable sedan..." },
    { image: hiace, title: "Toyota Hiace", description: "Multi-purpose van..." },
    { image: pradoWhite, title: "Toyota Prado", description: "Premium 4x4 SUV..." },
    { image: toyotaPrado, title: "Toyota Prado (Black)", description: "Rugged yet stylish..." },
    { image: cargoTruckSide, title: "Cargo Truck Side View", description: "Side profile..." },
    { image: hilux, title: "Toyota Hilux", description: "Strong pickup truck..." },
    { image: corollaNew, title: "Corolla New Model", description: "Modern sleek sedan..." },
  ];

  const ridersBase = [
    { RiderName: "Uzoma Chukwudalu", RiderId: "RH-1001" },
    { RiderName: "Emeka Okon", RiderId: "RH-1002" },
    { RiderName: "Sodiq Yusuf", RiderId: "RH-1003" },
    { RiderName: "Ahmed Bello", RiderId: "RH-1004" },
    { RiderName: "Chinedu Eze", RiderId: "RH-1005" },
    { RiderName: "Kelechi Ibe", RiderId: "RH-1006" },
    { RiderName: "Sunday Effiong", RiderId: "RH-1007" },
    { RiderName: "Tunde Bakare", RiderId: "RH-1008" },
    { RiderName: "Wale Adebayo", RiderId: "RH-1009" },
    { RiderName: "Yakubu Musa", RiderId: "RH-1010" },
    { RiderName: "Segun Arinze", RiderId: "RH-1011" },
    { RiderName: "Okon Patrick", RiderId: "RH-1012" },
    { RiderName: "Uchenna Victor", RiderId: "RH-1013" },
    { RiderName: "Bello Sulaiman", RiderId: "RH-1014" },
  ];

  // ✅ Assign static location & rating
  const riders = ridersBase.map((r, i) => ({
    ...r,
    RiderImg: riderImages[i],
    RiderLocation: locations[i],
    rating: staticRatings[i],
  }));

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % cars.length), 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="tot-container">
      {/* Carousel */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-10 py-20">
        <div className="text-center md:text-left transition-all duration-700 max-w-md">
          <h1 key={cars[index].title} className="text-3xl md:text-4xl font-bold text-gray-800 fade wrap-break-word">
            {cars[index].title}
          </h1>
          <p key={cars[index].description} className="mt-4 text-gray-600 text-lg fade whitespace-normal leading-relaxed">
            {cars[index].description}
          </p>
        </div>

        <div className="md:w-1/2 flex flex-col items-center">
          <img key={cars[index].image} src={cars[index].image} className="w-full object-contain fade" />
          <div className="flex mt-4">
            {cars.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setIndex(idx)}
                className="h-3 w-3 mx-1 rounded-full cursor-pointer"
                style={{ backgroundColor: index === idx ? "black" : "gray" }}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* Ride With Us */}
      <div className="ride-us flex justify-evenly items-center my-20 py-10 bg-gray-100">
        <div className="left hidden md:block"><img className="opacity-25" src={cargoTruckSide} /></div>
        <Link to="/order">
          <button className="bg-blue-700 text-white px-5 py-3 md:text-2xl lg:text-3xl rounded-2xl hover:scale-105 transition-all">
            Ride With Us Now
          </button>
        </Link>
        <div className="right hidden md:block">
          <img className="opacity-25 transform -scale-x-100" src={cargoTruckSide} />
        </div>
      </div>

      <ConvoyRides />
      <Cargo />
      <Haulage />

      {/* Riders Grid */}
      <h1 className="text-5xl text-center mt-5 font-bold text-blue-700 pb-3">Our Riders</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center gap-10 px-10 py-10">
        {riders.map((rider, i) => (
          <RiderCards
            key={i}
            RiderImg={rider.RiderImg}
            RiderName={rider.RiderName}
            RiderId={rider.RiderId}
            RiderLocation={rider.RiderLocation}
            rating={rider.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Rides;
