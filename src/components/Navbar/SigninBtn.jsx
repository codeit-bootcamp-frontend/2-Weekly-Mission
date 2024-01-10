import styled from "styled-components";
import COLOR_TOKEN from "../../styles/colors";
import { useNavigate } from "react-router-dom";

function SigninBtn() {
  const navigate = useNavigate();
  const onClick = () => navigate("/signin");
  return (
    <SigninCta onClick={onClick}>
      <span>로그인</span>
    </SigninCta>
  );
}

const SigninCta = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 3.7rem;
  background-image: linear-gradient(
    135deg,
    ${COLOR_TOKEN.primary} 0%,
    #6ae3fe 100%
  );
  border-radius: 0.8rem;
  color: ${COLOR_TOKEN.grayLight};
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
