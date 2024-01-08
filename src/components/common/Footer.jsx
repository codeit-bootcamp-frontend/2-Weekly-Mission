import styles from './Footer.module.css';

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerBox}>
          <span className={styles.copyright}>©codeit - 2023</span>
          <div className={styles.footerLinks}>
            <a className={styles.footerLink} href="privacy.html">
              Privacy Policy
            </a>
            <a className={styles.footerLink} href="faq.html">
              FAQ
            </a>
          </div>
          <div className={styles.sns}>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/facebook.svg" alt="facebook 홈페이지로 연결된 facebook 로고" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/instagram.svg" alt="twitter 홈페이지로 연결된 twitter 로고" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/twitter.svg" alt="youtube 홈페이지로 연결된 youtube 로고" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/youtube.svg" alt="instagram 홈페이지로 연결된 instagram 로고" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
