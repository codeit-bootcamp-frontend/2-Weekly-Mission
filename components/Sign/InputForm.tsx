import Input from './Input';
import PasswordInput from './passwordInput';

import styles from './InputForm.module.css';

export default function InputForm() {
  function onBlurHandler() {
    console.log(`blurTest`);
  }

  return (
    <div className={styles.inputForm}>
      <Input type='text' placeholder='내용 입력' onBlurHandler={onBlurHandler} />
      <PasswordInput onBlurHandler={onBlurHandler} />
    </div>
  );
}
