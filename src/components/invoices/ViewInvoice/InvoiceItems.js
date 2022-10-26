import styles from "./ViewInvoice.module.css";

export default function InvoiceItems({ darkTheme, items }) {
  return (
    <div className={`${styles.invoiceItems} ${darkTheme && styles.dark}`}>
      <div className={styles.itemLine}>
        <p className="body-2">Item Name</p>
        <p className="body-2">QTY.</p>
        <p className="body-2">Price</p>
        <p className="body-2">Total</p>
      </div>
      {items.map((item, index) => {
        return (
          <div className={styles.itemLine} key={index}>
            <h4 className={styles.title}>{item.name}</h4>
            <h4>{item.quantity}</h4>
            <h4>${item.price.toFixed(2)}</h4>

            <h4 className={styles.title}>${item.total.toFixed(2)}</h4>
          </div>
        );
      })}
    </div>
  );
}
