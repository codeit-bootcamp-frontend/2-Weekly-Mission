import { useState, useEffect } from 'react';

import styles from './Input.module.scss';
import classNames from 'classnames/bind';
import IconButton from 'components/common/Button/IconButton';

import { ICON } from 'stores/importImg';

const cx = classNames.bind(styles);
const { eye } = ICON;

const Input = ({ error = false, type = 'text', ...props }) => {
  const [inputType, setInputType] = useState(type);
  const [isVisible, setIsVisible] = useState(false);
  const [iconEye, setIconEye] = useState(eye.off.url);
  const [passwordShowMode, setPasswordShowMode] = useState('비밀번호 숨기기');

  useEffect(() => {
    if (isVisible) {
      setIconEye(eye.on.url);
      setInputType('text');
      setPasswordShowMode('비밀번호 보기');
    } else {
      setIconEye(eye.off.url);
      setInputType('password');
      setPasswordShowMode('비밀번호 숨기기');
    }
  }, [isVisible]);

  const handlePasswordToggleClick = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      <div className={cx('input-group')}>
        <input
          name={type}
          type={inputType}
          {...props}
          className={cx('input', { error: error })}
        />

        {type === 'password' && (
          <div>
            <IconButton
              svg={iconEye}
              alt={iconEye}
              iconSize={16}
              aria-label={passwordShowMode}
              role='switch'
              aria-checked={isVisible}
              onClick={handlePasswordToggleClick}
              className={cx('btn-password-toggle')}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default Input;
