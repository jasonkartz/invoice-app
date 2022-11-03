import styles from "./formElements.module.css";

export default function DatePicker({
  darkTheme,
  label,
  id,
  name,
  customClass,
}) {
  let today = new Date().toISOString().slice(0, 10);
  return (
    <div
      className={`${styles.dropDownContainer} ${darkTheme && styles.dark} ${
        customClass && customClass
      }`}
    >
      <label htmlFor={id || "date"}>{label || "Date"}</label>
      <input
        type="date"
        id={id || "date"}
        name={name || "date"}
        value={today}
      />
    </div>
  );
}
