import styles from "./InvoicePreview.module.css";

export default function InvoicePreview({
  id,
  paymentDue,
  clientName,
  total,
  status,
}) {
  return (
    <div className={styles.container}>
      <h4 className={styles.id}>
        <span>#</span>
        {id}
      </h4>
      <span className={styles.paymentDue}>Due {paymentDue}</span>
      <span className={styles.clientName}>{clientName}</span>
      <h3 className={styles.total}>${total}</h3>
      <h4 className={styles.status}>
        <span className={styles.bullet}>&middot; </span>
        <span>{status}</span>
      </h4>
    </div>
  );
}
