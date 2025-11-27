import React from "react";
import whyusImg from "../assets/whyus.png";

function WhyUs() {
  return (
    <div className="
      why-section 
      flex flex-col-reverse md:flex-row 
      items-center 
      gap-12 md:gap-20 
      my-16 md:my-24 
      px-6 md:px-12 lg:px-24
    ">
      {/* TEXT SIDE */}
      <div className="text-content w-full md:w-1/2 text-center md:text-left">
        <p className="lead-text text-gray-500 text-sm md:text-base tracking-wide">
          WHY CHOOSE US
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Why Prestige
          <span className="text-red-600">Haul</span>?
        </h1>

        <p className="about-txt text-gray-600 text-sm sm:text-base leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In ducimus
          harum ratione. Deserunt eum expedita ducimus ut architecto provident
          atque laudantium eveniet, eos quas suscipit, ad obcaecati cupiditate.
          <br /><br />
          Suscipit, ratione quasi recusandae nisi voluptas reiciendis ullam
          veritatis quia autem rerum nostrum nulla alias necessitatibus.
          <br /><br />
          Omnis voluptatem molestiae unde odit ipsam, ea perferendis aliquid
          debitis dolores eveniet repellat, dignissimos et harum mollitia.
        </p>
      </div>

      {/* IMAGE SIDE */}
      <div className="img-section w-full md:w-1/2 flex justify-center">
        <img
          src={whyusImg}
          className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain"
          alt="Why Choose Us"
        />
      </div>
    </div>
  );
}

export default WhyUs;
