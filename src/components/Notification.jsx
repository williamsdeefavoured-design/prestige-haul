// components/Notification.js
import React, { useEffect, useState } from "react";
import { FiCheckCircle, FiInfo, FiAlertCircle } from "react-icons/fi";

const Notification = ({ message, type }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  // Background color per type
  const bgColor = {
    success: "bg-green-600 shadow-green-400/50",
    error: "bg-red-600 shadow-red-400/50",
    info: "bg-blue-600 shadow-blue-400/50",
  }[type] || "bg-gray-600 shadow-gray-400/50";

  // Icon per type
  const Icon = {
    success: FiCheckCircle,
    error: FiAlertCircle,
    info: FiInfo,
  }[type] || FiInfo;

  return (
    <div
      className={`
        fixed right-5 top-5 z-50 flex items-center gap-4 p-5 pl-6 pr-7 rounded-xl
        text-white text-base font-medium
        ${bgColor}
        transform transition-all duration-300
        ${visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"}
      `}
    >
      <Icon size={22} className="shrink-0" />
      <div className="flex-1">{message}</div>
    </div>
  );
};

export default Notification;
