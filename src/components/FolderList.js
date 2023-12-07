import "./Style.css";

function FolderList({ lists }) {
  console.log(lists);
  return (
    <>
      <div className="FolderListContainer">
        <ul className="ListButtonContainer">
          <li>
            <button className="ListButton">전체</button>
          </li>
          {lists?.map((list) => {
            return (
              <li>
                <button className="ListButton">{list.name}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default FolderList;
