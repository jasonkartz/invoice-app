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

export default function InvoiceForm({ darkTheme, setDisplayNewInvoice }) {
  const [mobileView] = useMobileView();
  return (
    <div className={`${styles.container} ${darkTheme && styles.dark}`}>
      <form>
        {mobileView && (
          <BackButton
            darkTheme={darkTheme}
            handleClick={() => setDisplayNewInvoice(false)}
          />
        )}
        <h1 className="alt-heading">New Invoice</h1>
        <h4>Bill From</h4>
        <section className={styles.billFrom}>
          <TextField
            label="Street Address"
            customClass={styles.streetFrom}
            darkTheme={darkTheme}
          />
          <TextField
            label="City"
            customClass={styles.cityFrom}
            darkTheme={darkTheme}
          />
          <TextField
            label="Post Code"
            customClass={styles.postCodeFrom}
            darkTheme={darkTheme}
          />
          <TextField
            label="Country"
            customClass={styles.countryFrom}
            darkTheme={darkTheme}
          />
        </section>
        <h4 className={styles.billToTitle}>Bill To</h4>
        <section className={styles.billTo}>
          <TextField
            label="Client's Name"
            customClass={styles.clientName}
            darkTheme={darkTheme}
          />
          <TextField
            label="Client's Email"
            customClass={styles.clientEmail}
            darkTheme={darkTheme}
          />
          <TextField
            label="Street Address"
            customClass={styles.streetTo}
            darkTheme={darkTheme}
          />
          <TextField
            label="City"
            customClass={styles.cityTo}
            darkTheme={darkTheme}
          />
          <TextField
            label="Post Code"
            customClass={styles.postCodeTo}
            darkTheme={darkTheme}
          />
          <TextField
            label="Country"
            customClass={styles.countryTo}
            darkTheme={darkTheme}
          />
        </section>
        <section className={styles.generalDetails}>
          <CustomDatePicker darkTheme={darkTheme} customClass={styles.date} />
          <Dropdown darkTheme={darkTheme} customClass={styles.dropDown} />
          <TextField
            label="Product Description"
            customClass={styles.productDesc}
            darkTheme={darkTheme}
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
          <InvoiceItem darkTheme={darkTheme} />
          <InvoiceItem darkTheme={darkTheme} />
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
            handleClick={(e) => {
              e.preventDefault();
              setDisplayNewInvoice(false);
            }}
            btnText="Discard"
            customClass={`responsive ${styles.btnDiscard}`}
          />
          <ButtonSaveDraft
            handleClick={(e) => e.preventDefault()}
            darkTheme={darkTheme}
            customClass="responsive"
          />
          <ButtonPurple
            btnText="Save & Send"
            handleClick={(e) => e.preventDefault()}
            customClass="responsive"
          />
        </section>
      </form>
    </div>
  );
}
