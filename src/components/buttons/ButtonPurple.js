import styles from "./Buttons.module.css";

export default function ButtonPurple({
  handleClick,
  btnText,
  customClass,
  ...props
}) {
  return (
    <button
      className={`${styles.purple} ${customClass && customClass}`}
      {...props}
    >
      {btnText}
    </button>
  );
}
