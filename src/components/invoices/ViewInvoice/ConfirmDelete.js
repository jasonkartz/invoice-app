import styles from "./ConfirmDelete.module.css";
import "animate.css";
import ButtonStandard from "../../buttons/ButtonStandard";
import ButtonDelete from "../../buttons/ButtonDelete";
export default function ConfirmDelete({
  darkTheme,
  cancel,
  invoice,
  deleteInvoice,
  setScreen,
}) {
  return (
    <div
      className={`${styles.confirmContainer} ${
        darkTheme && styles.dark
      } animate__animated animate__fadeIn`}
      style={{ animationDuration: "0.25s" }}
    >
      <section className={styles.confirmBox}>
        <h2 className="alt-heading">Confirm Deletion</h2>
        <p>
          Are you sure you want to delete invoice #{invoice.id}? This action
          cannot be undone.
        </p>
        <div className={styles.confirmBtns}>
          <ButtonStandard
            btnText="Cancel"
            darkTheme={darkTheme}
            handleClick={cancel}
          />
          <ButtonDelete
            onClick={() => {
              setScreen("main");
              deleteInvoice(invoice, invoice.id);
            }}
          />
        </div>
      </section>
    </div>
  );
}
