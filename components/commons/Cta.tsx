import React, { ReactNode } from "react";
import styles from "./Cta.module.css";

interface CtaProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "submit" | undefined;
  onKeyDown?: () => void;
}

export function CtaShort({ children, onClick }: CtaProps) {
  return (
    <button className={styles.shortButton} onClick={onClick}>
      {children}
    </button>
  );
}

export function CtaLong({ children, onClick, type, onKeyDown }: CtaProps) {
  return (
    <button className={styles.longButton} onClick={onClick} type={type} onKeyDown={onKeyDown}>
      {children}
    </button>
  );
}
