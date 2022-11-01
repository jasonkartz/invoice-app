import styles from "./InvoiceItem.module.css";
import trashCan from "../../assets/icon-delete.svg";
import TextField from "./formElements/TextField";

export default function InvoiceItem({ darkTheme }) {
  return (
    <div
      className={`${styles.itemContainer} ${darkTheme && styles.dark}`}
    ></div>
  );
}
