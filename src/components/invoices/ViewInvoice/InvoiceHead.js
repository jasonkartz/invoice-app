import styles from "./ViewInvoice.module.css";
import ButtonContainer from "./ButtonContainer";

export default function InvoiceHead({ darkTheme }) {
  return (
    <section className={styles.invoiceHead}>
      <span>Status</span>
      <h4 className={`${styles.status} ${styles.statusPending}`}>
        <span className={styles.bullet}>&middot; </span>
        <span>Pending</span>
      </h4>
      <ButtonContainer darkTheme={darkTheme} />
    </section>
  );
}
