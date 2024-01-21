import Head from 'next/head';
import JoinSns from '@/src/components/joinSns/JoinSns';
import JoinLink from '@/src/components/joinLink/JoinLink';
import styled from 'styled-components';
import SignupForm from '@/src/components/userInput/SignupForm';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--bg);
`;

const Wrap = styled.div`
  width: 40rem;
`;

export default function SignupPage() {
  return (
    <>
      <Head>
        <title>회원가입</title>
      </Head>
      <Container>
        <Wrap>
          <JoinLink />
          <SignupForm />
          <JoinSns />
        </Wrap>
      </Container>
    </>
  );
}
