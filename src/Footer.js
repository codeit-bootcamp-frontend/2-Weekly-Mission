import facebookLogo from "./imgs/facebook.svg";
import twitterLogo from "./imgs/twitter.svg";
import youtubeLogo from "./imgs/youtube.svg";
import instagramLogo from "./imgs/instagram.svg";

export function Footer() {
  return (
    <footer>
      <div class="footer-container">
        <span class="copyright">©codeit - 2023</span>
        <ul class="legal">
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
        </ul>
        <div class="sns">
          <a href="https://www.facebook.com" target="_blank">
            <img src={facebookLogo} alt="페이스북 아이콘" />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <img src={twitterLogo} alt="트위터 아이콘" />
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <img src={youtubeLogo} alt="유튜브 아이콘" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src={instagramLogo} alt="인스타그램 아이콘" />
          </a>
        </div>
      </div>
    </footer>
  );
}
