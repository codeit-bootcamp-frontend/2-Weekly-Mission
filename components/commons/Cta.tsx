import React, { ReactNode } from "react";
import styles from "./Cta.module.css";

interface CtaProps {
  children: ReactNode;
  onClick?: () => void;
}

export function CtaShort({ children, onClick }: CtaProps) {
  return (
    <button className={styles.shortButton} onClick={onClick}>
      {children}
    </button>
  );
}

export function CtaLong({ children, onClick }: CtaProps) {
  return (
    <button className={styles.longButton} onClick={onClick}>
      {children}
    </button>
  );
}
