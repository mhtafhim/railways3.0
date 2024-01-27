import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";


const ShowNavbar = ({ childern }) => {
  const location = useLocation();
  const [ShowNavbar, setShowNavbar] = useState(false);
  useEffect(() => {
    console.log("This is location", location);
    if (location.path === "/DashBoard") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return <div>{ShowNavbar && childern}</div>;
};

export default ShowNavbar;
