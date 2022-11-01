import styles from "./Buttons.module.css";
import arrowLeft from "../../assets/icon-arrow-left.svg";

export default function BackButton({ darkTheme, handleClick }) {
  return (
    <button
      className={`${styles.backButton} ${darkTheme && styles.dark}`}
      onClick={handleClick}
    >
      <img src={arrowLeft} alt="arrow-left" />
      &nbsp; &nbsp; &nbsp; Go Back
    </button>
  );
}
