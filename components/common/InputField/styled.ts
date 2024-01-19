import styled from "styled-components";

const SignInputBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;
  position: relative;
`;

const SignInputLabel = styled.label`
  font-size: 1.4rem;
  font-weight: 400;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const SignInput = styled.input<{ $isError: boolean }>`
  padding: 1.8rem 1.5rem;
  width: 100%;
  border-radius: 0.8rem;
  border: 0.1rem solid ${({ $isError, theme }) => ($isError ? theme.red : theme.gray300)};
  font-size: 1.6rem;
  line-height: 150%;

  &:focus {
    border-color: ${({ $isError, theme }) => ($isError ? theme.red : theme.gray300)};
  }
`;

const EyeButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 50%;
  width: 4rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
`;
const ErrorMessage = styled.p`
  margin-top: -0.4rem;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.red};
  display: inline-block;
`;

export { SignInputBox, SignInputLabel, InputWrapper, SignInput, EyeButton, ErrorMessage };
