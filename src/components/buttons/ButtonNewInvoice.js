import styles from "./Buttons.module.css";
import iconPlus from "../../assets/icon-plus.svg";
import useMobileView from "../../hooks/useMobileView";

export default function ButtonNewInvoice({ handleClick }) {
  const [mobileView] = useMobileView(); //mobile screens and resizing screens

  return (
    <button className={styles["new-invoice"]} onClick={handleClick}>
      <span className={styles.circle}>
        <img src={iconPlus} alt="plus icon" />
      </span>
      <span>New{!mobileView && " Invoice"}</span>
    </button>
  );
}
