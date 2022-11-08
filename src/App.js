import { useState, useEffect } from "react";
import useDarkTheme from "./hooks/useDarkTheme";
import useMobileView from "./hooks/useMobileView";
import useLocalStorage from "./hooks/useLocalStorage";
import MainLayout from "./components/MainLayout/MainLayout";
import InvoicePreview from "./components/invoices/InvoicePreview/InvoicePreview";
import EmptyDisplay from "./components/misc/EmptyDisplay/EmptyDisplay";
import ViewInvoice from "./components/invoices/ViewInvoice/ViewInvoice";
import "animate.css";

function App() {
  const [invoices, isLoading] = useLocalStorage();
  //localStorage.clear();
  console.log(invoices);
  const [screen, setScreen] = useState("main");
  const [displayForm, setDisplayForm] = useState({
    display: false,
    editInvoice: false,
  });
  const [mobileView] = useMobileView(); //mobile screens and resizing screens
  const [darkTheme, themeSwitch] = useDarkTheme(); //toggling dark theme
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [invoiceFilter, setInvoiceFilter] = useState({
    draft: true,
    pending: true,
    paid: true,
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
    if (allFiltersFalse) {
      return <EmptyDisplay darkTheme={darkTheme} />;
    } else {
      return invoices.map((invoice, index) => {
        if (invoiceFilter[invoice.status]) {
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
      >
        {screen === "main" && invoices.length > 0 && displayInvoices()}
        {screen === "viewInvoice" && (
          <ViewInvoice
            setScreen={setScreen}
            darkTheme={darkTheme}
            invoice={invoices[selectedIndex]}
            setDisplayForm={setDisplayForm}
          />
        )}
      </MainLayout>
    </div>
  );
}

export default App;
