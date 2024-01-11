import React, { ReactNode } from 'react';
import styles from './SignLayout.module.css';

export default function SignLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.background}>
      <section className={styles.container}>{children}</section>
    </div>
  );
}
