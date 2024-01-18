import Head from 'next/head';
import styles from 'styles/index.module.css';
import clsx from 'clsx';
export default function Home() {
  return (
    <>
      <Head>
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://Linkbrary.io/" />
        <meta property="og:title" content="Library" />
        <meta property="og:description" content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요." />
        <meta property="og:image" content="https://images.pexels.com/photos/1222551/pexels-photo-1222551.jpeg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://Linkbrary.io/" />
        <meta property="twitter:title" content="Library" />
        <meta property="twitter:description" content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요." />
        <meta property="twitter:image" content="https://images.pexels.com/photos/1222551/pexels-photo-1222551.jpeg" />
      </Head>
      <div>
        <nav className={styles['nav-container']}>
          <div className={styles.nav}>
            <a href="/">
              <img src="/assets/logo.svg" className={styles['logo-img']} alt="홈으로 연결된 Linkbrary 로고" />
            </a>
            <a className={clsx(styles.cta, styles['cta-short'])} href="/signin">
              <span>로그인</span>
            </a>
          </div>
        </nav>
        <header className={styles.header}>
          <div className={styles['hero-header']}>
            <h1 className={styles.slogan}>
              <span>
                <span className={clsx(styles['slogan-gradient'], styles['background-clip-text'])}>
                  세상의 모든 정보
                </span>
                를<br />
              </span>
              <span>쉽게 저장하고</span>
              <span>관리 해보세요</span>
            </h1>
            <a className={clsx(styles.cta, styles['cta-long'])} href="/signup">
              <span>링크 추가하기</span>
            </a>
            <img src="/assets/hero.png" className={styles['hero-image']} alt="Linkbrary 서비스 소개" />
          </div>
        </header>
        <article className={styles.article}>
          <section className={clsx(styles.section, styles.sectionAdd, styles['add-specificity'])}>
            <h2 className={styles.title}>
              <span className={clsx(styles['title-1-gradient'], styles['background-clip-text'])}>원하는 링크</span>를
              <br />
              저장하세요
            </h2>
            <p className={styles.description}>
              나중에 읽고 싶은 글, 다시 보고 싶은 영상,
              <br />
              사고 싶은 옷, 기억하고 싶은 모든 것을
              <br />한 공간에 저장하세요.
            </p>
            <img src="/assets/image1.png" className={styles['content-image']} alt="링크의 내용이 담긴 카드들" />
          </section>
          <section className={clsx(styles.section, styles['sectionAdd'], styles['add-specificity'])}>
            <h2 className={styles.title}>
              링크를 폴더로
              <br />
              <span className={clsx(styles['title-2-gradient'], styles['background-clip-text'])}>관리</span>하세요
            </h2>
            <p className={styles.description}>
              나만의 폴더를 무제한으로 만들고
              <br />
              다양하게 활용할 수 있습니다.
            </p>
            <img src="/assets/image2.png" className={styles['content-image']} alt="폴더 이름 변경 기능" />
          </section>
          <section className={clsx(styles.section, styles['sectionAdd'], styles['add-specificity'])}>
            <h2 className={styles.title}>
              저장한 링크를
              <br />
              <span className={clsx(styles['title-3-gradient'], styles['background-clip-text'])}>공유</span>해 보세요
            </h2>
            <p className={styles.description}>
              여러 링크를 폴더에 담고 공유할 수 있습니다.
              <br />
              가족, 친구, 동료들에게 쉽고 빠르게 링크를
              <br />
              공유해 보세요.
            </p>
            <img src="/assets/image3.png" className={styles['content-image']} alt="폴더 공유 기능" />
          </section>
          <section className={clsx(styles.section, styles['sectionAdd'], styles['add-specificity'])}>
            <h2 className={styles.title}>
              저장한 링크를
              <br />
              <span className="title-4-gradient background-clip-text">검색</span>해 보세요
            </h2>
            <p className={styles.description}>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
            <img src="/assets/image4.png" className={styles['content-image']} alt="링크 검색 기능" />
          </section>
        </article>
        <footer className={styles.footer}>
          <div className={styles['footer-box']}>
            <span className={styles.copyright}>©codeit - 2023</span>
            <div className={styles['footer-links']}>
              <a className={styles['footer-link']} href="">
                Privacy Policy
              </a>
              <a className={styles['footer-link']} href="">
                FAQ
              </a>
            </div>
            <div className={styles.sns}>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/facebook.svg" alt="facebook 홈페이지로 연결된 facebook 로고" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/twitter.svg" alt="twitter 홈페이지로 연결된 twitter 로고" />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/youtube.svg" alt="youtube 홈페이지로 연결된 youtube 로고" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/instagram.svg" alt="instagram 홈페이지로 연결된 instagram 로고" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
