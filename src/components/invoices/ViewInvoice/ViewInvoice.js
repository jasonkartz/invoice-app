import styles from "./ViewInvoice.module.css";
import ConfirmDelete from "./ConfirmDelete";
import InvoiceHead from "./InvoiceHead";
import CustomerDetails from "./CustomerDetails";
import InvoiceItems from "./InvoiceItems";
import InvoiceItemsMobile from "./InvoiceItemsMobile";
import InvoiceTotal from "./InvoiceTotal";
import ButtonContainer from "./ButtonContainer";
import BackButton from "../../buttons/BackButton";
import useMobileView from "../../../hooks/useMobileView";
import { useState } from "react";

export default function ViewInvoice({
  darkTheme,
  setScreen,
  invoice,
  setDisplayForm,
}) {
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [mobileView] = useMobileView(); //mobile screens and resizing screens
  const invoiceDate = new Date(invoice.createdAt).toDateString().slice(3);
  const dueDate = new Date(invoice.paymentDue).toDateString().slice(3);

  const editInvoice = () => {
    setDisplayForm({
      display: true,
      editInvoice: true,
    });
  };

  const cancelDelete = () => {
    setDeleteConfirm(false);
  };
  const btnContainer = () => (
    <ButtonContainer
      darkTheme={darkTheme}
      editInvoice={editInvoice}
      deleteInvoice={() => setDeleteConfirm(true)}
    />
  );

  return (
    <>
      {deleteConfirm && (
        <ConfirmDelete cancel={cancelDelete} darkTheme={darkTheme} />
      )}
      <div className={`${styles.container} ${darkTheme && styles.dark}`}>
        <BackButton
          setScreen={setScreen}
          darkTheme={darkTheme}
          handleClick={() => {
            setScreen("main");
          }}
        />
        <InvoiceHead
          darkTheme={darkTheme}
          mobileView={mobileView}
          status={invoice.status}
        >
          {!mobileView && btnContainer()}
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
      {mobileView && btnContainer()}
    </>
  );
}
