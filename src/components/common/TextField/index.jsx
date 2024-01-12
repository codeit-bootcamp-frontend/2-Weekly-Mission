import styles from './TextField.module.scss';
import classNames from 'classnames/bind';

import Input from './Input';

const cx = classNames.bind(styles);

const TextField = ({ label, errors, type, name, register, ...inputProps }) => {
  const isError = !!errors[name]?.message;

  return (
    <div className={cx('text-field')}>
      <label className={cx('text-field-label')}>{label}</label>
      <div className={cx('text-field-input')}>
        <Input
          type={type}
          name={name}
          error={isError}
          register={register}
          {...inputProps}
        />
      </div>
      <div className={cx('text-field-message', { error: errors })}>
        {errors[name]?.message}
      </div>
    </div>
  );
};

export default TextField;
