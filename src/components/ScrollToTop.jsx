import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only scroll to top if there is no hash in the URL
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
