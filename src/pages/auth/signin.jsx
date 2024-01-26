import { SignInLayout } from "page-layout/SignInLayout/SingInLayout";
import { AuthHeader } from "auth/ui-auth-header/AuthHeader";
import { AuthSocial } from "auth/ui-auth-social/AuthSocial";
import { SignInForm } from "../../auth/signin-form/SignInForm";

export default function SignInPage() {
  return (
    <>
      <SignInLayout
        header={<AuthHeader page="signin" />}
        form={<SignInForm />}
        social={<AuthSocial page="signin" />}
      />
    </>
  );
}
