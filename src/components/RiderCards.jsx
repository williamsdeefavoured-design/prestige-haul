import React from "react";

function RiderCards({ RiderImg, RiderName, RiderId, RiderLocation, rating }) {
  return (
    <div
      className="
        bg-white 
        shadow-md 
        rounded-2xl 
        p-6 
        flex 
        flex-col 
        items-center 
        gap-3
        hover:shadow-xl 
        hover:scale-105 
        transition 
        duration-300
      "
    >
      <img
        src={RiderImg}
        alt="Rider"
        className="w-28 h-28 rounded-full object-cover border-4 border-blue-600"
      />

      <h2 className="text-lg font-bold text-gray-800">{RiderName}</h2>

      <p className="text-gray-500 text-sm">ID: {RiderId}</p>
      <p className="text-gray-500 text-sm">Location: {RiderLocation}</p>

      {/* RATING */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`text-xl ${
              i < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
        <span className="text-sm text-gray-600 ml-1">{rating}</span>
      </div>
    </div>
  );
}

export default RiderCards;
