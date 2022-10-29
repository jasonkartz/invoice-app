import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ReactDatePickerOverride.css";

export default function ReactDatePicker({
  darkTheme,
  label,
  id,
  name,
  customClass,
}) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="inputContainer">
      <p>Date</p>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
}
