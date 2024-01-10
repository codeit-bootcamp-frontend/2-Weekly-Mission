import Layout from 'components/layout/Layout';
import Header from 'components/layout/Header';
import Container from 'components/layout/Container';
import MainBanner from 'containers/folder/MainBanner';
import MainContent from 'containers/folder/MainContent';
import Footer from 'components/layout/Footer';

const FolderPage = () => {
  return (
    <Layout
      header={<Header />}
      container={
        <Container>
          <MainBanner />
          <MainContent />
        </Container>
      }
      footer={<Footer />}
    />
  );
};

export default FolderPage;
