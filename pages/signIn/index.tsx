import InputForm from '../../components/Sign/InputForm';
import Layout from '../../components/Sign/Layout';

export default function signInPage() {
  return (
    <>
      <Layout
        questionText='회원이 아니신가요 ?'
        linkText='회원 가입하기'
        href='/signup'
        submitBtnText='로그인'
        snsText='소셜 로그인'
      >
        <InputForm />;
      </Layout>
    </>
  );
}
