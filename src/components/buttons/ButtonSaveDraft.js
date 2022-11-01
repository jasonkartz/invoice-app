import styles from "./Buttons.module.css";

export default function ButtonSaveDraft({ darkTheme, handleClick }) {
  return (
    <button
      className={`${styles["save-draft"]} ${darkTheme && styles.dark}`}
      handleClick={handleClick}
    >
      Save as Draft
    </button>
  );
}
