import useMobileView from "../../hooks/useMobileView";
import styles from "./InvoiceForm.module.css";
import BackButton from "../buttons/BackButton";
import TextField from "./formElements/TextField";
import Dropdown from "./formElements/Dropdown";
import CustomDatePicker from "./formElements/CustomDatePicker";
import InvoiceItem from "./InvoiceItem";
import ButtonAddItem from "../buttons/ButtonAddItem";
import ButtonStandard from "../buttons/ButtonStandard";
import ButtonSaveDraft from "../buttons/ButtonSaveDraft";
import ButtonPurple from "../buttons/ButtonPurple";

export default function InvoiceForm({
  darkTheme,
  invoiceEdit,
  cancelForm,
  selectedInvoice,
}) {
  const [mobileView] = useMobileView();
  return (
    <div className={`${styles.container} ${darkTheme && styles.dark}`}>
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
            value={selectedInvoice && selectedInvoice.senderAddress.street}
          />
          <TextField
            label="City"
            customClass={styles.cityFrom}
            darkTheme={darkTheme}
            value={selectedInvoice && selectedInvoice.senderAddress.city}
          />
          <TextField
            label="Post Code"
            customClass={styles.postCodeFrom}
            darkTheme={darkTheme}
            value={selectedInvoice && selectedInvoice.senderAddress.postCode}
          />
          <TextField
            label="Country"
            customClass={styles.countryFrom}
            darkTheme={darkTheme}
            value={selectedInvoice && selectedInvoice.senderAddress.country}
          />
        </section>
        <h4 className={styles.billToTitle}>Bill To</h4>
        <section className={styles.billTo}>
          <TextField
            label="Client's Name"
            customClass={styles.clientName}
            darkTheme={darkTheme}
            value={selectedInvoice && selectedInvoice.clientName}
          />
          <TextField
            label="Client's Email"
            customClass={styles.clientEmail}
            darkTheme={darkTheme}
            value={selectedInvoice && selectedInvoice.clientEmail}
          />
          <TextField
            label="Street Address"
            customClass={styles.streetTo}
            darkTheme={darkTheme}
            value={selectedInvoice && selectedInvoice.clientAddress.street}
          />
          <TextField
            label="City"
            customClass={styles.cityTo}
            darkTheme={darkTheme}
            value={selectedInvoice && selectedInvoice.clientAddress.city}
          />
          <TextField
            label="Post Code"
            customClass={styles.postCodeTo}
            darkTheme={darkTheme}
            value={selectedInvoice && selectedInvoice.clientAddress.postCode}
          />
          <TextField
            label="Country"
            customClass={styles.countryTo}
            darkTheme={darkTheme}
            value={selectedInvoice && selectedInvoice.clientAddress.country}
          />
        </section>
        <section className={styles.generalDetails}>
          <CustomDatePicker darkTheme={darkTheme} customClass={styles.date} />
          <Dropdown darkTheme={darkTheme} customClass={styles.dropDown} />
          <TextField
            label="Product Description"
            customClass={styles.productDesc}
            darkTheme={darkTheme}
            value={selectedInvoice && selectedInvoice.description}
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
                <InvoiceItem key={index} darkTheme={darkTheme} item={item} />
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
