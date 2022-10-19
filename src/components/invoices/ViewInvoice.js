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
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => setScreen("main")}>
        <img src={arrowLeft} alt="arrow-left" />
        &nbsp; &nbsp; &nbsp; Go Back
      </button>
      <div className={styles.invoiceHead}>
        <span>Status</span>
        <h4 className={`${styles.status} ${styles.statusPending}`}>
          <span className={styles.bullet}>&middot; </span>
          <span>Pending</span>
        </h4>
        <div className={styles.btnContainer}>
          <ButtonEdit />
          <ButtonDelete />
          <ButtonMarkPaid />
        </div>
      </div>
    </div>
  );
}
