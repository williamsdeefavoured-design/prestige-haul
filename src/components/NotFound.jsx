import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-6">

      {/* Big 404 Number */}
      <h1 className="text-8xl font-extrabold text-gray-800">
        404
      </h1>

      {/* Message */}
      <p className="mt-4 text-xl text-gray-600 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Home Button */}
      <Link
        to="/"
        className="
          mt-8 
          bg-blue-600 
          hover:bg-blue-700 
          text-white 
          px-8 
          py-3 
          rounded-xl 
          font-semibold 
          transition
        "
      >
        Go Back Home
      </Link>

      {/* PrestigeHaul branding */}
      <p className="mt-6 text-sm text-gray-500">
        Prestige<span className="text-blue-600 font-bold">Haul</span> • Reliable Haulage Anytime
      </p>

    </div>
  );
}

export default NotFound;
