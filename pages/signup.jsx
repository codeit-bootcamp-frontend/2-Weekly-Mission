import { useForm } from "react-hook-form";
import EmailInput from "../components/Input/EmailInput";
import PasswordInput from "../components/Input/PasswordInput";
import JoinTitle from "../components/JoinTitle/JoinTitle";
import { Button } from "../components/Button/Button";
import ShareBox from "../components/ShareBox/shareBox";
import styles from "../styles/signin.module.css";
import VerifyPasswordInput from "../components/Input/VerifyPassword";

function Signup() {
  const { register } = useForm();

  return (
    <>
      <form className={styles["form-all"]}>
        <JoinTitle />
        <div className={styles["form-inputs"]}>
          <EmailInput {...register("email")} />
          <PasswordInput />

          <VerifyPasswordInput />
        </div>
        <Button type="submit">로그인</Button>
        <ShareBox />
      </form>
    </>
  );
}

export default Signup;
