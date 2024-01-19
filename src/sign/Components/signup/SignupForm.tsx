import style from './SignupForm.module.css';
import EmailInput from '../common/EmailInput';
import PasswordInput from '../common/PasswordInput';
import SignButton from '../common/SignButton';
import SignTitle from '../common/SignTitle';
import Social from '../common/Social';
import { useState } from 'react';
import PasswordCheckInput from '../common/PasswordCheckInput';

const SignUpForm = () => {

  const [password, setPassword] = useState('');

  return(
    <main className={style.main}>
    <div className={style.container}>
      <SignTitle link='signin' linkButton='로그인 하기'>이미 회원이신가요?</SignTitle>
      <form action="" className={style.form} id="signInForm">
        <div className={style.content}>
          <EmailInput />
          <PasswordInput setPassword={setPassword}/>
          <PasswordCheckInput password={password}/>
        </div>
        <SignButton>회원가입</SignButton>
      </form>
    </div>
    <Social>다른 방식으로 가입하기</Social>
  </main>
  )
};

export default SignUpForm;
