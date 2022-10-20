import { useEffect, useState } from "react";
import data from "./data/data.json";
import MainLayout from "./components/MainLayout";
import InvoicePreview from "./components/invoices/InvoicePreview";
import EmptyDisplay from "./components/EmptyDisplay";
import ViewInvoice from "./components/invoices/ViewInvoice";

function App() {
  const [screen, setScreen] = useState("main");

  //filtering invoices
  const [invoiceFilter, setInvoiceFilter] = useState({
    draft: true,
    pending: true,
    paid: true,
  });

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
              key={index}
              id={invoice.id}
              paymentDue={invoice.paymentDue}
              clientName={invoice.clientName}
              total={invoice.total}
              status={invoice.status}
              darkTheme={darkTheme}
              setScreen={setScreen}
            />
          );
        }
      });
    }
  };

  //toggling dark theme
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (
      localStorage.darkTheme === "true" ||
      (!("darkTheme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  }, []);

  const themeSwitch = () => {
    if (darkTheme) {
      setDarkTheme(false);
      localStorage.darkTheme = false;
    } else {
      setDarkTheme(true);
      localStorage.darkTheme = true;
    }
  };

  return (
    <div className={`main-container ${darkTheme && "dark"}`}>
      <MainLayout
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        themeSwitch={themeSwitch}
        handleChange={handleChange}
        draftChecked={invoiceFilter.draft}
        pendingChecked={invoiceFilter.pending}
        paidChecked={invoiceFilter.paid}
        allFiltersFalse={allFiltersFalse}
        screen={screen}
        setScreen={setScreen}
      >
        {screen === "main" && displayInvoices()}
        {screen === "viewInvoice" && (
          <ViewInvoice setScreen={setScreen} darkTheme={darkTheme} />
        )}
      </MainLayout>
    </div>
  );
}
/*id={id}
        paymentDue={paymentDue}
        clientName={clientName}
        total={total}
        status={status}
  darkTheme={darkTheme}*/
export default App;
