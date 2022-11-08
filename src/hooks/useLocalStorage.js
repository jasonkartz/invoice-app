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
    }, 1000);
  }, []);

  return [invoices, isLoading];
};

export default useLocalStorage;
