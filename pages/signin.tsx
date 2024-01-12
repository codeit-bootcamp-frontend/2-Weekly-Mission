import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Header from "../components/domains/signIn/Header";
import Image from "next/image";
import Form from "../components/domains/signIn/Form";

const SignInPage = () => {
  return (
    <SignInPageLayout>
      <SignInPageBox>
        <Header />
        <Form />
      </SignInPageBox>
    </SignInPageLayout>
  );
};

const SignInPageLayout = styled.div``;
const SignInPageBox = styled.div``;

export default SignInPage;
