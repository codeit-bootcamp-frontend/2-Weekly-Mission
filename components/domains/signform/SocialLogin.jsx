import Image from "next/image";
import styled from "styled-components";

export default function SocialLogin() {
  return (
    <>
      <SocialLoginContainer>
        <p>소셜 로그인</p>
        <ImgContainer>
          <Image src="/png/colorFaceBookIcon.png" alt="facebookIcon" width={42} height={42} />
          <Image src="/png/colorKaKaoIcon.png" alt="kakaoIcon" width={42} height={42} />
        </ImgContainer>
      </SocialLoginContainer>
    </>
  );
}

const SocialLoginContainer = styled.div`
  display: flex;
  width: 400px;
  padding: 12px 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #ccd5e3;
  background: #e7effb;

  & p {
    font-size: 14px;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  gap: 1.6rem;
`;
