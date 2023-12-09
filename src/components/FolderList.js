import ListButton from "./ListButton";
import "./Style.css";
import { useState } from "react";

function FolderList({ lists }) {
  const [toggleList, setToggleList] = useState(0);

  return (
    <>
      <div className="FolderListContainer">
        <div className="ListButtonContainer">
          <button className="ListButton" onClick={() => setToggleList(0)}>
            전체
          </button>
          {lists?.map((list) => {
            return (
              <ListButton
                key={list.id}
                list={list}
                setToggleList={() => setToggleList(list.name)}
              />
            );
          })}
        </div>
        <div className="ToggleListNameContainer">
          {toggleList === 0 ? (
            ""
          ) : (
            <div className="ToggleListName">{toggleList}</div>
          )}
          {toggleList !== 0 && (
            <div className="EditButton">
              <button className="Share">공유</button>
              <button className="Edit">이름 변경</button>
              <button className="Delete">삭제</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FolderList;
