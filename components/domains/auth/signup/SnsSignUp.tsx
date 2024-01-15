import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const SnsSignUp = () => {
  return (
    <SnsSignUpBox>
      <p>다른 방식으로 가입하기</p>
      <SnsIconBox>
        <Link href={"https://www.google.com/"}>
          <GoogleIcon
            width={42}
            height={42}
            src={"/images/google.png"}
            alt="구글 아이콘"
          />
        </Link>
        <Link href={"https://www.kakaocorp.com/page/"}>
          <KakaoIcon
            width={42}
            height={42}
            src={"/images/kakao.png"}
            alt="카카오 아이콘"
          />
        </Link>
      </SnsIconBox>
    </SnsSignUpBox>
  );
};

const SnsSignUpBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2.4rem;
  border: 0.1rem solid var(--gray-lighter);
  border-radius: 0.8rem;
  background-color: var(--gray-lightest);

  & p {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.671rem;
  }
`;

const SnsIconBox = styled.div``;
const GoogleIcon = styled(Image)`
  margin-right: 1.2rem;
`;
const KakaoIcon = styled(Image)``;

export default SnsSignUp;
