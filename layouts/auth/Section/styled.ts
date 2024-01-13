import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3.2rem;
  width: 100%;
  max-width: 40rem;

  @media (min-width: 768px) {
    width: 40rem;
  }
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  width: 100%;
`;

const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
`;

export { Section, AuthForm, TextFieldContainer };
