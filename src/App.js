import { getFolder } from "./api";
import NavBar from "./components/NavBar";
import codeItProfile from "./images/codeit-profile.svg";
import Footer from "./components/Footer";

console.log(getFolder());

function App() {
  return (
    <>
      <header>
        <NavBar />
        <img src={codeItProfile} alt="codeit profile" />
        <div>@코드잇</div>
        <div>⭐️ 즐겨찾기</div>
      </header>
      <main>
        <div>(search bar 들어갈 자리)</div>
        <div>(링크 카드들 들어갈 자리)</div>
      </main>
      <Footer />
    </>
  );
}

export default App;
