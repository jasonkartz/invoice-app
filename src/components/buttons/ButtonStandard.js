import styles from "./Buttons.module.css";

export default function ButtonStandard({
  darkTheme,
  handleClick,
  btnText,
  customClass,
}) {
  return (
    <button
      className={`${styles.standard} ${darkTheme && styles.dark} ${
        customClass && customClass
      }`}
      onClick={handleClick}
    >
      {btnText}
    </button>
  );
}
