import styled from "styled-components";

function SigninBtn() {
  return (
    <SigninCta href="/Signin">
      <span>로그인</span>
    </SigninCta>
  );
}

const SigninCta = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 3.7rem;
  cursor: pointer;
  background-image: linear-gradient(135deg, var(--primary) 0%, #6ae3fe 100%);
  border-radius: 0.8rem;
  color: #f5f5f5;
  font-size: 1.4rem;
  font-weight: 600;

  @media (min-width: 768px) {
    width: 12.8rem;
    height: 5.4rem;
    border-radius: 0.8rem;
    font-size: 1.8rem;
  }
`;

export default SigninBtn;
