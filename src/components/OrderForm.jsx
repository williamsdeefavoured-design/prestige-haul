import React, { useState } from "react";
import OrderImg from "../assets/car.png";
import Input from "./Input";

function OrderForm() {
  // TRAVEL DIRECTIONS
  const directionOptions = ["From Ekiti", "To Ekiti"];

const fromEkitiLocations = [
  "Lagos",
  "Ibadan",
  "Oyo",
  "Ogun",
  "Osun",
  "Ondo",

  "Rivers",
  "Akwa Ibom",
  "Imo",
  "Delta",
  "Kaduna",
];

  const toEkitiLocations = [
    "Lagos",
    "Rivers",
    "Akwa Ibom",
    "Imo",
    "Delta",
    "Oyo",
    "Ogun",
    "Kaduna",
  ];

  const [travelDirection, setTravelDirection] = useState("From Ekiti");

  // Dynamic location list
  const locationOptions =
    travelDirection === "From Ekiti"
      ? fromEkitiLocations
      : toEkitiLocations;

  return (
    <div className="order-container flex flex-col-reverse lg:flex-row items-center justify-center py-20 px-6">
      
      {/* LEFT IMAGE */}
      <div className="left flex justify-center lg:w-1/2 mb-10 lg:mb-0">
        <img
          src={OrderImg}
          className="w-[300px] md:w-[400px] lg:w-[800px] object-contain"
          alt="Order Car"
        />
      </div>

      {/* FORM */}
      <div className="right bg-white rounded-3xl p-10 w-full max-w-xl shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Book Your Ride
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Fill in your details and let’s move you safely.
        </p>

        <form className="flex flex-col gap-5">

          {/* FULL NAME */}
          <Input inputName="fullname" inputPlaceholder="Your Full Name" inputType="text" />

          {/* EMAIL */}
          <Input inputName="email" inputPlaceholder="Your Email" inputType="email" />

          {/* PHONE */}
          <Input inputName="phone" inputPlaceholder="Phone Number" inputType="number" />

          {/* ADDRESS */}
          <Input inputName="location" inputPlaceholder="Your Address" inputType="text" />

          {/* TRAVEL DIRECTION SELECT */}
          <select
            className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-600"
            value={travelDirection}
            onChange={(e) => setTravelDirection(e.target.value)}
          >
            {directionOptions.map((dir, i) => (
              <option key={i} value={dir}>
                {dir}
              </option>
            ))}
          </select>

          {/* DYNAMIC LOCATION DROPDOWN */}
          <Input
            inputType="select"
            inputName="destination"
            inputPlaceholder="Choose Destination"
            options={locationOptions}
          />

          {/* MORE DETAILS */}
          <Input
            inputType="textarea"
            inputName="instructions"
            inputPlaceholder="Tell us more…"
          />

          {/* RADIO SERVICE TYPE */}
          <Input
            inputType="radio"
            inputName="serviceType"
            options={["Convoy", "Haulage"]}
          />

          {/* SUBMIT */}
          <button className="bg-blue-700 text-white py-3 rounded-xl hover:bg-blue-800 transition mt-4">
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default OrderForm;
