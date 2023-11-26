import "./mainContent.css";

export function SearchBar() {
  return (
    <div className="search">
      <i className="searchImg" />
      <input className="searchBar" type="text" placeholder="     링크를 검색해 보세요." />
    </div>
  );
}
