import { useState } from 'react';

import styles from './Input.module.scss';
import classNames from 'classnames/bind';

import IconButton from 'components/common/Button/IconButton';
import { PASSWORD_SHOW_MODE, AUTHENTICATION } from 'constants/auth';

const cx = classNames.bind(styles);

const Input = ({ register, name, error = false, type = 'text', ...inputProps }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { regex, errorMessage } = AUTHENTICATION[name];
  const { iconEye, inputType, showMode } = isVisible
    ? PASSWORD_SHOW_MODE.on
    : PASSWORD_SHOW_MODE.off;

  const handlePasswordToggleClick = () => setIsVisible((prev) => !prev);

  return (
    <div>
      <div className={cx('input-group')}>
        <input
          {...register(name, {
            required: errorMessage.empty,
            pattern: {
              value: regex,
              message: errorMessage.invalid,
            },
          })}
          type={type === 'password' ? inputType : type}
          className={cx('input', { error: error })}
          {...inputProps}
        />

        {type === 'password' && (
          <IconButton
            svg={iconEye}
            alt={iconEye}
            iconSize={16}
            role='switch'
            aria-label={showMode}
            aria-checked={isVisible}
            onClick={handlePasswordToggleClick}
            className={cx('btn-password-toggle')}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
