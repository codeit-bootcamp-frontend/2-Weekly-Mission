import React from "react";
import styled from "styled-components";

export default function LoginForm({ children }) {
  return (
    <LoginContainer>
      <Form>
        {children}
        <Submit>로그인</Submit>
      </Form>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const Submit = styled.button`
  width: 400px;
  padding: 16px 20px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-top: 0.6rem;
  cursor: pointer;
`;
