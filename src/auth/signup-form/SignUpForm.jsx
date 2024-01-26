import classNames from "classnames/bind";
import styles from "./SignUpForm.module.scss";
import { useState } from "react";
import { SignUpInput } from "auth/ui-signup-input/SignUpInput";
import { Cta } from "sharing/ui-cta/Cta";
import { postSignUp } from "../../api/api";
import { INITIAL_VALUE, PLACEHOLDER } from "./constant";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

export const SignUpForm = () => {
  const [values, setValues] = useState(INITIAL_VALUE);
  const [isUsable, setIsUsable] = useState(true);
  const [whichError, setWhichError] = useState("");

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { confirmedPassword, ...postValues } = values;
    const postResponse = await postSignUp(postValues);

    try {
      if (!isUsable) {
        throw new Error("이메일 중복");
      }
      setValues(INITIAL_VALUE);
      localStorage.setItem(
        "accessToken",
        JSON.stringify(postResponse.data.accessToken)
      );
      // if (localStorage.getItem("accessToken")) router.push("/folder");
    } catch {
      if (!postResponse.isUsableEmail) setIsUsable(false);
      setWhichError(postResponse.error?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={cx("section")}>
        <label>이메일</label>
        <SignUpInput
          placeholder={PLACEHOLDER.email}
          type="email"
          value={values.email}
          onChange={handleChange}
          isUsable={isUsable}
          whichError={whichError}
        />
      </div>
      <div className={cx("section")}>
        <label>비밀번호</label>
        <SignUpInput
          placeholder={PLACEHOLDER.password}
          type="password"
          value={values.password}
          onChange={handleChange}
          whichError={whichError}
        />
      </div>
      <div className={cx("section")}>
        <label>비밀번호 확인</label>
        <SignUpInput
          placeholder={PLACEHOLDER.confirmedPassword}
          type="confirmedPassword"
          value={values.confirmedPassword}
          onChange={handleChange}
          password={values.password}
          whichError={whichError}
        />
      </div>
      <Cta>회원가입</Cta>
    </form>
  );
};
