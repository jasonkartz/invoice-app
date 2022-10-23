import styles from "./MainLayout.module.css";
import logo from "../../assets/logo.svg";
import sun from "../../assets/icon-sun.svg";
import moon from "../../assets/icon-moon.svg";
import avatar from "../../assets/image-avatar.jpg";
import ButtonNewInvoice from "../buttons/ButtonNewInvoice";
import FilterOptions from "./FilterOptions/FilterOptions";
import { useState, Children } from "react";

export default function MainLayout({
  children,
  darkTheme,
  themeSwitch,
  handleChange,
  draftChecked,
  pendingChecked,
  paidChecked,
  allFiltersFalse,
  screen,
  setScreen,
}) {
  const invoiceCount = Children.toArray(children).length;
  const invoiceDisplayCount = () => {
    if (allFiltersFalse) {
      return 0;
    } else {
      return invoiceCount;
    }
  };

  return (
    <>
      <header className={`${styles.header} ${darkTheme && styles.dark}`}>
        <div className={styles.logoContainer}>
          <img src={logo} className={styles.logo} alt="logo" />
          <div className={styles.logoBackgroundShape}></div>
        </div>
        <button className={styles.themeToggle} onClick={themeSwitch}>
          <img
            src={darkTheme ? sun : moon}
            alt="toggle theme"
            className={styles.themeIcon}
          />{" "}
        </button>
        <div className={styles.avatarContainer}>
          <img src={avatar} alt="user avatar" className={styles.avatar} />
        </div>
      </header>
      <main className={styles.main}>
        {screen === "main" && (
          <section
            className={`${styles.invoiceOptions} ${darkTheme && styles.dark}`}
          >
            <div className={styles.invoiceStatus}>
              <h1>Invoices</h1>
              <p>
                <span className={styles.expandedText}>
                  {!allFiltersFalse && invoiceCount > 1
                    ? "There are"
                    : allFiltersFalse
                    ? ""
                    : "There is"}
                </span>{" "}
                {allFiltersFalse ? "No" : invoiceDisplayCount()}{" "}
                <span className={styles.expandedText}>
                  {!allFiltersFalse && invoiceCount > 1 ? "total" : ""}
                </span>{" "}
                invoice
                {allFiltersFalse || invoiceCount > 1 ? "s" : ""}
              </p>
            </div>

            <FilterOptions
              draftChecked={draftChecked}
              darkTheme={darkTheme}
              handleChange={handleChange}
              pendingChecked={pendingChecked}
              paidChecked={paidChecked}
            />
            <ButtonNewInvoice />
          </section>
        )}

        <section className={styles.invoicesDisplay}>{children}</section>
      </main>
    </>
  );
}
