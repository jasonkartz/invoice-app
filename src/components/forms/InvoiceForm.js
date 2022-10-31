import styles from "./InvoiceForm.module.css";
import BackButton from "../misc/BackButton/BackButton";
import TextField from "./formElements/TextField";
import Dropdown from "./formElements/Dropdown";
import CustomDatePicker from "./formElements/CustomDatePicker";

export default function InvoiceForm({ darkTheme }) {
  return (
    <div className={styles.container}>
      <BackButton darkTheme={darkTheme} />

      <form>
        <h1 className="alt-heading">New Invoice</h1>
        <h4>Bill From</h4>
        <section className={styles.billFrom}>
          <TextField label="Street Address" customClass={styles.streetFrom} />
          <TextField label="City" customClass={styles.cityFrom} />
          <TextField label="Post Code" customClass={styles.postCodeFrom} />
          <TextField label="Country" customClass={styles.countryFrom} />
        </section>
      </form>
    </div>
  );
}
