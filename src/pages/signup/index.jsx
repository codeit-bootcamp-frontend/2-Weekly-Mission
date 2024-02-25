import Head from 'next/head';

import AuthForm from 'containers/auth/signup/AuthForm';

const SignupPage = () => {
  return (
    <>
      <Head>
        <title>회원가입 | Linkbrary</title>
      </Head>
      <AuthForm />
    </>
  );
};

export default SignupPage;
