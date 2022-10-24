import styles from "./ViewInvoice.module.css";

export default function CustomerDetails() {
  return (
    <>
      <div className={styles.invoiceDetailsHead}>
        <div>
          <h3 className="responsive">
            #<span className={styles.id}>XM9141</span>
          </h3>
          <p>Graphic Design</p>
        </div>
        <address>
          19 Union Terrace
          <br />
          London
          <br />
          E1 3EZ
          <br />
          United Kingdom
        </address>
      </div>
      <div className={styles.customerDetails}>
        <div className={styles.dates}>
          <div>
            <p>Invoice Date</p>
            <p className={styles.detailsBold}>21 Aug 2021</p>
          </div>
          <div>
            <p>Payment Due</p>
            <p className={styles.detailsBold}>20 Sep 2021</p>
          </div>
        </div>
        <div className={styles.customerAddress}>
          <p>Bill To</p>
          <p className={styles.detailsBold}>Alex Grim</p>
          <address>
            84 Church Way
            <br />
            Bradford
            <br />
            BD1 9PB
            <br />
            United Kingdom
          </address>
        </div>
        <div>
          <p>Sent to</p>
          <p className={styles.detailsBold}>alexgrim@mail.com</p>
        </div>
      </div>
    </>
  );
}
