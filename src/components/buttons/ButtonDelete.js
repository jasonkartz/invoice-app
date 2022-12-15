import styles from "./Buttons.module.css";

export default function ButtonDelete({ customClass, ...props }) {
  return (
    <button
      className={`${styles.delete} ${customClass && customClass}`}
      {...props}
    >
      Delete
    </button>
  );
}
