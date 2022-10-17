import styles from "./MainLayout.module.css";
import logo from "../assets/logo.svg";
import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";
import avatar from "../assets/image-avatar.jpg";
import downArrow from "../assets/icon-arrow-down.svg";
import upArrow from "../assets/icon-arrow-up.svg";
import ButtonNewInvoice from "./buttons/ButtonNewInvoice";
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
}) {
  const [displayFilterForm, setDisplayFilterForm] = useState(false);

  const invoiceCount = Children.toArray(children).length;
  const invoiceDisplayCount = () => {
    if (allFiltersFalse) {
      return 0;
    } else {
      return invoiceCount;
    }
  };

  const invoiceDisplayCountText = () => {
    if (allFiltersFalse) {
      return "No Invoices";
    } else {
      return;
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
        <section
          className={`${styles.invoiceOptions} ${darkTheme && styles.dark}`}
        >
          <div className={styles.invoiceStatus}>
            <h1>Invoices</h1>
            <p>
              <span className={styles.expandedText}>
                {!allFiltersFalse && "There are"}
              </span>{" "}
              {allFiltersFalse ? "No" : invoiceDisplayCount()}{" "}
              <span className={styles.expandedText}>
                {!allFiltersFalse && "total"}
              </span>{" "}
              invoice
              {allFiltersFalse || invoiceCount > 1 ? "s" : ""}
            </p>
          </div>

          <div className={styles.filterForm}>
            <button
              className={styles.filterBtn}
              onClick={() => setDisplayFilterForm(!displayFilterForm)}
            >
              Filter <span className={styles.expandedText}>by status</span>{" "}
              &nbsp; &nbsp; &nbsp;
              <img src={displayFilterForm ? upArrow : downArrow} alt="arrow" />
            </button>

            <ul
              className={`${styles.filterOptions} ${
                displayFilterForm && styles.display
              } ${darkTheme && styles.dark}`}
            >
              <li>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id="draft"
                  name="draft"
                  checked={draftChecked}
                  onChange={(event) => handleChange(event)}
                />
                <label className={styles.label} htmlFor="draft">
                  {" "}
                  Draft
                </label>
              </li>
              <li>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id="pending"
                  name="pending"
                  checked={pendingChecked}
                  onChange={(event) => handleChange(event)}
                />
                <label className={styles.label} htmlFor="pending">
                  {" "}
                  Pending
                </label>
              </li>
              <li>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id="paid"
                  name="paid"
                  checked={paidChecked}
                  onChange={(event) => handleChange(event)}
                />
                <label className={styles.label} htmlFor="paid">
                  {" "}
                  Paid
                </label>
              </li>
            </ul>
          </div>
          <ButtonNewInvoice />
        </section>
        <section className={styles.invoicesDisplay}>{children}</section>
      </main>
    </>
  );
}
