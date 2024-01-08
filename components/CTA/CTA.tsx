import styles from './CTA.module.css';

interface Props {
  text: string;
  className: 'fixedWidth' | 'variableWidth' | 'delete';
  handleButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function CTA({ text, className, handleButtonClick }: Props) {
  return (
    <button className={`${styles.button} ${styles[className]}`} onClick={handleButtonClick}>
      {text}
    </button>
  );
}
