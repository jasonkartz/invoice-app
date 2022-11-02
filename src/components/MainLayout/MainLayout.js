import styles from "./MainLayout.module.css";
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
}) {
  const [displayNewInvoice, setDisplayNewInvoice] = useState(false);
  const invoiceCount = Children.toArray(children).length;

  return (
    <>
      <Header darkTheme={darkTheme} themeSwitch={themeSwitch} />
      {displayNewInvoice && (
        <InvoiceForm
          darkTheme={darkTheme}
          setDisplayNewInvoice={setDisplayNewInvoice}
        />
      )}
      <main className={styles.main}>
        {screen === "main" && (
          <section
            className={`${styles.invoiceOptions} ${darkTheme && styles.dark}`}
          >
            <div className={styles.invoiceStatus}>
              <h1>Invoices</h1>
              <p>
                <InvoicesStatus
                  allFiltersFalse={allFiltersFalse}
                  invoiceCount={invoiceCount}
                />
              </p>
            </div>

            <FilterOptions
              draftChecked={draftChecked}
              darkTheme={darkTheme}
              handleChange={handleChange}
              pendingChecked={pendingChecked}
              paidChecked={paidChecked}
            />
            <ButtonNewInvoice handleClick={() => setDisplayNewInvoice(true)} />
          </section>
        )}
        <section className="invoicesDisplay">{children}</section>
      </main>
    </>
  );
}
