import classNames from "classnames";
import styles from "./Input.module.css";
import Image from "next/image";

const Input = ({
  label,
  type,
  error,
  placeholder,
  id,
  value,
  onKeyPress,
  onChangeType,
  onChange,
  defaultValue,
  registerConfig,
}) => {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={styles.inputBox}>
        <input
          className={classNames(styles.input, { [styles.error]: error })}
          type={type}
          id={id}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          {...registerConfig}
        />
        {(type === "password" || type === "text") && onChangeType && (
          <button
            className={classNames(styles.imgWrapper)}
            onClick={onChangeType}
            type="button"
            tabIndex={-1}
          >
            <Image
              src={`/eye-${type === "password" ? "off" : "on"}.svg`}
              alt="eye-icon"
              width={24}
              height={24}
            />
          </button>
        )}
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </>
  );
};

export default Input;
