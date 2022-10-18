import styles from "./ViewInvoice.module.css";
import arrowLeft from "../../assets/icon-arrow-left.svg";

export default function ViewInvoice({ setScreen }) {
  return (
    <div className={styles.container}>
      <button onClick={() => setScreen("main")}>
        <img src={arrowLeft} alt="arrow-left" />
        &nbsp; &nbsp; &nbsp; Go Back
      </button>
    </div>
  );
}
