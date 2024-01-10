import InputForm from '../../components/Sign/InputForm';
import Layout from '../../components/Sign/Layout';

export default function signUpPage() {
  return (
    <>
      <Layout
        questionText='이미 회원이신가요?'
        linkText='로그인 하기'
        href='/signin'
        submitBtnText='회원가입'
        snsText='다른 방식으로 가입하기'
      >
        <InputForm />;
      </Layout>
    </>
  );
}
