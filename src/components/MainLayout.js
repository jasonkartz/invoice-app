import styles from "./MainLayout.module.css";
import logo from "../assets/logo.svg";
import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";
import avatar from "../assets/image-avatar.jpg";
import downArrow from "../assets/icon-arrow-down.svg";
import upArrow from "../assets/icon-arrow-up.svg";
import ButtonNewInvoice from "./buttons/ButtonNewInvoice";
import { useEffect, useState } from "react";

export default function MainLayout({ children, darkTheme, themeSwitch }) {
  const [filterText, setFilterText] = useState("Filter by status");
  const [displayFilterForm, setDisplayFilterForm] = useState(false);

  const [filterForm, setFilterForm] = useState({
    draft: false,
    pending: false,
    paid: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setFilterForm((formData) => ({ ...formData, [name]: checked }));
  };
  console.log("filterForm", filterForm);

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
            <h1>Invoices</h1>
            <p>No invoices</p>
          </div>

          <div className={styles.filterForm}>
            <button
              className={styles.filterBtn}
              onClick={() => setDisplayFilterForm(!displayFilterForm)}
            >
              {filterText}&nbsp; &nbsp; &nbsp;
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
                  checked={filterForm.draft}
                  onChange={handleChange}
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
                  checked={filterForm.pending}
                  onChange={handleChange}
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
                  checked={filterForm.paid}
                  onChange={handleChange}
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
