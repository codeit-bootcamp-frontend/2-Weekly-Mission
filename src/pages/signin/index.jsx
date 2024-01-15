import AuthLayout from 'components/layout/AuthLayout';
import AuthForm from 'containers/auth/signin/AuthForm';

const SigninPage = () => {
  return (
    <AuthLayout>
      <AuthForm />
    </AuthLayout>
  );
};

export default SigninPage;
