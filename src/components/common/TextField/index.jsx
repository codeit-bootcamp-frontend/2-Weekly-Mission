import styles from './TextField.module.scss';
import classNames from 'classnames/bind';

import Input from './Input';

const cx = classNames.bind(styles);

const TextField = ({ label, message, error, ...props }) => {
  return (
    <div className={cx('text-field')}>
      <label className={cx('text-field-label')}>{label}</label>
      <div className={cx('text-field-input')}>
        <Input error={error} {...props} />
      </div>
      <div className={cx('text-field-message', { error: error })}>{message}</div>
    </div>
  );
};

export default TextField;
