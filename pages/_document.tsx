// pages/_document.tsx
import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:title" content="Linkbrary" />
          <meta property="og:description" content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요" />
          <meta
            property="og:image"
            content="https://visitbusan.net/uploadImgs/files/cntnts/20211130150754165_wufrotr"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@linkbrary" />
          <meta name="twitter:title" content="Linkbrary" />
          <meta name="twitter:description" content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요" />
          <meta
            name="twitter:image"
            content="https://visitbusan.net/uploadImgs/files/cntnts/20211130150754165_wufrotr"
          />
          {this.props.styles}
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal" />
        </body>
      </Html>
    );
  }
}
