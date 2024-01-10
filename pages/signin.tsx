import AuthLayout from '@/page-layout/AuthLayout/AuthLayout';
import AuthHeader from '@/src/auth/ui-header/AuthHeader';
import SigninForm from '@/src/auth/ui-signin-form/SigninForm';
import SocialToolbar from '@/src/auth/ui-social-tool-bar/SocialToolbar';

export default function SignIn() {
  return (
    <AuthLayout
      authHeader={<AuthHeader />}
      socialToolbar={<SocialToolbar />}
      authForm={<SigninForm />}
    />
  );
}
