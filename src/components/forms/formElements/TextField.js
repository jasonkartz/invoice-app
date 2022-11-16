import styles from "./formElements.module.css";
import { forwardRef } from "react";

const TextField = forwardRef(
  ({ darkTheme, name, label, customClass, noStyles, type, ...rest }, ref) => {
    return (
      <div
        className={`${!noStyles && styles.inputContainer} ${
          darkTheme && styles.dark
        } ${customClass && customClass}`}
      >
        {label && <label>{label}</label>}
        <input type={type} name={name} {...rest} ref={ref} />
      </div>
    );
  }
);

TextField.defaultProps = {
  name: "text",
  type: "text",
};

export default TextField;
