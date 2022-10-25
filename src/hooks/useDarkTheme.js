import { useState, useEffect } from "react";

const useDarkTheme = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  useEffect(() => {
    if (
      localStorage.darkTheme === "true" ||
      (!("darkTheme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  }, []);

  const themeSwitch = () => {
    if (darkTheme) {
      setDarkTheme(false);
      localStorage.darkTheme = false;
    } else {
      setDarkTheme(true);
      localStorage.darkTheme = true;
    }
  };
  return [darkTheme, themeSwitch];
};

export default useDarkTheme;
