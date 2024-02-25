import Image from 'next/image';
import { useFormContext } from 'react-hook-form';
import classNames from 'classnames/bind';
import useToggleButton from 'hooks/useToggleButton';
import { USER_INPUT_VALIDATION, PASSWORD_SHOW_MODE } from 'constants/auth';
import styles from './InputField.module.scss';

const cx = classNames.bind(styles);

const InputField = ({ label, name, type = 'text', isRequired = false, ...props }) => {
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext();
  const { isVisible, handleToggleClick } = useToggleButton();
  const { regex, errorMessage } = USER_INPUT_VALIDATION[name] || {};
  const { iconEye, inputType, showMode } = isVisible
    ? PASSWORD_SHOW_MODE.on
    : PASSWORD_SHOW_MODE.off;

  const isError = !!errors[name]?.message;

  return (
    <div className={cx('input-field')}>
      <label htmlFor={name} className={cx('input-field-label', { required: isRequired })}>
        {label}
      </label>

      <div className={cx('input-group')}>
        <input
          {...register(name, {
            required: isRequired ? 'This is Required.' : errorMessage?.empty,
            pattern: {
              value: regex,
              message: errorMessage?.invalid,
            },
            validate: name === 'passwordConfirm' && {
              notMatch: (value) => {
                const { password } = getValues();
                return password === value || errorMessage.confirm;
              },
            },
          })}
          type={type === 'password' ? inputType : type}
          className={cx('input', { error: isError, empty: isRequired && isError })}
          {...props}
        />

        {type === 'password' && (
          <button
            type='button'
            role='switch'
            aria-label={showMode}
            aria-checked={isVisible}
            onClick={handleToggleClick}
            className={cx('btn-password-toggle')}
          >
            <Image src={iconEye} alt={showMode} width={16} height={16} sizes='100%' />
          </button>
        )}
      </div>

      {isRequired ? (
        <></>
      ) : (
        <div className={cx('input-field-messsage')}>{errors[name]?.message}</div>
      )}
    </div>
  );
};

export default InputField;
