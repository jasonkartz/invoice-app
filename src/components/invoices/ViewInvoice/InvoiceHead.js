import styles from "./ViewInvoice.module.css";
import ButtonEdit from "../../buttons/ButtonEdit";
import ButtonDelete from "../../buttons/ButtonDelete";
import ButtonMarkPaid from "../../buttons/ButtonMarkPaid";
import StatusBox from "../../misc/StatusBox/StatusBox";

export default function InvoiceHead({ darkTheme }) {
  return (
    <section className={styles.invoiceHead}>
      <span>Status</span>
      <h4 className={`${styles.status} ${styles.statusPending}`}>
        <span className={styles.bullet}>&middot; </span>
        <span>Pending</span>
      </h4>
      <div className={`${styles.btnContainer}`}>
        <ButtonEdit darkTheme={darkTheme} />
        <ButtonDelete />
        <ButtonMarkPaid />
      </div>
    </section>
  );
}
