import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Input from "../components/Input";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Your message has been sent! We’ll get back to you shortly.");
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
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

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <Input inputType="text" inputName="user_name" inputPlaceholder="Your Full Name" />
          <Input inputType="email" inputName="user_email" inputPlaceholder="you@example.com" />
          <Input inputType="text" inputName="subject" inputPlaceholder="Subject" />
          <Input inputType="textarea" inputName="message" inputPlaceholder="Write your message here..." />

          <button
            type="submit"
            className="bg-blue-700 text-white py-3 rounded-xl hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>

        <div className="text-center text-gray-600 mt-10">
          <p>Or reach out directly:</p>
          <p className="font-semibold text-blue-700">deefavoured01@gmail.com</p>
          <p className="font-semibold text-blue-700">+234 810 275 7234</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
