import "./SharedPage.css";

export const MyfolderPage = ({ Header, searchBar, cardList }) => {
  return (
    <div className="SharedPage">
      {Header}
      <div className="SharedPage-items">
        {searchBar}
        {cardList}
      </div>
    </div>
  );
};
