import styles from './Input.module.css';

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  error?: boolean;
  errorMsg?: string;
  onBlurHandler?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function Input({ type, placeholder, value, error, errorMsg, onBlurHandler }: InputProps) {
  return (
    <>
      <div>
        <input
          className={`${styles.default} ${error && styles.error}`}
          type={type}
          placeholder={placeholder}
          value={value}
          onBlur={onBlurHandler}
        />
        {error && <span className={styles.errorMsg}> {errorMsg} </span>}
      </div>
    </>
  );
}
