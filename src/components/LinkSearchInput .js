import "./LinkSearchInput.css";
import searchImage from "./images/search.png";

function LinkSearchInput() {
  return (
    <>
      <div className="search-link-area">
        <form className="link-form">
          <img src={searchImage} alt="검색" />
          <input
            name="link-search"
            className="link-input"
            placeholder="링크를 검색해보세요."
          />
        </form>
      </div>
    </>
  );
}

export default LinkSearchInput;
