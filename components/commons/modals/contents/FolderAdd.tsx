import styled from "styled-components";

function FolderAdd({ onConfirm }: { onConfirm: () => void }) {
  return (
    <InputWrapper>
      <input placeholder="내용 입력" />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  width: 100%;
  margin-top: 2.4rem;

  & input {
    width: 100%;
    padding: 1.8rem 1.5rem;
    border-radius: 0.8rem;
    border: 0.1rem solid rgba(109, 106, 254, 1);
    margin-bottom: 1.5rem;
  }
`;
export default FolderAdd;
