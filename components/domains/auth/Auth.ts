import styled from "styled-components";
import Image from "next/image";

interface IsValid {
  isValid?: boolean;
}

export const InputLayout = styled.div`
  width: 100%;

  & > label {
    font-size: 1.4rem;
    color: #000000;
    display: block;
    margin-bottom: 1.2rem;
  }
`;

export const InputBox = styled.div<IsValid>`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  & input {
    width: 100%;
    padding: 1.8rem 1.5rem;
    border-radius: 0.8rem;
    border: 1px solid var(--gray-lighter);
    border-color: ${(props) =>
      props.isValid ? "var(--focus-alert)" : "var(--gray-lighter)"};
    outline: none;

    &::placeholder {
      color: var(--gray-darker);
    }
  }
`;

export const PasswordToggleIcon = styled(Image)`
  width: 1.6rem;
  position: absolute;
  right: 1.5rem;
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
  cursor: pointer;
  margin-bottom: 0.8rem;
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 3rem;
`;

export const LogoImage = styled(Image)`
  width: 21.058rem;
  margin-bottom: 1.6rem;
`;

export const LinkBox = styled.div`
  font-size: 1.6rem;

  & div {
    font-weight: 400;
    line-height: 2.4rem;
  }

  & a {
    margin-left: 0.8rem;
    font-size: 1.6rem;
    line-height: 1.909rem;
    font-weight: 600;
    color: var(--primary-color);
    text-decoration: underline;
  }
`;

export const AlertMessage = styled.p`
  color: var(--focus-alert);
  font-size: 1.4rem;
  margin-top: 0.6rem;
  display: block;
`;
