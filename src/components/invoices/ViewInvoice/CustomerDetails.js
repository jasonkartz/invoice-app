import styles from "./ViewInvoice.module.css";

export default function CustomerDetails({ invoice, invoiceDate, dueDate }) {
  return (
    <>
      <div className={styles.invoiceDetailsHead}>
        <div>
          <h3 className="responsive">
            #<span className={styles.id}>{invoice.id}</span>
          </h3>
          <p>{invoice.description}</p>
        </div>
        <address>
          {invoice.senderAddress.street}
          <br />
          {invoice.senderAddress.city}
          <br />
          {invoice.senderAddress.postCode}
          <br />
          {invoice.senderAddress.country}
        </address>
      </div>
      <div className={styles.customerDetails}>
        <div className={styles.dates}>
          <div>
            <p>Invoice Date</p>
            <p className={styles.detailsBold}>{invoiceDate}</p>
          </div>
          <div>
            <p>Payment Due</p>
            <p className={styles.detailsBold}>{dueDate}</p>
          </div>
        </div>
        <div className={styles.customerAddress}>
          <p>Bill To</p>
          <p className={styles.detailsBold}>{invoice.clientName}</p>
          <address>
            {invoice.clientAddress.street}
            <br />
            {invoice.clientAddress.city}
            <br />
            {invoice.clientAddress.postCode}
            <br />
            {invoice.clientAddress.country}
          </address>
        </div>
        <div>
          <p>Sent to</p>
          <p className={styles.detailsBold}>{invoice.clientEmail}</p>
        </div>
      </div>
    </>
  );
}
