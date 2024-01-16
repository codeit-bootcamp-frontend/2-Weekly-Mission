import Layout from '../../components/Sign/Layout';
import SingUpForm from '../../components/Sign/SingUpForm';

export default function signUpPage() {
  return (
    <>
      <Layout questionText='이미 회원이신가요?' linkText='로그인 하기' href='/signin' snsText='다른 방식으로 가입하기'>
        <SingUpForm />
      </Layout>
    </>
  );
}
