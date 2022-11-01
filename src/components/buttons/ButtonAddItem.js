import styles from "./Buttons.module.css";

export default function ButtonAddItem({ darkTheme, handleClick }) {
  return (
    <button
      className={`${styles["add-item"]} ${darkTheme && styles.dark}`}
      onClick={handleClick}
    >
      + Add New Item
    </button>
  );
}
