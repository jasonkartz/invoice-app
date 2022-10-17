import styles from "./InvoicePreview.module.css";
import arrowRight from "../../assets/icon-arrow-right.svg";

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
  const dueDate = new Date(paymentDue);
  return (
    <div className={`${styles.container} ${darkTheme && styles.dark}`}>
      <h4 className={styles.id}>
        <span className={styles.pound}>#</span>
        {id}
      </h4>
      <span className={styles.paymentDue}>
        Due &nbsp;{dueDate.toDateString().slice(3)}
      </span>
      <span className={styles.clientName}>{clientName}</span>
      <h3 className={styles.total}>${total.toFixed(2)}</h3>
      <h4 className={`${styles.status} ${statusColor()}`}>
        <span className={styles.bullet}>&middot; </span>
        <span>{status}</span>
      </h4>
      <img className={styles.arrowRight} src={arrowRight} alt="arrow right" />
    </div>
  );
}
