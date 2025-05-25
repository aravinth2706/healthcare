import { useEffect, useState } from "react";

const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      const mobileQuery = window.matchMedia("(max-width: 767px)");
      const tabletQuery = window.matchMedia(
        "(min-width: 768px) and (max-width: 1024px)"
      );

      setIsMobile(mobileQuery.matches);
      setIsTablet(tabletQuery.matches);
    };

    checkDeviceType();

    window.addEventListener("resize", checkDeviceType);
    return () => window.removeEventListener("resize", checkDeviceType);
  }, []);

  return { isMobile, isTablet };
};

export default useDeviceType;
