import styles from "./formElements.module.css";
import { useState } from "react";

export default function Dropdown({ darkTheme, label, id, name, customClass }) {
  const [toggleActive, setToggleActive] = useState(false);
  return (
    <div
      className={`${styles.dropDownContainer} ${darkTheme && styles.dark} ${
        customClass && customClass
      }`}
    >
      <p>Payment Terms</p>
      <button
        className={`${styles.dropDownToggle} ${darkTheme && styles.dark}`}
        onClick={() => setToggleActive(!toggleActive)}
      >
        Select
      </button>
      <ul
        className={`${styles.dropDownList} ${toggleActive && styles.display} ${
          darkTheme && styles.dark
        }`}
      >
        <li>
          <input type="radio" name={name || "radio"} id="1" value="1" />
          <label htmlFor="1">Net 1 Day</label>
        </li>
        <li>
          <input type="radio" name={name || "radio"} id="7" value="7" />
          <label htmlFor="7">Net 7 Days</label>
        </li>
        <li>
          <input type="radio" name={name || "radio"} id="14" value="14" />
          <label htmlFor="14">Net 14 Days</label>
        </li>
        <li>
          <input type="radio" name={name || "radio"} id="30" value="30" />
          <label htmlFor="30">Net 30 Days</label>
        </li>
      </ul>
    </div>
  );
}
