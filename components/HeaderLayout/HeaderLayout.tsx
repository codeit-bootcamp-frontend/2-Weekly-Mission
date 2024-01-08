import { ReactNode } from 'react';
import styles from './HeaderLayout.module.css';

interface Props {
  children: ReactNode;
}

export default function HeaderLayout({ children }: Props) {
  return <header className={styles.header}>{children}</header>;
}
