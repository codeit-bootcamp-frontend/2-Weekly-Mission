import { FocusEvent, useState } from 'react';
import EyeButton from './EyeButton';
import style from './PasswordInput.module.css';
import { isConformablePassword, isEmpty } from '../../util/validate';
import ErrorMessage from './ErrorMessage';


const PasswordCheckInput = ({password} : {password:string}) => {
  const [checkEmpty, setCheckEmpty] = useState(false);
  const [isConformable, setIsConformable] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const handleInputFocusOut = (e:FocusEvent<HTMLInputElement>) => {
    setCheckEmpty(isEmpty(e.target.value));
    setIsConformable(isConformablePassword(password, e.target.value));
  };

  const handleInputFocusIn = () => {
    setCheckEmpty(false);
    setIsConformable(true);
  };

  return(
    <div className={style.box}>
      <label htmlFor="password-check" className={style.label}>비밀번호 확인</label>
      <div>
        <input type={`${isVisible ? 'text' : 'password'}`} id="password-check" className={`${style.input} ${(checkEmpty || !isConformable) ? style['input-error']:''}`} placeholder='영문, 숫자를 조합해 8자 이상 입력해 주세요.' onBlur={handleInputFocusOut} onFocus={handleInputFocusIn}/>
        <EyeButton isVisible={isVisible} onClick={setIsVisible}/>
      </div>
      {checkEmpty && <ErrorMessage>비밀번호를 입력해주세요.</ErrorMessage>}
      {!isConformable && <ErrorMessage>비밀번호가 일치하지 않아요.</ErrorMessage>}
    </div>
  )
};

export default PasswordCheckInput;
