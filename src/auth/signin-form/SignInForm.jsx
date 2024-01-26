import classNames from "classnames/bind";
import styles from "./SignInForm.module.scss";
import { useState } from "react";
import { SignInInput } from "auth/ui-signin-input/SignInInput";
import { Cta } from "sharing/ui-cta/Cta";
import { postSignIn } from "../../api/api";
import { INITIAL_VALUES, PLACEHOLDERS } from "./constant";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

export const SignInForm = () => {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [isError, setIsError] = useState(false);

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
    const body = await postSignIn(values);
    try {
      setValues(INITIAL_VALUES);
      localStorage.setItem(
        "accessToken",
        JSON.stringify(body.data.accessToken)
      );
      if (localStorage.getItem("accessToken")) router.push("/folder");
    } catch {
      setIsError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={cx("section")}>
        <label>이메일</label>
        <SignInInput
          placeholder={PLACEHOLDERS.email}
          type="email"
          value={values.email}
          onChange={handleChange}
          isError={isError}
        />
      </div>
      <div className={cx("section")}>
        <label>비밀번호</label>
        <SignInInput
          placeholder={PLACEHOLDERS.password}
          type="password"
          value={values.password}
          onChange={handleChange}
          isError={isError}
        />
      </div>
      <Cta>로그인</Cta>
    </form>
  );
};
