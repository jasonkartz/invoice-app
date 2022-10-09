import styles from "./MainLayout.module.css";
import logo from "../assets/logo.svg";
import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";
import avatar from "../assets/image-avatar.jpg";
import downArrow from "../assets/icon-arrow-down.svg";
import ButtonNewInvoice from "./buttons/ButtonNewInvoice";
import { useEffect, useState } from "react";

export default function MainLayout({ children, darkTheme, themeSwitch }) {
  const [filterText, setFilterText] = useState("Filter by status");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 767) {
        setFilterText("Filter by status");
      } else {
        setFilterText("Filter");
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  });

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
        <section
          className={`${styles.invoiceOptions} ${darkTheme && styles.dark}`}
        >
          <div className={styles.invoiceStatus}>
            <h2>Invoices</h2>
            <p>No invoices</p>
          </div>
          <button>
            {filterText}&nbsp; &nbsp; &nbsp;
            <img src={downArrow} alt="down arrow" />
          </button>
          <ButtonNewInvoice />
        </section>
        <section className={styles.invoicesDisplay}>{children}</section>
      </main>
    </>
  );
}
