import styles from "./ViewInvoice.module.css";
import StatusBox from "../../misc/StatusBox/StatusBox";

export default function InvoiceHead({ children, status, darkTheme }) {
  return (
    <section className={styles.invoiceHead}>
      <span>Status</span>
      <StatusBox
        status={status}
        darkTheme={darkTheme}
        customClass={styles.statusBox}
      />
      {children}
    </section>
  );
}
