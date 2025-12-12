import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaBell, FaShoppingCart } from "react-icons/fa";
import { useNotification } from "./context/NotificationContext";
import MainBtn from "./MainBtn";
import PrestigeLogo from "../assets/Prestige logo.png";
import { useAuth } from "./context/AuthContext";
import { useCart } from "./context/CartContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  

  const { notifications = [], markAllRead } = useNotification();
  const { cartItems = [] } = useCart(); // Safe fallback
  const { user, logout } = useAuth();

  const unreadCount = notifications.filter((n) => !n.read).length;
  const cartCount = cartItems.length;

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/">
          <h1 className="font-bold">
            <img src={PrestigeLogo} className="w-70" alt="Prestige Logo" />
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link to="/rides" className="hover:text-blue-700">
            Our Rides
          </Link>
          <Link to="/order" className="hover:text-blue-700">
            Book Us
          </Link>
          <Link to="/rentcars" className="hover:text-blue-700">
            Rent Cars
          </Link>
          <Link to="/about" className="hover:text-blue-700">
            About
          </Link>

          {user && (
            <Link to="/history" className="hover:text-blue-700">
              History
            </Link>
          )}

          {/* 🔔 Notification Bell */}
          <div className="relative">
            <FaBell
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="cursor-pointer text-xl"
            />
            {unreadCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {unreadCount}
              </span>
            )}

            {dropdownOpen && (
              <div className="absolute top-10 right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Notifications</h4>
                  <button
                    onClick={() => {
                      markAllRead?.();
                      setDropdownOpen(false);
                    }}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Mark all read
                  </button>
                </div>

                {notifications.length === 0 ? (
                  <p className="text-gray-500 text-sm">No notifications</p>
                ) : (
                  <ul className="space-y-2 max-h-64 overflow-y-auto">
                    {notifications.map((n, i) => (
                      <li
                        key={n.id || i}
                        className={`p-2 rounded text-sm ${
                          n.read ? "bg-gray-100" : "bg-blue-100 font-medium"
                        }`}
                      >
                        {n.message}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          {/* 🛒 Cart Icon with notification dropdown */}
          <div className="relative">
            <FaShoppingCart
              className="text-xl cursor-pointer hover:text-blue-700 transition"
              onClick={() => setCartOpen(!cartOpen)}
            />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}

            {cartOpen && (
              <div className="absolute top-10 right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
                <h4 className="font-semibold mb-2">Cart Items</h4>
                {cartItems.length === 0 ? (
                  <p className="text-gray-500 text-sm">Your cart is empty</p>
                ) : (
                  <ul className="space-y-2 max-h-64 overflow-y-auto">
                    {cartItems.map((item, index) => (
                      <li
                        key={index}
                        className="p-2 rounded text-sm bg-gray-100 flex justify-between items-center"
                      >
                        <span>{item.fullname}</span>
                        <span className="font-medium">
                          {item.direction} → {item.destination}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                <Link to="/cart" onClick={() => setCartOpen(false)}>
                  <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
                    Go to Cart
                  </button>
                </Link>
              </div>
            )}
          </div>

          {user ? (
            <button
              onClick={logout}
              className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition"
            >
              Logout
            </button>
          ) : (
            <div className="flex gap-5">
              <Link to="/signup">
                <button className="hover:bg-blue-700 hover:text-white bg-gray-400 px-4 py-2 rounded-xl transition">
                  Register for free
                </button>
              </Link>
              <Link to="/signin">
                <MainBtn text="Sign In" />
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-3 text-center">
          <Link
            to="/rides"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-700"
          >
            Our Rides
          </Link>
          <Link
            to="/order"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-700"
          >
            Book Us
          </Link>
          <Link
            to="/rentcars"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-700"
          >
            Rent Cars
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-blue-700"
          >
            About
          </Link>

          {user && (
            <Link
              to="/history"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-blue-700"
            >
              History
            </Link>
          )}

          {user ? (
            <button
              onClick={() => {
                logout();
                setMenuOpen(false);
              }}
              className="w-full bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition"
            >
              Logout
            </button>
          ) : (
            <div className="flex flex-col gap-3 mt-3">
              <Link to="/signup" onClick={() => setMenuOpen(false)}>
                <button className="w-full hover:bg-blue-700 hover:text-white bg-gray-400 px-4 py-2 rounded-xl">
                  Register for free
                </button>
              </Link>
              <Link to="/signin" onClick={() => setMenuOpen(false)}>
                <MainBtn text="Sign In" />
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
