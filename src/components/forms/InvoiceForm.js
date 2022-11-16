import { useForm, Controller, useFieldArray } from "react-hook-form";
import DatePicker from "react-datepicker";
import "./ReactDatePickerOverride.css";
import { useState } from "react";
import useMobileView from "../../hooks/useMobileView";
import styles from "./InvoiceForm.module.css";
import formStyles from "./formElements/formElements.module.css";
import itemStyles from "./InvoiceItem.module.css";
import "animate.css";
import BackButton from "../buttons/BackButton";
import Dropdown from "./formElements/Dropdown";
import CustomDatePicker from "./formElements/CustomDatePicker";
import TextField from "./formElements/TextField";
import InvoiceItem from "./InvoiceItem";
import ButtonAddItem from "../buttons/ButtonAddItem";
import ButtonStandard from "../buttons/ButtonStandard";
import ButtonSaveDraft from "../buttons/ButtonSaveDraft";
import ButtonPurple from "../buttons/ButtonPurple";
import calendarIcon from "../../assets/icon-calendar.svg";

import React from "react";

export default function InvoiceForm({
  darkTheme,
  invoiceEdit,
  cancelForm,
  selectedInvoice,
}) {
  const defaultValues = {
    id: "",
    createdAt: selectedInvoice
      ? new Date(selectedInvoice.createdAt)
      : new Date(),
    paymentDue: selectedInvoice
      ? new Date(selectedInvoice.paymentDue)
      : new Date(),
    description: selectedInvoice ? selectedInvoice.description : "",
    paymentTerms: selectedInvoice ? selectedInvoice.paymentTerms : 1,
    clientName: selectedInvoice ? selectedInvoice.clientName : "",
    clientEmail: selectedInvoice ? selectedInvoice.clientEmail : "",
    status: "draft",
    senderStreet: selectedInvoice ? selectedInvoice.senderAddress.street : "",
    senderCity: selectedInvoice ? selectedInvoice.senderAddress.city : "",
    senderPostCode: selectedInvoice
      ? selectedInvoice.senderAddress.postCode
      : "",
    senderCountry: selectedInvoice ? selectedInvoice.senderAddress.country : "",
    clientStreet: selectedInvoice ? selectedInvoice.clientAddress.street : "",
    clientCity: selectedInvoice ? selectedInvoice.clientAddress.city : "",
    clientPostCode: selectedInvoice
      ? selectedInvoice.clientAddress.postCode
      : "",
    clientCountry: selectedInvoice ? selectedInvoice.clientAddress.country : "",
    items: selectedInvoice ? selectedInvoice.items : [],
    total: selectedInvoice ? selectedInvoice.total : 0,
  };

  const { register, handleSubmit, getValues, setValue, control } = useForm({
    defaultValues,
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "items",
    }
  );
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [mobileView] = useMobileView();
  return (
    <div
      className={`${styles.container} ${
        darkTheme && styles.dark
      } animate__animated animate__fadeInLeft`}
      style={{ animationDuration: "0.25s" }}
    >
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        {mobileView && (
          <BackButton darkTheme={darkTheme} handleClick={cancelForm} />
        )}
        <h1 className="alt-heading">
          {invoiceEdit ? `Edit #${selectedInvoice.id}` : "New Invoice"}
        </h1>
        <h4>Bill From</h4>
        <section className={styles.billFrom}>
          <TextField
            customClass={styles.streetFrom}
            darkTheme={darkTheme}
            label="Street Address"
            name="senderStreet"
            {...register("senderStreet")}
          />
          <TextField
            customClass={styles.cityFrom}
            darkTheme={darkTheme}
            label="City"
            name="senderCity"
            {...register("senderCity")}
          />
          <TextField
            customClass={styles.postCodeFrom}
            darkTheme={darkTheme}
            label="Post Code"
            name="senderPostCode"
            {...register("senderPostCode")}
          />
          <TextField
            customClass={styles.countryFrom}
            darkTheme={darkTheme}
            label="Country"
            name="senderCountry"
            {...register("senderCountry")}
          />
        </section>
        <h4 className={styles.billToTitle}>Bill To</h4>
        <section className={styles.billTo}>
          <TextField
            customClass={styles.clientName}
            darkTheme={darkTheme}
            label="Client's Name"
            name="clientName"
            {...register("clientName")}
          />
          <TextField
            customClass={styles.clientEmail}
            darkTheme={darkTheme}
            label="Client's Email"
            name="clientEmail"
            {...register("clientEmail")}
          />
          <TextField
            customClass={styles.streetTo}
            darkTheme={darkTheme}
            label="Street Address"
            name="clientStreet"
            {...register("clientStreet")}
          />
          <TextField
            customClass={styles.cityTo}
            darkTheme={darkTheme}
            label="City"
            name="clientCity"
            {...register("clientCity")}
          />
          <TextField
            customClass={styles.postCodeTo}
            darkTheme={darkTheme}
            label="Post Code"
            name="clientPostCode"
            {...register("clientPostCode")}
          />
          <TextField
            customClass={styles.countryTo}
            darkTheme={darkTheme}
            label="Country"
            name="clientCountry"
            {...register("clientCountry")}
          />
        </section>
        <section className={styles.generalDetails}>
          <div
            className={`${formStyles.inputContainer} ${
              darkTheme && formStyles.dark
            } ${styles.date}`}
          >
            <label>{selectedInvoice ? "Invoice Date" : "Issue Date"}</label>
            <img src={calendarIcon} alt="calendar icon" width="16" />
            <Controller
              control={control}
              name="createdAt"
              render={({ field }) => (
                <DatePicker
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                  dateFormat="MMMM d yyyy"
                  showPopperArrow={false}
                  className={styles.dateInput}
                />
              )}
            />
          </div>

          {/* Drop Down */}
          <div
            className={`${formStyles.dropDownContainer} ${
              darkTheme && formStyles.dark
            } ${styles.dropdown}`}
          >
            <p>Payment Terms</p>
            <button
              className={`${formStyles.dropDownToggle} ${
                darkTheme && formStyles.dark
              }`}
              onClick={(e) => {
                e.preventDefault();
                setToggleDropdown(!toggleDropdown);
              }}
            >
              Net {getValues("paymentTerms")} Day
              {getValues("paymentTerms") !== "1" && "s"}
            </button>
            <ul
              className={`${formStyles.dropDownList} ${
                toggleDropdown && formStyles.display
              } ${darkTheme && formStyles.dark}`}
            >
              <li>
                <input
                  type="radio"
                  {...register("paymentTerms")}
                  id="1"
                  value={1}
                  onClick={() => {
                    setToggleDropdown(!toggleDropdown);
                  }}
                />
                <label htmlFor="1">Net 1 Day</label>
              </li>
              <li>
                <input
                  type="radio"
                  {...register("paymentTerms")}
                  id="7"
                  value={7}
                  onClick={() => {
                    setToggleDropdown(!toggleDropdown);
                  }}
                />
                <label htmlFor="7">Net 7 Days</label>
              </li>
              <li>
                <input
                  type="radio"
                  {...register("paymentTerms")}
                  id="14"
                  value={14}
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleDropdown(!toggleDropdown);
                  }}
                />
                <label htmlFor="14">Net 14 Days</label>
              </li>
              <li>
                <input
                  type="radio"
                  {...register("paymentTerms")}
                  id="30"
                  value={30}
                  onClick={(e) => {
                    e.preventDefault();
                    setToggleDropdown(!toggleDropdown);
                  }}
                />
                <label htmlFor="30">Net 30 Days</label>
              </li>
            </ul>
          </div>
          <TextField
            customClass={styles.productDesc}
            darkTheme={darkTheme}
            label="Product Description"
            name="description"
            {...register("description")}
          />
        </section>
        <h3 className="form">Item List</h3>
        <section className={styles.itemList}>
          {!mobileView && (
            <div className={styles.itemHeading}>
              <span className={styles.name}>Item Name</span>
              <span className={styles.qty}>Qty.</span>
              <span className={styles.price}>Price</span>
              <span className={styles.total}>Total</span>
            </div>
          )}
          {fields.map((field, index) => {
            return (
              <div
                key={field.id}
                className={`${itemStyles.itemContainer} ${
                  darkTheme && itemStyles.dark
                }`}
              >
                <TextField
                  label={mobileView && "Item Name"}
                  darkTheme={darkTheme}
                  customClass={itemStyles.name}
                  name="name"
                  {...register(`items.${index}.name`)}
                />
                <TextField
                  label={mobileView && "Qty."}
                  darkTheme={darkTheme}
                  customClass={itemStyles.qty}
                  type="number"
                  name="quantity"
                  {...register(`items.${index}.quantity`, {
                    valueAsNumber: true,
                    onChange: (e) => {
                      const qty = e.target.value;
                      const price = getValues(`items.${index}.price`);
                      const sum = price * qty;
                      setValue(`items.${index}.total`, sum.toFixed(2));
                    },
                  })}
                />
                <TextField
                  label={mobileView && "Price"}
                  darkTheme={darkTheme}
                  customClass={itemStyles.price}
                  type="number"
                  step="any"
                  name="price"
                  {...register(`items.${index}.price`, {
                    valueAsNumber: true,
                    onChange: (e) => {
                      const qty = getValues(`items.${index}.quantity`);
                      const price = e.target.value;
                      const sum = price * qty;
                      setValue(`items.${index}.total`, sum.toFixed(2));
                    },
                  })}
                />
                <TextField
                  label={mobileView && "Total"}
                  noStyles={true}
                  customClass={`${itemStyles.total} ${
                    darkTheme && itemStyles.dark
                  }`}
                  name="total"
                  {...register(`items.${index}.total`, {
                    valueAsNumber: true,
                  })}
                  readOnly={true}
                />

                <button
                  className={itemStyles.delete}
                  onClick={() => {
                    remove(index);
                  }}
                >
                  <svg
                    width="13"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
                      fillRule="nonzero"
                    />
                  </svg>
                </button>
              </div>
            );
          })}

          <ButtonAddItem
            darkTheme={darkTheme}
            handleClick={() => {
              append({ name: "", quantity: 0, price: 0.0, total: "" });
            }}
          />
        </section>
        <section className={styles.btnSection}>
          <ButtonStandard
            darkTheme={darkTheme}
            handleClick={cancelForm}
            btnText={invoiceEdit ? "Cancel" : "Discard"}
            customClass={`responsive ${!invoiceEdit && styles.btnDiscard}`}
          />
          {!invoiceEdit && (
            <ButtonSaveDraft
              handleClick={(e) => e.preventDefault()}
              darkTheme={darkTheme}
              customClass="responsive"
            />
          )}
          <ButtonPurple
            btnText={invoiceEdit ? "Save Changes" : "Save & Send"}
            type="submit"
            customClass="responsive"
          />
        </section>
      </form>
    </div>
  );
}
