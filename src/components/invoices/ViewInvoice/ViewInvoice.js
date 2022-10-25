import styles from "./ViewInvoice.module.css";
import InvoiceHead from "./InvoiceHead";
import CustomerDetails from "./CustomerDetails";
import arrowLeft from "../../../assets/icon-arrow-left.svg";
import InvoiceItemsMobile from "./InvoiceItemsMobile";
import InvoiceTotal from "./InvoiceTotal";
import ButtonContainer from "./ButtonContainer";

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
          <InvoiceItemsMobile />
          <InvoiceTotal />
        </div>
      </section>
    </div>
  );
}
