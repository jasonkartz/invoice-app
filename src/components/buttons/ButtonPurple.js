import styles from "./Buttons.module.css";

export default function ButtonPurple({ handleClick, btnText, customClass }) {
  return (
    <button
      className={`${styles.purple} ${customClass && customClass}`}
      onClick={handleClick}
    >
      {btnText}
    </button>
  );
}
