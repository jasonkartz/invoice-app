import { useState, useEffect } from "react";
import data from "../data/data.json";
const useLocalStorage = () => {
  const [invoices, setInvoices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      if (!localStorage.invoiceData) {
        localStorage.setItem("invoiceData", JSON.stringify(data));
      }
      const invoiceData = JSON.parse(localStorage.getItem("invoiceData"));
      setInvoices(invoiceData);
      setIsLoading(false);
    }, 3000);
  }, []);

  const updateInvoice = (updatedInvoice, updatedInvoiceId) => {
    const updatedInvoices = invoices.map((invoice) => {
      if (invoice.id === updatedInvoiceId) {
        return updatedInvoice;
      } else {
        return invoice;
      }
    });
    setInvoices(updatedInvoices);
    localStorage.setItem("invoiceData", JSON.stringify(updatedInvoices));
  };

  const addInvoice = (newInvoice, isDraft) => {
    if (isDraft) {
      newInvoice.status = "draft";
    }
    setInvoices((currentInvoices) => [...currentInvoices, newInvoice]);
    localStorage.setItem("invoiceData", JSON.stringify(invoices));
  };

  return [invoices, isLoading, updateInvoice, addInvoice];
};

export default useLocalStorage;
