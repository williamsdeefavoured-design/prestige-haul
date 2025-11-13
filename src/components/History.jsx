import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

// 👇 Hook to detect when element is visible on screen
function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
}

function StatsSection() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  const isVisible1 = useOnScreen(ref1);
  const isVisible2 = useOnScreen(ref2);
  const isVisible3 = useOnScreen(ref3);
  const isVisible4 = useOnScreen(ref4);

  return (
    <section className="stats-section bg-gray-50 py-16 px-6 md:px-20 flex flex-wrap justify-center items-center gap-10 text-center">
      <div className="stat w-40 sm:w-48 md:w-56" ref={ref1}>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-700">
          {isVisible1 && <CountUp end={5000} duration={3} />}+
        </h2>
        <p className="text-gray-600 mt-2 font-medium">Successful Deliveries</p>
      </div>

      <div className="stat w-40 sm:w-48 md:w-56" ref={ref2}>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-700">
          {isVisible2 && <CountUp end={1200} duration={3} />}+
        </h2>
        <p className="text-gray-600 mt-2 font-medium">Satisfied Clients</p>
      </div>

      <div className="stat w-40 sm:w-48 md:w-56" ref={ref3}>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-700">
          {isVisible3 && <CountUp end={15} duration={3} />}+
        </h2>
        <p className="text-gray-600 mt-2 font-medium">Years of Excellence</p>
      </div>

      <div className="stat w-40 sm:w-48 md:w-56" ref={ref4}>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-700">
          {isVisible4 && <CountUp end={350} duration={3} />}+
        </h2>
        <p className="text-gray-600 mt-2 font-medium">Active Fleet</p>
      </div>
    </section>
  );
}

export default StatsSection;
