import styles from "./ViewInvoice.module.css";
import ButtonEdit from "../../buttons/ButtonEdit";
import ButtonDelete from "../../buttons/ButtonDelete";
import ButtonMarkPaid from "../../buttons/ButtonMarkPaid";

export default function ButtonContainer({ darkTheme }) {
  return (
    <div className={`${styles.btnContainer} ${darkTheme && styles.dark}`}>
      <ButtonEdit darkTheme={darkTheme} />
      <ButtonDelete />
      <ButtonMarkPaid />
    </div>
  );
}
