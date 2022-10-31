import styles from "./ViewInvoice.module.css";
import InvoiceHead from "./InvoiceHead";
import CustomerDetails from "./CustomerDetails";
import arrowLeft from "../../../assets/icon-arrow-left.svg";
import InvoiceItems from "./InvoiceItems";
import InvoiceItemsMobile from "./InvoiceItemsMobile";
import InvoiceTotal from "./InvoiceTotal";
import ButtonContainer from "./ButtonContainer";
import BackButton from "../../misc/BackButton/BackButton";

export default function ViewInvoice({
  darkTheme,
  setScreen,
  mobileView,
  invoice,
}) {
  const invoiceDate = new Date(invoice.createdAt).toDateString().slice(3);
  const dueDate = new Date(invoice.paymentDue).toDateString().slice(3);
  return (
    <>
      <div className={`${styles.container} ${darkTheme && styles.dark}`}>
        <BackButton setScreen={setScreen} darkTheme={darkTheme} />
        <InvoiceHead
          darkTheme={darkTheme}
          mobileView={mobileView}
          status={invoice.status}
        >
          {!mobileView && <ButtonContainer />}
        </InvoiceHead>
        <section className={`${styles.invoiceDetails}`}>
          <CustomerDetails
            invoice={invoice}
            invoiceDate={invoiceDate}
            dueDate={dueDate}
          />
          <div className={styles.priceDetails}>
            {mobileView ? (
              <InvoiceItemsMobile darkTheme={darkTheme} items={invoice.items} />
            ) : (
              <InvoiceItems darkTheme={darkTheme} items={invoice.items} />
            )}
            <InvoiceTotal
              darkTheme={darkTheme}
              total={invoice.total.toFixed(2)}
            />
          </div>
        </section>
      </div>
      {mobileView && <ButtonContainer darkTheme={darkTheme} />}
    </>
  );
}
