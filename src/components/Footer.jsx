import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 text-center md:text-start text-gray-700 py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LOGO / BRAND */}
        <div>
          <h2 className="text-2xl font-black text-gray-900">
            Prestige<span className="text-blue-600">Haul</span>
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Reliable haulage marketplace for businesses & individuals.
          </p>
        </div>

        {/* NAVIGATION LINKS */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3 text-lg">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
            <li><Link to="/services" className="hover:text-blue-600 transition">Services</Link></li>
            <li><Link to="/why-us" className="hover:text-blue-600 transition">Why Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
          </ul>
        </div>

        {/* POLICY LINKS */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3 text-lg">Legal</h3>
          <ul className="space-y-2">
            <li><Link to="/terms" className="hover:text-blue-600 transition">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-blue-600 transition">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-gray-300 mt-10 pt-5 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} <span className="font-semibold text-gray-900">PrestigeHaul</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
