import styles from "./InvoiceItem.module.css";
import trashCan from "../../assets/icon-delete.svg";
import TextField from "./formElements/TextField";

export default function InvoiceItem({ darkTheme }) {
  return (
    <div className={`${styles.itemContainer} ${darkTheme && styles.dark}`}>
      <TextField
        label="Item Name"
        darkTheme={darkTheme}
        customClass={styles.name}
      />
      <TextField label="Qty." darkTheme={darkTheme} customClass={styles.qty} />
      <TextField
        label="Price"
        darkTheme={darkTheme}
        customClass={styles.price}
      />
      <div className={styles.total}>
        <p>Total</p>
        <p className={styles.bold}>$156.00</p>
      </div>
      <button
        className={styles.delete}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <img src={trashCan} alt="delete item" />
      </button>
    </div>
  );
}
