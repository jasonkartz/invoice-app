import styles from "./ViewInvoice.module.css";
import arrowLeft from "../../assets/icon-arrow-left.svg";
import ButtonEdit from "../buttons/ButtonEdit";
import ButtonDelete from "../buttons/ButtonDelete";
import ButtonMarkPaid from "../buttons/ButtonMarkPaid";

export default function ViewInvoice({
  id,
  paymentDue,
  clientName,
  total,
  status,
  darkTheme,
  setScreen,
}) {
  const statusColor = () => {
    if (status === "paid") {
      return styles.statusPaid;
    } else if (status === "pending") {
      return styles.statusPending;
    } else {
      return styles.statusDraft;
    }
  };
  const dueDate = new Date(paymentDue);
  return (
    <div className={`${styles.container} ${darkTheme && styles.dark}`}>
      <button
        className={`${styles.backButton} ${darkTheme && styles.dark}`}
        onClick={() => setScreen("main")}
      >
        <img src={arrowLeft} alt="arrow-left" />
        &nbsp; &nbsp; &nbsp; Go Back
      </button>
      <section className={styles.invoiceHead}>
        <span>Status</span>
        <h4 className={`${styles.status} ${styles.statusPending}`}>
          <span className={styles.bullet}>&middot; </span>
          <span>Pending</span>
        </h4>
        <div className={`${styles.btnContainer}`}>
          <ButtonEdit darkTheme={darkTheme} />
          <ButtonDelete />
          <ButtonMarkPaid />
        </div>
      </section>
      <section className={`${styles.invoiceDetails}`}>
        <div className={styles.generalDetails}>
          <div className={styles.topInfo}>
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
        </div>
        <div className={styles.priceDetails}>
          <div className={styles.invoiceItems}></div>
          <div className={styles.invoiceTotal}></div>
        </div>
      </section>
    </div>
  );
}
