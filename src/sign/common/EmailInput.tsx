import style from './EmailInput.module.css';

const EmailInput = () => {
  return(
    <div className={style.box}>
      <label htmlFor="email" className={style.label}>이메일</label>
      <input type="email" id="email" className={style.input}/>
    </div>
  )
};

export default EmailInput;
