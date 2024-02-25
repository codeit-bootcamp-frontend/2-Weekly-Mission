import { useFormContext } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import classNames from 'classnames/bind';
import Auth from 'apis/auth';
import InputField from 'components/common/InputField/InputField';
import BaseButton from 'components/common/Button/BaseButton';
import AuthFormHeader from './AuthFormHeader';
import AuthFormSocial from './AuthFormSocial';
import { USER_INPUT_VALIDATION } from 'constants/auth';
import { redirectToPage } from 'utils';
import styles from './AuthForm.module.scss';

const cx = classNames.bind(styles);
const { email, password } = USER_INPUT_VALIDATION;

const AuthForm = () => {
  const { handleSubmit, setError, reset } = useFormContext();
  const { mutate: signinMutation } = useMutation({
    mutationFn: Auth.signin,
    onSuccess: () => {
      redirectToPage('/folder');
      reset();
    },
    onError: () => {
      setError('email', { message: email.errorMessage.check });
      setError('password', { message: password.errorMessage.check });
    },
  });

  const onValid = (data) => {
    signinMutation(data);
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
            autoComplete='email'
            placeholder={email.errorMessage.empty}
          />
          <InputField
            type='password'
            name='password'
            label='비밀번호'
            maxLength={15}
            autoComplete='current-password'
            placeholder={password.errorMessage.empty}
          />
          <BaseButton text='로그인' size='lg' type='submit' />
        </form>
        <AuthFormSocial />
      </fieldset>
    </div>
  );
};
export default AuthForm;
