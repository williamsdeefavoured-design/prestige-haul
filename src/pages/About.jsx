import React from "react";

function About() {
  return (
    <div className="about px-6 md:px-24 py-24 flex flex-col items-center text-center space-y-24">

      {/* PAGE TITLE */}
      <h1 className="text-4xl md:text-5xl font-bold">
        About Prestige<span className="text-blue-600">Haul</span>
      </h1>

      {/* SECTION 1 */}
      <div className="max-w-3xl space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
        <p className="text-gray-600 leading-loose text-lg">
          At PrestigeHaul, our mission is simple — deliver safe, reliable, and 
          premium transport services that raise the standard of mobility and logistics. 
          We exist to make movement seamless, whether it’s people, goods, or exclusive 
          convoy services. With a team dedicated to excellence, we ensure comfort, 
          speed, and professionalism in every experience.
        </p>
      </div>

      {/* SECTION 2 */}
      <div className="max-w-3xl space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">What We Do</h2>
        <p className="text-gray-600 leading-loose text-lg">
          We provide a wide range of services that span across convoy support, luxury 
          rides, haulage, and cargo delivery. Our modern fleet is equipped to meet all 
          transportation needs — be it for business, events, long-distance journeys, or 
          logistics operations. Every ride is optimized to ensure top-tier efficiency, 
          comfort, and safety.
        </p>
      </div>

      {/* SECTION 3 */}
      <div className="max-w-3xl space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">Our Values</h2>
        <p className="text-gray-600 leading-loose text-lg">
          PrestigeHaul operates on the foundation of trust, consistency, and innovation. 
          We value transparency in our operations, treat every client relationship with 
          respect, and continuously adopt modern technologies that help us deliver better. 
          Our team understands the importance of reliability — that’s why we go the extra 
          mile to honor every booking with precision and professionalism.
        </p>
      </div>

      {/* SECTION 4 */}
      <div className="max-w-3xl space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
        <p className="text-gray-600 leading-loose text-lg">
          Choosing PrestigeHaul means choosing convenience. Our fleet is diverse, our 
          drivers are trained and certified, and our operational standards exceed 
          industry expectations. Whether you're transporting people or goods, we guarantee 
          optimal service, timely deliveries, and an unforgettable ride experience.  
          Your journey is our priority — and we deliver nothing short of excellence.
        </p>
      </div>

    </div>
  );
}

export default About;
