import EyeButton from './EyeButton';
import style from './PasswordInput.module.css';

const PasswordInput = () => {
  return(
    <div className={style.box}>
      <label htmlFor="password" className={style.label}>비밀번호</label>
      <input type="password" id="password" className={style.input}/>
      <EyeButton />
    </div>
  )
};

export default PasswordInput;
