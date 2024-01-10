import styles from "../styles/Signin.module.css"
import EmailInput from "../components/elements/EmailInput";
import PasswordInput from "../components/elements/PasswordInput";
import LogoTitle from "../components/signinPage/LogoTitle";
import SubmitButton from "../components/elements/SubmitButton";

function Signin() {
  return (
    <>
      <form className={styles.Container}>
        <LogoTitle />
        <EmailInput />
        <PasswordInput />
        <SubmitButton />

      </form>
    </>
  );
}

export default Signin;
