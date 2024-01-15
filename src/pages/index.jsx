import Layout from 'components/layout/Layout';
import Header from 'components/layout/Header';
import Container from 'components/layout/Container';
import CTA from 'containers/landing/CTA';
import FeatureContent from 'containers/landing/FeatureContent';
import Footer from 'components/layout/Footer';

const LandingPage = () => {
  return (
    <Layout
      header={<Header />}
      container={
        <Container>
          <CTA />
          <FeatureContent />
        </Container>
      }
      footer={<Footer />}
    />
  );
};

export default LandingPage;
