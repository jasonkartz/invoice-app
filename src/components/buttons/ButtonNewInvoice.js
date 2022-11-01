import styles from "./Buttons.module.css";
import iconPlus from "../../assets/icon-plus.svg";
import { useEffect, useState } from "react";

export default function ButtonNewInvoice({ handleClick }) {
  const [text, setText] = useState("New");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 767) {
        setText("New Invoice");
      } else {
        setText("New");
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  });
  return (
    <button className={styles["new-invoice"]} onClick={handleClick}>
      <span className={styles.circle}>
        <img src={iconPlus} alt="plus icon" />
      </span>
      <span>{text}</span>
    </button>
  );
}
