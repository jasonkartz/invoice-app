import styles from "./ViewInvoice.module.css";
import ButtonStandard from "../../buttons/ButtonStandard";
import ButtonDelete from "../../buttons/ButtonDelete";
import ButtonPurple from "../../buttons/ButtonPurple";

export default function ButtonContainer({
  darkTheme,
  editInvoice,
  deleteInvoice,
  invoice,
  markPaidOrPending,
}) {
  return (
    <div className={`${styles.btnContainer} ${darkTheme && styles.dark}`}>
      <ButtonStandard
        darkTheme={darkTheme}
        handleClick={editInvoice}
        btnText="Edit"
      />
      <ButtonDelete onClick={deleteInvoice} />
      <ButtonPurple
        btnText={invoice.status !== "paid" ? "Mark as Paid" : "Mark as Pending"}
        onClick={() => markPaidOrPending(invoice, invoice.id)}
      />
    </div>
  );
}
