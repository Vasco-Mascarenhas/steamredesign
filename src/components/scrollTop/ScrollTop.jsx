import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const location = useLocation();
  const prevLocation = useRef();

  useEffect(() => {
    // Check if the location has changed before scrolling to the top
    if (prevLocation.current !== location.pathname) {
      window.scrollTo(0, 0);
    }

    // Update the previous location
    prevLocation.current = location.pathname;
  }, [location]);

  return null;
};

export default ScrollTop;
