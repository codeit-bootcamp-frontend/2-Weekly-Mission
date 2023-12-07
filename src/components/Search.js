import search from "../assets/search.svg";

function Search() {
  return (
    <div className="MainContainer">
      <div className="Finder">
      <input
        className="Link"
        type="text"
        placeholder="링크를 검색해보세요."
      />
      <img className="SearchIcon" src={search} alt="돋보기 아이콘" />
    </div>
    </div>
  );
}

export default Search;