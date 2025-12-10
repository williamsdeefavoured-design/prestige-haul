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

// 🔥 Import ALL rider images
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

function Rides() {
  // Put them in an array for easy indexing:
  const riderImages = [
    rider1,
    rider2,
    rider3,
    rider4,
    rider5,
    rider6,
    rider7,
    rider8,
    rider9,
    rider10,
    rider11,
    rider12,
    rider13,
    rider14,
  ];

  // CAROUSEL DATA
  const cars = [
    {
      image: cargoTruck,
      title: "Cargo Truck",
      description:
        "Heavy-duty truck designed for transporting bulk goods over long distances with maximum load stability.",
    },
    {
      image: canster,
      title: "Canster Truck",
      description:
        "Ideal for transporting liquids or chemicals. Built for safety and high-capacity hauling.",
    },
    {
      image: corolla,
      title: "Toyota Corolla",
      description:
        "A durable and fuel-efficient sedan perfect for comfortable passenger transport.",
    },
    {
      image: hiace,
      title: "Toyota Hiace",
      description:
        "Multi-purpose van that seats many passengers — great for group movement or shuttle services.",
    },
    {
      image: pradoWhite,
      title: "Toyota Prado",
      description:
        "Premium 4×4 SUV offering luxury, power, and smooth rides on all terrains.",
    },
    {
      image: toyotaPrado,
      title: "Toyota Prado (Black)",
      description:
        "A rugged yet stylish SUV for VIP movement and long-distance comfort.",
    },
    {
      image: cargoTruckSide,
      title: "Cargo Truck Side View",
      description: "Side profile of the reinforced heavy-duty cargo truck.",
    },
    {
      image: hilux,
      title: "Toyota Hilux",
      description:
        "Strong pickup truck known for durability, off-road capability, and reliability.",
    },
    {
      image: corollaNew,
      title: "Corolla New Model",
      description:
        "Modern, sleek sedan designed for fuel economy and daily transport.",
    },
  ];

  // RIDERS DATA (Images filled automatically)
  const ridersBase = [
    { RiderName: "Adebayo Samuel", RiderId: "RH-1001" },
    { RiderName: "Oladimeji Tunde", RiderId: "RH-1002" },
    { RiderName: "Ibrahim Musa", RiderId: "RH-1003" },
    { RiderName: "Chukwuma Collins", RiderId: "RH-1004" },
    { RiderName: "Okeke Emmanuel", RiderId: "RH-1005" },
    { RiderName: "Adewale Sunday", RiderId: "RH-1006" },
    { RiderName: "Balogun Kareem", RiderId: "RH-1007" },
    { RiderName: "Eze Michael", RiderId: "RH-1008" },
    { RiderName: "Yusuf Ahmad", RiderId: "RH-1009" },
    { RiderName: "Alade Joseph", RiderId: "RH-1010" },
    { RiderName: "Ajayi Timilehin", RiderId: "RH-1011" },
    { RiderName: "Okon Patrick", RiderId: "RH-1012" },
    { RiderName: "Uchenna Victor", RiderId: "RH-1013" },
    { RiderName: "Bello Sulaiman", RiderId: "RH-1014" },
  ];

  // Automatically attach images
  const riders = ridersBase.map((r, i) => ({
    ...r,
    RiderImg: riderImages[i],
    RiderLocation: "Warri",
    rating: 4.5,
  }));

  // CAROUSEL LOGIC
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % cars.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="tot-container">
      {/* CAROUSEL SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-10 py-20">
        <div className="text-center md:text-left transition-all duration-700 max-w-md">
          <h1
            key={cars[index].title}
            className="text-3xl md:text-4xl font-bold text-gray-800 fade wrap-break-word"
          >
            {cars[index].title}
          </h1>

          <p
            key={cars[index].description}
            className="mt-4 text-gray-600 text-lg fade whitespace-normal leading-relaxed"
          >
            {cars[index].description}
          </p>
        </div>

        <div className="md:w-1/2 flex flex-col items-center">
          <img
            key={cars[index].image}
            src={cars[index].image}
            className="w-full object-contain fade"
          />

          {/* DOTS */}
          <div className="flex mt-4">
            {cars.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setIndex(idx)}
                className="h-3 w-3 mx-1 rounded-full cursor-pointer"
                style={{
                  backgroundColor: index === idx ? "black" : "gray",
                }}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* RIDE WITH US SECTION */}
      <div className="ride-us flex justify-evenly items-center my-20 py-10 bg-gray-100">
        <div className="left hidden md:block">
          <img className="opacity-25" src={cargoTruckSide} />
        </div>

        <Link to="/order">
          <button className="bg-blue-700 text-white px-5 py-3 md:text-2xl lg:text-3xl rounded-2xl hover:scale-105 transition-all">
            Ride With Us Now
          </button>
        </Link>

        <div className="right hidden md:block">
          <img
            className="opacity-25 transform -scale-x-100"
            src={cargoTruckSide}
          />
        </div>
      </div>

      {/* OTHER SECTIONS */}
      <ConvoyRides />
      <Cargo />
      <Haulage />

      {/* RIDERS GRID */}
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
