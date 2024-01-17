import { ReactNode } from 'react';
import style from './ErrorMessage.module.css';

const ErrorMessage = ({children}:{children:ReactNode}) => {
  return(
    <p className={style.message}>{children}</p>
  )
};

export default ErrorMessage;
