import EmailInput from "../components/Input/EamilInput";
import PasswordInput from "../components/Input/PasswordInput";
import LoginTitle from "../components/LoginTitle/LoginTitle";
import { Button } from "../components/Button/Button";
import ShareBox from "../components/ShareBox/sharBox";
import styles from "../styles/signin.module.css";

function Signin() {
  return (
    <>
      <form className={styles["form-all"]}>
        <LoginTitle />
        <div className={styles["form-inputs"]}>
          <EmailInput />
          <PasswordInput />
        </div>
        <Button type="submit">로그인</Button>
        <ShareBox />
      </form>
    </>
  );
}

export default Signin;
