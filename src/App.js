import { useEffect, useState } from "react";
import MainLayout from "./components/MainLayout";
import EmptyDisplay from "./components/EmptyDisplay";
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
    <div className={`main-container ${darkTheme && "dark"}`}>
      <MainLayout
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        themeSwitch={themeSwitch}
      >
        <EmptyDisplay darkTheme={darkTheme} />
      </MainLayout>
    </div>
  );
}

export default App;
