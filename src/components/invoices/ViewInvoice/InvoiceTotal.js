import styles from "./ViewInvoice.module.css";

export default function InvoiceTotal() {
  return (
    <div className={styles.invoiceTotal}>
      <p>Grand Total</p>
      <h2 className="alt-heading">$556.00</h2>
    </div>
  );
}
