import { FocusEvent, useState } from 'react';
import style from './EmailInput.module.css';
import ErrorMessage from './ErrorMessage';
import { isEmail, isEmpty } from '../../util/validate';

const EmailInput = () => {
  const [checkEmpty, setCheckEmpty] = useState(false);
  const [checkEmail, setCheckEmail] = useState(true);

  const handleInputFocusOut = (e:FocusEvent<HTMLInputElement>) => {
    setCheckEmpty(isEmpty(e.target.value));
    setCheckEmail(isEmail(e.target.value));
  };

  const handleInputFocusIn = () => {
    setCheckEmpty(false);
    setCheckEmail(true);
  };

  return(
    <div className={style.box}>
      <label htmlFor="email" className={style.label}>이메일</label>
      <input type="email" id="email" className={`${style.input} ${(checkEmpty || !checkEmail) ? style['input-error']:''}`} placeholder='이메일을 입력해주세요.' onBlur={handleInputFocusOut} onFocus={handleInputFocusIn}/>
      {checkEmpty && <ErrorMessage>이메일을 입력해주세요.</ErrorMessage>}
      {!checkEmail && <ErrorMessage>올바른 이메일주소가 아닙니다.</ErrorMessage>}
    </div>
  )
};

export default EmailInput;
