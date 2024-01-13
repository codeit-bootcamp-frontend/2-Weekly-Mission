import styled from "styled-components";
import Cta from "../Cta";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 80rem;
  padding: 16px;
`;

const SearchIcon = styled.svg`
  position: absolute;
  top: 50%;
  left: 2.5rem;
  transform: translateY(-50%);
`;

const Input = styled.input`
  width: 100%;
  max-width: 80rem;
  padding: 16px;
  padding-left: 4rem;
  border-radius: 15px;
  border: 1px solid transparent;
  background: ${(props) => props.theme.white};
  &:focus {
    border: 1px solid ${(props) => props.theme.primary};
  }
`;

const Button = styled(Cta)`
  position: absolute;
  top: 50%;
  right: 2.5rem;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 8rem;
  height: 3.4rem;
  font-size: 1.4rem;
  font-weight: 600;
`;

export { Button, Input, SearchIcon, Wrapper };
