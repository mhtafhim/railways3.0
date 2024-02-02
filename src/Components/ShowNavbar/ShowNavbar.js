import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ShowNavbar = ({ children }) => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true); // Default to true

  useEffect(() => {
    // Check if the current location is "/DashBoard"
    setShowNavbar(location.pathname !== "/Admin");
  }, [location]);

  // Render children only if showNavbar is true
  return showNavbar ? <div>{children}</div> : null;
};

export default ShowNavbar;
