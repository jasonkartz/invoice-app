import styles from "./formElements.module.css";
import { forwardRef } from "react";

const TextField = forwardRef(
  (
    { darkTheme, name, label, customClass, noStyles, type, error, ...rest },
    ref
  ) => {
    return (
      <div
        className={`${!noStyles && styles.inputContainer} ${
          darkTheme && styles.dark
        } ${customClass && customClass}`}
      >
        <div className={`${styles.labelContainer} ${error && styles.error}`}>
          {label && <label>{label}</label>}
          {error && label && <p role="alert">x</p>}
        </div>
        <input
          className={error && styles.error}
          autoComplete="none"
          type={type}
          name={name}
          {...rest}
          ref={ref}
        />
      </div>
    );
  }
);

TextField.defaultProps = {
  name: "text",
  type: "text",
};

export default TextField;
