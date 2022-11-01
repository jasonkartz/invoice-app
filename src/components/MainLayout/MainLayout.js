import styles from "./MainLayout.module.css";
import ButtonNewInvoice from "../buttons/ButtonNewInvoice";
import Header from "./Header/Header";
import FilterOptions from "./FilterOptions/FilterOptions";
import InvoiceStatus from "./InvoiceStatus/InvoiceStatus";
import InvoiceForm from "../forms/InvoiceForm";
import { Children } from "react";

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
  const invoiceCount = Children.toArray(children).length;

  return (
    <>
      <Header darkTheme={darkTheme} themeSwitch={themeSwitch} />
      <InvoiceForm darkTheme={darkTheme} />
      <main className={styles.main}>
        {screen === "main" && (
          <section
            className={`${styles.invoiceOptions} ${darkTheme && styles.dark}`}
          >
            <InvoiceStatus
              allFiltersFalse={allFiltersFalse}
              invoiceCount={invoiceCount}
            />

            <FilterOptions
              draftChecked={draftChecked}
              darkTheme={darkTheme}
              handleChange={handleChange}
              pendingChecked={pendingChecked}
              paidChecked={paidChecked}
            />
            <ButtonNewInvoice />
          </section>
        )}
        <section className="invoicesDisplay">{children}</section>
      </main>
    </>
  );
}
