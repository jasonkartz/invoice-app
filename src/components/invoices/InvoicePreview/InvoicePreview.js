import styles from "./InvoicePreview.module.css";
import arrowRight from "../../../assets/icon-arrow-right.svg";
import StatusBox from "../../misc/StatusBox/StatusBox";

export default function InvoicePreview({
  id,
  paymentDue,
  clientName,
  total,
  status,
  darkTheme,
  setScreen,
}) {
  const dueDate = new Date(paymentDue);
  return (
    <div
      className={`${styles.container} ${darkTheme && styles.dark}`}
      onClick={() => {
        setScreen("viewInvoice");
      }}
    >
      <h4 className={styles.id}>
        <span className={styles.pound}>#</span>
        {id}
      </h4>
      <span className={styles.paymentDue}>
        Due &nbsp;{dueDate.toDateString().slice(3)}
      </span>
      <span className={styles.clientName}>{clientName}</span>
      <h3 className={styles.total}>${total.toFixed(2)}</h3>
      <StatusBox
        status={status}
        darkTheme={darkTheme}
        customClass={styles.statusBox}
      />
      <img className={styles.arrowRight} src={arrowRight} alt="arrow right" />
    </div>
  );
}
