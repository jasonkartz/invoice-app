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
  if (darkTheme) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return [darkTheme, themeSwitch];
};

export default useDarkTheme;
