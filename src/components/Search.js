import "./Style.css";
import Card from "./Card";
import search from "../assets/search.svg";

function Search({linksData}) {
  return (
    <main className="MainContainer">
      <div className="Finder">
        <input className="Link" type="text" placeholder="링크를 검색해보세요." />
        <img className="SearchIcon" src={search} alt="돋보기 아이콘" />
      </div>
      <div className="CardDataContainer">
        <Card data={linksData} />
      </div>
    </main>
  );
}

export default Search;
