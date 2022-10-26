import styles from "./ViewInvoice.module.css";

export default function InvoiceItemsMobile({ darkTheme, items }) {
  return (
    <div className={`${styles.invoiceItemsMobile} ${darkTheme && styles.dark}`}>
      {items.map((item, index) => {
        return (
          <div className={styles.itemLine} key={index}>
            <div>
              <h4 className={styles.title}>{item.name}</h4>
              <h4>
                {item.quantity} x ${item.price.toFixed(2)}
              </h4>
            </div>
            <h4 className={styles.title}>${item.total.toFixed(2)}</h4>
          </div>
        );
      })}
    </div>
  );
}
