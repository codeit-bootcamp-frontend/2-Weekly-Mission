import AuthLayout from '@/page-layout/AuthLayout/AuthLayout';
import SignUpForm from '@/src/auth/feature-signup-form/SignUpForm';
import AuthHeader from '@/src/auth/ui-header/AuthHeader';
import SocialToolbar from '@/src/auth/ui-social-tool-bar/SocialToolbar';

export default function SignIn() {
  return (
    <AuthLayout
      authHeader={<AuthHeader isSignUp={true} />}
      socialToolbar={<SocialToolbar isSignUp={true} />}
      authForm={<SignUpForm />}
    />
  );
}
