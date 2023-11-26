import "./App.css";
import "./reset.css";
import NavBar from "./favorit/nav/nav.js";
import Header from "./favorit/header/header.js";
import { Footer } from "./favorit/footer/footer.js";
import { MainContent } from "./favorit/mainContent/mainContent.js";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
