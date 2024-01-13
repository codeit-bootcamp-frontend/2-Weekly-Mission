import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import {
  InputBox,
  PasswordToggleIcon,
  GradientButton,
} from "../../commons/Auth";

const Form = () => {
  return (
    <FormBox>
      <EmailInputBox>
        <label>이메일</label>
        <input placeholder="" />
      </EmailInputBox>
      <PasswordInputBox>
        <label>비밀번호</label>
        <input placeholder="" />
        <PasswordOn
          src={"/images/eye-off.png"}
          width={16}
          height={13.82}
          alt="비밀번호 비활성화"
        />
        {/* <PasswordOff
          src={"/images/eye-on.png"}
          width={16}
          height={10.91}
          alt="비밀번호 비활성화"
        /> */}
      </PasswordInputBox>
      <PasswordCheckInputBox>
        <label>비밀번호 확인</label>
        <input placeholder="" />
        <PasswordOn
          src={"/images/eye-off.png"}
          width={16}
          height={13.82}
          alt="비밀번호 비활성화"
        />
        {/* <PasswordOff
          src={"/images/eye-on.png"}
          width={16}
          height={10.91}
          alt="비밀번호 비활성화"
        /> */}
      </PasswordCheckInputBox>
      <LoginButton>회원가입</LoginButton>
      <SnsLoginBox>
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
      </SnsLoginBox>
    </FormBox>
  );
};

const FormBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
const EmailInputBox = styled(InputBox)``;
const PasswordInputBox = styled(InputBox)`
  position: relative;
`;
const PasswordCheckInputBox = styled(InputBox)`
  position: relative;
`;
const PasswordOn = styled(PasswordToggleIcon)``;
const PasswordOff = styled(PasswordToggleIcon)``;
const LoginButton = styled(GradientButton)``;
const SnsLoginBox = styled.div`
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

export default Form;
