import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="https://developers.kakao.com/sdk/js/kakao.js" strategy="lazyOnload"/>
      </body>
    </Html>
  );
}
