import style from './EmailInput.module.css';

const EmailInput = () => {
  return(
    <div className={style.box}>
      <label htmlFor="email" className={style.label}>이메일</label>
      <input type="email" id="email" className={style.input} placeholder='이메일을 입력해주세요'/>
    </div>
  )
};

export default EmailInput;
