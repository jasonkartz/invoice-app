import styles from "./ViewInvoice.module.css";
import ButtonStandard from "../../buttons/ButtonStandard";
import ButtonDelete from "../../buttons/ButtonDelete";
import ButtonPurple from "../../buttons/ButtonPurple";

export default function ButtonContainer({
  darkTheme,
  editInvoice,
  deleteInvoice,
}) {
  return (
    <div className={`${styles.btnContainer} ${darkTheme && styles.dark}`}>
      <ButtonStandard
        darkTheme={darkTheme}
        handleClick={editInvoice}
        btnText="Edit"
      />
      <ButtonDelete handleClick={deleteInvoice} />
      <ButtonPurple
        btnText="Mark as Paid"
        handleClick={(e) => e.preventDefault()}
      />
    </div>
  );
}
