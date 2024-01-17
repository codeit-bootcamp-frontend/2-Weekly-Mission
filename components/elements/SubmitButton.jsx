import styled from "styled-components";

function SubmitButton({ text, disabled }) {
  return (
    <>
      <SubBtn type="submit" disabled={disabled}>
        {text}
      </SubBtn>
    </>
  );
}

export default SubmitButton;

const SubBtn = styled.button`
  display: flex;
  width: 35rem;
  padding: 1.6rem 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  background: linear-gradient(90deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  color: #f5f5f5;
  font-size: 1.8rem;
  font-weight: 600;
`;
