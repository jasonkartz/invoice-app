import styles from "./Buttons.module.css";

export default function ButtonEdit({ darkTheme, handleClick }) {
  return (
    <button
      className={`${styles.edit} ${darkTheme && styles.dark}`}
      onClick={handleClick}
    >
      Edit
    </button>
  );
}
