import AuthLayout from '@/page-layout/AuthLayout/AuthLayout';
import SigninForm from '@/src/auth/feature-signin-form/SigninForm';
import AuthHeader from '@/src/auth/ui-header/AuthHeader';
import SocialToolbar from '@/src/auth/ui-social-tool-bar/SocialToolbar';

export default function SignIn() {
  return (
    <AuthLayout
      authHeader={<AuthHeader isSignUp={false} />}
      socialToolbar={<SocialToolbar isSignUp={false} />}
      authForm={<SigninForm />}
    />
  );
}
