import { useEffect, useState } from "react";
import useDarkTheme from "./hooks/useDarkTheme";
import useMobileView from "./hooks/useMobileView";
import data from "./data/data.json";
import MainLayout from "./components/MainLayout/MainLayout";
import InvoicePreview from "./components/invoices/InvoicePreview/InvoicePreview";
import EmptyDisplay from "./components/misc/EmptyDisplay/EmptyDisplay";
import ViewInvoice from "./components/invoices/ViewInvoice/ViewInvoice";
import TextField from "./components/forms/formElements/TextField";
import Dropdown from "./components/forms/formElements/Dropdown";

function App() {
  const [screen, setScreen] = useState("main");
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
      return data.map((invoice, index) => {
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
      >
        <Dropdown darkTheme={darkTheme} />
        <TextField darkTheme={darkTheme} label={"Street Address"} />
      </MainLayout>
    </div>
  );
}

export default App;

// create form components
// create reusuable component structure for both 'new invoice' and 'edit' screens
// store initial data to local storage

/*
{screen === "main" && displayInvoices()}
        {screen === "viewInvoice" && (
          <ViewInvoice
            setScreen={setScreen}
            darkTheme={darkTheme}
            mobileView={mobileView}
            invoice={data[selectedIndex]}
          />
        )}
*/
