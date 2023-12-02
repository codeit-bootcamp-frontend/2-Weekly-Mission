import { getFolder } from "./api";
import NavBar from "./components/NavBar";
import FolderHero from "./components/FolderHero";
import Footer from "./components/Footer";

console.log(getFolder());

function App() {
  return (
    <>
      <header>
        <NavBar />
        <FolderHero />
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
