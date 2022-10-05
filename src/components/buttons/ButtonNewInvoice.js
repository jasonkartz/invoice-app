import styles from "./Buttons.module.css";
import iconPlus from "../../assets/icon-plus.svg";

export default function ButtonNewInvoice() {
  return (
    <button className={styles["new-invoice"]}>
      <span className={styles.circle}>
        <img src={iconPlus} alt="plus icon" />
      </span>
      <span>New Invoice</span>
    </button>
  );
}
