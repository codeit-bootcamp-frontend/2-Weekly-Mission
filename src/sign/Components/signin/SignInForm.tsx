import EmailInput from '../common/EmailInput';
import PasswordInput from '../common/PasswordInput';
import SignButton from '../common/SignButton';
import SignTitle from '../common/SignTitle';
import Social from '../common/Social';
import style from './SignInForm.module.css';

const SignInForm = () => {
  return(
    <main className={style.main}>
    <div className={style.container}>
      <SignTitle link='signup' linkButton='회원 가입하기'>회원이 아니신가요?</SignTitle>
      <form action="" className={style.form} id="signInForm">
        <div className={style.content}>
          <EmailInput/>
          <PasswordInput placeholder='비밀번호를 입력해주세요.'>비밀번호</PasswordInput>
        </div>
        <SignButton>로그인</SignButton>
      </form>
    </div>
    <Social>소셜 로그인</Social>
  </main>
  )
};

export default SignInForm;
