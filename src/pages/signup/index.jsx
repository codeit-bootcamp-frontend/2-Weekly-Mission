import AuthLayout from 'components/layout/AuthLayout';
import AuthForm from 'containers/auth/signup/AuthForm';

const SignupPage = () => {
  return (
    <AuthLayout>
      <AuthForm />
    </AuthLayout>
  );
};

export default SignupPage;
