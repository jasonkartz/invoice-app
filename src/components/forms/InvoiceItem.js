import useMobileView from "../../hooks/useMobileView";
import styles from "./InvoiceItem.module.css";
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
        <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
            fillRule="nonzero"
          />
        </svg>
      </button>
    </div>
  );
}
