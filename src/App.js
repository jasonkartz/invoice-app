import { useState } from "react";
import useDarkTheme from "./hooks/useDarkTheme";
import useLocalStorage from "./hooks/useLocalStorage";
import MainLayout from "./components/MainLayout/MainLayout";
import InvoicePreview from "./components/invoices/InvoicePreview/InvoicePreview";
import ViewInvoice from "./components/invoices/ViewInvoice/ViewInvoice";
import "animate.css";

function App() {
  const [
    invoices,
    isLoading,
    updateInvoice,
    addInvoice,
    markPaidOrPending,
    deleteInvoice,
  ] = useLocalStorage();
  //localStorage.clear();

  const [screen, setScreen] = useState("main");
  const [displayForm, setDisplayForm] = useState({
    display: false,
    editInvoice: false,
  });

  const [darkTheme, themeSwitch] = useDarkTheme(); //toggling dark theme
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [invoiceFilter, setInvoiceFilter] = useState({
    draft: false,
    pending: false,
    paid: false,
  });

  //filtering invoices
  const handleChange = (event) => {
    const { name, checked } = event.target;
    setInvoiceFilter((formData) => ({ ...formData, [name]: checked }));
  };

  const allFiltersFalse = Object.values(invoiceFilter).every(
    (status) => status === false
  );

  const displayInvoices = () => {
    if (invoices) {
      return invoices.map((invoice, index) => {
        if (allFiltersFalse || invoiceFilter[invoice.status]) {
          return (
            <InvoicePreview
              key={invoice.id}
              id={invoice.id}
              paymentDue={invoice.paymentDue}
              clientName={invoice.clientName}
              total={invoice.total}
              status={invoice.status}
              darkTheme={darkTheme}
              setScreen={setScreen}
              index={index}
              setSelectedIndex={setSelectedIndex}
            />
          );
        }
      });
    }
  };

  return (
    <div className={`main-container ${darkTheme && "dark"}`}>
      <MainLayout
        darkTheme={darkTheme}
        themeSwitch={themeSwitch}
        handleChange={handleChange}
        draftChecked={invoiceFilter.draft}
        pendingChecked={invoiceFilter.pending}
        paidChecked={invoiceFilter.paid}
        allFiltersFalse={allFiltersFalse}
        screen={screen}
        setScreen={setScreen}
        displayForm={displayForm}
        setDisplayForm={setDisplayForm}
        selectedInvoice={invoices.length && invoices[selectedIndex]}
        invoices={invoices}
        isLoading={isLoading}
        updateInvoice={updateInvoice}
        addInvoice={addInvoice}
      >
        {screen === "main" && invoices.length > 0 && displayInvoices()}

        {screen === "viewInvoice" && (
          <ViewInvoice
            setScreen={setScreen}
            darkTheme={darkTheme}
            invoice={invoices.length && invoices[selectedIndex]}
            setDisplayForm={setDisplayForm}
            markPaidOrPending={markPaidOrPending}
            deleteInvoice={deleteInvoice}
          />
        )}
      </MainLayout>
    </div>
  );
}

export default App;
