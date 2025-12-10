import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useNotification } from "../components/context/NotificationContext";
import { useAuth } from "../components/context/AuthContext";

function Signin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { showNotification } = useNotification();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://haulageapp.onrender.com/api/v1/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        showNotification(data.message || "Invalid email or password", "error");
        return;
      }

      login(data.user || {}, data.token);
      showNotification("Signed in successfully!", "success");
      navigate("/");
    } catch {
      showNotification("Network error. Try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-3xl p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2">
          Sign In to <span className="text-blue-700">PrestigeHaul</span>
        </h1>
        <p className="text-gray-500 text-center mb-8">Welcome back! Please log in to continue.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input inputType="email" inputName="email" inputPlaceholder="you@example.com" inputValue={formData.email} inputId="email" onChange={handleChange} />
          <Input inputType="password" inputName="password" inputPlaceholder="Enter your password" inputValue={formData.password} inputId="password" onChange={handleChange} />

          <button type="submit" disabled={isLoading} className="bg-blue-700 text-white py-3 rounded-xl hover:bg-blue-800 transition">
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Don't have an account? <Link to="/signup" className="text-blue-700 font-medium hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
