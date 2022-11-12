import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "./ReactDatePickerOverride.css";
import { useState } from "react";
import useMobileView from "../../hooks/useMobileView";
import styles from "./InvoiceForm.module.css";
import formStyles from "./formElements/formElements.module.css";
import "animate.css";
import BackButton from "../buttons/BackButton";
import Dropdown from "./formElements/Dropdown";
import CustomDatePicker from "./formElements/CustomDatePicker";
import InvoiceItem from "./InvoiceItem";
import ButtonAddItem from "../buttons/ButtonAddItem";
import ButtonStandard from "../buttons/ButtonStandard";
import ButtonSaveDraft from "../buttons/ButtonSaveDraft";
import ButtonPurple from "../buttons/ButtonPurple";

import React from "react";

export default function InvoiceForm({
  darkTheme,
  invoiceEdit,
  cancelForm,
  selectedInvoice,
}) {
  const defaultValues = {
    id: "",
    createdAt: selectedInvoice ? new Date(selectedInvoice.createdAt) : "",
    paymentDue: selectedInvoice ? new Date(selectedInvoice.paymentDue) : "",
    description: selectedInvoice ? selectedInvoice.description : "",
    paymentTerms: 1,
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
    total: 0,
  };

  const { register, handleSubmit, control } = useForm({ defaultValues });
  const [startDate, setStartDate] = useState(new Date());
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
          <div
            className={`${formStyles.inputContainer} ${
              darkTheme && formStyles.dark
            } ${styles.streetFrom}`}
          >
            <label>Street Address</label>
            <input {...register("senderStreet")} />
          </div>
          <div
            className={`${formStyles.inputContainer} ${
              darkTheme && formStyles.dark
            } ${styles.cityFrom}`}
          >
            <label>City</label>
            <input {...register("senderCity")} />
          </div>
          <div
            className={`${formStyles.inputContainer} ${
              darkTheme && formStyles.dark
            } ${styles.postCodeFrom}`}
          >
            <label>Post Code</label>
            <input {...register("senderPostCode")} />
          </div>
          <div
            className={`${formStyles.inputContainer} ${
              darkTheme && formStyles.dark
            } ${styles.countryFrom}`}
          >
            <label>Country</label>
            <input {...register("senderCountry")} />
          </div>
        </section>
        <h4 className={styles.billToTitle}>Bill To</h4>
        <section className={styles.billTo}>
          <div
            className={`${formStyles.inputContainer} ${
              darkTheme && formStyles.dark
            } ${styles.clientName}`}
          >
            <label>Client's Name</label>
            <input {...register("clientName")} />
          </div>
          <div
            className={`${formStyles.inputContainer} ${
              darkTheme && formStyles.dark
            } ${styles.clientEmail}`}
          >
            <label>Client's Email</label>
            <input {...register("clientEmail")} />
          </div>
          <div
            className={`${formStyles.inputContainer} ${
              darkTheme && formStyles.dark
            } ${styles.streetTo}`}
          >
            <label>Street Address</label>
            <input {...register("clientStreet")} />
          </div>
          <div
            className={`${formStyles.inputContainer} ${
              darkTheme && formStyles.dark
            } ${styles.cityTo}`}
          >
            <label>City</label>
            <input {...register("clientCity")} />
          </div>
          <div
            className={`${formStyles.inputContainer} ${
              darkTheme && formStyles.dark
            } ${styles.postCodeTo}`}
          >
            <label>Post Code</label>
            <input {...register("clientPostCode")} />
          </div>
          <div
            className={`${formStyles.inputContainer} ${
              darkTheme && formStyles.dark
            } ${styles.countryTo}`}
          >
            <label>Country</label>
            <input {...register("clientCountry")} />
          </div>
        </section>
        <section className={styles.generalDetails}>
          <div
            className={`${formStyles.inputContainer} ${
              darkTheme && formStyles.dark
            } ${styles.date}`}
          >
            <label>Payment Due</label>
            <Controller
              control={control}
              name="paymentDue"
              render={({ field }) => (
                <DatePicker
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                  dateFormat="MMMM d yyyy"
                />
              )}
            />
          </div>
          <Dropdown darkTheme={darkTheme} customClass={styles.dropDown} />
          <div
            className={`${formStyles.inputContainer} ${
              darkTheme && formStyles.dark
            } ${styles.productDesc}`}
          >
            <label>Product Description</label>
            <input {...register("description")} />
          </div>
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
          {selectedInvoice &&
            selectedInvoice.items.map((item, index) => {
              return (
                <InvoiceItem
                  key={index}
                  darkTheme={darkTheme}
                  item={item}
                  index={index}
                />
              );
            })}

          <ButtonAddItem
            darkTheme={darkTheme}
            handleClick={(e) => {
              e.preventDefault();
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
