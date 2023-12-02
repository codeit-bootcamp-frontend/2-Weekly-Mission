import { getFolder } from "./api";
import logoImg from "./images/logo.svg";
import codeItProfile from "./images/codeit-profile.svg";
import facebookImg from "./images/facebook.svg";
import twitterImg from "./images/twitter.svg";
import youtubeImg from "./images/youtube.svg";
import instagramImg from "./images/instagram.svg";

console.log(getFolder());

function App() {
  return (
    <>
      <header>
        <nav>
          <img src={logoImg} alt="logo" />
          <span>Codeit@codeit.com</span>
        </nav>
        <img src={codeItProfile} alt="codeit profile" />
        <div>@코드잇</div>
        <div>⭐️ 즐겨찾기</div>
      </header>
      <main>
        <div>(search bar 들어갈 자리)</div>
        <div>(링크 카드들 들어갈 자리)</div>
      </main>

      <footer>
        <span>@codeit - 2023</span>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">FAQ</a>
        </div>
        <div>
          <img src={facebookImg} alt="facebook" />
          <img src={twitterImg} alt="twitter" />
          <img src={youtubeImg} alt="youtube" />
          <img src={instagramImg} alt="instagram" />
        </div>
      </footer>
    </>
  );
}

export default App;
