import styled from 'styled-components';
import { useState, useRef } from 'react';
import eyeOff from '../assets/eyeOff.png';

const InputDivStyle = styled.div`
  position: relative;
`;

const InputStyle = styled.input`
  display: flex;
  width: 35rem;
  padding: 1.8rem 1.5rem;
  outline: none;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 1rem;
  border: ${({ $iserror }) =>
    $iserror
      ? '1px solid var(--Error, #dc3a3a)'
      : '1px solid var(--gray-300, #ccc)'};
  background: var(--white, #fff);

  &:disabled {
    border-radius: 0.8rem;
    border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
    background: var(--Linkbrary-white, #fff);
  }

  &:active {
    border: 1px solid #6d6afe;
    background: var(--white, #fff);
  }

  &:focus {
    border-radius: 0.8rem;
    border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
    background: var(--Linkbrary-white, #fff);
  }
`;

const SpanStyle = styled.span`
  color: var(--Error, #dc3a3a);
  position: absolute;
  bottom: -1.2rem;
  left: 0.1rem;
`;

const EyeOff = styled.img`
  width: 1.6rem;
  height: 1.3818rem;
  position: absolute;
`;

function Input({ target, type }) {
  const [isError, setIsError] = useState('');
  const [value, setValue] = useState('');
  const [typeChange, setTypeChange] = useState('password');
  const inputRef = useRef();

  const blurHandler = (e) => {
    if (!e.target.value) {
      setIsError('내용을 다시 작성해주세요');
    } else {
      setIsError('');
    }
  };
  const focusHandler = () => {
    setIsError('');
  };

  const handleChange = (e) => {
    // onChange(target, e.target.value);
    setValue(() => e.target.value);
  };

  const handleTypeChange = () => {
    setTypeChange((prev) => (prev === 'text' ? 'password' : 'text'));
  };

  return (
    <InputDivStyle>
      <InputStyle
        $iserror={isError}
        placeholder="내용 입력"
        onBlur={blurHandler}
        onFocus={focusHandler}
        value={value}
        onChange={handleChange}
        type={typeChange}
        ref={inputRef}
      />
      {isError ? <SpanStyle>{isError}</SpanStyle> : null}
      <button onClick={handleTypeChange}>
        <EyeOff src={eyeOff} alt="eyeOff" />
      </button>
    </InputDivStyle>
  );
}

export default Input;
