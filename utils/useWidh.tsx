import { useState, useEffect } from "react";

export const UseWidth = () => {
  const [screenWidth, setScreenWidth] = useState<any>(null);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateScreenWidth();

    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);


  return { screenWidth }
};
