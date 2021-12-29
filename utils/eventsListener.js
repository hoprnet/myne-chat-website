import { useEffect, useState, useCallback } from "react";

export const useWindowSize = () => {
  const isClient = typeof window === "object";

  const getSize = useCallback(() => {
    let orientation = "";
    if (isClient) {
      if (window.matchMedia("(orientation: portrait)").matches) {
        orientation = "portrait";
      } else {
        orientation = "landscape"
      }
    }
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
      orientation
    };
  }, [isClient]);

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getSize, isClient]);

  return windowSize;
};