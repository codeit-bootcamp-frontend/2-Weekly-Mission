import EmailInput from '../common/EmailInput';
import PasswordInput from '../common/PasswordInput';
import SignButton from '../common/SignButton';
import SignTitle from '../common/SignTitle';
import Social from '../common/Social';
import style from './SignIn.module.css';

const SignIn = () => {
  return(
    <main className={style.main}>
    <div className={style.container}>
      <SignTitle />
      <form action="" className={style.form} id="signInForm">
        <div className={style.content}>
          <EmailInput />
          <PasswordInput />
        </div>
        <SignButton>로그인</SignButton>
      </form>
    </div>
    <Social>소셜 로그인</Social>
  </main>
  )
};

export default SignIn;
