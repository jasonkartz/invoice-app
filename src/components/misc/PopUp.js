import styles from "./PopUp.module.css";
import "animate.css";
export default function ConfirmDelete({
  children,
  darkTheme,
  headingText,
  paragraphText,
}) {
  return (
    <div
      className={`${styles.confirmContainer} ${
        darkTheme && styles.dark
      } animate__animated animate__fadeIn`}
      style={{ animationDuration: "0.25s" }}
    >
      <section className={styles.confirmBox}>
        <h2 className="alt-heading">{headingText}</h2>
        <p>{paragraphText}</p>
        <div className={styles.confirmBtns}>{children}</div>
      </section>
    </div>
  );
}
