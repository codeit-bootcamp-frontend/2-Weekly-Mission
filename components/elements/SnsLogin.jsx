import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

function SnsLogin() {
  return (
    <Container>
      <Title>소셜 로그인</Title>
      <ButtonWrapper>
        <GoogleButton>
          <Link href="https://www.google.com">
            <Image src="/googleLogo.png" width={42} height={42} alt="google" />
          </Link>
        </GoogleButton>
        <KakaoButton>
          <Link href="https://www.kakaocorp.com/page">
            <BgYellow>
              <Image src="/yellow.svg" width={42} height={42} alt="yellow" />
            </BgYellow>
            <KakaoIcon>
              <Image src="/kakao.svg" width={26} height={24} alt="kakao" />
            </KakaoIcon>
          </Link>
        </KakaoButton>
      </ButtonWrapper>
    </Container>
  );
}

export default SnsLogin;

const Container = styled.div`
  display: flex;
  width: 35rem;
  padding: 1.2rem 2.4rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.8rem;
  border: 0.1rem solid #ccd5e3;
  background: #e7effb;
`;

const Title = styled.p`
  color: #373740;
  font-size: 1.4rem;
  font-weight: 400;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;
`;

const GoogleButton = styled.div``;

const KakaoButton = styled.div`
  position: relative;
`;

const BgYellow = styled.div`
  width: 4.2rem;
  height: 4.2rem;
`;

const KakaoIcon = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
