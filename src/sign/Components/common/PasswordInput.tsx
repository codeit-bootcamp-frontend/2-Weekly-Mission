import { Dispatch, FocusEvent, SetStateAction, useState } from 'react';
import EyeButton from './EyeButton';
import style from './PasswordInput.module.css';
import { isEmpty, isPassword } from '../../util/validate';
import ErrorMessage from './ErrorMessage';


const PasswordInput = ({setPassword} : {setPassword : Dispatch<SetStateAction<string>>}) => {
  const [checkEmpty, setCheckEmpty] = useState(false);
  const [checkPassword, setCheckPassword] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const handleInputFocusOut = (e:FocusEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    setCheckEmpty(isEmpty(e.target.value));
    setCheckPassword(isPassword(e.target.value));
  };

  const handleInputFocusIn = () => {
    setCheckEmpty(false);
    setCheckPassword(true);
  };

  return(
    <div className={style.box}>
      <label htmlFor="password" className={style.label}>비밀번호</label>
      <div>
        <input type={`${isVisible ? 'text' : 'password'}`} id="password" className={`${style.input} ${(checkEmpty || !checkPassword) ? style['input-error']:''}`} placeholder='영문, 숫자를 조합해 8자 이상 입력해 주세요.' onBlur={handleInputFocusOut} onFocus={handleInputFocusIn}/>
        <EyeButton isVisible={isVisible} onClick={setIsVisible}/>
      </div>
      {checkEmpty && <ErrorMessage>비밀번호를 입력해주세요.</ErrorMessage>}
      {!checkPassword && <ErrorMessage>비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.</ErrorMessage>}
    </div>
  )
};

export default PasswordInput;
