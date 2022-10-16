import { useEffect, useState } from "react";
import data from "./data/data.json";
import MainLayout from "./components/MainLayout";
import InvoicePreview from "./components/invoices/InvoicePreview";
import EmptyDisplay from "./components/EmptyDisplay";
import ButtonNewInvoice from "./components/buttons/ButtonNewInvoice";
import ButtonMarkPaid from "./components/buttons/ButtonMarkPaid";
import ButtonEdit from "./components/buttons/ButtonEdit";
import ButtonSaveDraft from "./components/buttons/ButtonSaveDraft";
import ButtonDelete from "./components/buttons/ButtonDelete";
import ButtonAddItem from "./components/buttons/ButtonAddItem";

function App() {
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

  //filtering invoices

  const [invoiceFilter, setInvoiceFilter] = useState({
    draft: false,
    pending: false,
    paid: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setInvoiceFilter((formData) => ({ ...formData, [name]: checked }));
  };

  console.log(invoiceFilter);
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
      >
        {data.map((invoice, index) => {
          return (
            <InvoicePreview
              key={index}
              id={invoice.id}
              paymentDue={invoice.paymentDue}
              clientName={invoice.clientName}
              total={invoice.total}
              status={invoice.status}
              darkTheme={darkTheme}
            />
          );
        })}
      </MainLayout>
    </div>
  );
}

export default App;
