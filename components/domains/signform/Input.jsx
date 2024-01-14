import Image from "next/image";
import styled from "styled-components";

export default function Input({ label, type, id, setType, isType }) {
  return (
    <>
      <InputContainer>
        <Label for={id}>{label}</Label>
        <PositionContainer>
          <LoginInput type={type} id={id}></LoginInput>
          {id === "password" ? (
            <EyeIcon
              src={isType ? "/svg/eye-off.svg" : "/svg/eye-on.svg"}
              width={15}
              height={15}
              onClick={() => {
                setType(!isType);
              }}
            />
          ) : (
            ""
          )}
        </PositionContainer>
      </InputContainer>
    </>
  );
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const PositionContainer = styled.div`
  position: relative;
`;

const Label = styled.label`
  font-size: 1.4rem;
`;

const LoginInput = styled.input`
  position: relative;
  width: 400px;
  padding: 18px 15px;
  border-radius: 8px;
  border: 1px solid #ccd5e3;
  background: #fff;

  &:focus {
    outline: none;
    border: 1px solid #6d6afe;
  }
`;

const EyeIcon = styled(Image)`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
