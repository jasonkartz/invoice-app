import useMobileView from "../../hooks/useMobileView";
import styles from "./InvoiceItem.module.css";
import trashCan from "../../assets/icon-delete.svg";
import TextField from "./formElements/TextField";

export default function InvoiceItem({ darkTheme }) {
  const [mobileView] = useMobileView();
  return (
    <div className={`${styles.itemContainer} ${darkTheme && styles.dark}`}>
      <TextField
        label={mobileView && "Item Name"}
        darkTheme={darkTheme}
        customClass={styles.name}
      />
      <TextField
        label={mobileView && "Qty."}
        darkTheme={darkTheme}
        customClass={styles.qty}
      />
      <TextField
        label={mobileView && "Price"}
        darkTheme={darkTheme}
        customClass={styles.price}
      />
      <div className={styles.total}>
        {mobileView && <p>Total</p>}
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
