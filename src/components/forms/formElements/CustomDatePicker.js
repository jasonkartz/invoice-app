import styles from "./formElements.module.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "./ReactCalendarCustom.css";
import leftArrow from "../../../assets/icon-arrow-left.svg";
import rightArrow from "../../../assets/icon-arrow-right.svg";

export default function CustomDatePicker({
  darkTheme,
  label,
  id,
  name,
  customClass,
}) {
  const [value, onChange] = useState(new Date());
  const [calendarDisplay, setCalendarDisplay] = useState(false);
  let dateDisplay = value.toString().slice(4, 15);
  return (
    <div
      className={`${styles.inputContainer} ${darkTheme && styles.dark} ${
        customClass && customClass
      }`}
    >
      <p>{label || "Date"}</p>
      <button
        className={`${styles.calendarBtn} ${darkTheme && styles.dark}`}
        id={id || "date"}
        onClick={(e) => {
          e.preventDefault();
          setCalendarDisplay(!calendarDisplay);
        }}
      >
        {dateDisplay}
      </button>
      <div
        className={`${styles.calendarContainer} ${
          calendarDisplay && styles.display
        }`}
      >
        <Calendar
          onChange={onChange}
          value={value}
          calendarType="US"
          className={darkTheme ? "dark" : ""}
          nextLabel=""
          prevLabel=""
        />
      </div>
    </div>
  );
}
