import styles from "./formElements.module.css";

export default function TextField({
  darkTheme,
  label,
  id,
  name,
  customClass,
  type,
  value,
}) {
  return (
    <div
      className={`${styles.inputContainer} ${darkTheme && styles.dark} ${
        customClass && customClass
      }`}
    >
      {label && <label htmlFor={id}>{label}</label>}
      <input type={type} id={id} name={name} value={value} />
    </div>
  );
}

TextField.defaultProps = {
  label: "Text",
  id: "text",
  name: "text",
  type: "text",
};
