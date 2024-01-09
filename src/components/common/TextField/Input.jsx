import { useState } from 'react';

import styles from './Input.module.scss';
import classNames from 'classnames/bind';
import IconButton from 'components/common/Button/IconButton';

import { PASSWORD_SHOW_MODE } from 'stores/auth';

const cx = classNames.bind(styles);

const Input = ({ error = false, type = 'text', ...inputProps }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { iconEye, inputType, showMode } = isVisible
    ? PASSWORD_SHOW_MODE.on
    : PASSWORD_SHOW_MODE.off;

  const handlePasswordToggleClick = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      <div className={cx('input-group')}>
        <input
          name={type}
          type={inputType}
          {...inputProps}
          className={cx('input', { error: error })}
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
