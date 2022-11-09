import useMobileView from "../../hooks/useMobileView";
import styles from "./InvoiceForm.module.css";
import "animate.css";
import BackButton from "../buttons/BackButton";
import TextField from "./formElements/TextField";
import Dropdown from "./formElements/Dropdown";
import CustomDatePicker from "./formElements/CustomDatePicker";
import InvoiceItem from "./InvoiceItem";
import ButtonAddItem from "../buttons/ButtonAddItem";
import ButtonStandard from "../buttons/ButtonStandard";
import ButtonSaveDraft from "../buttons/ButtonSaveDraft";
import ButtonPurple from "../buttons/ButtonPurple";
import { useState } from "react";

import React from "react";

export default function InvoiceForm({
  darkTheme,
  invoiceEdit,
  cancelForm,
  selectedInvoice,
}) {
  const [form, setForm] = useState({
    id: "",
    createdAt: selectedInvoice ? selectedInvoice.createdAt : "",
    paymentDue: selectedInvoice ? selectedInvoice.paymentDue : "",
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
    total: 0,
  });
  const [itemsList, setItemsList] = useState([]);
  const [mobileView] = useMobileView();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm((data) => ({ ...data, [name]: value }));
  };

  return (
    <div
      className={`${styles.container} ${
        darkTheme && styles.dark
      } animate__animated animate__fadeInLeft`}
      style={{ animationDuration: "0.25s" }}
    >
      <form>
        {mobileView && (
          <BackButton darkTheme={darkTheme} handleClick={cancelForm} />
        )}
        <h1 className="alt-heading">
          {invoiceEdit ? `Edit #${selectedInvoice.id}` : "New Invoice"}
        </h1>
        <h4>Bill From</h4>
        <section className={styles.billFrom}>
          <TextField
            label="Street Address"
            customClass={styles.streetFrom}
            darkTheme={darkTheme}
            name="senderStreet"
            value={form.senderStreet}
            handleChange={handleChange}
          />
          <TextField
            label="City"
            customClass={styles.cityFrom}
            darkTheme={darkTheme}
            name="senderCity"
            value={form.senderCity}
            handleChange={handleChange}
          />
          <TextField
            label="Post Code"
            customClass={styles.postCodeFrom}
            darkTheme={darkTheme}
            name="senderPostCode"
            value={form.senderPostCode}
            handleChange={handleChange}
          />
          <TextField
            label="Country"
            customClass={styles.countryFrom}
            darkTheme={darkTheme}
            name="senderCountry"
            value={form.senderCountry}
            handleChange={handleChange}
          />
        </section>
        <h4 className={styles.billToTitle}>Bill To</h4>
        <section className={styles.billTo}>
          <TextField
            label="Client's Name"
            customClass={styles.clientName}
            darkTheme={darkTheme}
            name="clientName"
            value={form.clientName}
            handleChange={handleChange}
          />
          <TextField
            type="email"
            label="Client's Email"
            customClass={styles.clientEmail}
            darkTheme={darkTheme}
            name="clientEmail"
            value={form.clientEmail}
            handleChange={handleChange}
          />
          <TextField
            label="Street Address"
            customClass={styles.streetTo}
            darkTheme={darkTheme}
            name="senderStreet"
            value={form.senderStreet}
            handleChange={handleChange}
          />
          <TextField
            label="City"
            customClass={styles.cityTo}
            darkTheme={darkTheme}
            name="senderCity"
            value={form.senderCity}
            handleChange={handleChange}
          />
          <TextField
            label="Post Code"
            customClass={styles.postCodeTo}
            darkTheme={darkTheme}
            name="senderPostCode"
            value={form.senderPostCode}
            handleChange={handleChange}
          />
          <TextField
            label="Country"
            customClass={styles.countryTo}
            darkTheme={darkTheme}
            name="senderCountry"
            value={form.senderCountry}
            handleChange={handleChange}
          />
        </section>
        <section className={styles.generalDetails}>
          <CustomDatePicker darkTheme={darkTheme} customClass={styles.date} />
          <Dropdown darkTheme={darkTheme} customClass={styles.dropDown} />
          <TextField
            label="Product Description"
            customClass={styles.productDesc}
            darkTheme={darkTheme}
            name="description"
            value={form.description}
            handleChange={handleChange}
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
          {selectedInvoice &&
            selectedInvoice.items.map((item, index) => {
              return (
                <InvoiceItem
                  key={index}
                  darkTheme={darkTheme}
                  item={item}
                  form={form}
                  handleChange={handleChange}
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
            handleClick={(e) => e.preventDefault()}
            customClass="responsive"
          />
        </section>
      </form>
    </div>
  );
}
