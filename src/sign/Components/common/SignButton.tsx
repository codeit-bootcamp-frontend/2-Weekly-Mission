import { ReactNode } from 'react';
import style from './SignButton.module.css';

const SignButton = ({ children } : {children:ReactNode}) => {
  return(
    <button className={style.btn} type="submit">{children}</button>
  )
};

export default SignButton;
