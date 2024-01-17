import Image from "next/image";
import style from './EyeButton.module.css';
import { useState } from "react";
import eyeOn from '@/src/assets/eye-on.svg';
import eyeOff from '@/src/assets/eye-off.svg';

const EyeButton = () => {
  const [isOn, setIsOn] = useState(true);

  const handleEyeButton = () => {
    setIsOn(!isOn);
  };

  return(
    <button onClick={handleEyeButton}>
      {isOn && <div className={style.eye}><Image src={eyeOn} alt="보이기" fill/></div>}
      {!isOn && <div className={style.eye}><Image src={eyeOff} alt="숨기기" fill/></div>}
    </button>
  )
};

export default EyeButton;
