import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta name="title" content="Library" />
        <meta name="description" content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
