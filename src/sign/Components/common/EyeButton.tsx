import Image from "next/image";
import style from './EyeButton.module.css';
import eyeOn from '@/src/assets/eye-on.svg';
import eyeOff from '@/src/assets/eye-off.svg';
import { MouseEvent, Dispatch, SetStateAction } from "react";

interface PropType {
  isVisible:boolean;
  onClick: Dispatch<SetStateAction<boolean>>
}

const EyeButton = ({isVisible, onClick} : PropType) => {

  const handleEyeButtonClick = (e:MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick(!isVisible);
  };

  return(
    <button onClick={handleEyeButtonClick}>
      {isVisible && <div className={style.eye}><Image src={eyeOn} alt="보이기" fill/></div>}
      {!isVisible && <div className={style.eye}><Image src={eyeOff} alt="숨기기" fill/></div>}
    </button>
  )
};

export default EyeButton;
