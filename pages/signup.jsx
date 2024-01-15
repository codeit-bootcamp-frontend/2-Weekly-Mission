import Head from "next/head";
import React, { useState } from "react";
import SocialLogin from "../components/domains/signform/SocialLogin";
import Input from "../components/domains/signform/Input";
import Header from "../components/domains/signform/Header";
import MainContainer from "../components/domains/signform/MainContainer";
import LoginForm from "../components/domains/signform/LoginForm";

export default function Singin() {
  const [type, setType] = useState(true);

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <MainContainer>
        <Header />
        <LoginForm>
          <Input label="이메일" type="text" id="email" />
          <Input label="비밀번호" type={type ? "password" : "text"} id="password" setType={setType} isType={type} />
        </LoginForm>
        <SocialLogin />
      </MainContainer>
    </>
  );
}
