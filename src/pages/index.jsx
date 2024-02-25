import Head from 'next/head';
import CTA from 'containers/landing/CTA';
import FeatureContent from 'containers/landing/FeatureContent';
import MainLayout from 'components/layout/MainLayout';

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Linkbrary</title>

        {/* Primary Meta Tags */}
        <meta name='title' content='Linkbrary' />
        <meta
          name='description'
          content='세상의 모든 정보를 쉽게 저장하고 관리해 보세요'
        />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Linkbrary' />
        <meta property='og:image' content='/thumbnail.jpg' />
        <meta
          property='og:description'
          content='세상의 모든 정보를 쉽게 저장하고 관리해 보세요'
        />
        <meta property='og:site_name' content='Linkbrary' />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:title' content='Linkbrary' />
        <meta
          property='twitter:description'
          content='세상의 모든 정보를 쉽게 저장하고 관리해 보세요'
        />
        <meta property='twitter:image' content='/thumbnail.jpg' />
      </Head>
      <CTA />
      <FeatureContent />
    </>
  );
};

export default LandingPage;

LandingPage.FullLayout = MainLayout;
