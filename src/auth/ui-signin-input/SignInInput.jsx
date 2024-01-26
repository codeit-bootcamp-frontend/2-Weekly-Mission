import styles from "./SignInInput.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  EYEOFF_IMAGE,
  EYEON_IMAGE,
  EMAIL_REGEX,
  PASSWORD_REGEX,
  ERROR_MESSAGE,
} from "./constant";

const cx = classNames.bind(styles);

export const SignInInput = ({
  type,
  placeholder,
  onChange,
  value,
  isError,
}) => {
  const initialType = type;

  const [inputType, setInputType] = useState(initialType);
  const [isFocused, setIsFocused] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const isValidEmail = (input) => {
    return EMAIL_REGEX.test(input) ? true : false;
  };

  const isValidPassword = (input) => {
    return PASSWORD_REGEX.test(input) ? true : false;
  };

  const handleEmailError = (e) => {
    if (!e.target.value) {
      setErrorMessage(ERROR_MESSAGE.emailRequired);
    } else if (!isValidEmail(e.target.value)) {
      setErrorMessage(ERROR_MESSAGE.emailInvalid);
    } else {
      setErrorMessage("");
    }
  };

  const handlePasswordError = (e) => {
    if (!e.target.value) {
      setErrorMessage(ERROR_MESSAGE.passwordRequired);
    } else {
      setErrorMessage("");
    }
  };

  const handlePasswordShown = (e) => {
    setIsVisible(!isVisible);
    isVisible ? setInputType("password") : setInputType("text");
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    if (type === "email") handleEmailError(e);
    else if (type === "password") handlePasswordError(e);
  };

  useEffect(() => {
    if (isError) {
      if (type === "email") setErrorMessage(ERROR_MESSAGE.emailCheck);
      else if (type === "password")
        setErrorMessage(ERROR_MESSAGE.passwordCheck);
    } else {
      setErrorMessage("");
    }
  }, [isError]);

  return (
    <div>
      <div className={cx("container")}>
        <input
          className={cx("input", { focused: isFocused, error: errorMessage })}
          type={inputType}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={initialType}
          value={value}
          onChange={onChange}
        />
        {type === "password" &&
          (isVisible ? (
            <Image
              src={EYEON_IMAGE}
              width={16}
              height={16}
              alt="비밀번호 보이기 아이콘"
              className={cx("eye-icon")}
              onClick={handlePasswordShown}
            />
          ) : (
            <Image
              src={EYEOFF_IMAGE}
              width={16}
              height={16}
              alt="비밀번호 숨김 아이콘"
              className={cx("eye-icon")}
              onClick={handlePasswordShown}
            />
          ))}
      </div>
      <p
        className={cx({
          "error-message": errorMessage,
          hidden: errorMessage == false,
        })}
      >
        {errorMessage}
      </p>
    </div>
  );
};
