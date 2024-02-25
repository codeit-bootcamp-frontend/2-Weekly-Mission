import Head from 'next/head';
import MainLayout from 'components/layout/MainLayout';
import Container from 'components/layout/Container';
import MainBanner from 'containers/shared/MainBanner';
import MainContent from 'containers/shared/MainContent';

const SharedPage = () => {
  return (
    <>
      <Head>
        <title>즐겨찾기 | Linkbrary</title>
        <meta property='og:image' content='/thumbnail.jpg' />
        <meta property='og:title' content='즐겨찾기 | Linkbrary' />
        <meta
          property='og:description'
          content='세상의 모든 정보를 쉽게 저장하고 관리해 보세요'
        />
      </Head>
      <Container>
        <MainBanner />
        <MainContent />
      </Container>
    </>
  );
};

export default SharedPage;

SharedPage.FullLayout = MainLayout;
