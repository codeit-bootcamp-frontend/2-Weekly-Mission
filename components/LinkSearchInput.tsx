import { ChangeEvent } from "react";
import styled from "styled-components";

interface Props {
  setSearchValue: (value: string) => void;
  value?: string;
  setRef?: React.RefObject<HTMLFormElement>;
}

function LinkSearchInput({ setSearchValue, value, setRef }: Props) {
  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue && setSearchValue(e.target.value);
  };

  const clearSearchValue = () => {
    setSearchValue && setSearchValue("");
  };

  return (
    <StyledForm ref={setRef}>
      <StyledLinkSearchInput
        type="text"
        placeholder="링크를 검색해보세요."
        name="test"
        onChange={handleSearchValue}
        value={value}
      />
      {value === "" ? "" : <StyledBtn onClick={clearSearchValue}>X</StyledBtn>}
    </StyledForm>
  );
}

const StyledForm = styled.form`
  position: relative;
  margin-bottom: 40px;
`;
const StyledLinkSearchInput = styled.input`
  width: 100%;
  padding: 1.5rem 1.6rem;
  background-color: #f5f5f5;
  border-radius: 1rem;
  border: none;

  &:focus {
    outline: none;
    border: 3px solid #6d6afe;
  }

  &::placeholder {
    background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png);
    background-size: contain;
    background-position: 0.1rem center;
    background-repeat: no-repeat;
    text-align: left;
    padding-left: 3rem;
  }
`;
const StyledBtn = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 25%;
  right: 1rem;
  font-weight: 700;
  color: white;
  background-color: #ccd5e3;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default LinkSearchInput;
