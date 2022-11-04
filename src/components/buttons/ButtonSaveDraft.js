import styles from "./Buttons.module.css";

export default function ButtonSaveDraft({
  darkTheme,
  handleClick,
  customClass,
}) {
  return (
    <button
      className={`${styles["save-draft"]} ${darkTheme && styles.dark} ${
        customClass && customClass
      }`}
      onClick={handleClick}
    >
      Save as Draft
    </button>
  );
}
