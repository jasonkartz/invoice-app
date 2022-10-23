import styles from "./MainLayout.module.css";
import logo from "../../assets/logo.svg";
import sun from "../../assets/icon-sun.svg";
import moon from "../../assets/icon-moon.svg";
import avatar from "../../assets/image-avatar.jpg";
import ButtonNewInvoice from "../buttons/ButtonNewInvoice";
import Header from "./Header/Header";
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
      <Header darkTheme={darkTheme} themeSwitch={themeSwitch} />
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
