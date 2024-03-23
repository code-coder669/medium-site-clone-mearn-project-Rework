import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const NavDisplay = ({ children }) => {
  const location = useLocation();

  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    location.pathname.includes("/singlestory") || location.pathname.includes("/partner-program") ? setShowNav(false): setShowNav(true)
  }, [location]);

  return <div>{showNav && children}</div>;
};

export default NavDisplay;

