import "./SharedPage.css";

export const MyfolderPage = ({ folderInfo, searchBar, cardList }) => {
  return (
    <div className="SharedPage">
      {folderInfo}
      <div className="SharedPage-items">
        {searchBar}
        {cardList}
      </div>
    </div>
  );
};
