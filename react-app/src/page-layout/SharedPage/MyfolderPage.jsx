import "./SharedPage.css";

export const MyfolderPage = ({ Header, button, searchBar, cardList }) => {
  return (
    <div className="SharedPage">
      {Header}
      <div className="SharedPage-items">
        {searchBar}
        {button}
        {cardList}
      </div>
    </div>
  );
};
