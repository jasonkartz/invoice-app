import styles from "./formElements.module.css";
import { forwardRef } from "react";

const TextField = forwardRef(
  (
    { darkTheme, name, label, customClass, noStyles, type, readOnly, ...rest },
    ref
  ) => {
    return (
      <div
        className={`${!noStyles && styles.inputContainer} ${
          darkTheme && styles.dark
        } ${customClass && customClass}`}
      >
        {label && <label>{label}</label>}
        <input
          type={type}
          readOnly={readOnly}
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
