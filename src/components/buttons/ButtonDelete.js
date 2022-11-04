import styles from "./Buttons.module.css";

export default function ButtonDelete({ handleClick, customClass }) {
  return (
    <button
      className={`${styles.delete} ${customClass && customClass}`}
      onClick={handleClick}
    >
      Delete
    </button>
  );
}
