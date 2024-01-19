import styles from './Container.module.scss';

interface ContainerProps {
  className?: string;
  page?: string;
  children?: React.ReactNode;
}

export default function Container({ page, children }: ContainerProps) {
  const classNames = `${styles.container} ${page ? styles[page] : ''}`;

  return <div className={classNames}>{children}</div>;
}
