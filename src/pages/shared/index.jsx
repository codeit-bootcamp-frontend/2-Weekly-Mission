import Layout from 'components/layout/Layout';
import Header from 'components/layout/Header';
import Container from 'components/layout/Container';
import MainBanner from 'containers/shared/MainBanner';
import MainContent from 'containers/shared/MainContent';
import Footer from 'components/layout/Footer';

const SharedPage = () => {
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

export default SharedPage;
