import CardList from "./components/CardList";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";
import "./styles/Global.css";
import Sort from "./components/Sort"
import { useEffect, useState } from "react";


async function getFetchCards() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/users/1/links",
  );
  const body = await response.json();

  return body;
}


function App() {
  const [links, setLinks] = useState([]);
  
  const getCards = async () => {
    const {data} = await getFetchCards();
    
    setLinks(data);
  };

  const handleClickAll = async () => {
    const {data: links} = await getFetchCards();

    setLinks(links)
  }

  const handleClickButton = async (id) => {
    const {data: links} = await getFetchCards();

    const filteredLinks = 
      links.filter((({folder_id}) => folder_id === id));

    setLinks(filteredLinks)
  }

  useEffect(() => {
    getCards();
  }, []);
  
  return (
    <div>
      <Header />
      <Search />
      <Sort handleClickButton={handleClickButton} handleClickAll={handleClickAll}/>
      <CardList links={links}/>
      <Footer />
    </div>
  );
}

export default App;
