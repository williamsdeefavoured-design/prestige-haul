import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

function StatSection() {
  const stats = [
    { label: "Successful Trips", end: 1200, suffix: "+" },
    { label: "Happy Clients", end: 500, suffix: "+" },
    { label: "Professional Drivers", end: 60, suffix: "+" },
    { label: "Years of Reliability", end: 3, suffix: "+" },
  ];

  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setAnimate(false);
          setTimeout(() => setAnimate(true), 100); // reset then animate again
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-20 bg-gray-50" ref={sectionRef}>
      <div
        className="
          max-w-6xl mx-auto
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
          gap-10 px-6 text-center
        "
      >
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-4xl font-bold text-blue-700">
              {animate && (
                <CountUp
                  start={0}
                  end={item.end}
                  duration={4}
                  separator=","
                  suffix={item.suffix}
                />
              )}
            </h2>
            <p className="text-gray-600 font-medium mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatSection;
