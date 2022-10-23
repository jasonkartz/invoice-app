import illustration from "../../../assets/illustration-empty.svg";
import styles from "./EmptyDisplay.module.css";

export default function EmptyDisplay({ darkTheme }) {
  return (
    <div className={`${styles.container} ${darkTheme && styles.dark}`}>
      <img src={illustration} alt="Nothing here" />
      <h2>There is nothing here</h2>
      <p className={`${styles.tabletDesktop}`}>
        Create a new invoice by clicking the
        <strong> New Invoice</strong> button and get started
      </p>
      <p className={`${styles.mobile}`}>
        Create an invoice by clicking the
        <strong> New</strong> button and get started
      </p>
    </div>
  );
}
