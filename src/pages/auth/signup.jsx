import { useState } from "react";
import { SignUpLayout } from "page-layout/SignUpLayout/SignUpLayout";
import { SignUpForm } from "auth/signup-form/SignUpForm";
import { AuthHeader } from "auth/ui-auth-header/AuthHeader";
import { AuthSocial } from "auth/ui-auth-social/AuthSocial";

export default function SignUpPage() {
  return (
    <>
      <SignUpLayout
        header={<AuthHeader page="signup" />}
        form={<SignUpForm />}
        social={<AuthSocial page="signup" />}
      />
    </>
  );
}
