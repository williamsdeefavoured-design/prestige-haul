import React from "react";

function MainBtn({text}) {
  return (
    <button className="bg-blue-700 text-white w-full px-5 py-2 rounded-xl hover:bg-transparent hover:text-gray-900 hover:outline transition-all duration-300">
      {text}
    </button>
  );
}

export default MainBtn;
