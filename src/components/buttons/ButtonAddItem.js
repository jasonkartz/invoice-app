import styles from "./Buttons.module.css";

export default function ButtonAddItem({ darkTheme }) {
  return (
    <button className={`${styles["add-item"]} ${darkTheme && styles.dark}`}>
      + Add New Item
    </button>
  );
}
