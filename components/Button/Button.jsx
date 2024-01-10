import React from "react";
import styles from "./Button.module.css";

export const Button = ({ children, type = "button", ...props }) => {
  const className = styles.button;
  const buttonProps = { type, ...props };

  return (
    <button className={className} {...buttonProps}>
      <span>{children}</span>
    </button>
  );
};
