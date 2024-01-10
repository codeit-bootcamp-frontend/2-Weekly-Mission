import styles from "./Footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.codeit}>@codeit - 2023</div>
        <div className={styles.policy}>
          <a className={styles.link} href="privacy.html">
            Privacy Policy
          </a>
          <a className={styles.link} href="faq.html">
            FAQ
          </a>
        </div>
        <div className={styles.sns}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/footer/facebook.svg" width={20} height={20} alt="facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/footer/twitter.svg" width={20} height={20} alt="twitter" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/footer/youtube.svg" width={20} height={20} alt="youtube" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/footer/instagram.svg" width={20} height={20} alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
