import styles from "./InvoiceStatus.module.css";

export default function InvoiceStatus({ allFiltersFalse, invoiceCount }) {
  const invoiceDisplayCount = () => {
    if (allFiltersFalse) {
      return 0;
    } else {
      return invoiceCount;
    }
  };

  return (
    <div className={styles.invoiceStatus}>
      <h1>Invoices</h1>
      <p>
        <span className={styles.expandedText}>
          {!allFiltersFalse && invoiceCount > 1
            ? "There are"
            : allFiltersFalse
            ? ""
            : "There is"}
        </span>{" "}
        {allFiltersFalse ? "No" : invoiceDisplayCount()}{" "}
        <span className={styles.expandedText}>
          {!allFiltersFalse && invoiceCount > 1 ? "total" : ""}
        </span>{" "}
        invoice
        {allFiltersFalse || invoiceCount > 1 ? "s" : ""}
      </p>
    </div>
  );
}
