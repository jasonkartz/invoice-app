import styles from "./MainLayout.module.css";
import "animate.css";
import ButtonNewInvoice from "../buttons/ButtonNewInvoice";
import Header from "./Header/Header";
import FilterOptions from "./FilterOptions/FilterOptions";
import InvoicesStatus from "./InvoicesStatus";
import InvoiceForm from "../forms/InvoiceForm";
import { Children, useState } from "react";

export default function MainLayout({
  children,
  darkTheme,
  themeSwitch,
  handleChange,
  draftChecked,
  pendingChecked,
  paidChecked,
  allFiltersFalse,
  screen,
  displayForm,
  setDisplayForm,
  selectedInvoice,
  invoices,
  isLoading,
  updateInvoice,
  addInvoice,
}) {
  const invoiceCount = Children.toArray(children).length;

  const newInvoice = () => {
    setDisplayForm({
      display: true,
      editInvoice: false,
    });
  };
  const closeForm = () => {
    setDisplayForm({
      display: false,
      editInvoice: false,
    });
  };
  return (
    <>
      <Header darkTheme={darkTheme} themeSwitch={themeSwitch} />
      {displayForm.display && (
        <InvoiceForm
          darkTheme={darkTheme}
          closeForm={() => closeForm()}
          invoiceEdit={displayForm.editInvoice}
          selectedInvoice={displayForm.editInvoice && selectedInvoice}
          updateInvoice={updateInvoice}
          addInvoice={addInvoice}
        />
      )}
      <main className={styles.main}>
        {screen === "main" && (
          <section
            className={`${styles.invoiceOptions} ${darkTheme && styles.dark}`}
          >
            <div className={styles.invoiceStatus}>
              <h1>Invoices</h1>

              {isLoading ? (
                <p className="animate__animated animate__pulse animate__infinite infinite">
                  Loading invoices..
                </p>
              ) : (
                <p>
                  <InvoicesStatus
                    allFiltersFalse={allFiltersFalse}
                    invoiceCount={invoiceCount}
                  />
                </p>
              )}
            </div>

            <FilterOptions
              draftChecked={draftChecked}
              darkTheme={darkTheme}
              handleChange={handleChange}
              pendingChecked={pendingChecked}
              paidChecked={paidChecked}
            />
            <ButtonNewInvoice handleClick={newInvoice} />
          </section>
        )}
        <section className="invoicesDisplay">{children}</section>
      </main>
    </>
  );
}
