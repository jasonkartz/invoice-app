import styles from "./MainLayout.module.css";
import logo from "../assets/logo.svg";
import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";
import avatar from "../assets/image-avatar.jpg";

export default function MainLayout({ children, darkTheme, themeSwitch }) {
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
        <section className={styles.invoiceOptions}></section>
        <section className={styles.invoicesDisplay}>{children}</section>
      </main>
    </>
  );
}
