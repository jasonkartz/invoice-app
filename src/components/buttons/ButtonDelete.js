import styles from "./Buttons.module.css";

export default function ButtonDelete({ handleClick }) {
  return (
    <button className={styles.delete} onClick={handleClick}>
      Delete
    </button>
  );
}
