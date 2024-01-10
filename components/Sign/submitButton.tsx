import styles from './submitButton.module.css';

interface submitProps {
  text: string;
}

export default function SubmitButton({ text }: submitProps) {
  return (
    <>
      <button type='submit' className={`${styles.signBtn} ${styles.gradation1}`}>
        {text}
      </button>
    </>
  );
}
