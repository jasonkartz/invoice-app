import {
  useForm,
  Controller,
  useFieldArray,
  FormProvider,
} from "react-hook-form";
import { useEffect, useRef } from "react";
import { customAlphabet } from "nanoid";
import DatePicker from "react-datepicker";
import "./formElements/ReactDatePickerOverride.css";
import useMobileView from "../../hooks/useMobileView";
import styles from "./InvoiceForm.module.css";
import formStyles from "./formElements/formElements.module.css";
import "animate.css";
import BackButton from "../buttons/BackButton";
import TextField from "./formElements/TextField";
import ButtonAddItem from "../buttons/ButtonAddItem";
import ButtonStandard from "../buttons/ButtonStandard";
import ButtonSaveDraft from "../buttons/ButtonSaveDraft";
import ButtonPurple from "../buttons/ButtonPurple";
import PaymentTermsDropdown from "./formElements/PaymentTermsDropdown";
import InvoiceItem from "./InvoiceItem";
import calendarIcon from "../../assets/icon-calendar.svg";

import React from "react";

export default function InvoiceForm({
  darkTheme,
  invoiceEdit,
  closeForm,
  selectedInvoice,
  updateInvoice,
  addInvoice,
}) {
  // generate random ID in 2 parts: 2 letters, then 4 numbers
  const alphabetid = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 2);
  const numberid = customAlphabet("1234567890", 4);
  const newID = alphabetid() + numberid();
  const defaultValues = {
    id: selectedInvoice ? selectedInvoice.id : newID,
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
    status: selectedInvoice ? selectedInvoice.status : "pending",
    senderAddress: {
      street: selectedInvoice ? selectedInvoice.senderAddress.street : "",
      city: selectedInvoice ? selectedInvoice.senderAddress.city : "",
      postCode: selectedInvoice ? selectedInvoice.senderAddress.postCode : "",
      country: selectedInvoice ? selectedInvoice.senderAddress.country : "",
    },
    clientAddress: {
      street: selectedInvoice ? selectedInvoice.clientAddress.street : "",
      city: selectedInvoice ? selectedInvoice.clientAddress.city : "",
      postCode: selectedInvoice ? selectedInvoice.clientAddress.postCode : "",
      country: selectedInvoice ? selectedInvoice.clientAddress.country : "",
    },

    items: selectedInvoice ? selectedInvoice.items : [],
    total: selectedInvoice ? selectedInvoice.total : 0,
  };

  const methods = useForm({ defaultValues });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    setError,
    clearErrors,
    control,
  } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const [mobileView] = useMobileView();
  //if no items are added, sets an error. Clears error once an item is added.
  useEffect(() => {
    const items = getValues("items");
    if (!items.length) {
      setError("noItems");
    } else {
      clearErrors("noItems");
    }
  }, [getValues("items")]);

  const updateOrAddInvoice = (data) => {
    if (invoiceEdit) {
      updateInvoice(data, data.id);
    } else {
      addInvoice(data, false);
    }
    closeForm();
  };

  const clicked = useRef(false);

  const saveDraft = () => {
    const formData = getValues();
    addInvoice(formData, true);
    closeForm();
  };

  //sets ref as true once submit button is clicked and errors exists
  const onError = () => (clicked.current = true);

  const tallyItems = () => {
    let invoiceTotal = 0;
    let items = getValues("items");
    items.forEach((item) => (invoiceTotal += item.total).toFixed(2));
    setValue("total", invoiceTotal);
  };

  const setPaymentDue = (paymentTerms) => {
    const createdAt = new Date(getValues("createdAt"));
    const paymentDue = createdAt.setDate(createdAt.getDate() + paymentTerms);

    setValue("paymentDue", new Date(paymentDue));
  };

  const errorCheck = () => {
    if (
      errors.senderAddress ||
      errors.clientName ||
      errors.clientEmail ||
      errors.clientAddress ||
      errors.description ||
      errors.items
    ) {
      return <p>- All fields must be filled</p>;
    }
  };

  return (
    <FormProvider {...methods}>
      <div
        className={`${styles.container} ${
          darkTheme && styles.dark
        } animate__animated animate__fadeInLeft`}
        style={{ animationDuration: "0.25s" }}
      >
        <div className={styles.form}>
          {mobileView && (
            <BackButton darkTheme={darkTheme} handleClick={closeForm} />
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
              error={errors.senderAddress?.street}
              name="street"
              {...register("senderAddress.street", {
                required: true,
              })}
            />

            <TextField
              customClass={styles.cityFrom}
              darkTheme={darkTheme}
              label="City"
              error={errors.senderAddress?.city}
              name="city"
              {...register("senderAddress.city", {
                required: true,
              })}
            />

            <TextField
              customClass={styles.postCodeFrom}
              darkTheme={darkTheme}
              label="Post Code"
              error={errors.senderAddress?.postCode}
              name="postCode"
              {...register("senderAddress.postCode", {
                required: true,
              })}
            />

            <TextField
              customClass={styles.countryFrom}
              darkTheme={darkTheme}
              label="Country"
              error={errors.senderAddress?.country}
              name="country"
              {...register("senderAddress.country", {
                required: true,
              })}
            />
          </section>

          <h4 className={styles.billToTitle}>Bill To</h4>

          <section className={styles.billTo}>
            <TextField
              customClass={styles.clientName}
              darkTheme={darkTheme}
              label="Client's Name"
              error={errors.clientName}
              name="clientName"
              {...register("clientName", {
                required: true,
              })}
            />

            <TextField
              customClass={styles.clientEmail}
              darkTheme={darkTheme}
              type="email"
              label="Client's Email"
              error={errors.clientEmail}
              name="clientEmail"
              {...register("clientEmail", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />

            <TextField
              customClass={styles.streetTo}
              darkTheme={darkTheme}
              label="Street Address"
              error={errors.clientAddress?.street}
              name="street"
              {...register("clientAddress.street", {
                required: true,
              })}
            />

            <TextField
              customClass={styles.cityTo}
              darkTheme={darkTheme}
              label="City"
              error={errors.clientAddress?.city}
              name="city"
              {...register("clientAddress.city", {
                required: true,
              })}
            />

            <TextField
              customClass={styles.postCodeTo}
              darkTheme={darkTheme}
              label="Post Code"
              error={errors.clientAddress?.postCode}
              name="postCode"
              {...register("clientAddress.postCode", {
                required: true,
              })}
            />

            <TextField
              customClass={styles.countryTo}
              darkTheme={darkTheme}
              label="Country"
              error={errors.clientAddress?.country}
              name="country"
              {...register("clientAddress.country", {
                required: true,
              })}
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
                    onChange={(date) => {
                      field.onChange(date);
                      const paymentTerms = Number(getValues("paymentTerms"));
                      setPaymentDue(paymentTerms);
                    }}
                    selected={field.value}
                    dateFormat="MMMM d yyyy"
                    showPopperArrow={false}
                    className={styles.dateInput}
                  />
                )}
              />
            </div>

            <PaymentTermsDropdown
              setPaymentDue={setPaymentDue}
              customClass={styles.dropDown}
              darkTheme={darkTheme}
            />

            <TextField
              customClass={styles.productDesc}
              darkTheme={darkTheme}
              label="Product Description"
              error={errors.description}
              name="description"
              {...register("description", {
                required: true,
              })}
            />
          </section>

          <h3 className="form">Item List</h3>

          <section className={styles.itemList}>
            {fields.map((field, index) => {
              return (
                <InvoiceItem
                  darkTheme={darkTheme}
                  index={index}
                  tallyItems={tallyItems}
                  remove={remove}
                  field={field}
                />
              );
            })}

            <ButtonAddItem
              darkTheme={darkTheme}
              customClass={clicked.current && errors.noItems && styles.btnError}
              handleClick={() => {
                append({ name: "", quantity: 0, price: 0.0, total: "" });
              }}
            />

            <div className={styles.alert}>
              {errorCheck()}
              {clicked.current && errors.noItems && (
                <p>- An item must be added</p>
              )}
            </div>
          </section>

          <section className={styles.btnSection}>
            <ButtonStandard
              darkTheme={darkTheme}
              handleClick={closeForm}
              btnText={invoiceEdit ? "Cancel" : "Discard"}
              customClass={`responsive ${!invoiceEdit && styles.btnDiscard}`}
            />

            {!invoiceEdit && (
              <ButtonSaveDraft
                onClick={saveDraft}
                darkTheme={darkTheme}
                customClass="responsive"
              />
            )}

            <ButtonPurple
              btnText={invoiceEdit ? "Save Changes" : "Save & Send"}
              onClick={handleSubmit(updateOrAddInvoice, onError)}
              customClass="responsive"
            />
          </section>
        </div>
      </div>
    </FormProvider>
  );
}
