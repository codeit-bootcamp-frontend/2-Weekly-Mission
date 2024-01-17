// Input.jsx

import React, { forwardRef } from "react";
import classNames from "classnames";
import styles from "./Input.module.css";

const Input = forwardRef(
  ({ state, type = "text", placeholder, errorMessage, ...props }, ref) => {
    const combinedStyles = classNames(styles["input-base"], {
      [styles["input-state"]]: state === "error",
    });

    return (
      <>
        <input
          ref={ref}
          type={type}
          className={combinedStyles}
          placeholder={placeholder}
          {...props}
        />
        {errorMessage && (
          <p className={styles["error-message"]}>{errorMessage}</p>
        )}
      </>
    );
  }
);

export default Input;
