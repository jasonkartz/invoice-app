import styles from "./ViewInvoice.module.css";

export default function InvoiceItems({ darkTheme }) {
  return (
    <div className={`${styles.invoiceItems} ${darkTheme && styles.dark}`}>
      <div className={styles.itemLine}>
        <p className="body-2">Item Name</p>
        <p className="body-2">QTY.</p>
        <p className="body-2">Price</p>
        <p className="body-2">Total</p>
      </div>
      <div className={styles.itemLine}>
        <h4 className={styles.title}>Banner Design</h4>
        <h4>1</h4>
        <h4>$156.00</h4>

        <h4 className={styles.title}>$156.00</h4>
      </div>
      <div className={styles.itemLine}>
        <h4 className={styles.title}>Email Design</h4>
        <h4>2</h4>
        <h4>$200.00</h4>

        <h4 className={styles.title}>$400.00</h4>
      </div>
    </div>
  );
}
