import Head from 'next/head';
import AuthForm from 'containers/auth/signin/AuthForm';

const SigninPage = () => {
  return (
    <>
      <Head>
        <title>로그인 | Linkbrary</title>
      </Head>
      <AuthForm />
    </>
  );
};

export default SigninPage;
