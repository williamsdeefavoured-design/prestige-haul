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
import rider1 from "../assets/rider.png";

function Rides() {
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

  const riders = [
    {
      RiderImg: rider1,
      RiderName: "Adebayo Samuel",
      RiderId: "RH-1001",
      RiderLocation: "Warri",
      rating: 4.5,
    },
    {
      RiderImg: rider1,
      RiderName: "Oladimeji Tunde",
      RiderId: "RH-1002",
      RiderLocation: "Warri",
      rating: 4.5,
    },
    {
      RiderImg: rider1,
      RiderName: "Ibrahim Musa",
      RiderId: "RH-1003",
      RiderLocation: "Warri",
      rating: 4.5,
    },
    {
      RiderImg: rider1,
      RiderName: "Chukwuma Collins",
      RiderId: "RH-1004",
      RiderLocation: "Warri",
      rating: 4.5,
    },
    {
      RiderImg: rider1,
      RiderName: "Okeke Emmanuel",
      RiderId: "RH-1005",
      RiderLocation: "Warri",
      rating: 4.5,
    },
    {
      RiderImg: rider1,
      RiderName: "Adewale Sunday",
      RiderId: "RH-1006",
      RiderLocation: "Warri",
      rating: 4.5,
    },
    {
      RiderImg: rider1,
      RiderName: "Balogun Kareem",
      RiderId: "RH-1007",
      RiderLocation: "Warri",
      rating: 4.5,
    },
    {
      RiderImg: rider1,
      RiderName: "Eze Michael",
      RiderId: "RH-1008",
      RiderLocation: "Warri",
      rating: 4.5,
    },
    {
      RiderImg: rider1,
      RiderName: "Yusuf Ahmad",
      RiderId: "RH-1009",
      RiderLocation: "Warri",
      rating: 4.5,
    },
    {
      RiderImg: rider1,
      RiderName: "Alade Joseph",
      RiderId: "RH-1010",
      RiderLocation: "Warri",
      rating: 4.5,
    },
    {
      RiderImg: rider1,
      RiderName: "Ajayi Timilehin",
      RiderId: "RH-1011",
      RiderLocation: "Warri",
      rating: 4.5,
    },
    {
      RiderImg: rider1,
      RiderName: "Okon Patrick",
      RiderId: "RH-1012",
      RiderLocation: "Warri",
      rating: 4.5,
    },
    {
      RiderImg: rider1,
      RiderName: "Uchenna Victor",
      RiderId: "RH-1013",
      RiderLocation: "Warri",
      rating: 4.5,
    },
    {
      RiderImg: rider1,
      RiderName: "Bello Sulaiman",
      RiderId: "RH-1014",
      RiderLocation: "Warri",
      rating: 4.5,
    },
    {
      RiderImg: rider1,
      RiderName: "Afolabi Peter",
      RiderId: "RH-1015",
      RiderLocation: "Warri",
      rating: 4.5,
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % cars.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="tot-container">
      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-20 gap-10">
        {/* LEFT TEXT */}
        <div className="md:w-1/2 text-center md:text-left transition-all duration-700">
          <h1
            key={cars[index].title}
            className="text-3xl md:text-4xl font-bold text-gray-800 fade"
          >
            {cars[index].title}
          </h1>

          <p
            key={cars[index].description}
            className="mt-4 text-gray-600 text-lg fade"
          >
            {cars[index].description}
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex flex-col items-center">
          <img
            key={cars[index].image}
            src={cars[index].image}
            className="w-full object-contain fade"
          />

          {/* PAGINATION DOTS */}
          <div className="flex mt-4">
            {cars.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setIndex(idx)}
                style={{
                  height: "10px",
                  width: "10px",
                  margin: "0 5px",
                  borderRadius: "50%",
                  display: "inline-block",
                  backgroundColor: index === idx ? "black" : "gray",
                  cursor: "pointer",
                }}
              ></span>
            ))}
          </div>
        </div>
      </div>

      <div className="ride-us flex justify-evenly items-center my-20 py-10 bg-gray-100">
        <div className="left hidden md:block">
          <img className="w-30 md:w-fit opacity-25" src={cargoTruckSide} />
        </div>

        <Link to="/order">
          <button className="bg-blue-700 text-white px-5 py-3 hover:scale-105 md:text-2xl lg:text-3xl rounded-2xl transition-all delay-100 translate-1.5">
            Ride With Us Now
          </button>
        </Link>

        <div className="right hidden md:block">
          <img
            className=" w-30 md:w-fit opacity-25 transform -scale-x-100"
            src={cargoTruckSide}
          />
        </div>
      </div>

      <div className="convoy">
        <ConvoyRides />
      </div>

      <div className="Haulage">
        <Cargo />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center gap-10 px-10 py-10">
        {riders.map((rider, index) => (
          <RiderCards
            key={index}
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
