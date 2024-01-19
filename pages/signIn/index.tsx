import Layout from '../../components/Sign/Layout';
import SingInForm from '../../components/Sign/SignInForm';

export default function signInPage() {
  return (
    <>
      <Layout questionText='회원이 아니신가요?' linkText='회원가입 하기' href='/signup' snsText='소셜 로그인'>
        <SingInForm />
      </Layout>
    </>
  );
}
