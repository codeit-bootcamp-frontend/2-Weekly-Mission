import { getFolder } from "./api";
import NavBar from "./components/NavBar";
import FolderHero from "./components/FolderHero";
import Footer from "./components/Footer";
import { useState } from "react";
import LinkCards from "./components/LinkCards";
import { useEffect } from "react";

function App() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    getFolder().then((folder) => {
      setLinks(folder.links);
    });
  });

  return (
    <>
      <header>
        <NavBar />
        <FolderHero />
      </header>
      <main>
        <div>(search bar 들어갈 자리)</div>
        <div>
          <LinkCards links={links} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
