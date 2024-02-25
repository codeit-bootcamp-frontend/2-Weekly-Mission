import Head from 'next/head';
import MainLayout from 'components/layout/MainLayout';
import Container from 'components/layout/Container';
import MainBanner from 'containers/folder/MainBanner';
import MainContent from 'containers/folder/MainContent';

const FolderPage = () => {
  return (
    <>
      <Head>
        <title>폴더 리스트 | Linkbrary</title>
        <meta property='og:image' content='/thumbnail.jpg' />
        <meta property='og:title' content='폴더 리스트 | Linkbrary' />
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

export default FolderPage;

FolderPage.FullLayout = MainLayout;
