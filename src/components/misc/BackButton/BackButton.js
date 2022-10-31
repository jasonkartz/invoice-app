import styles from "./BackButton.module.css";
import arrowLeft from "../../../assets/icon-arrow-left.svg";

export default function BackButton({ darkTheme, setScreen }) {
  return (
    <button
      className={`${styles.backButton} ${darkTheme && styles.dark}`}
      onClick={() => setScreen("main")}
    >
      <img src={arrowLeft} alt="arrow-left" />
      &nbsp; &nbsp; &nbsp; Go Back
    </button>
  );
}
