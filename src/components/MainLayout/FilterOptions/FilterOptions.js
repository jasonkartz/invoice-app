import styles from "./FilterOptions.module.css";
import downArrow from "../../../assets/icon-arrow-down.svg";
import upArrow from "../../../assets/icon-arrow-up.svg";
import { useState, useRef, useEffect } from "react";
import useMobileView from "../../../hooks/useMobileView";

export default function FilterOptions({
  draftChecked,
  darkTheme,
  handleChange,
  pendingChecked,
  paidChecked,
}) {
  const [displayFilter, setDisplayFilter] = useState(false);
  const [mobileView] = useMobileView(); //mobile screens and resizing screens

  const ref = useRef();

  useEffect(() => {
    const clickedOutside = (event) => {
      if (displayFilter && ref.current && !ref.current.contains(event.target)) {
        setDisplayFilter(false);
      }
    };

    document.addEventListener("mousedown", clickedOutside);

    return () => {
      document.removeEventListener("mousedown", clickedOutside);
    };
  }, [displayFilter]);

  return (
    <div className={styles.filterForm} ref={ref}>
      <button
        className={`${styles.filterBtn} ${darkTheme && styles.dark}`}
        ref={ref}
        onClick={() => setDisplayFilter(!displayFilter)}
      >
        Filter {!mobileView && "by status"}&nbsp; &nbsp; &nbsp;
        <img src={displayFilter ? upArrow : downArrow} alt="arrow" />
      </button>

      {displayFilter && (
        <ul className={`${styles.filterOptions} ${darkTheme && styles.dark}`}>
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
      )}
    </div>
  );
}
