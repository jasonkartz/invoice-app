import { useEffect, useState } from "react";
import ButtonNewInvoice from "./components/buttons/ButtonNewInvoice";
import ButtonMarkPaid from "./components/buttons/ButtonMarkPaid";
import ButtonEdit from "./components/buttons/ButtonEdit";
import ButtonSaveDraft from "./components/buttons/ButtonSaveDraft";
import ButtonDelete from "./components/buttons/ButtonDelete";
import ButtonAddItem from "./components/buttons/ButtonAddItem";

function App() {
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
  console.log(localStorage);
  return (
    <>
      <button onClick={themeSwitch}>
        {darkTheme ? "Light Theme" : "Dark Theme"}
      </button>
      <ButtonNewInvoice />
      <ButtonMarkPaid />
      <ButtonEdit />
      <ButtonSaveDraft darkTheme={darkTheme} />
      <ButtonDelete />
      <ButtonAddItem darkTheme={darkTheme} />
    </>
  );
}

export default App;
