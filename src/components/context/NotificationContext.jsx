import React, { createContext, useContext, useState } from "react";
import Notification from "../Notification"; // your popup toast component

const NotificationContext = createContext();
export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  // bell notifications
  const [notifications, setNotifications] = useState([]);

  // popup notification (toast)
  const [popup, setPopup] = useState(null);

  // unified notification creator
  const notify = (message, type = "info") => {
    // show popup toast
    setPopup({ message, type });
    setTimeout(() => setPopup(null), 3500);

    // add to bell list
    setNotifications((prev) => [
      { id: Date.now(), message, type, read: false },
      ...prev
    ]);
  };

  // mark all read
  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((n) => ({ ...n, read: true }))
    );
  };

  // clear all notifications (optional)
  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <NotificationContext.Provider
      value={{
        notify,             // unified function
        showNotification: notify, // backwards compatibility
        addNotification: notify, // for manual use if needed
        notifications,
        markAllRead,
        clearNotifications
      }}
    >
      {children}

      {popup && (
        <Notification message={popup.message} type={popup.type} />
      )}
    </NotificationContext.Provider>
  );
};
