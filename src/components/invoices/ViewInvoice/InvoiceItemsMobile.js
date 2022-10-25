import styles from "./ViewInvoice.module.css";

export default function InvoiceItemsMobile({ darkTheme }) {
  return (
    <div className={`${styles.invoiceItemsMobile} ${darkTheme && styles.dark}`}>
      <div className={styles.itemLine}>
        <div>
          <h4 className={styles.title}>Banner Design</h4>
          <h4>1 x $156.00</h4>
        </div>
        <h4 className={styles.title}>$156.00</h4>
      </div>
      <div className={styles.itemLine}>
        <div>
          <h4 className={styles.title}>Email Design</h4>
          <h4>2 x $200.00</h4>
        </div>
        <h4 className={styles.title}>$400.00</h4>
      </div>
    </div>
  );
}
