export function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <span className="copyright">©codeit - 2023</span>
        <ul className="legal">
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
        </ul>
        <div className="sns">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src="./imgs/facebook.svg" alt="페이스북 아이콘" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <img src="./imgs/twitter.svg" alt="트위터 아이콘" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <img src="./imgs/youtube.svg" alt="유튜브 아이콘" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src="./imgs/instagram.svg" alt="인스타그램 아이콘" />
          </a>
        </div>
      </div>
    </footer>
  );
}
