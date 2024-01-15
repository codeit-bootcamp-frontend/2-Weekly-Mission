import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lending</title>
      </Head>
      <Div>
        <Link href="/shared">
          <Button>shared</Button>
        </Link>
        <Link href="folder">
          <Button>folder</Button>
        </Link>
      </Div>
      <Div>
        <H2>해당 페이지는 테스트용 렌딩페이지입니다 미션과 무관합니다.</H2>
      </Div>
    </>
  );
}

const Div = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 3rem;
`;

const Container = styled.div`
  margin: 4rem auto;
  max-width: 106rem;
  min-height: 55rem;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
`;

const Button = styled.button`
  color: black;
  padding: 16px;
`;
const H2 = styled.h2`
  font-size: 3rem;
`;
