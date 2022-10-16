import styles from "./InvoicePreview.module.css";

export default function InvoicePreview({
  id,
  paymentDue,
  clientName,
  total,
  status,
  darkTheme,
}) {
  const statusColor = () => {
    if (status === "paid") {
      return styles.statusPaid;
    } else if (status === "pending") {
      return styles.statusPending;
    } else {
      return styles.statusDraft;
    }
  };
  return (
    <div className={`${styles.container} ${darkTheme && styles.dark}`}>
      <h4 className={styles.id}>
        <span className={styles.pound}>#</span>
        {id}
      </h4>
      <span className={styles.paymentDue}>Due {paymentDue}</span>
      <span className={styles.clientName}>{clientName}</span>
      <h3 className={styles.total}>${total.toFixed(2)}</h3>
      <h4 className={`${styles.status} ${statusColor()}`}>
        <span className={styles.bullet}>&middot; </span>
        <span>{status}</span>
      </h4>
    </div>
  );
}
