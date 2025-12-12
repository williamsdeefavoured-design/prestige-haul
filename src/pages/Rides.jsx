import React, { useState, useEffect } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import ConvoyRides from "../components/ConvoyRides";
import Cargo from "../components/Cargo";
import Haulage from "../components/Haulage";
import RiderCards from "../components/RiderCards";

// Cloudinary Image URLs
const IMAGES = {
  cars: {
    cargoTruck: "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446832/cargo-truck_aj2ahu.png",
    cargoTruckSide: "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446873/cargo-truck-side_djcavu.png",
    canster: "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446876/canster_xkl8d5.png",
    corolla: "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446873/corolla_l6wtcp.png",
    corollaNew: "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446875/corolla-new_duvzjy.png",
    pradoWhite: "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446877/prado-white_aizl6v.png",
    toyotaPradoBlack: "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446870/toyota-prado_zvvchj.png",
    hiace: "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446874/hiace_ezwt9c.png",
    hilux: "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446878/hilux_t5vkwo.png"
  },

  riders: [
    "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446870/rider_may6r0.png",
    "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446866/rider-2_qcmj8r.jpg",
    "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446867/rider-3_rxb7pm.jpg",
    "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446867/rider-6_ajia7k.jpg",
    "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446868/rider-5_tzp3ez.jpg",
    "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446868/rider-7_qz3qhb.jpg",
    "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446868/rider-8_lxvwp0.jpg",
    "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446868/rider-9_odm9du.jpg",
    "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446868/rider-10_e08fcp.jpg",
    "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446868/rider-11_skglqh.jpg",
    "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446869/rider-12_hgofgg.jpg",
    "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446869/rider-13_pyzb3f.jpg",
    "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765446869/rider-14_dqgjoq.jpg",
    "https://res.cloudinary.com/dkdruv9ng/image/upload/v1765467981/rider-15_mjakmp.png"
  ]
};

// Static rider metadata
const staticRatings = [
  4.5, 4.2, 4.8, 4.0,
  3.9, 4.7, 4.3, 4.6,
  4.1, 4.4, 4.9, 3.8,
  4.2, 4.5,
  4.6
];

const locations = [
  "Lagos", "Ibadan", "Port Harcourt", "Enugu",
  "Kano", "Warri", "Onitsha", "Abuja",
  "Benin", "Jos", "Kaduna", "Owerri",
  "Abeokuta", "Calabar",
  "Uyo"
];

function Rides() {

  // Cars for carousel
  const cars = [
    { image: IMAGES.cars.cargoTruck, title: "Cargo Truck", description: "Heavy-duty truck..." },
    { image: IMAGES.cars.canster, title: "Canster Truck", description: "Ideal for liquids..." },
    { image: IMAGES.cars.corolla, title: "Toyota Corolla", description: "Durable sedan..." },
    { image: IMAGES.cars.hiace, title: "Toyota Hiace", description: "Multi-purpose van..." },
    { image: IMAGES.cars.pradoWhite, title: "Toyota Prado", description: "Premium 4x4 SUV..." },
    { image: IMAGES.cars.toyotaPradoBlack, title: "Toyota Prado (Black)", description: "Rugged yet stylish..." },
    { image: IMAGES.cars.cargoTruckSide, title: "Cargo Truck Side View", description: "Side profile..." },
    { image: IMAGES.cars.hilux, title: "Toyota Hilux", description: "Strong pickup truck..." },
    { image: IMAGES.cars.corollaNew, title: "Corolla New Model", description: "Modern sleek sedan..." }
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
    { RiderName: "Joshua Adesina", RiderId: "RH-1015" }
  ];

  // Combine with Cloudinary images
  const riders = ridersBase.map((r, i) => ({
    ...r,
    RiderImg: IMAGES.riders[i],
    RiderLocation: locations[i],
    rating: staticRatings[i]
  }));

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex(prev => (prev + 1) % cars.length), 3500);
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
        <div className="left hidden md:block">
          <img className="opacity-25" src={IMAGES.cars.cargoTruckSide} />
        </div>

        <Link to="/order">
          <button className="bg-blue-700 text-white px-5 py-3 md:text-2xl lg:text-3xl rounded-2xl hover:scale-105 transition-all">
            Ride With Us Now
          </button>
        </Link>

        <div className="right hidden md:block">
          <img className="opacity-25 transform -scale-x-100" src={IMAGES.cars.cargoTruckSide} />
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
