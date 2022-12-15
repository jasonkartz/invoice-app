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

  const updateInvoice = (currentInvoice, currentInvoiceId) => {
    const updatedInvoices = invoices.map((invoice) => {
      if (invoice.id === currentInvoiceId) {
        if (currentInvoice.status === "draft") {
          currentInvoice.status = "pending";
        }
        return currentInvoice;
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

  const markPaidOrPending = (currentInvoice, currentInvoiceId) => {
    const updatedInvoices = invoices.map((invoice) => {
      if (invoice.id === currentInvoiceId) {
        if (currentInvoice.status === "paid") {
          currentInvoice.status = "pending";
        } else {
          currentInvoice.status = "paid";
        }
        return currentInvoice;
      } else {
        return invoice;
      }
    });
    setInvoices(updatedInvoices);
    localStorage.setItem("invoiceData", JSON.stringify(updatedInvoices));
  };

  const deleteInvoice = (currentInvoice, currentInvoiceId) => {
    const updatedInvoices = invoices.filter(
      (invoice) => invoice.id !== currentInvoiceId
    );
    setInvoices(updatedInvoices);
    localStorage.setItem("invoiceData", JSON.stringify(updatedInvoices));
  };

  return [
    invoices,
    isLoading,
    updateInvoice,
    addInvoice,
    markPaidOrPending,
    deleteInvoice,
  ];
};

export default useLocalStorage;
