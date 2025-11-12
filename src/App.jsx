import { useState } from "react";
import { Routes, Route } from "react-router";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About"
import Order from "./pages/Order"
import Rides from "./pages/Rides"
import SignUp from "./pages/SignUp"
import Signin from "./pages/Signin"
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rides" element={<Rides />} />
        <Route path="/order" element={<Order />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
