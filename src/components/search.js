function Search() {
  return (
    <form className="search">
      <div className="searchInner">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M7.84442 13.8363C11.1539 13.8363 13.8368 11.1534 13.8368 7.84393C13.8368 4.53444 11.1539 1.85156 7.84442 1.85156C4.53493 1.85156 1.85205 4.53444 1.85205 7.84393C1.85205 11.1534 4.53493 13.8363 7.84442 13.8363Z"
              stroke="#666666"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.0122 12.3232L14.3616 14.6665"
              stroke="#666666"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <input type="text" placeholder="링크를 검색해 보세요."></input>
      </div>
    </form>
  );
}
export default Search;
