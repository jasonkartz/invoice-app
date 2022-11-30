import styles from "./Buttons.module.css";

export default function ButtonSaveDraft({ darkTheme, customClass, ...props }) {
  return (
    <button
      className={`${styles["save-draft"]} ${darkTheme && styles.dark} ${
        customClass && customClass
      }`}
      {...props}
    >
      Save as Draft
    </button>
  );
}
