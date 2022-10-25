import styles from "./ViewInvoice.module.css";

export default function InvoiceTotal({ darkTheme }) {
  return (
    <div className={`${styles.invoiceTotal} ${darkTheme && styles.dark}`}>
      <p>Grand Total</p>
      <h2 className="alt-heading">$556.00</h2>
    </div>
  );
}
