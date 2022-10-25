import styles from "./ViewInvoice.module.css";

export default function InvoiceHead({ children }) {
  return (
    <section className={styles.invoiceHead}>
      <span>Status</span>
      <h4 className={`${styles.status} ${styles.statusPending}`}>
        <span className={styles.bullet}>&middot; </span>
        <span>Pending</span>
      </h4>
      {children}
    </section>
  );
}
