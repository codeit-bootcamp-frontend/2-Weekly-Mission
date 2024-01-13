import styled from "styled-components";
import Image from "next/image";

export const InputBox = styled.div`
  & > label {
    font-size: 1.4rem;
    color: #000000;
    display: block;
    margin-bottom: 1.2rem;
  }

  & > input {
    width: 100%;
    padding: 1.8rem 1.5rem;
    border-radius: 0.8rem;
    border: 1px solid var(--gray-lighter);
    padding-left: 1.5rem;
    padding-right: 4rem;
  }
`;

export const PasswordToggleIcon = styled(Image)`
  display: inline;
  width: 1.6rem;
  position: absolute;
  right: 1.5rem;
  top: 59%;
`;

export const GradientButton = styled.button`
  padding: 1.6rem 2rem;
  background-image: linear-gradient(
    90deg,
    rgba(109, 106, 254, 1),
    rgba(106, 227, 254, 1)
  );
  border: none;
  border-radius: 0.8rem;
  color: var(--white-color);
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2.16rem;
  width: 100%;
  margin-bottom: 3.2rem;
  cursor: pointer;
`;
