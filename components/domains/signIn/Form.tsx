import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
const Form = () => {
  return (
    <FormBox>
      <EmailInputBox>
        <EmailLabel>이메일</EmailLabel>
        <EmailInput />
      </EmailInputBox>
      <PasswordInputBox></PasswordInputBox>
      <LoginButton>로그인</LoginButton>
      <SnsLoginBox>
        <p>소셜 로그인</p>
        <SnsIconBox>
          <Link href={"https://www.google.com/"}>
            <GoogleIcon width={42} height={42} src={"/images/google.png"} alt="구글 아이콘" />
          </Link>
          <Link href={"https://www.kakaocorp.com/page/"}>
            <KakaoIcon width={42} height={42} src={"/images/kakao.png"} alt="카카오 아이콘" />
          </Link>
        </SnsIconBox>
      </SnsLoginBox>
    </FormBox>
  );
};

const FormBox = styled.div``;
const EmailInputBox = styled.div``;
const EmailLabel = styled.label``;
const EmailInput = styled.input``;
const PasswordInputBox = styled.div``;
const LoginButton = styled.button``;
const SnsLoginBox = styled.div``;
const SnsIconBox = styled.div``;
const GoogleIcon = styled(Image)``;
const KakaoIcon = styled(Image)``;

export default Form;
