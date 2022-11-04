import styles from "./Buttons.module.css";

export default function ButtonAddItem({ darkTheme, handleClick, customClass }) {
  return (
    <button
      className={`${styles["add-item"]} ${darkTheme && styles.dark} ${
        customClass && customClass
      }`}
      onClick={handleClick}
    >
      + Add New Item
    </button>
  );
}
