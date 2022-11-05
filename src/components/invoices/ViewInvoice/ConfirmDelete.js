import styles from "./ConfirmDelete.module.css";
import ButtonStandard from "../../buttons/ButtonStandard";
import ButtonDelete from "../../buttons/ButtonDelete";
export default function ConfirmDelete({ darkTheme, cancel }) {
  return (
    <div className={`${styles.confirmContainer} ${darkTheme && styles.dark}`}>
      <section className={styles.confirmBox}>
        <h2 className="alt-heading">Confirm Deletion</h2>
        <p>
          Are you sure you want to delete invoice #XM9141? This action cannot be
          undone.
        </p>
        <div className={styles.confirmBtns}>
          <ButtonStandard
            btnText="Cancel"
            darkTheme={darkTheme}
            handleClick={cancel}
          />
          <ButtonDelete />
        </div>
      </section>
    </div>
  );
}
