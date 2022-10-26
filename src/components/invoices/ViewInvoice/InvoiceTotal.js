import styles from "./ViewInvoice.module.css";

export default function InvoiceTotal({ darkTheme, total }) {
  return (
    <div className={`${styles.invoiceTotal} ${darkTheme && styles.dark}`}>
      <p>Grand Total</p>
      <h2 className="alt-heading">${total}</h2>
    </div>
  );
}
