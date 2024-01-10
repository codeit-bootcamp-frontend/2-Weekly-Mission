import AuthLayout from '@/page-layout/AuthLayout/AuthLayout';
import AuthHeader from '@/src/auth/ui-header/AuthHeader';

export default function SignIn() {
  return <AuthLayout authHeader={<AuthHeader />} />;
}
