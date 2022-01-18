import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const laptop = windowSize <= 1110;
  const tablet = windowSize <= 768;
  const mobile = windowSize <= 580;

  return { laptop, tablet, mobile };
};

export default useWindowSize;
