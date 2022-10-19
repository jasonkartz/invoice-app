import styles from "./Buttons.module.css";

export default function ButtonEdit({ darkTheme }) {
  return (
    <button className={`${styles.edit} ${darkTheme && styles.dark}`}>
      Edit
    </button>
  );
}
