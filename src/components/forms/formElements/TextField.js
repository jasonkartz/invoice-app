import styles from "./formElements.module.css";

export default function TextField({ darkTheme, label, id, name, customClass }) {
  return (
    <div
      className={`${styles.inputContainer} ${darkTheme && styles.dark} ${
        customClass && customClass
      }`}
    >
      <label htmlFor={id || "text"}>{label || "Text"}</label>
      <input type="text" id={id || "text"} name={name || "text"} />
    </div>
  );
}
