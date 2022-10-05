import styles from "./Buttons.module.css";

export default function ButtonSaveDraft({ darkTheme }) {
  return (
    <button className={`${styles["save-draft"]} ${darkTheme && styles.dark}`}>
      Save as Draft
    </button>
  );
}
