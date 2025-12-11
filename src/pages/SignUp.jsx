import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useNotification } from "../components/context/NotificationContext";

function SignUp() {
  const [formData, setFormData] = useState({ firstName:"", lastName:"", email:"", phoneNo:"", password:"" });
  const [isLoading, setIsLoading] = useState(false);
  const { showNotification } = useNotification();
  const navigate = useNavigate();

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password } = formData;
    if (!firstName || !lastName || !email || !password) {
      showNotification("All fields are required", "error");
      return;
    }
    if (!email.includes("@")) {
      showNotification("Enter a valid email address", "error");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("https://haulageapp.onrender.com/api/v1/auth/signup", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        showNotification(data.message || "Something went wrong", "error");
        return;
      }

      showNotification("Account created successfully!", "success");
      setTimeout(() => navigate("/signin"), 1000);
    } catch (err) {
      console.error(err);
      showNotification("Network error — try again later.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-3xl p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2">
          Create Your <span className="text-blue-700">Account</span>
        </h1>
        <p className="text-gray-500 text-center mb-8">Join PrestigeHaul and enjoy fast, secure rides & haulage.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input label="First Name" inputType="text" inputName="firstName" inputPlaceholder="First Name" inputValue={formData.firstName} onChange={handleChange}/>
          <Input label="Last Name" inputType="text" inputName="lastName" inputPlaceholder="Last Name" inputValue={formData.lastName} onChange={handleChange}/>
          <Input label="Email" inputType="email" inputName="email" inputPlaceholder="Your Email" inputValue={formData.email} onChange={handleChange}/>
          <Input label="Phone Number" inputType="tel" inputName="phoneNo" inputPlaceholder="Phone Number" inputValue={formData.phoneNo} onChange={handleChange}/>
          <Input label="Password" inputType="password" inputName="password" inputPlaceholder="Password" inputValue={formData.password} onChange={handleChange}/>

          <button type="submit" className="bg-blue-700 text-white py-3 rounded-lg" disabled={isLoading}>
            {isLoading ? "Loading..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-700 font-medium hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
