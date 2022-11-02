import styles from "./FilterOptions.module.css";
import downArrow from "../../../assets/icon-arrow-down.svg";
import upArrow from "../../../assets/icon-arrow-up.svg";
import { useState } from "react";
import useMobileView from "../../../hooks/useMobileView";

export default function FilterOptions({
  draftChecked,
  darkTheme,
  handleChange,
  pendingChecked,
  paidChecked,
}) {
  const [displayFilterForm, setDisplayFilterForm] = useState(false);
  const [mobileView] = useMobileView(); //mobile screens and resizing screens
  return (
    <div className={styles.filterForm}>
      <button
        className={`${styles.filterBtn} ${darkTheme && styles.dark}`}
        onClick={() => setDisplayFilterForm(!displayFilterForm)}
      >
        Filter {!mobileView && "by status"}&nbsp; &nbsp; &nbsp;
        <img src={displayFilterForm ? upArrow : downArrow} alt="arrow" />
      </button>

      <ul
        className={`${styles.filterOptions} ${
          displayFilterForm && styles.display
        } ${darkTheme && styles.dark}`}
      >
        <li>
          <input
            className={styles.checkbox}
            type="checkbox"
            id="draft"
            name="draft"
            checked={draftChecked}
            onChange={(event) => handleChange(event)}
          />
          <label className={styles.label} htmlFor="draft">
            {" "}
            Draft
          </label>
        </li>
        <li>
          <input
            className={styles.checkbox}
            type="checkbox"
            id="pending"
            name="pending"
            checked={pendingChecked}
            onChange={(event) => handleChange(event)}
          />
          <label className={styles.label} htmlFor="pending">
            {" "}
            Pending
          </label>
        </li>
        <li>
          <input
            className={styles.checkbox}
            type="checkbox"
            id="paid"
            name="paid"
            checked={paidChecked}
            onChange={(event) => handleChange(event)}
          />
          <label className={styles.label} htmlFor="paid">
            {" "}
            Paid
          </label>
        </li>
      </ul>
    </div>
  );
}
