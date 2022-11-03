import styles from "./InvoiceForm.module.css";
import BackButton from "../buttons/BackButton";
import TextField from "./formElements/TextField";
import Dropdown from "./formElements/Dropdown";
import CustomDatePicker from "./formElements/CustomDatePicker";
import InvoiceItem from "./InvoiceItem";

export default function InvoiceForm({ darkTheme, setDisplayNewInvoice }) {
  return (
    <div className={`${styles.container} ${darkTheme && styles.dark}`}>
      <form>
        <BackButton
          darkTheme={darkTheme}
          handleClick={() => setDisplayNewInvoice(false)}
          customClass={styles.backBtn}
        />
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
          <CustomDatePicker darkTheme={darkTheme} />
          <Dropdown darkTheme={darkTheme} />
          <TextField
            label="Product Description"
            customClass={styles.ProductDesc}
            darkTheme={darkTheme}
          />
        </section>
        <h3 className="form">Item List</h3>
        <section className={styles.itemList}>
          <InvoiceItem darkTheme={darkTheme} />
          <InvoiceItem darkTheme={darkTheme} />
        </section>
      </form>
    </div>
  );
}
