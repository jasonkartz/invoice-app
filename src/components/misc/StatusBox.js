import styles from "./StatusBox.module.css";

export default function StatusBox({ status, customClass, darkTheme }) {
  const statusColor = () => {
    if (status === "paid") {
      return styles.statusPaid;
    } else if (status === "pending") {
      return styles.statusPending;
    } else {
      return styles.statusDraft;
    }
  };
  return (
    <h4
      className={`${styles.status} ${statusColor()} ${
        darkTheme && styles.dark
      } ${customClass && customClass}`}
    >
      <span className={styles.bullet}>&middot; </span>
      <span>{status}</span>
    </h4>
  );
}
