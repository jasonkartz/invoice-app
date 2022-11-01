import { useState, useEffect } from "react";

const useMobileView = () => {
  const [mobileView, setMobileView] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 699) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  });
  return [mobileView];
};
export default useMobileView;
