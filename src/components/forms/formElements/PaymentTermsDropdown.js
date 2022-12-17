import styles from "./formElements.module.css";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
export default function Dropdown({ darkTheme, setPaymentDue, customClass }) {
  const [toggleActive, setToggleActive] = useState(false);

  const { register, getValues } = useFormContext();

  return (
    <div
      className={`${styles.dropDownContainer} ${darkTheme && styles.dark} ${
        customClass && customClass
      }`}
    >
      <p>Payment Terms</p>

      <button
        className={`${styles.dropDownToggle} ${darkTheme && styles.dark}`}
        onClick={() => {
          setToggleActive(!toggleActive);
        }}
      >
        Net {getValues("paymentTerms")} Day
        {getValues("paymentTerms") !== "1" && "s"}
      </button>

      <ul
        className={`${styles.dropDownList} ${toggleActive && styles.display} ${
          darkTheme && styles.dark
        }`}
      >
        <li>
          <input
            type="radio"
            {...register("paymentTerms", {
              valueAsNumber: true,
            })}
            id="1"
            value={1}
            onClick={() => {
              setPaymentDue(1);
              setToggleActive(!toggleActive);
            }}
          />
          <label htmlFor="1">Net 1 Day</label>
        </li>

        <li>
          <input
            type="radio"
            {...register("paymentTerms", {
              valueAsNumber: true,
            })}
            id="7"
            value={7}
            onClick={() => {
              setPaymentDue(7);
              setToggleActive(!toggleActive);
            }}
          />
          <label htmlFor="7">Net 7 Days</label>
        </li>

        <li>
          <input
            type="radio"
            {...register("paymentTerms", {
              valueAsNumber: true,
            })}
            id="14"
            value={14}
            onClick={() => {
              setPaymentDue(14);
              setToggleActive(!toggleActive);
            }}
          />
          <label htmlFor="14">Net 14 Days</label>
        </li>

        <li>
          <input
            type="radio"
            {...register("paymentTerms", {
              valueAsNumber: true,
            })}
            id="30"
            value={30}
            onClick={() => {
              setPaymentDue(30);
              setToggleActive(!toggleActive);
            }}
          />
          <label htmlFor="30">Net 30 Days</label>
        </li>
      </ul>
    </div>
  );
}
