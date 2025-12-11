import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "../components/Input";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSuccess("Message sent successfully!");
      form.current.reset();
    } catch (err) {
      console.error(err);
      setSuccess("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-3xl p-10 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-2">
          Contact <span className="text-blue-700">PrestigeHaul</span>
        </h1>
        <p className="text-gray-500 text-center mb-10">
          Send us a direct message. We’re here 24/7 to support you.
        </p>

        <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input inputType="text" inputName="user_name" inputPlaceholder="Your Full Name" />
          <Input inputType="email" inputName="user_email" inputPlaceholder="you@example.com" />
          <Input inputType="text" inputName="phone" inputPlaceholder="08123456789" />
          <Input inputType="text" inputName="subject" inputPlaceholder="Message Subject" />
          <Input inputType="textarea" inputName="message" inputPlaceholder="Write your message here..." />

          <button
            type="submit"
            className="bg-blue-700 text-white py-3 rounded-xl hover:bg-blue-800 transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {success && (
          <p className="text-center mt-4 text-green-600 font-medium">{success}</p>
        )}

        <div className="text-center text-gray-600 mt-10">
          <p>Or reach out directly:</p>
          <p className="font-semibold text-blue-700">prestigehaul@gmail.com</p>
          <p className="font-semibold text-blue-700">+234 812 345 6789</p>
        </div>
      </div>
    </div>
  );
}
