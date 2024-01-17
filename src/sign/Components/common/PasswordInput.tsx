import { ReactNode } from 'react';
import EyeButton from './EyeButton';
import style from './PasswordInput.module.css';

interface PropType {
  children: ReactNode;
  placeholder: string;

}

const PasswordInput = ({children, placeholder} : PropType) => {
  return(
    <div className={style.box}>
      <label htmlFor="password" className={style.label}>{children}</label>
      <input type="password" id="password" className={style.input} placeholder={placeholder}/>
      <EyeButton />
    </div>
  )
};

export default PasswordInput;
