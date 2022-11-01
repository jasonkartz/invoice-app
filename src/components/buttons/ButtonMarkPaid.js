import styles from "./Buttons.module.css";

export default function ButtonMarkPaid({ handleClick }) {
  return (
    <button className={styles["mark-paid"]} onClick={handleClick}>
      Mark as Paid
    </button>
  );
}
