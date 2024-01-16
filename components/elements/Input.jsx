import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

function Input({ label, type, placeholder, error, ...rest }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <GapWrapper>
      <InputLabel htmlFor={type}>{label}</InputLabel>
      <Wrapper>
        <TextInput
          {...rest}
          type={isVisible ? "text" : type}
          id={type}
          placeholder={placeholder}
          error={error}
        />
        {type === "password" && (
          <ImgWrapper>
            <ImgContainer>
              {isVisible ? (
                <Image
                  fill
                  src="/eye-off.svg"
                  alt="비밀번호 가리기"
                  onClick={toggleVisibility}
                />
              ) : (
                <Image
                  fill
                  src="/eye-on.svg"
                  alt="비밀번호 보이기"
                  onClick={toggleVisibility}
                />
              )}
            </ImgContainer>
          </ImgWrapper>
        )}
      </Wrapper>
      <ErrorMessage>{error?.message}</ErrorMessage>
    </GapWrapper>
  );
}

export default Input;

const GapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

const InputLabel = styled.label`
  color: #000;
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 1.2rem;
`;

const Wrapper = styled.div`
  position: relative;
`;

const TextInput = styled.input`
  display: flex;
  width: 35rem;
  padding: 1.8rem 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  border: 0.1rem solid ${(props) => (props.error ? "#FF5B56" : "#CCD5E3")};

  &:focus {
    outline: ${(props) => (props.error ? "none" : "0.1rem solid #6d6afe")};
  }
`;

const ImgWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 1.5rem;
  transform: translateY(-50%);
`;

const ImgContainer = styled.div`
  position: relative;
  width: 1.6rem;
  height: 1.6rem;
`;

const ErrorMessage = styled.p`
  color: #ff5b56;
  margin-top: 0.6rem;
`;
