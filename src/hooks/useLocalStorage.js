import { useState, useEffect } from "react";
import data from "../data/data.json";
const useLocalStorage = () => {
  useEffect(() => {
    if (!localStorage.invoiceData) {
      localStorage.setItem("invoiceData", JSON.stringify(data));
    }
  }, []);
  const [invoices, setInvoices] = useState(
    JSON.parse(localStorage.getItem("invoiceData"))
  );
  return [invoices];
};

export default useLocalStorage;
