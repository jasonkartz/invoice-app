import styles from "./ViewInvoice.module.css";
import InvoiceHead from "./InvoiceHead";
import CustomerDetails from "./CustomerDetails";
import arrowLeft from "../../../assets/icon-arrow-left.svg";

export default function ViewInvoice({
  id,
  paymentDue,
  clientName,
  total,
  status,
  darkTheme,
  setScreen,
}) {
  const dueDate = new Date(paymentDue);
  return (
    <div className={`${styles.container} ${darkTheme && styles.dark}`}>
      <button
        className={`${styles.backButton} ${darkTheme && styles.dark}`}
        onClick={() => setScreen("main")}
      >
        <img src={arrowLeft} alt="arrow-left" />
        &nbsp; &nbsp; &nbsp; Go Back
      </button>
      <InvoiceHead darkTheme={darkTheme} />
      <section className={`${styles.invoiceDetails}`}>
        <CustomerDetails />

        <div className={styles.priceDetails}>
          <div className={styles.invoiceItems}></div>
          <div className={styles.invoiceTotal}></div>
        </div>
      </section>
    </div>
  );
}
