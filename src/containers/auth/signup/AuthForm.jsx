import { useFormContext } from 'react-hook-form';
import classNames from 'classnames/bind';
import AuthFormHeader from './AuthFormHeader';
import AuthFormSocial from './AuthFormSocial';
import Auth from 'apis/auth';
import InputField from 'components/common/InputField/InputField';
import BaseButton from 'components/common/Button/BaseButton';
import { signup } from 'services/api';
import { handleValidation } from 'services/auth';
import styles from './AuthForm.module.scss';

const cx = classNames.bind(styles);

const AuthForm = () => {
  const { handleSubmit, setError, reset } = useFormContext();

  const onValid = async (data) => {
    try {
      await Auth.signup(data);
      reset();
    } catch (e) {
      setError();
    }
  };

  return (
    <div className={cx('auth-form')}>
      <fieldset>
        <legend className='visually-hidden'>Login Linkbrary Account</legend>
        <AuthFormHeader />

        <form onSubmit={handleSubmit(onValid)} className={cx('auth-form-login')}>
          <InputField
            type='email'
            name='email'
            label='이메일'
            placeholder='이메일을 입력해 주세요.'
            autoComplete='email'
          />
          <InputField
            type='password'
            name='password'
            label='비밀번호'
            placeholder='영문, 숫자를 조합해 8자 이상 입력해 주세요.'
            maxLength={15}
            autoComplete='new-password'
          />
          <InputField
            type='password'
            name='passwordConfirm'
            label='비밀번호 확인'
            placeholder='비밀번호와 일치하는 값을 입력해 주세요.'
            maxLength={15}
            autoComplete='off'
          />
          <BaseButton text='회원가입' size='lg' type='submit' />
        </form>

        <AuthFormSocial />
      </fieldset>
    </div>
  );
};
export default AuthForm;
